var chai = require("chai");
var chaiHttp = require("chai-http");
var routes = require("../routes/api-routes");
var server = require("../server.js")
chai.use(chaiHttp);



var expect = chai.expect;
var should = chai.should();

var assert = require("chai").assert

describe("Check Server", function() {
    it("Checks connection", function(done) {
        chai.request(server)
            .get("/")
            .end(function(err, res) {
                res.should.have.status(200);
              done();
            });

    })
})