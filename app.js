let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre =input.value.trim();
    if (nombre === '' ) {
        alert('Por favor, inserte un nombre');
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
       alert('Se necesitan más amigos para ser sorteados')
       return;
    }
    const aleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    const sorteado = document.getElementById('resultado');
    sorteado.textContent = 'El amigo secreto es:' + aleatorio;
}