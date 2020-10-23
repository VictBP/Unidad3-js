function validar() {
	var usuario = document.myForm.usuario.value;
	var clave = document.myForm.clave.value;
	if( usuario == "" || clave == "") {
	   alert( "Rellene los campos usuario y clave" );
	   return false;
	}
	return( true );
 }