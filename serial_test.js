const serialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new serialPort('/dev/ttyACM0',{
	baudRate: 256000
});

/*
port.on("open", function () {
  console.log('Open');
  port.on('data', function(data) {
    //console.log(data);
  });
});

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
  var input  = port.read();
  var output = new Buffer.from(input, 'hex');
  console.log("->" + output);  // Result: 32343630 -> 2460
}); 
*/

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', console.log)
