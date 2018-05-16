/*const favoriteAuthor = { name: "Ken Bruen", genre: "Noir", nationality: "Irish" };

module.exports.favoriteAuthor=favoriteAuthor;*/

/*var EventEmitter=require("events").EventEmitter;

var ee=new EventEmitter();
	ee.on("someEvent", function(){
		console.log("event has occured");

	});

	ee.emit("someEvent");*/

/*var fs=require('fs');

var readable = fs.createReadStream(‘data.txt’);
 
var writable=fs.createWriteStream(‘bcd.txt’);
 
readable.pipe(writable);
 
readable.on(‘end’,function(){
 
readable.unpipe(writable);
 
});*/

/*github.com/azat-co/you-dont-know-node
github.com/azat-co/node-patterns
github.com/substack/stream-adventure

strems abstraction for continous chunk of data 
so we dont need to wait for the entire resource to load.
We have types of data Readble, writable, Duplex, transform.
Strems Inherit from event emitters.
Streams are everywhere! 
	Http request and response
	Standared input/output 
	File reads and writes 
	What is pipe?
	To work with binary data in node we have type called buffer 
	How to scale a single threaded system? 
		For this, we can have one master process and then we have mutiple worker processes*/

/*var os = require('os');
var toMb= function(f){
	return (Math.round((f/1024/1024)*100)/100);
}

console.log('host '+ os.hostname());
console.log('load time : '+ os.loadavg()[2]);
console.log(toMb(os.freemem())+ " : "+ toMb(os.totalmem())+ ' Mb free');

var EventEmitter=require('events').EventEmitter;*/

var getresource= function (c){
	var event=new EventEmitter();
	// this process process nextTick is similar to setTimeout, setInterval and what it really says is on the very 
	//next tick of the event loop it is wanted to run this function 
	process.nextTick(function(){
		var count=0;
		event.emit('start');
		var t=setInterval(function(){
			event.emit('data',++count );
			if(count===c){
				event.emit('end', count);
				clearInterval(t);
			}
		}, 10)
	})
	return (event);
}


var onEmitcall =getResource(5);
onEmitcall.on('start', function(){
	console.log('I ve stated');
});
onEmitcall.on('data', function(d){
	console.log('here is the data: '+ d);
})
onEmitcall.on('end', function(t){
	console.log('see here I am ending : '+ t);
})
