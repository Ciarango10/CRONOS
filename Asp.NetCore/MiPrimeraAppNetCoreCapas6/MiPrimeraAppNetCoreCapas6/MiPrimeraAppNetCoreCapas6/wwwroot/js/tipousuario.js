window.onload = function () {
    listarTipoUsuario();
}

var objTipoUsuario;
var objBusqueda;
function listarTipoUsuario() {
    document.getElementById("btnBotonNuevo").style.display = "block";
    objBusqueda = {
        legend: "Busqueda de Tipo Usuario",
        idformulario: "frmBusqueda",
        url: "TipoUsuario/filtrarTipoUsuario",
        formulario: [
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Nombre Tipo usuario",
                    name: "nombre",
                    type: "text"



                },
                {
                    //div
                    class: "col-md-6",
                    label: "Descripcion Tipo usuario",
                    name: "descripcion",
                    type: "text"



                }
            ]

        ]
    }
    objTipoUsuario = {
       
        url: "TipoUsuario/listarTipoUsuario",
        cabeceras: ["Id Tipo usuario", "Nombre", "Descripcion"],
        propiedades: ["iidtipousuario", "nombre", "descripcion"],
        editar: true,
        eliminar: true,
        propiedadId: "iidtipousuario"

    }
    pintar(objTipoUsuario, objBusqueda)
}

async function Editar(id) {
  await  NuevoTipoUsuario()
    recuperarGenerico("TipoUsuario/recuperarTipoUsuario/?iidtipousuario=" + id, "frmGuardarTipoUsuario");
}

function Regresar() {
    document.getElementById("btnBotonNuevo").style.display = "block";
    pintar(objTipoUsuario, objBusqueda)
}

var objFormularioTipo;
var rpta;
async function NuevoTipoUsuario() {
    rpta = await fetchGet("Pagina/listarPagina", "json", null, true)
    document.getElementById("btnBotonNuevo").style.display = "none";
    objFormularioTipo = {
        type: "fieldset",
        legend: "Datos tipo usuario",
        idformulario: "frmGuardarTipoUsuario",
        regresar: true,
        urlguardar: "TipoUsuario/guardarTipoUsuario",
        formulario: [
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Id  Tipo usuario",
                    name: "iidtipousuario",
                    type: "text",
                    readonly: true,
                    value: "0",
                    visible:"iidtipousuario==0"



                },
                {
                    //div
                    class: "col-md-6",
                    label: "Nombre Tipo usuario",
                    name: "nombre",
                    type: "text"



                }
            ],
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Descripcion Tipo usuario",
                    name: "descripcion",
                    type: "text"



                }
            ],
            [
                {
                    type: "list",
                    cabeceras: ["Id Pagina","Mensaje"],
                    propiedades: ["iidpagina","mensaje"],
                    propiedadId: "iidpagina",
                    data: rpta,
                    check:true,
                    //checks
                    name:"iidpaginas"
				}
            ]
        ]
    }
    pintar(null, null, objFormularioTipo)
}