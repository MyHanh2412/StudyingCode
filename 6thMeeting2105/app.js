document.getElementsByClassName('project')[1].style.backgroundColor='yellow'
"yellow"
// change the color of project one by one 
const li = document.getElementsByTagName('li');

var project = document.getElementsByClassName('project')
for(var i = 0 ; i < project.length  ; i++){
    if(i%2)
    project[i].style.backgroundColor = 'yellow'
    }
// change the color of many projects
 