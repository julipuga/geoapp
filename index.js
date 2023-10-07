import { suma, multiplicacion } from './math';

botonSumar.addEventListener('click', () => {
    let a = parseInt(A.value);
    let b = parseInt(B.value);
    R.value = suma(a, b)
    console.log('hola soy el boton :v')
})
botonMulti.addEventListener('click', () => {
    let a = parseInt(A.value);
    let b = parseInt(B.value);
    R.value = multiplicacion(a, b)
    console.log('hola soy el boton malo >:)')
})