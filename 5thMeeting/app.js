var newArray=['x','y','z'];
function showArray() {
   
    document.getElementById('name').innerHTML = newArray;
    var result = document.getElementById('pushArray').value;
    newArray.push(result);
    
  
    console.log(result);
}

function changeColor(){
   document.getElementsByClassName('red')[1].style.color='purple';
}


