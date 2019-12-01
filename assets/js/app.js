/**
 * Crear funciones de utilidad para modularizar el codigo
 */
const el = e => document.querySelector(e);
const cl = c => console.log(c);
const on = (event, callback, el = document) => el.addEventListener(event, callback);

//cl(el('#element'));
console.log(document.querySelector('#element'));

/**
 * Mover elementos segun la posicion del mouse
 */
on('mousemove', (event)=> {
    el('#item_1').style.left = `${event.offsetX + 5}px`;
    el('#item_2').style.top = `${event.offsetY + 5}px`;
});


