window.onload =async function () {
   await listarMedicamentos();
    //listarCombos();
}

var objMedicamento;
var objBusqueda;
var objFormularioMedicamento;
var rpta;
async function listarMedicamentos() {
    objMedicamento = {
        popup: true,
        titleId:"lbltitulo",
        titlePopup:"Medicamento",
        popupId: "staticBackdrop",
        url: "Medicamento/listarMedicamento",
        divPintado:"divContenedor",
        cabeceras: ["Id Medicamento", "Medicamento", "Laboratorio","Tipo medicamento"],
        propiedades: ["iidmedicamento", "nombremedicamento", "nombrelaboratorio", "nombretipomedicamento"],
        editar: true,
        eliminar: true,
        //nuevo:true,
        propiedadId: "iidmedicamento",
        urleliminar: "Medicamento/eliminarMedicamento",
        nombreparametroeliminar: "id"
    }
     rpta = await fetchGet("Medicamento/listarCombosMedicamento", "json", null, true)
   // alert(rpta);
   // alert(JSON.stringify( rpta));
    objBusqueda = {
        legend: "Busqueda Medicamento",
        idformulario: "frmBusquedaMedicamento",
        url: "Medicamento/filtrarMedicamento",
        formulario: [
//Primera fila
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Id medicamento",
                    name: "iidmedicamento",
                    type:"number"

                },
                {
                    class: "col-md-6",
                    label: "Nombre medicamento",
                    name: "nombremedicamento",
                    type: "text"
                }
            ],

            [
                {
                    //div
                    class: "col-md-6",
                    label: "Nombre Laboratorio",
                    name: "iidlaboratorio",
                    type: "combobox",
                    data: rpta.listalaboratorio,
                    id: "cboLaboratorioBusqueda",
                    propiedadmostrar: "nombre",
                    valuemostrar: "iidlaboratorio"

                },
                {
                    //div
                    class: "col-md-6",
                    label: "Nombre Tipo Medicamento",
                    name: "iidtipomedicamento",
                    type: "combobox",
                    data: rpta.listatipomedicamento,
                    id: "cboTipoMedicamentoBusqueda",
                    propiedadmostrar: "nombre",
                    valuemostrar:"idtipomedicamento"

                }
            ]
        ]
    }
    objFormularioMedicamento = {
        type: "popup",
        legend: "Registro  Medicamento",
        idformulario: "frmRegistroMedicamento",
        urlguardar: "Medicamento/guardarMedicamento",
        urlrecuperar: "Medicamento/recuperarMedicamento",
        parametrorecuperar: "iidmedicamento",
        formulario: [
            [
                {
                    label: "Id Medicamento",
                    readonly: true,
                    class: "col-md-6",
                    name: "iidmedicamento"
                },
                {
                    label: "Codigo Medicamento",

                    class: "col-md-6",
                    name: "codigoMedicamento"
                }
            ],
            [
                {
                    label: "Nombre Medicamento",

                    class: "col-md-6",
                    name: "nombremedicamento"
                },
                {
                    //div
                    class: "col-md-6",
                    label: "Laboratorio",
                    name: "iidlaboratorio",
                    type: "combobox",
                    data: rpta.listalaboratorio,
                    id: "cboLaboratorioFormulario",
                    propiedadmostrar: "nombre",
                    valuemostrar: "iidlaboratorio"

                }
            ],
            [
                {
                    //div
                    class: "col-md-6",
                    label: " Tipo Medicamento",
                    name: "iidtipomedicamento",
                    type: "combobox",
                    data: rpta.listatipomedicamento,
                    id: "cboTipoMedicamentoFormulario",
                    propiedadmostrar: "nombre",
                    valuemostrar: "idtipomedicamento"

                },
                {
                    label: "Uso Medicamento",

                    class: "col-md-6",
                    name: "usomedicamento"
                }
            ],
            [
                {
                    label: "Contenido",

                    class: "col-md-12",
                    name: "contenido"
                }
            ]

        ]
	}
    pintar(objMedicamento, objBusqueda, objFormularioMedicamento)
}

//function listarCombos() {
   
        // llenarCombo(listalaboratorio, "cboLaboratorioBusqueda", "iidlaboratorio", "nombre", "-------Todos--------", "0")
        // llenarCombo(listalaboratorio, "cboLaboratorioGuardar", "iidlaboratorio", "nombre", "-------Todos--------", "0")
        //llenarCombo(rpta.listalaboratorio, ["cboLaboratorioGuardar"], "iidlaboratorio", "nombre", "-------Todos--------", "0")
        //llenarCombo(rpta.listatipomedicamento, ["cboTipoMedicamentoGuardar"], "idtipomedicamento",
        //    "nombre", "------Todos-------", "0")
       // llenarCombo(listatipomedicamento, "cboTipoMedicamentoBusqueda", "idtipomedicamento", "nombre", "------Todos-------", "0")
      //  llenarCombo(listatipomedicamento, "cboTipoMedicamentoGuardar", "idtipomedicamento", "nombre", "------Todos-------", "0")
        // alert(JSON.stringify(rpta));
       // alert(JSON.stringify(rpta.listalaboratorio));
       // alert(JSON.stringify(rpta.listatipomedicamento));
   
//}

//function BuscarDatos() {
//    var frBusqueda = document.getElementById("frmBusquedaMedicamento");
//    var frm = new FormData(frBusqueda)
//    fetchPost("Medicamento/filtrarMedicamento", "json", frm, function (res) {
//        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
//    })
//}

//function LimpiarMedicamento() {
//    LimpiarDatos("frmBusquedaMedicamento");
//}

//function GuardarDatos() {
//    var errores = ValidarDatos("frmGuardarMedicamento")
//    if (errores != "") {
//        Error(errores)
//        return;
//    }
//    Confirmacion(undefined, "Desea guardar el medicamento?", function () {
//        var formu = document.getElementById("frmGuardarMedicamento");
//        var frm = new FormData(formu);
//        fetchPost("Medicamento/guardarMedicamento", "text", frm, function (res) {
//            if (res == "1") {
//                Exito();
//                //listarLaboratorio();
//                listarDatos();
              
//            } else Error();
//        })
//    });
//}

//function Editar(id) {
//    LimpiarDatos("frmGuardarMedicamento");
//    //Nuevo
//    if (id != 0) {
//        recuperarGenerico("Medicamento/recuperarMedicamento/?iidmedicamento=" + id, "frmGuardarMedicamento")
//    }
    
//}
//function listarDatos() {
//    fetchGet("Medicamento/listarMedicamento", "json", function (rpta) {
//        document.getElementById("divContenedorTabla").innerHTML = generarTabla(rpta);
//        LimpiarDatos("frmGuardarLaboratorio")
//        document.getElementById("btnCerrarModal").click();
//    })
//}

//function Eliminar(id) {
//    Confirmacion(undefined, "Desea eliminar el medicamento?", function () {
//        fetchGet("Medicamento/eliminarMedicamento/?id=" + id, "text", function (data) {
//            if (data == "1") {
//                Exito("Se elimino correctamente");
//                listarDatos();
//                //listarLaboratorio();
//            } else Error();
//        })
//    });
//}