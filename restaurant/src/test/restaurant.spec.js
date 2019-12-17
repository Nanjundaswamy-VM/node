process.env.NODE_ENV = 'test'
import dotenv from 'dotenv'
import path from 'path'

import config from '../app/config'
//console.log('***config', config)

import '../app/config/database'
import * as http from 'http'

import '../app/models/restaurant'

let mongoose = require("mongoose")

let Restaurant = mongoose.model("restaurant")

//Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')

import app from '../app'

let should = chai.should()
const expect = chai.expect

chai.use(chaiHttp)

/*
* Test the /POST search restaurants route
*/
describe('/POST /restaurant/search', () => {
  it('it should get the restaurant list', (done) => {
    let data = {
      "ratings": 4,
      "location": "DELHI",
      "pageNo": 1
    }
    chai.request(app)
      .post('/restaurant/search')
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
  * Test the /GET list of restaurant
*/
describe('/GET /restaurant/resList', () => {
  it('it should not get list of restaurant', (done) => {
    chai.request(app)
      .get('/restaurant/resList?city=test')
      .end((err, res) => {
        res.should.have.status(204)
        done()
      })
  })
})

/*
  * Test the /GET restuarant list route
*/
describe('/GET /restaurant/resList', () => {
  it('it should get list of restaurant', (done) => {
    chai.request(app)
      .get('/restaurant/resList?city=bangalore')
      .end((err, res) => {
        let resLen = Object.entries(res.body.data).length
        res.should.have.status(200)
        resLen.should.be.above(0)
        res.body.success.should.be.eq('Success')
        done()
      })
  })
})