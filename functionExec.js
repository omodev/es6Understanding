// TEST 1

function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo());


// TEST 2

function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
console.log(foo());



// TEST 3


console.log(foo());
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}


// TEST 4


function foo(){
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo());





/***
    Now that you tested the output of those functions, let's understand the difference between a function declaration and a function expression

    func declaration : no use of the var assignement + cannot be nested within non-function blocks + think of them as siblings of variable declaration
          as variaible declaration must start with "var" , fundtion declaaration must begin with "function"

    func expression : a variable assignement + Functions defined via Functions Expressions can be named or anonymous + !!! The function name (if any) is not visible outside of it’s scope (contrast with Function Declarations).

****/



//	|------------------------------------------------------|
//	   |------------------ TESTS EXPLANATION ------------------|
//	|------------------------------------------------------|



// TEST 1
   // It's hoisting bb , hoisting
   // Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter


   //**Simulated processing sequence for TEST 1**
function foo(){
    //define bar once
    function bar() {
        return 3;
    }
    //redefine it
    function bar() {
        return 8;
    }
    //return its invocation
    return bar(); //8
}
console.log(foo());
