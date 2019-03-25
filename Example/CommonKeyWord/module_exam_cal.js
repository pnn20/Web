var util = require('util');
var EventEmitter = require('events').EventEmitter;

var calc = function() {
    var self = this;
    this.on('stop', function() {
        console.log('stop event');
    });
};

util.inherits(calc, EventEmitter);
calc.prototype.add = function(a, b) {
    return a + b;
}

module.exports = calc;
module.exports.title = 'calculator';