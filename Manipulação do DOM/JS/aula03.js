var elements = document.getElementsByClassName('box');

for(var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'green';
    elements[i].style.width = '100px'; 
    elements[i].style.height = '100px'; 
    elements[i].style.marginLeft = '300px'; 
    elements[i].style.marginTop = '10px';
}