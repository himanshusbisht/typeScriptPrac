console.log("jcdlskjclk") 
var a:number=4
var b:String="scdsdc"


/*

var/let/const

1)Scope 
2. Declaration/value assignment
3. Re-declaration
4. Re-initialization/Re-assignment
5. Hoisting
*/

// 1.Scope-(Functional(var) and BLock Scope(let,const))

function test(){
    if(true){
    var c=8;
    let d=8;
    const e=9;
    }
console.log(c)
// console.log(d)
// console.log(e)
}


// var can be declared without initialization
var x;
let y;
// const s;

console.log(x);
console.log(y);

//Redeclaration 
var gg="sdfsd";
var gg="csdcsd"

// let d=5;
// let d=6;



// Hoisting
// console.log(g)--->undefined
// var g=9;
// console.log(g)

// console.log(g)---->not initialized
// let g=9;constg=9;
// console.log(g)



