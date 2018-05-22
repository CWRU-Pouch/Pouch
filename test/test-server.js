var chai = require("chai");
var chaiHttp = require("chai-http");
var routes = require("../routes/api-routes");
var server = require("../server.js")
chai.use(chaiHttp);



var expect = chai.expect;
var should = chai.should();

var assert = require("chai").assert

describe("Check HTML Routes", function() {
    it("Index HTML", function(done) {
        chai.request(server)
            .get("/")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });

    })

    it("Login HTML", function(done) {
        chai.request(server)
            .get("/login")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });

    })

    it("Signup HTML", function(done) {
        chai.request(server)
            .get("/signup")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });

    })
})