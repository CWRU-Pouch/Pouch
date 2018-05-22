var chai = require("chai");
var chaiHttp = require("chai-http");
var routes = require("../routes/api-routes");
var server = require("../server.js")
chai.use(chaiHttp);



var expect = chai.expect;
var should = chai.should();

var assert = require("chai").assert

describe("GET user", function() {
    it("retrieves user matching credentials", function(done) {
        chai.request(server)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });

    })
})