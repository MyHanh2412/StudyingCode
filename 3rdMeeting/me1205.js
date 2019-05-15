
function changeColor() {
    document.getElementById('changeColor').style.color = 'red';
    document.getElementById('x').style.color = 'green';
}

var thisIsVar = 'a';
var thisIsArray = ['1', '2', '3'];


// var z= "abc ";
function showArray() {
    document.getElementById('title').innerHTML = thisIsArray;
}

function pushArray() {
   
    document.getElementById('name').innerHTML = thisIsArray;
    thisIsArray.push('noname');
}

 var finalArray=['x','y','z'];
function pushArray2() {
    //cmt helps to get the value of id="chocolate"
    //store value in the variable
    var test = document.getElementById('chocolate').value

    //alt + shift + f = beautiful code
    console.log(test);

    //cmt helps to change the id="result1" into variable "test"
    //document.getElementById('result1').innerHTML=test;
    
    
    finalArray.push(test);
    document.getElementById('result1').innerHTML=finalArray;
// chuyen thanh x,y,z,myhanh,minhhoang,linh



}