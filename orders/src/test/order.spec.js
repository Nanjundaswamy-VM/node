process.env.NODE_ENV = 'test';
import dotenv from 'dotenv';
import path from 'path';

import config from '../app/config';
console.log('***config', config);

import '../app/config/database';
import * as http from 'http';

import '../app/models/order';

let mongoose = require("mongoose");

let Order = mongoose.model("order");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');

import app from '../app';

let should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);
/*
  * Test the /GET route
*/
 describe('/GET /order/view/', () => {
    it('it should GET deatils of Order', (done) => {
      chai.request(app)
          .get('/order/view/5df4b97b4480fd08b800f1c9')
          .end((err, res) => {
            console.log(res);
            /*
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
              */
            done();
          });
    });
});

