/* let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector('p');
titulo.innerHTML = 'Indica un número del 1 al 10';

Con la function asignarTextoElemento que está aquí abajo, reducimos
las dos líneas de código a solo 1 que son las de (y la de 'p' también)
AsignarTextoElemento('h1', ' Juego del número secreto');
*/

let numeroSecreto = 0
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento,  texto) { //elemento y texto son variables
    let elementoHTML= document.querySelector(elemento); //elementohtml se refiere al título
    elementoHTML.innerHTML = texto; //estos están en el orden que está en la formula de asignarTextoElemento ('h1', 'juego del número secreto')
    return;
}

/* La función de arriba sirve para llamar al document y con 
asignarTextoElemento ya sólamente se entrecomilla lo que se requiere
asignarTextoElemento ('h1', 'Juego del número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
*/ 

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //esta última fórmula sirve para decirle que si el intento es = a 1 va a aparecer la palabra 'vez', sino que aparezca 'veces'. "?"= sí/entonces ":"= de lo contrario
        document.getElementById('reiniciar').removeAttribute('disabled');
        /*el disabled es un atributo que está dado en mi botón en index.html y al poner esto, le indico que cuando el usuario acierte,
        me quite el atributo de disabled y me deje usar el boton "nuevo juego"
        */
    } else {
        //el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
    /*no es necesario usar todo esto:
   let valorCaja = document.querySelector('#valorUsuario') se usa # para llamar por id de nuestro input.
   valorCaja.value= ''; //Las dos comillas solas significa que el valor es vacío
se puede reducir a lo siguiente que está arriba.
cuando yo uso una función, la puedo usar en el resto del código sólo con el nombre que asignamos
y me va a realizar la acción que yo indiqué en la funcion. En la función pido que
se limpie la caja y arriba abajo de intentos, sólo pongo limpiar caja y me realizar
lo que yo escribí en esta función.
   */
  

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    
        //si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes (numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales (){
    asignarTextoElemento ('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
}

function reiniciarJuego() {  // esta función va a realizar todas las siguientes actividades:
    //Limpiar la caja
    limpiarCaja(); // llamamos a esta función que ya está hecha
    //Indicar mensaje de intervalos de números a seleccionar
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //# significa que estoy llamndo a un id en inex.html
    
}

condicionesIniciales();

