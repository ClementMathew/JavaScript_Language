var string = 'Cleme"nt';
var string2 = "Cleme'nt";

console.log(string);
console.log(string2);

/// Concatination

var names = "Harry";
var message = "is a good boy";

console.log(names + " " + message);

// BackTick

var channel = "CodeWithHarry";
var temp = `${names} is a nice person "and" he has a channel called ${channel}`;

console.log(temp);

// Length

var len = channel.length;
console.log(`Length of Channel is ${len}`);

// Escape Sequences 

console.log("Clement \n Mathew")
console.log("Clement \t Mathew")
console.log("Clement \\n Mathew")

// Using Constructor

var y = new String("This");
console.log(y);