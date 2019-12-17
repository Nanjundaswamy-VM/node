process.env.NODE_ENV = 'test'
import dotenv from 'dotenv'
import path from 'path'

import config from '../app/config'
//console.log('***config', config)

import * as http from 'http'

//Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')

import app from '../app'

let should = chai.should()
const expect = chai.expect

chai.use(chaiHttp)

/*
  * Test the /GET list of order
*/
describe('/GET /report/ordersList', () => {
  it('it should not get list of orders on given dates', (done) => {
    chai.request(app)
      .get('/report/ordersList?city=kolkata&fromdate=2019-12-15&todate=2019-12-16&pageNo=1')
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
  })
})

/*
  * Test the /GET list of order
*/
describe('/GET /report/ordersList', () => {
  it('it should not list of orders on given dates', (done) => {
    chai.request(app)
      .get('/report/ordersList?city=bangalore&fromdate=2019-12-15&todate=2019-12-16&pageNo=1')
      .end((err, res) => {
        let resLen = Object.entries(res.body.data).length
        res.should.have.status(200)
        resLen.should.be.above(0)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})