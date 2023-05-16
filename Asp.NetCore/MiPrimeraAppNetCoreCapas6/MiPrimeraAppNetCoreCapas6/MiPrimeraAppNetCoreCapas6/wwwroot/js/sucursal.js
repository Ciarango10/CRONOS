window.onload = function () {
    listarSucursal();
   /* previewImage("fupFoto","imgFoto");*/
}
var objSucursal;
var objFormularioSucursal;
//function previewImage() {
//    var fupFoto = document.getElementById("fupFoto");
//    var imgFoto = document.getElementById("imgFoto");
//    fupFoto.onchange = function () {
//        //Primero
//        var file = fupFoto.files[0];
//        //Leer el archivo (imagen)
//        var reader = new FileReader();
//        //Cuando termina de leer entra al onloadend
//        reader.onloadend = function () {
//            imgFoto.src = reader.result;
//        }
//        reader.readAsDataURL(file)

//    }
//}

function listarSucursal() {
    objSucursal = {
        url: "Sucursal/listarSucursal",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["iidsucursal", "nombre", "direccion"],
        editar: true,
        eliminar: true,
        propiedadId: "iidsucursal",
        urleliminar: "Sucursal/eliminarSucursal",
        nombreparametroeliminar: "id",
    }
    objFormularioSucursal = {
        legend: "Datos Sucursal",
        idformulario: "frmSucursal",
        urlguardar: "Sucursal/GuardarDatos",
        urlrecuperar: "Sucursal/recuperarSucursal",
        parametrorecuperar: "iidsucursal",
        pos: "bottom",
        posid: "divSucursalBusqueda",
        formulario: [
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Id Sucursal",
                    name: "iidsucursal",
                    type: "number",
                    readonly:true
                },
                {
                    class: "col-md-6",
                    label: "Nombre",
                    name: "nombre",
                    classControl:"ob max-100 min-3 sl"
				}
            ],
            [
                {
                    class: "col-md-6",
                    label: "Direcciòn",
                    name: "direccion",
                    type: "textarea",
                    classControl:"ob max-200 min-5 slcenb"
                },
                {
                    class: "col-md-6",
                    type: "file",
                    label: "Suba una Foto",
                    name: "fotoEnviar",
                    preview: true,
                    imgwidth: 100,
                    imgheight: 100,
                    namefoto: "base64"
                   

				}
            ]
           
        ]
	}
    pintar(objSucursal, null, objFormularioSucursal)
}

function BuscarSucursal() {
    /*
    var nombresucursal = get("txtnombrebusqueda")
    objSucursal.url = "Sucursal/filtrarSucursal/?nombresucursal=" + nombresucursal
    pintar(objSucursal)*/
    var nombresucursal = get("txtnombrebusqueda")
    var urlBuscar = "Sucursal/filtrarSucursal/?nombresucursal=" + nombresucursal
    fetchGet(urlBuscar, "json", function (res) {
        document.getElementById(objSucursal.divContenedorTabla).innerHTML = generarTabla(res);
    })

}
function LimpiarListaSucursal() {
    listarSucursal();
    set("txtnombrebusqueda","")
   // document.getElementById("txtnombrebusqueda").value = "";
}

//function Editar(id) {
//    recuperarGenerico("Sucursal/recuperarSucursal/?iidsucursal=" + id, "frmSucursal")
//}

//function GuardarDatos() {

//    var errores = ValidarDatos("frmSucursal")
//    if (errores != "") {
//        Error(errores)
//        return;
//    }
//    var frmGuardar = document.getElementById("frmSucursal");
//    var frm = new FormData(frmGuardar);
//    Confirmacion(undefined, undefined, function (rpta) {
//        fetchPost("Sucursal/GuardarDatos", "text", frm, function (data) {
//            if (data == "1") {
//                Exito();
//                listarSucursal()
//                LimpiarDatos("frmSucursal")
//            } else Error();
//        })
//    })

//}

//function LimpiarSucursal() {
//    LimpiarDatos("frmSucursal")
//}