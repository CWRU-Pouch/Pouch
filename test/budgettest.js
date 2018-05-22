var chai = require("chai");
var chaiHttp = require("chai-http");
var budgets = require("../models/budgets");
var user = require("../models/user")

var expect = chai.expect;
var should = chai.should();

var assert = require("chai").assert

describe("budgets", function() {

    it("verify model: budgets", function(done) {
        
    })

            
});
console.log("budget: " + budgets);
console.log("user: " + user)
;

describe("users", function() {
    it("Verify user model", function(done) {
        expect(user.name, user.email, user.password)
            .to.be.a("string")
            .to.not.be.null;
        done()
        
    })
})