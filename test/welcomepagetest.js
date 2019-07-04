var expect = require("chai").expect;
var welcometime = require("../app/welcometime");

describe("Get Time", function () {
    describe("Get welcome time", function () {
        it("gives a correct time within 200ms", function (done) {
            var startTime = Date.now();
            setTimeout(function () {
                var retrievedTime = welcometime.getCurrentTime();
                setTimeout(function () {
                    var laterTime = Date.now();
                    expect(retrievedTime).to.be.greaterThan(startTime);
                    expect(retrievedTime).to.be.lessThan(laterTime);
                    done();
                }, 100);
            }, 100);
        });
    });
});