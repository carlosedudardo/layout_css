// document.getElementById('nombreJs')
// .setAttribute('value', 'carlos');

document.getElementById('saludarBoton')
    .addEventListener('click', () =>{
        let nombrePersona = document.getElementById('nombreJs').value;
        // if (nombrePersona == '' || nombrePersona == null)
        if (!nombrePersona) {
            alert('Debe ingresar el nombre');
        } else {
            alert ('hola ' + nombrePersona + '!!!!')
        }
        alert('Hola ' + nombrePersona + '!!!!!!');
    });