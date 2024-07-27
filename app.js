let listNumSorteado = [];
let numSecreto = 0;
let intnentos = 0;
let numMaximo = 10;

function textoElemento(elemento, texto) {
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;
}

function iniciarIntentos(){
    let numUsuario = parseInt(document.getElementById('intentoUsuario').value);
    if(numSecreto === numUsuario){
        textoElemento('p', `Acertaste el número secreto en ${intnentos} ${intnentos === 1 ? 'intento.' : 'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numSecreto > numUsuario){
            textoElemento('p', 'El número secreto es mayor.');
        } else {
            textoElemento('p', 'El número secreto es menor.');
        }
        intnentos++;
        limpiarCaja();
    }
}
function condicionesIniciales(){
    textoElemento('h1', 'Juego del número secreto:');
    textoElemento('p', `Indique un número del 1 al ${numMaximo}`);
    intnentos = 1;
    numSecreto = generarNumSecreto();
}
function limpiarCaja() {
    document.querySelector('#intentoUsuario').value = ' ';
}

function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numMaximo)+1;
    console.log(numeroGenerado);
    console.log(listNumSorteado);
    if (listNumSorteado.length == numMaximo){
        textoElemento('p', `Ya se han sorteado todos los números posibles.`);
    } else {
        if(listNumSorteado.includes(numeroGenerado)){
        return generarNumSecreto();
        } else {
            listNumSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
}
}
function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();