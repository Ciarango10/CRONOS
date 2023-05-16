window.onload = function () {
    listarTipoMedicamento();
   // validarKeyPress("frmGuardarTipoMedicamento")
}

function filtrarTipoMedicamento() {
    var nombre = get("txtnombrebusqueda")
    if (nombre == "") {
        listarTipoMedicamento();
    } else {
        //objGlobalTipoMedicamento.url = "TipoMedicamento/filtrarTipoMedicamento/?nombretipo=" + nombre
        //pintar(objGlobalTipoMedicamento);
        var urlBuscar = "TipoMedicamento/filtrarTipoMedicamento/?nombretipo=" + nombre
        fetchGet(urlBuscar, "json", function (res) {
            document.getElementById(objGlobalTipoMedicamento.divContenedorTabla).innerHTML = generarTabla(res);
            $("#" + objGlobalTipoMedicamento.idtabla).DataTable();

        })
    }
}
//outerHTML
var objGlobalTipoMedicamento;
var objFormularioTipoMedicamento;
   function listarTipoMedicamento() {
    objGlobalTipoMedicamento = {
        url: "TipoMedicamento/listarTipoMedicamento",
        cabeceras: ["Id tipo medicamento", "Descripcion", "Nombre"],
        propiedades: ["idtipomedicamento", "descripcion", "nombre"],
        editar: true,
        eliminar: true,
        propiedadId: "idtipomedicamento",
        urleliminar: "TipoMedicamento/eliminarTipoMedicamento",
        nombreparametroeliminar: "id",
        paginar:true
    }
    objFormularioTipoMedicamento = {
        type: "fieldset",
        legend: "Datos tipo medicamento",
        idformulario:"frmGuardarTipoMedicamento",
        urlguardar: "TipoMedicamento/GuardarDatos",
        urlrecuperar: "TipoMedicamento/recuperarTipomedicamento",
        parametrorecuperar: "iidtipomedicamento",
        pos: "bottom",
        posid:"divBusquedaForm",
        formulario: [
            [
                {
                    class: "col-md-6",
                    label: "Id tipo medicamento",
                    name: "idtipomedicamento",
                    readonly: true
                   
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
                    class: "col-md-12",
                    type:"textarea",
                    label: "Descripciòn",
                    name: "descripcion",
                    classControl:"ob max-200 min-5 slcenb"
				}
            ]

            ]
	}
    pintar(objGlobalTipoMedicamento, null, objFormularioTipoMedicamento) 
      
} 

//function Editar(id) {
//    recuperarGenerico("TipoMedicamento/recuperarTipomedicamento/?iidtipomedicamento=" + id,"frmGuardarTipoMedicamento")
//    //fetchGet("TipoMedicamento/recuperarTipomedicamento/?iidtipomedicamento=" + id, "json", function (data) {
//    //    setN("idtipomedicamento", data.idtipomedicamento)
//    //    setN("nombre", data.nombre)
//    //    setN("descripcion", data.descripcion)
//    //})
//}

//function LimpiarTipoMedicamento() {
//    LimpiarDatos("frmGuardarTipoMedicamento")
//}

//function GuardarDatos() {
//    //Valido los datos
//    //if (getN("nombre").trim() == "") {
//    //    Error("Debe ingresar el nombre del tipo medicamento");
//    //    return;
//    //}
//    //if (getN("descripcion").trim() == "") {
//    //    Error("Debe ingresar la descripcion del tipo medicamento");
//    //    return;
//    //}
//    var errores = ValidarDatos("frmGuardarTipoMedicamento")
//    if (errores != "") {
//        Error(errores)
//        return;
//    }
//    var frmGuardar = document.getElementById("frmGuardarTipoMedicamento");
//    var frm = new FormData(frmGuardar);
//    Confirmacion(undefined, undefined, function (rpta) {
//        fetchPost("TipoMedicamento/GuardarDatos", "text", frm, function (data) {
//            if (data == "1") {
//                Exito();
//                listarTipoMedicamento();
//                LimpiarDatos("frmGuardarTipoMedicamento")
//            } else Error();
//        })
//    })
    
//}
//function Eliminar(id) {
//    Confirmacion(undefined, "Desea eliminar el tipo medicamento?", function () {
//        fetchGet("TipoMedicamento/eliminarTipoMedicamento/?id=" + id, "text", function (data) {
//            if (data == "1") {
//                Exito("Se elimino correctamente");
//                listarTipoMedicamento();
//            } else Error();
//        })
//    });
//}