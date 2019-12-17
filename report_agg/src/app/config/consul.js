/**
 * @file
 * config file to handle the consul service.
 */
'use strict';

// var consul = require('consul')();
var Bluebird = require('bluebird');
const IP_ADDRESS = process.env.IP_ADDRESS || 'localhost';
const CONSUL_ID = require('uuid').v4();
const PORT = Number(process.env.PORT) || 8889;
const CN_HOST = "172.18.36.244";

function fromCallback(fn) {
  return new Bluebird(function (resolve, reject) {
    try {
      return fn(function (err, data, res) {
        if (err) {
          err.res = res;
          return reject(err);
        }
        return resolve([data, res]);
      });
    } catch (err) {
      return reject(err);
    }
  });
}
var consul = require('consul')({ promisify: fromCallback, host: CN_HOST });


consul.acl.bootstrap(function (err, result) {
  console.log(err, result)
  // if (err) throw err;
});


consul.agent.members(function (err, result) {
  console.log('memebrs', err, result)
  if (err) throw err;
});



let known_search_instances = [];

const watcher = consul.watch({
  method: consul.health.service,
  options: {
    service: 'restaurant',
    passing: true
  }
});

watcher.on('change', data => {
  known_search_instances = [];
  data.forEach(entry => {
    known_search_instances.push(`http://${entry.Service.Address}:${entry.Service.Port}/`);
  });

  console.log("Available search services ", known_search_instances);
});


let known_order_instances = [];

const orderWatcher = consul.watch({
  method: consul.health.service,
  options: {
    service: 'order',
    passing: true
  }
});

orderWatcher.on('change', data => {
  known_order_instances = [];
  data.forEach(entry => {
    known_order_instances.push(`http://${entry.Service.Address}:${entry.Service.Port}/`);
  });

  console.log("Available known_order_instances services ", known_order_instances);
});

let details = {
  name: 'report', // service group name search or order
  address: IP_ADDRESS,
  port: PORT,
  id: CONSUL_ID,
  check: {
    ttl: '10s',
    deregister_critical_service_after: '1m'
  }
};
consul.agent.service.register(details, err => {
  // schedule heartbeat
  console.log("register ", err)
});

setInterval(() => {
  consul.agent.check.pass({ id: `service:${CONSUL_ID}` }, err => {
    if (err) throw new Error(err);
    console.log('told Consul that we are healthy');
  });
}, 5 * 1000);

process.on('SIGINT', () => {
  console.log('SIGINT. De-Registering...');
  let details = { id: CONSUL_ID };

  consul.agent.service.deregister(details, (err) => {
    console.log('de-registered.', err);
    process.exit();
  });
});
