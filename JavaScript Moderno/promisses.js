function teste()  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const erro = false; 
            if(erro) {
                reject("Erro...")
            }
            else {
                resolve("Ocorreu tudo certo!")
            }
        }), 5000
    })
}

/* 
teste().then(function(res) {
    alert(res)
}).catch(function(err) { //Faz a captura do erro 
    alert(err)
})
*/

async function teste2() {
    await teste().then(function(res) {
        alert(res)
    })
    alert("Olá, Mundo!")
}

teste2();
