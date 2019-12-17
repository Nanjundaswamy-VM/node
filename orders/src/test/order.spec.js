process.env.NODE_ENV = 'test'
import dotenv from 'dotenv'
import path from 'path'

import config from '../app/config'
//console.log('***config', config)

import '../app/config/database'
import * as http from 'http'

import '../app/models/order'

let mongoose = require("mongoose")

let Order = mongoose.model("order")

//Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')

import app from '../app'

let should = chai.should()
const expect = chai.expect

chai.use(chaiHttp)

/*
  * Test the /GET order route
*/
describe('/GET /order/view/', () => {
  it('it should not get deatils of Order', (done) => {
    chai.request(app)
      .get('/order/view/5df4b97b4480fd08b800f1c9')
      .end((err, res) => {
        res.should.have.status(400)
        res.body.data.length.should.be.eq(0)
        res.body.success.should.be.eq('Failure')
        done()
      })
  })
})

/*
  * Test the /GET order route
*/
describe('/GET /order/view/', () => {
  it('it should get deatils of Order', (done) => {
    chai.request(app)
      .get('/order/view/5df5d6e3038ee61840cf1bc1')
      .end((err, res) => {
        let resLen = Object.entries(res.body.data).length
        res.should.have.status(200)
        resLen.should.be.above(0)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})


/*
* Test the /GET order totalAmount route
*/
describe('/GET /order/totalAmount/', () => {
  it('it should not get the Order total amount', (done) => {
    chai.request(app)
      .get('/order/totalAmount/12344')
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
  })
})

/*
* Test the /GET order totalAmount route
*/
describe('/GET order/totalAmount/', () => {
  it('it should get the Order total amount', (done) => {
    chai.request(app)
      .get('/order/totalAmount/5df5d6e3038ee61840cf1bc1')
      .end((err, res) => {
        let resLen = Object.entries(res.body.data).length
        res.should.have.status(200)
        resLen.should.be.above(0)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})


/*
* Test the /POST orderlist route
*/
describe('/POST /order/orderList', () => {
  it('it should not get the Order list', (done) => {
    let data = {
      "restaurantids": ["5df513e1c3ad841080b99c21", "5df5145dc3ad841080b99c22"],
      "fromdate": "2019-12-20",
      "todate": "2019-12-21",
      "pageNo": 1
    }
    chai.request(app)
      .post('/order/orderList')
      .send(data)
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
  })
})

/*
* Test the /POST orderlist route
*/
describe('/POST /order/orderList', () => {
  it('it should get the Orderlist', (done) => {
    let data = {
      "restaurantids": ["5df513e1c3ad841080b99c21", "5df5145dc3ad841080b99c22"],
      "fromdate": "2019-12-15",
      "todate": "2019-12-16",
      "pageNo": 1
    }

    chai.request(app)
      .post('/order/orderList')
      .send(data)
      .end((err, res) => {
        let resLen = Object.entries(res.body.data).length
        res.should.have.status(200)
        resLen.should.be.above(0)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})


/*
* Test the /POST orders amount route
*/
describe('/POST /order/ordersAmount', () => {
  it('it should not get the orders amount', (done) => {
    let data = {
      "restaurantids": ["5df513e1c3ad841080b99c21", "5df5145dc3ad841080b99c22"],
      "fromdate": "2019-12-20",
      "todate": "2019-12-21",
      "pageNo": 1
    }
    chai.request(app)
      .post('/order/ordersAmount')
      .send(data)
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
  })
})

/*
* Test the /POST ordersAmount route
*/
describe('/POST /order/ordersAmount', () => {
  it('it should get the ordersAmount', (done) => {
    let data = {
      "restaurantids": ["5df513e1c3ad841080b99c21", "5df5145dc3ad841080b99c22"],
      "fromdate": "2019-12-15",
      "todate": "2019-12-16",
      "pageNo": 1
    }

    chai.request(app)
      .post('/order/ordersAmount')
      .send(data)
      .end((err, res) => {
        let resLen = Object.entries(res.body.data).length
        res.should.have.status(200)
        resLen.should.be.above(0)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})

/*
* Test the /POST place order route
*/
describe('/POST /order/place', () => {
  it('it should place order', (done) => {
    let data = {
      "customerid": 312,
      "delivery_address": "Delhi",
      "restaurant_id": "5df8ba38ce555e1e0c64e25c",
      "items": [
        {
          "itemname": "Kabab",
          "quantity": 2,
          "amount": 300
        }
      ]
    }

    chai.request(app)
      .post('/order/place')
      .send(data)
      .end((err, res) => {
        let resLen = Object.entries(res.body.data).length
        res.should.have.status(200)
        resLen.should.be.above(0)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})

/*
* Test the /POST update order status
*/
describe('/POST order/cancel', () => {
  it('it should not update order status', (done) => {
    chai.request(app)
      .patch('/order/cancel/142443')
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
  })
})

/*
* Test the /POST update order status
*/
describe('/POST order/cancel', () => {
  it('it should update order status', (done) => {
    chai.request(app)
      .patch('/order/cancel/5df5d6e3038ee61840cf1bc1')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})


/*
* Test the /POST update order details
*/
describe('/POST order/update', () => {
  it('it should update order details', (done) => {
    let data = {
      "customerid": 310,
      "delivery_address": "Delhi",
      "restaurant_id": "5df514d9c3ad841080b99c25",
      "items": [
        {
          "itemname": "mushroom googly",
          "quantity": 1,
          "amount": 450
        }, {
          "itemname": "Kabab",
          "quantity": 1,
          "amount": 150
        }
      ],
      "delivery_status": 1
    };

    chai.request(app)
      .put('/order/update/5df8924a4740e70114fc5db2')
      .send(data)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})
