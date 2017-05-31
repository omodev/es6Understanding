/***
    - No Hoisting of variables ==> why using let , no hoisting bb

    - NO REDECLARATION when using let


****/




function noHoisting(x) {

  if(x==5) {
    var val = 44 ;  // try using let ==> error
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

      if(x==5) {

           let val = 3222;
           console.log(val);
           return val;
      }
      var val =231;
      console.log(val);
      return val

}

otherScopeDeclaration(5);
