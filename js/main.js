//funcion para cambiar idioma 

function cambiarIdioma(){
	
	// cambiando idioma al h2
	document.getElementById('form-signin-heading').innerHTML = "Por favor inicia sesión";
	//cambiando idioma a formulario correo
	document.getElementById('inputEmail').placeholder = "Correo Eléctronico";
	// cambiando idioma al formulario contraseña
	document.getElementById('inputPassword').placeholder = "Contraseña";
	// cambiando idioma a recordar datos.
	document.querySelector('span').innerHTML = "Recordar Datos";	
	// cambiando idioma al boton iniciar sesion
	document.querySelector('button').innerHTML = "Iniciar Sesión";
}
