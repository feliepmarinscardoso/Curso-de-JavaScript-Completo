var span = document.querySelector('.conteudo span')

span.addEventListener('click', ()=> {
    var conteudo = document.querySelector('.par')

    if(conteudo.classList.contains('mostrar')) {
        span.innerHTML = 'Ver mais';
        conteudo.classList.remove('mostrar')
    }
    else {
        span.innerHTML = 'Ocultar conteúdo';
        conteudo.classList.add('mostrar')
    }
})