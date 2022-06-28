const divBotones = document.querySelector('#divBotones');

document.createElement('button')

const botonNuevo = document.createElement('button')

divBotones.append('botonNuevo ')

divBotones.append( botonNuevo )

divBotones.append( botonNuevo )

botonNuevo.innerHTML = 'Hola Mundo';

botonNuevo.classList.add('btn')

botonNuevo.classList.add('btn-success')

const input = document.createElement('input');

input.classList.add('form-control')


document.body.append( input )