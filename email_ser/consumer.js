const q = 'task/M1048280'
const rabitMqConnUrl = "amqp://test:test@mt.nodesense.ai"

// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

const open = require('amqplib').connect(rabitMqConnUrl)
const nodemailer = require("nodemailer")

// Consumer
open.then(function (conn) {
  return conn.createChannel()
}).then(function (ch) {
  return ch.assertQueue(q).then(function (ok) {
    return ch.consume(q, function (msg) {
      if (msg && msg !== null) {
        sendEmail(msg.content.toString())
        ch.ack(msg)
      }
    })
  })
}).catch(console.warn)

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(orderData) {
  if (orderData) {
    let orderDetails = JSON.parse(orderData)
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount()
    console.log('orderData')
    console.log(orderDetails)

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass // generated ethereal password
      }
    })

    let orderHtml ="<html><body>"
    +"Hi,<br/><br/>"
    +"<p>Thanks for placing order.Please find your order details below</p>"
    +"<p>OrderId :"+orderDetails._id+"</p>"
    +"<p>Total amount :"+orderDetails.orderamount+"</p>"
    console.log(orderDetails.items)
    console.log(typeof orderDetails.items)
    Object.values(orderDetails.items).forEach(value => {
      orderHtml+="<div style='border-style: solid'><p>item name :"+value.itemname+"</p>"
      orderHtml+="<p>Quantity :"+value.quantity+"</p>"
      orderHtml+="<p>Price :"+value.amount+"</p></div>"
      console.log(value)
      console.log(typeof value)
    })
    orderHtml +="</body><html>"
    console.log(orderHtml)
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'CAP orders <orders@example.com>', // sender address
      to: orderDetails.toEmail, // list of receivers
      subject: orderDetails.subject, // Subject line
      html: orderHtml // html body
    })

    console.log("Message sent: %s", info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

}

sendEmail().catch(console.error)