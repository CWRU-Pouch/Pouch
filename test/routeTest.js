var chai = require("chai");
var chaiHttp = require("chai-http");
var routes = require("../routes/api-routes");
var server = require("../server.js")
chai.use(chaiHttp);



var expect = chai.expect;
var should = chai.should();

var assert = require("chai").assert




describe("Check API Routes", function(done) {
    it("Signup", function(done) {
        var testUser = {email: "email@email.com", password: "root", name: "John Doe", id: 1};
        chai.request(server)
            .post("/signup/submit")
            .send(testUser)
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            })
    });

    it("Get budgets", function(done) {
        chai.request(server)
        .get("/budgets/1")
        .end(function(err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done()
        })
    });

    it("Submit Budget", function() {
        var testBudget = {id: 1, userId: 1, clothes: 100, food: 100, rent: 100, entertainment: 100, other: 100};
        chai.request(server)
            .post("/signup/submit/budgets/")
            .send(testBudget)
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                
            })
    });

    
    it("Validate Email", function(done) {
        chai.request(server)
            .get("/login/validate/email@email.com")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            })
    });

        it("Get ID", function(done) {
        chai.request(server)
            .get("/get/id/")
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done()
            })
    });


})