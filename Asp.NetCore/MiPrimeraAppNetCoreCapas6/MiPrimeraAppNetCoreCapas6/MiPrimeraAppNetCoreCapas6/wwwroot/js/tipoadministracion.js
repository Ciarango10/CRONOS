window.onload = function () {
    listarTipoAdministracion();
}

var objTipoAdministracion;
var objTipoAdministracionBusqueda;
function listarTipoAdministracion() {
    objTipoAdministracionBusqueda = {
        legend: "Filtrado Tipo Administracion",
        idformulario: "frmBusqueda",
        url: "TipoAdministracion/filtrarTipoAdministracion",
        formulario: [
            //Fila
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Nombre",
                    name: "nombre"
                },
                {
                    class: "col-md-6",
                    label: "Estado",
                    type: "checkbox",
                    //nuevas
                    labels: ["Habilitado", "Deshabilitado"],
                    values: ["1", "0"],
                    ids: ["chkHabilitado", "chkDeshabilitado"],
                    checked: ["chkHabilitado","chkDeshabilitado"],
                    //
                    name: "estado"
                }
            ]

        ]
    }
    objTipoAdministracion = {
        type: "edit",
        agregar:true,
        urlguardar: "TipoAdministracion/guardarTipoAdministracion",
        urleliminar: "TipoAdministracion/eliminarTipoAdministracion",
        confirmacioneliminar:"Desea eliminar el tipo administracion?",
        nombreparametroeliminar:"id",
        columnreadonly: ["iidtipoadministracion"],
        url: "TipoAdministracion/listarTipoAdministracion",
        cabeceras: ["Id Tipo Administracion", "Nombre", "Descripcion"],
        propiedades: ["iidtipoadministracion", "nombre", "descripcion"],
        eliminar: true,
        propiedadId:"iidtipoadministracion"
    }
    pintar(objTipoAdministracion, objTipoAdministracionBusqueda)
}

//function BuscarDatos() {
//    var frBusqueda = document.getElementById("frmBusqueda");
//    var frm = new FormData(frBusqueda)
//    fetchPost("TipoAdministracion/filtrarTipoAdministracion", "json", frm, function (res) {
//        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
//    })
//}

//function Eliminar(id) {
//    Confirmacion(undefined, "Desea eliminar el tipo medicamento?", function () {
//        fetchGet("TipoAdministracion/eliminarTipoAdministracion/?id=" + id, "text", function (data) {
//            if (data == "1") {
//                Exito("Se elimino correctamente");
//                listarTipoAdministracion();
//            } else Error();
//        })
//    });
//}

