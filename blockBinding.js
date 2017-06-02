/***
    - No Hoisting of variables ==> why using let , no hoisting bb

    - NO REDECLARATION when using let

    - constants must be declared and initialiazed at the same time, else an error will be thrown

    - const is similar to let in the way that it doesn't allow hoisting and throw errors when trying to modify on the same scope

    - you can't change const variables ==> throws error , but you can change objects , you can change the bound value of the object and not the binding .

    - Block binding in loops !!

****/

//	|------------------------------------------------------|
//	   |------------------ No hoisting ------------------|
//	|------------------------------------------------------|


function noHoisting(x) {

  if(x==5) {
    var val = 44 ;  // try using let ==> error in the else console.log(à)
    console.log(val);
    return val ;
  }

  else{
    console.log(val);

  }
}

noHoisting(4);  // to enter the if condition replace test(4) by test(5)



function noRedeclaration() {

var val = 444;



var val = 333 ;    // change var with let will throw an error if declared on the same scope

   console.log(val);
   return val
}

noRedeclaration();



function otherScopeDeclaration(x){
  var val =231;
      if(x==5) {

           let val = 3222;  // no error thrown , because this is a new variable created just inside the if scope
           console.log(val);
           return val;
      }

      console.log(val);
      return val

}

otherScopeDeclaration(5);



function constDeclaration() {

  const val = 4000 ; // valid
  //const vall ; // throws error


}



function constChangeObject() {

const obj = {x:"test"};

obj.x="test2 " ;

}




function variableAccInLoop() {
    // var i ; hoisting , the i variable is hoisted from the for loop

     for (var i = 0; i < 10; i++) {    // if using let , problem solved , and console.log(i) outside the for loop throws error
          //
    }

       console.log(i);   // i is accessible here it logs 10, because i gets hoisted
}
