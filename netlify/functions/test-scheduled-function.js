// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.js

const { schedule } = require("@netlify/functions");

const handler = async function(event, context) {
    console.log("Received event:", event);
    console.log("test 1");

    function myOrder(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
var arr = ['Iryna P', 'Yuliya', 'Krystyna', 'Olga', 'Elisa', 'Stefanos', 'Uli', 'Yigit', 'Anna', 'Iryna Z', 'Hasan', 'Thomas', 'Niko'];


function newFunc(){
    console.log(newFunc);

    let emp = [];
    let emp0 = arr[0];
    let emp1 = arr[1];
    let emp2 = arr[2];
    let emp3 = arr[3];
    let emp4 = arr[4];
    let emp5 = arr[5];
    let emp6 = arr[6];
    let emp7 = arr[7];
    let emp8 = arr[8];
    let emp9 = arr[9];
    let emp10 = arr[10];
    let emp11 = arr[11];
    let emp12 = arr[12];
    document.querySelector(".employers1").append(emp0);
    document.querySelector(".employers2").append(emp1);
    document.querySelector(".employers3").append(emp2);
    document.querySelector(".employers4").append(emp3);
    document.querySelector(".employers5").append(emp4);
    document.querySelector(".employers6").append(emp5);
    document.querySelector(".employers7").append(emp6);
    document.querySelector(".employers8").append(emp7);
    document.querySelector(".employers9").append(emp8);
    document.querySelector(".employers10").append(emp9);
    document.querySelector(".employers11").append(emp10);
    document.querySelector(".employers12").append(emp11);
    document.querySelector(".employers13").append(emp12);
}

function letsStart(){
    myOrder(arr);
    newFunc();
} 
letsStart();

    
    
    
    
    
    
    return {
        statusCode: 200,
    };
};

exports.handler = schedule("@daily", handler);

/*exports.handler = async function (event, context) {
    console.log("test 1");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};*/

