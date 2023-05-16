window.onload = function () {
    listarPersonas();
   
}

var objGlobalPersona;
var objGlobalBusquedaPersona;
function listarPersonas() {
    objGlobalBusquedaPersona = {
        legend: "Filtrado Persona",
        idformulario: "frmBusqueda",
        url: "Persona/filtrarPersona",
        formulario: [
            //Fila
            [
                {
                    //div
                    class: "col-md-6",
                    label: "Nombre Completo",
                    name: "nombrecompleto"
                },
                {
                    class: "col-md-6",
                    label: "Nombre Sexo",
                    type: "radio",
                    //nuevas
                    labels: ["Masculino", "Femenino"],
                    values: ["1", "2"],
                    ids: ["rbMasculino", "rbFemenino"],
                    checked:"rbFemenino",
                    //
                    name:"iidsexo"
				}
            ]

        ]
	}
    objGlobalPersona = {
        url: "Persona/listarPersona",
        cabeceras: ["Id persona", "Nombre Completo", "Nombre Sexo","Telefono"],
        propiedades: ["iidpersona", "nombrecompleto", "nombresexo","numerotelefonico"],
        editar: true,
        eliminar: true,
        propiedadId: "iidpersona"
    }
    pintar(objGlobalPersona, objGlobalBusquedaPersona)
} 

function Regresar() {
    document.getElementById("btnBotonNuevo").style.display = "block";
     pintar(objGlobalPersona, objGlobalBusquedaPersona)
}

async function Editar(id) {
  await  NuevaPersona()
    recuperarGenerico("Persona/recuperarPersona/?iidpersona=" + id, "frmGuardarPersona");
}

var objFormularioPersonaGlobal;
var rpta;
var tipousuarios;
async function NuevaPersona() {
    rpta = await fetchGet("Sucursal/listarSucursal", "json", null, true)
    tipousuarios = await fetchGet("TipoUsuario/listarTipoUsuario", "json", null, true)
    document.getElementById("btnBotonNuevo").style.display = "none";
    objFormularioPersonaGlobal = {
        type: "fieldset",
        legend: "Datos tipo medicamento",
        idformulario: "frmGuardarPersona",
        urlguardar: "Persona/guardarPersona",
       // urlrecuperar: "TipoMedicamento/recuperarTipomedicamento",
       // parametrorecuperar: "iidtipomedicamento",
        regresar:true, 
        formulario: [
            [
                {
                    class: "col-md-6",
                    label: "Id Persona",
                    name: "iidpersona",
                    readonly: true
                },
                {
                    class: "col-md-6",
                    label: "Nombre",
                    name: "nombre",
                    classControl:"ob"
                }
            ],
            [
                {
                    class: "col-md-6",
                    label: "Apellido Paterno",
                    name: "appaterno",
                    classControl: "ob"
                },
                {
                    class: "col-md-6",
                    label: "Apellido Materno",
                    name: "apmaterno",
                    classControl: "ob"
                }
            ],
            [
                {
                    class: "col-md-6",
                    label: "Correo",
                    name: "correo",
                    classControl: "ob"
                },
                {
                    class: "col-md-6",
                    label: "Direccion",
                    type:"textarea",
                    name: "direccion",
                    classControl: "ob"
                }
            ],
            [
                {
                    class: "col-md-6",
                    label: "Nombre Sexo",
                    type: "radio",
                    //nuevas
                    labels: ["Masculino", "Femenino"],
                    values: ["1", "2"],
                    ids: ["rbMasculinoFormulario", "rbFemeninoFormulario"],
                    classControl: "ob-1",
                    //checked: "rbMasculinoFormulario",
                    //
                    name: "iidsexo"
                },
                {
                    class: "col-md-6",
                    label: "Numero Telefonico",
                    name: "numerotelefonico",
                    classControl: "ob"

                }
            ],
            [
                {
                    class: "col-md-6",
                    label: "Empleado",
                    type: "radio",
                    //nuevas
                    labels: ["Si", "No"],
                    values: ["1", "0"],
                    ids: ["rbEmpleado", "rbNoEmpleado"],
                    checked: "rbNoEmpleado",
                    //
                    name: "bempleado"

                },
                {
                    //div
                    class: "col-md-6",
                    label: "Sucursal",
                    name: "iidsucursal",
                    type: "combobox",
                    data: rpta,
                    id: "cboPersonaSucursal",
                    propiedadmostrar: "nombre",
                    valuemostrar: "iidsucursal",
                    visible: "bempleado==1",
                    classControl: "ob"
                }
            ],
            [
                {
                    class: "col-md-6",
                    
                    type: "checkbox",
                    //nuevas
                    labels: ["Tiene Usuario"],
                    values: ["1"],
                    ids: ["chkTieneUsuarioHabilitado"],
                    //
                    //checked: ["chkTieneUsuarioHabilitado"],
                    name: "btieneusuario"
                },
                {
                    class: "col-md-6",
                    label: "Nombre Usuario",
                    name: "nombreusuario",
                    classControl: "ob",
                    visible: "btieneusuario==true",
                    ocultar:true
                }


            ],
            [
                {
                    class: "col-md-6",
                    type: "password",
                    label: "Contraseña",
                    name: "contra",
                    classControl: "ob",
                    visible: "iidusuario==0 && btieneusuario==true",
                    ocultar: true
                },
                {
                    //div
                    class: "col-md-6",
                    label: "Tipo Usuario",
                    name: "iidtipousuario",
                    type: "combobox",
                    data: tipousuarios,
                    id: "cboPersonaTipoUsuario",
                    propiedadmostrar: "nombre",
                    valuemostrar: "iidtipousuario",
                    visible: "btieneusuario==true",
                    classControl: "ob"
                }
            ],
            [
               
                {
                    class: "col-md-6",
                    type: "text",
                    label: "Usuario",
                    name: "iidusuario",
                    value: "0",
                    ocultar: true

                }
            ],
          

        ]
	}
    pintar(null, null, objFormularioPersonaGlobal);
}

//function BuscarDatos() {
//    var frBusqueda = document.getElementById("frmBusqueda");
//    var frm = new FormData(frBusqueda)
//    fetchPost("Persona/filtrarPersona", "json", frm, function (res) {
//        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
//    })
//}