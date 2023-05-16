window.onload = function () {
    listarPagina();

}
var listarPagina;
var objGlobalPagina;
var objFormularioGlobalPagina;
function listarPagina() {

    objGlobalPagina = {
        url: "Pagina/listarPagina",
        cabeceras: ["Id Pagina", "Nombre Pagina", "Controller", "Accion"],
        propiedades: ["iidpagina", "mensaje", "controlador", "accion"],
        editar: true,
        eliminar: true,
        propiedadId: "iidpagina"
    }
    pintar(objGlobalPagina)
}

function Regresar() {
    document.getElementById("btnBotonNuevo").style.display = "block";
    pintar(objGlobalPagina)
}

async function Editar(id) {
    await NuevaPagina()
    recuperarGenerico("Pagina/recuperarPagina/?iidpagina=" + id, "frmGuardarPagina");
}

async function NuevaPagina() {
   

    document.getElementById("btnBotonNuevo").style.display = "none";
    objFormularioGlobalPagina = {
        type: "fieldset",
        legend: "Datos Pagina",
        idformulario: "frmGuardarPagina",
        urlguardar: "Pagina/guardarPagina",
        // urlrecuperar: "TipoMedicamento/recuperarTipomedicamento",
        // parametrorecuperar: "iidtipomedicamento",
        regresar: true,
        formulario: [
            [
                {
                    class: "col-md-6",
                    label: "Id Pagina",
                    name: "iidpagina",
                    readonly: true
                },
                {
                    class: "col-md-6",
                    label: "Mensaje",
                    name: "mensaje",
                    classControl: "ob"
                }
            ],
            [
                {
                    class: "col-md-6",
                    label: "Controlador",
                    name: "controlador",
                    classControl: "ob"
                },
                {
                    class: "col-md-6",
                    label: "Accion",
                    name: "accion",
                    classControl: "ob"
                }
            ],
           

        ]
    }
    pintar(null, null, objFormularioGlobalPagina);
}