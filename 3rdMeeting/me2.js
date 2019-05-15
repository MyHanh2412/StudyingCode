
var food = ['salmon', 'grilled rib', 'beefsteak', 'chicken', 'milk'];
function randomNumber() {
    document.getElementById('Result1').innerHTML = Math.random()
}
function randomNumber2() {
    var max = 4;
    var min = 0;
    var test = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(test);
}

   
function randomNumber3() {
    var max = 4;
    var min = 0;
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(result);
    document.getElementById('result3').innerHTML = food[result];
}
function randomNumber4() {
    document.getElementById('result4').innerHTML = food[randomNumber2()];
}

