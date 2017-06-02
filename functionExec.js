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
alert(foo());  // Uncaught TypeError: bar is not a function





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

 // But…but…we were always taught that code after the return statement is unreachable ==> not for functions bb




// TEST 2

 //**Simulated processing sequence for TEST 2**
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    //first Function Expression is executed
    bar = function() {
        return 3;
    };
    // Function created by first Function Expression is invoked
    return bar();
    // second Function Expression unreachable
}
console.log(foo()); //3




// !! IMPORTANT , ABOUT RUNNING TEST IN FIREBUG (you got an error)
   // try running it in chrome or safari consoles , or save it in an html file and run it over Firefox

      //  Apparently the Firebug console does not practice function hoisting when it runs in its “global” scope (which is actually not global but a special “Firebug” scope – try running “this == window” in the Firebug console).



      // TEST 3
        //  based on similar logic to Question 1. This time it is the foo function that gets hoisted




// TEST 4


//**Simulated processing sequence for TEST 4**
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    return bar(); //TypeError: "bar not defined"
    //neither Function Expression is reached
}
alert(foo());



//	|------------------------------------------------------|
//	|------------------ WHAT YOU SHOULD WATCH OUT FOR -----|
//	|------------------------------------------------------|


// What's a function statement : sometimes just a pseudonym for a Function Declaration ,BUT in mozilla a Function Statement is an extension of Function Declaration allowing the Function Declaration syntax to be used anywhere a statement is allowed.

// So in Mozilla, the following code throws an error x is not defined , however in other browsers , x is returned .

function foo() {
    if(false) {
        function x() {};
    }
    return x;
}
alert(foo());


/*  TRY TO AVOID FUNCTION DECLARATION AS POSSIBLE AS YOU CAN

     BECAUSE : Function Expressions are more versatile.
      A Function Declaration can only exist as a “statement” in isolation. All it can do is create an object variable parented by its current scope. In contrast a Function Expression (by definition) is part of a larger construct. If you want to create an anonymous function or assign a function to a prototype or as a property of some other object you need a Function Expression

1 Problem with function expressions :

     - Typically functions created by Function Expressions are unnamed. For instance the following function is anonymous, today is just a reference to an unnamed function:

        var today = function() {return new Date()}

      ==> Not a big problem , but debugging with anonymous functions can be frustrating
    Solution ==> using Named Function Expressions (NFEs) as a workaround
    var today = function today() {return new Date()}

    HOWEVER ,  NFEs do not work correctly in IE < 9

*/
