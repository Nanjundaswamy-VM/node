 if (typeof __JSWRAPPER === 'undefined' || (!__JSWRAPPER.initialized())) {
     if ((typeof ServiceWorkerContainer !== 'undefined' && self instanceof ServiceWorkerContainer) || (typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope)) {
         importScripts('https://mcas-proxyweb.us.cas.ms/js-bootstrap.js?saasId=15600&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin));
     } else {
         eval(function () {
             var x = typeof __cas__xhr !== "undefined" ? new __cas__xhr() : new XMLHttpRequest();
             x.open = typeof __cas__xhro !== "undefined" ? __cas__xhro : x.open;
             x.send = typeof __cas__xhrs !== "undefined" ? __cas__xhrs : x.send;
             x.open('GET', 'https://mcas-proxyweb.us.cas.ms/js-bootstrap.js?saasId=15600&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin), false);
             x.withCredentials = true;
             x.send();
             return x.responseText;
         }());
     }
}//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let app = require('../src/routes/product');
let server = require('../src/server');//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const apiUrl = "http://localhost:8081/product/";

chai.use(chaiHttp);//Our parent block
describe('Products', () => {
beforeEach(done => {
//setting api url
done();
});/*
  * Test the /GET route
  */
describe('/GET product list', () => {
it('it should GET all the products', done => {
chai.request(server).get('/product/list').end((err, res) => {
res.should.have.status(200);
__WRAPPED_get(res.body, 'data').length.should.be.above(0);
res.body.success.should.be.eq('Success');
done();
});
});
});

describe('/GET product Details', () => {
it('it should GET product details for the given id - success', done => {
chai.request(server).get('/product/1').end((err, res) => {
res.should.have.status(200);
__WRAPPED_get(res.body, 'data').length.should.be.eq(1);
res.body.success.should.be.eq('Success');
done();
});
});

it('it should GET product details for the given id - Failure', done => {
chai.request(server).get('/product/10').end((err, res) => {
res.should.have.status(400);
__WRAPPED_get(res.body, 'data').length.should.be.eq(0);
res.body.success.should.be.eq('Failure');
done();
});
});
});

describe('/POST Add product Details', () => {
it('it should add the product details - success', done => {
let data = {
"productId": 3,
"productName": "Test",
"productCode": "test-12345",
"description": "New product from test",
"releasedate": "20-01-2018",
"price": 400.5,
"rating": 4.5,
"imageurl": "../images/test-abc.png"
};
__WRAPPED_call(chai.request(server).post('/product/add'), 'send')(data).end((err, res) => {
res.should.have.status(200);
__WRAPPED_get(res.body, 'data').length.should.be.eq(1);
res.body.success.should.be.eq('Success');
done();
});
});

let inputdata = {
"productId": 1,
"productName": "Test",
"productCode": "test-12345",
"description": "New product from test",
"releasedate": "20-01-2018",
"price": 400.5,
"rating": 4.5,
"imageurl": "../images/test-abc.png"
};
it('it should add the product details - Failure', done => {
__WRAPPED_call(chai.request(server).post('/product/add'), 'send')(inputdata).end((err, res) => {
res.should.have.status(400);
__WRAPPED_get(res.body, 'data').length.should.be.eq(0);
res.body.success.should.be.eq('Failure');
done();
});
});
});

describe('/PUT Update product Details', () => {
it('it should update the product details - success', done => {
let data = {
"productName": "Test 4",
"productCode": "test-123456",
"description": "New product from test t",
"releasedate": "20-01-2018",
"price": 410.5,
"rating": 3.5,
"imageurl": "../images/test-abc.png"
};
__WRAPPED_call(chai.request(server).put('/product/update/3'), 'send')(data).end((err, res) => {
res.should.have.status(200);
__WRAPPED_get(res.body, 'data').length.should.be.eq(1);
res.body.success.should.be.eq('Success');
done();
});
});

let inputdata = {
"productName": "Test",
"productCode": "test-12345",
"description": "New product from test",
"releasedate": "20-01-2018",
"price": 400.5,
"rating": 4.5,
"imageurl": "../images/test-abc.png"
};
it('it should update the product details - Failure', done => {
__WRAPPED_call(chai.request(server).put('/product/update/10'), 'send')(inputdata).end((err, res) => {
res.should.have.status(400);
__WRAPPED_get(res.body, 'data').length.should.be.eq(0);
res.body.success.should.be.eq('Failure');
done();
});
});
});

describe('/DELETE Delete product ', () => {
it('it should DELETE product details for the given id - success', done => {
chai.request(server).delete('/product/delete/1').end((err, res) => {
res.should.have.status(200);
__WRAPPED_get(res.body, 'data').length.should.be.eq(1);
res.body.success.should.be.eq('Success');
done();
});
});

it('it should DELETE product details for the given id - Failure', done => {
chai.request(server).delete('/product/delete/10').end((err, res) => {
res.should.have.status(400);
__WRAPPED_get(res.body, 'data').length.should.be.eq(0);
res.body.success.should.be.eq('Failure');
done();
});
});
});

});