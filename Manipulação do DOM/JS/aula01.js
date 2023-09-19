var p = document.getElementsByTagName('p');

for(var i = 0; i <= p.length; i++) {
    window.alert(p[i].innerHTML);
    p[i].innerHTML = `Nada! Você não sabe escrever ... ${i+1}`;
}
