var chai = require("chai");
var chaidatetime = require("chai-datetime");
var welcometime = require("../app/welcometime");
chai.use(chaidatetime);

describe("Get Time", function () {
    describe("Get welcome time", function () {
        it("gives a correct time within 200ms", function (done) {
            var startTime = Date.now();
            setTimeout(function () {
                var retrievedTime = welcometime.getCurrentTime();
                setTimeout(function () {
                    var laterTime = Date.now();
                    chai.expect(retrievedTime).to.be.greaterThan(startTime);
                    chai.expect(retrievedTime).to.be.lessThan(laterTime);
                    done();
                }, 100);
            }, 100);
        });
    });
    describe("Get next month", function() {
        it("correctly adds a month to a basic date", function() {
            var thisDate = new Date(2018,2,1);
            var expectedDate = new Date(2018,3,1);
            var oneMonth = welcometime.addMonth(thisDate);

            chai.expect(oneMonth).to.equalDate(expectedDate);
        });
        
        it("correctly adds a month to a tricky date", function() {
            var thisDate = new Date(2018,0,30);
            var expectedDate = new Date(2018,1,28);
            var oneMonth = welcometime.addMonth(thisDate);

            chai.expect(oneMonth).to.equalDate(expectedDate);
        });
    });
});