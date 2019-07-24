var myGlobal = 5;
//global varaiable
function prntVariables()
{
console.log("This is global variable"+myGlobal);
var myLocal="This is a local variable";
console.log(myLocal);
}
prntVariables();
console.log("Outside the function printing global variable "+myGlobal);
//console.log("Outside the function printing local variable "+myLocal);//error
//local and global variable scope
function scope()
{
    var myGlobal = 15;
    return myGlobal;
}
console.log("The result is of calling over the function " +scope());//15
console.log("the result is on calling the global varaiable "+myGlobal);//5