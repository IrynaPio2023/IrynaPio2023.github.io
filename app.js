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

//myOrder(arr);
//console.log(arr);

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
//newFunc();


/*function letsStart(){
    myOrder(arr);
    newFunc();
} 
letsStart(); */


function letsStart(){
    myOrder(arr);
    newFunc();
} 
letsStart();

//setInterval(letsStart, 1000); 
  
/*count = 0;
  
intervalId = setInterval(function(){
 count++;
 if(count == 10){
   clearInterval(intervalId);
 }
 letsStart();
}, 2000); */
/*document.on( "mousemove", function( event ) {
    var dw = $(document).width() / 15;
    var dh = $(document).height() / 15;
    var x = event.pageX/ dw;
    var y = event.pageY/ dh;
    $('.eye-ball').css({
      width : x,
      height : y
    });
  });
  */





/*function myOrder(arr){
    console.log(arr);
  }
  
  count = 0;
  
  intervalId = setInterval(function(){
   count++;
   if(count == 10){
     clearInterval(intervalId);
   }
   myOrder(arr);
  }, 2000); */



//main function important
//let newt = document.querySelector('.employers-main').after(arr);

///////


  /*$('#password').focusin(function(){
    $('form').addClass('up')
  });
  $('#password').focusout(function(){
    $('form').removeClass('up')
  });
  
  // Panda Eye move
$(document).on( "mousemove", function( event ) {
    var dw = $(document).width() / 15;
    var dh = $(document).height() / 15;
    var x = event.pageX/ dw;
    var y = event.pageY/ dh;
    $('.eye-ball').css({
      width : x,
      height : y
    });
  });
  
  // validation
  
  
  $('.btn').click(function(){
    $('form').addClass('wrong-entry');
      setTimeout(function(){ 
         $('form').removeClass('wrong-entry');
       },3000 );
  });
*/



/*

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
//arr.toString();
let newArr = arr.toString();

//let newOne = arr.join('<br/>');
//console.log(newOne);

//main function important
myOrder(arr);
console.log(arr);
//main function important
//let newt = document.querySelector('.employers-main').after(arr);

let newArrayFinish = this.arr.forEach( emotion => console.log(emotion) );

let emp = [];
let trbo0 = arr[0];
let trbo1 = arr[1];
let trbo2 = arr[2];
let trbo3 = arr[3];
let trbo4 = arr[4];
let trbo5 = arr[5];
let trbo6 = arr[6];
let trbo7 = arr[7];
let trbo8 = arr[8];
let trbo9 = arr[9];
let trbo10 = arr[10];
let trbo11 = arr[11];
let trbo12 = arr[12];

document.querySelector(".employers1").append(trbo0);
document.querySelector(".employers2").append(trbo1);
document.querySelector(".employers3").append(trbo2);
document.querySelector(".employers4").append(trbo3);
document.querySelector(".employers5").append(trbo4);
document.querySelector(".employers6").append(trbo5);
document.querySelector(".employers7").append(trbo6);
document.querySelector(".employers8").append(trbo7);
document.querySelector(".employers9").append(trbo8);
document.querySelector(".employers10").append(trbo9);
document.querySelector(".employers11").append(trbo10);
document.querySelector(".employers12").append(trbo11);
document.querySelector(".employers13").append(trbo12);



*/
