function changeColor() {
    document.getElementById('changeColor').style.color = 'red';

}

function switchColor() {
    if (document.getElementById('changeColor').style.color == 'black') {
        document.getElementById('changeColor').style.color='red';
        console.log("I'm red");

    } else 
    //if(document.getElementById('changeColor').style.color == 'red'){
        document.getElementById('changeColor').style.color='black';
        console.log("I'm black");

    }
}
 function removeColor(){
     if (document.getElementById('removeColor').style.color=='black'){
        // document.getElementById('removeColor').style.color=='blue';
        console.log("I'm blue");

        

     } else if (document.getElementById('removeColor').style.color=='blue'){
        // document.getElementById('removeColor').style.color=='green';
        console.log("I'm black");
     }
 }



function whichIsBigger() {
    var a = 23;
    var b = 1;
    if (a > b) {
        console.log("a is greater than b");

    } else if (b > a) {
        console.log("a is smaller than b");
    }
}



