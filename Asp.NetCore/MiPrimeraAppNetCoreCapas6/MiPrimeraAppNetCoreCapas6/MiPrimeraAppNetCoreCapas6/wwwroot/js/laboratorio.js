window.onload = function () {
    listarLaboratorio();
    validarKeyPress("frmGuardarLaboratorio")
}
var objLaboratorio;
var objBusqueda;
var objFormularioLaboratorio;
function listarLaboratorio() {
    objBusqueda = {
        legend: "Busqueda de Laboratorio",
        idformulario: "frmBusqueda",
        url:"Laboratorio/filtrarLaboratorio",
        formulario: [
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Nombre Laboratorio",
                    name: "nombre"
                   
                 
            

                },
                {
                    //div
                    type:"textarea",
                    class: "col-md-6",
                    label: "Direccion Laboratorio",
                    name: "direccion"
                   
                  
                

                }
            ],
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Persona Contacto",
                    name: "personacontacto"
                   
                  
                 
                },
                {
                    class: "col-md-6",
                    label: "Estado",
                    type: "radio",
                    //nuevas
                    labels: ["Habilitado", "Deshabilitado"],
                    values: ["1", "0"],
                    ids: ["rbHabilitado", "rbDeshabilitado"],
                    checked: "rbHabilitado",
                    //
                    name: "bhabilitado"
                }
            ]
        ]
    }
    objFormularioLaboratorio = {
        type:"popup",
        legend: "Registro  Laboratorio",
        idformulario: "frmRegistroLaboratorio",
        urlguardar: "Laboratorio/guardarDatos",
        urlrecuperar: "Laboratorio/recuperarLaboratorio",
        parametrorecuperar: "id",
        formulario: [
            [
                {
                    label: "Id Laboratorio",
                    readonly: true,
                    class: "col-md-6",
                    name:"iidlaboratorio"
                },
                {
                    label: "Nombre Laboratorio",
                  
                    class: "col-md-6",
                    name: "nombre",
                    classControl:"ob"
                }
            ],
            [
                {
                    label: "Direccion Laboratorio",

                    class: "col-md-12",
                    name: "direccion",
                    classControl:"ob"
                }
            ],
            [
                {
                    label: "Persona Contacto",

                    class: "col-md-6",
                    name: "personacontacto",
                    classControl:"ob"
                },
                {
                    label: "Numero Contacto",

                    class: "col-md-6",
                    name: "numerocontacto",
                    classControl:"ob"
                }
            ]


        ]
	}
    objLaboratorio = {
        popup: true,
        popupId: "staticBackdrop1",
        titlePopup: "Laboratorio",
        url: "Laboratorio/listarLaboratorio",
        cabeceras: ["Id Laboratorio", "Nombre", "Direccion","Persona Contacto"],
        propiedades: ["iidlaboratorio", "nombre", "direccion", "personacontacto"],
        divContenedorTabla: "contenedorTabla",
        editar: true,
        eliminar: true,
        propiedadId: "iidlaboratorio",
        urleliminar: "Laboratorio/eliminarLaboratorio",
        nombreparametroeliminar: "id",
        paginar: true
    }
    pintar(objLaboratorio, objBusqueda, objFormularioLaboratorio)
}

//function BuscarDatos() {
//    //Objeto
//    var formu = document.getElementById("frmBusqueda");
//    var frm = new FormData(formu);
//    fetchPost("Laboratorio/filtrarLaboratorio", "json", frm, function (res) {
//        document.getElementById("contenedorTabla").innerHTML=  generarTabla(res);
//    })
//}

//function LimpiarLaboratorio() {
//    LimpiarDatos("frmBusqueda");
//    //setN("nombre", "")
//    //setN("direccion", "")
//    //setN("personacontacto", "")
//    listarLaboratorio()
//}

//function GuardarDatos() {
//    //Objeto
//    var errores = ValidarDatos("frmGuardarLaboratorio")
//    if (errores != "") {
//        Error(errores)
//        return;
//    }

//    Confirmacion(undefined, "Desea guardar el laboratorio?", function () {
//        var formu = document.getElementById("frmGuardarLaboratorio");
//        var frm = new FormData(formu);
//        fetchPost("Laboratorio/guardarDatos", "text", frm, function (res) {
//            if (res == "1") {
//                Exito();
//                listarLaboratorio();
//                LimpiarDatos("frmGuardarLaboratorio")
//                document.getElementById("btnCerrarModal").click();
//            } else Error();
//        })
//    });
  
//}


//function Eliminar(id) {
//    Confirmacion(undefined, "Desea eliminar el laboratorio?", function () {
//        fetchGet("Laboratorio/eliminarLaboratorio/?id=" + id, "text", function (data) {
//            if (data == "1") {
//                Exito("Se elimino correctamente");
//                listarLaboratorio();
//            } else Error();
//        })
//    });
//}

//function Editar(id) {
//    LimpiarDatos("frmGuardarLaboratorio");
//    //Nuevo
//    if (id == 0) {
//        setI("lbltitulo","Agregar Laboratorio")
//    }
//    //Editar
//    else {
//        setI("lbltitulo", "Editar Laboratorio")
//        recuperarGenerico("Laboratorio/recuperarLaboratorio/?id=" + id, "frmGuardarLaboratorio")
//    }
//}