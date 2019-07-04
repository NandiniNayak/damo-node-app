exports.getCurrentTime = function () {
    return Date.now();
}

exports.addMonth = function (dt) {
    return new Date(dt.setMonth(dt.getMonth() + 1));
    /*
    var d = new Date(dt.setMonth(dt.getMonth() + 1));
    if (dt.getYear() == d.getYear() && dt.getMonth() + 2 == d.getMonth()) {
        // we skipped a month, let's get the end of the next month
        d = new Date(d.setMonth(d.getMonth()));
        d = new Date(d.setDate(1)-1);
    }
    return d;
    */
}