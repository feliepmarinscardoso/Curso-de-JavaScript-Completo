var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

function validarVitoria() {

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel") {
        console.log(enemyOpt == 'papel')
        if(enemyOpt == "papel") {
            vencedor.innerHTML = "O jogo foi empatado";
        }
        else if(enemyOpt == "tesoura") {
            vencedor.innerHTML = "O inimigo ganhou";
        }
        else if(enemyOpt == "pedra") {
            vencedor.innerHTML = "O player ganhou";
        }
    }

    if(playerOpt == "tesoura"){
        if(enemyOpt == "papel") {
            vencedor.innerHTML = "O player ganhou";
        }
        else if(enemyOpt == "tesoura") {
            vencedor.innerHTML = "O jogo foi empatado"; 
        }
        else if(enemyOpt == "pedra") {
            vencedor.innerHTML = "O inimigo ganhou";
        }
    }

    if(playerOpt == "pedra"){
        if(enemyOpt == "papel") {  
            vencedor.innerHTML = "O inimigo ganhou";
        }
        else if(enemyOpt == "tesoura") {
            vencedor.innerHTML = "O player ganhou";
        }
        else if(enemyOpt == "pedra") {
            vencedor.innerHTML = "O jogo foi empatado";
        }
    }
}

function resetEnemyOpacity() {
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
    enemyOptions[i].childNodes[0].style.opacity = 0.3;      
    }
}

function enemyPlay() {
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetEnemyOpacity();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function(t) {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        enemyPlay();
    });
}
