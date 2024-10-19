import './style.css'
let contador:number = 15;
const botonIncrementar = document.getElementById('boton-incrementar');
const botonDecrementar = document.getElementById('boton-decrementar');
const botonResetear = document.getElementById('boton-resetear');
const textContador = document.getElementById('textcontador');
const channel = new BroadcastChannel('contador-canal')


botonIncrementar?.addEventListener('click', () => {
    contador++;
    actualizarContador(contador)
    // Enviar nuevo valor a través del canal
    channel.postMessage(contador)
})

botonDecrementar?.addEventListener('click', () => {
    contador--;
    actualizarContador(contador)
    // Enviar nuevo valor a través del canal
    channel.postMessage(contador)
})

botonResetear?.addEventListener('click', () => {
    contador = 0;
    actualizarContador(contador)
    // Enviar nuevo valor a través del canal
    channel.postMessage(contador)
})

const actualizarContador = ( cont: number) => {
    if (textContador) {
        textContador.innerHTML = cont.toString();
    }
}

// Escuchar mensajes de otras ventanas.

channel.onmessage = (event) => {
    const nuevoValor = event.data
    contador = nuevoValor;
    actualizarContador(nuevoValor); //
}

actualizarContador(contador)
