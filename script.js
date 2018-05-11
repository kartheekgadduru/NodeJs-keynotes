/*function pow(){

	return 8;
}
console.log(pow());

var x=42;
console.log(x.toString());

console.log(x.__proto__);
console.log(x instanceof Number);*/

// primitives are immutable
var int1=42;
var int2=int1;
int2=50;
console.log('int1 '+ int1);

console.log('int2 '+int2);

// Objects are mutable and stored by reference

var obj1={};
var obj2=obj1;
obj2.test="test";
console.log(JSON.stringify(obj1)); //Which gives as "test":"test"

obj2.arr=[];	
var x=obj2.arr;
x.push(1);

console.log("Object1 with array "+ JSON.stringify(obj1) );

//==>this 
// 1. Refers to an object that sets the creation of a new instance context.
//2. In the global execution context, refers to global object.
//3. If function is called as method of an object. 'this' is bound to the object the method is called on.

var person={
	name:'Mark',
	lastName:'Twin',
	
	whatIsthis:function(){console.log(this)},
	greet:function(){console.log(" Hi "+ this.name)}

}

person.whatIsthis(); // which consoles whole person object
person.greet();

//  Setting this method manually useing following methods.
/*bind() // will return a new function 
call() // will call function with this bound in any arguments as well 
 apply() */

 var student={
 	name:'kartheek',
 	lastName:'gadduru'
 }

// A bit of concentation requeired on this.
var bindpersonToStudent= person.greet.bind(student);
bindpersonToStudent();
person.greet.call(student);
person.greet.apply(student);





