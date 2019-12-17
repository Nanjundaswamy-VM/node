/**
 * @file
 * Library file to handle the rabbit mq.
 */

var amqp = require('amqplib/callback_api')
const CONN_URL = 'amqp://test:test@mt.nodesense.ai'
var q = 'task/M1048280'

// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

var open = require('amqplib').connect(CONN_URL)

/**
* @name publishOrderPayload
* @desc to publish the order payload to user.
* @input order obj
*/

function publishOrderPayload(orderData) {
    open.then(function (conn) {
        return conn.createChannel()
    }).then(function (ch) {
        let orderPayload = orderData.toObject()
        orderPayload.toEmail = "nanjunda777@gmail.com"
        orderPayload.subject = "Your order has been placed"
        ch.sendToQueue(q, Buffer.from(JSON.stringify(orderPayload)))
    }).catch(console.warn)
}

module.exports.publishOrderPayload = publishOrderPayload