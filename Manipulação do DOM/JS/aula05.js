var box = document.querySelectorAll('.box')[0];

setTimeout(()=> {
    box.classList.add('animacao');
}, 1000);

box.addEventListener('click', ()=> {
    box.classList.add('animacaoClick');
})