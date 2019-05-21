
var array = ['1', '2', '3'];
function pushArray() {
   document.getElementById('newPage').innerHTML=array;
   var test = document.getElementById('showNewArray').value
   array.push(test);
   //console.log(test);

}

function changeColor() {
   document.getElementsByClassName('yellow')[0].style.color = 'red';
}

function switchsmt(){
   document.getElementsByClassName('blue')[1].style.color='white';
}