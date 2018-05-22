var chai = require("chai");
var chaiHttp = require("chai-http");
var budgets = require("../models/budgets");
var user = require("../models/user")

var expect = chai.expect;
var should = chai.should();

var assert = require("chai").assert

describe("budgets", function() {

    it("verify model: clothes", function() {
        expect(budgets.food)
            .to.not.be.null
            .to.equal(30)
    });


});

describe("users", function() {
    it("Verify user model", function() {
        expect(user.name)
        .to.be.a("string")
        
    })
})