function Ingresar() {
	var nombreusuario = getN("nombreusuario");
	var contra = getN("contra");
	fetchGet("Login/login/?usuario=" + nombreusuario + "&contra=" + contra, "json", function (data) {

		if (data.iidusuario == 0) Error("Usuario o contraseña incorrecta");
		else {
			//https://localhost:44392/TipoMedicamento/Index
			Exito("Bienvenido al Sistema");
			document.location.href = setURL("TipoMedicamento/Index");
		}

	})

}