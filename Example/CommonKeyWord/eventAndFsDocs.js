// process with EventEmitter
/*
process.on('exit', function() {
    console.log('exit 이벤트 발생');
});

process.on('tick', function(count) {
    console.log('tick 이벤트 발생 %d', count);
});

setTimeout(function() {
    process.emit('tick', '2');
    //process.exit();    
}, 2000);
*/

// Call Another File With EventEmitter
/*
var Calc = require('./module_exam_cal');
var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + 'stop Event : %d', calc.add(10, 10));
*/

// Sync File read
/*
var fs = require('fs');
var data = fs.readFileSync('./package.json', 'utf8');
console.log(data);
*/

// Async File read
/*
fs.readFile('./package.json', 'utf8', function(err, data) {
    console.log(data);
});
*/

// File write
/*
fs.writeFile('./output.txt', 'Hello World', function(err) {
    if(err) {
        console.log('Error : ' + err);
    }
    console.log('output.txt write');
});
*/

// File write With Buffer
/*
fs.open('./output.txt', 'w', function(err, fd) {
    if(err) throw err;

    var buf = new Buffer('hi!\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if(err) throw err;

        fs.close(fd, function() {
            console.log('file close');
        });
    });
});
*/

// File read With Buffer
/*
fs.open('./output.txt', 'r', function(err, fd) {
    if(err) throw err;

    var buf = new Buffer(100);    

    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
        if(err) throw err;

        var inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('File Data = %s', inStr);

        fs.close(fd, function() {
            console.log('file close');
        });
    });
});
*/

// Buffer And String concat
/*
var output = 'hi man';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8');
var buffer2 = new Buffer('hi man2', 'utf8');
var byteLen = Buffer.byteLength(output);
var str = buffer1.toString('utf8', 0, byteLen);
var str2 = buffer2.toString('utf8');

buffer1.copy(buffer2, 0, 0, len);
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('%s', buffer3.toString('utf8'));
*/

// fs module Using
/*
var fs = require('fs');
fs.mkdir('./docs', 0666, function(err) {
    if(err) throw err;
    console.log('create new folder');

    fs.rmdir('./docs', function(err) {
        if(err) throw err;
        console.log('delete folder');
    })
})
*/