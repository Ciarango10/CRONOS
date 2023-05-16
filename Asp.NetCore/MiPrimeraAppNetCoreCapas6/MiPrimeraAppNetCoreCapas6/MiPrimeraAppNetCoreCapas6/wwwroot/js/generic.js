function get(idcontrol) {
    return document.getElementById(idcontrol).value;
}


//function previewImage(idfupfoto, idimagen) {
//    var fupFoto = document.getElementById(idfupfoto);
//    var imgFoto = document.getElementById(idimagen);
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

function getI(idcontrol) {
    return document.getElementById(idcontrol).innerHTML;
}


function set(idcontrol, valor) {
    if (document.getElementById(idcontrol))
    document.getElementById(idcontrol).value = valor;
}




function setI(idcontrol, valor) {
    if (document.getElementById(idcontrol))
        document.getElementById(idcontrol).innerHTML = valor;
}

function setC(selector, valor = true) {
    if (document.querySelector(selector))
    document.querySelector(selector).checked = valor;
}

function setN(namecontrol, valor, idformulario) {
    if (idformulario == undefined) {
        document.getElementsByName(namecontrol)[0].value = valor;
    }
    else {
        document.querySelector("#" + idformulario + " [name='" + namecontrol + "']").value = valor;
    }

}

function setSRC(namecontrol, valor, idformulario) {
    if (idformulario == undefined) {
        document.getElementsByName(namecontrol)[0].src = valor;
    }
    else {
        document.querySelector("#" + idformulario + " [name='" + namecontrol + "']").src = valor;
    }

}

function recuperarGenerico(url, idformulario) {
    //Todos los elementos
    var elementosName = document.querySelectorAll("#" + idformulario + " [name]");
    var nombrename;
    fetchGet(url, "json", function (data) {
        for (var i = 0; i < elementosName.length; i++) {
            nombrename = elementosName[i].name;
            //CONDICIONES (type text / textarea / combos)
            if ((elementosName[i].type != undefined && elementosName[i].type == "text")
                || elementosName[i].tagName.toUpperCase() == "TEXTAREA" ||
                elementosName[i].tagName.toUpperCase() == "SELECT" || elementosName[i].type == "number") {

                setN(nombrename, data[nombrename], idformulario)
            } else if (elementosName[i].tagName.toUpperCase() == "IMG") {
                setSRC(nombrename, data[nombrename], idformulario)
            } else if (elementosName[i].type != undefined && elementosName[i].type == "radio") {
                setC("#" + idformulario + " [type='radio'][name='" + nombrename + "'][value='" + data[nombrename] + "']")
            } else if (elementosName[i].type != undefined && elementosName[i].type == "checkbox") {
                var name = nombrename.replace("[]", "");
                //[1,2,3]
                var valores = data[name]
                //array(Varios check)
                if (typeof (valores) == "object") {
                    var valor;
                    for (var j = 0; j < valores.length; j++) {
                        valor = valores[j];
                        setC("#" + idformulario + " [type='checkbox'][name='" + nombrename + "'][value='" + valor + "']")
                    }
                } else {
                    //string o entero (Hay un solo check)
                    setC("#" + idformulario + " [type='checkbox'][name='" + nombrename + "'][value='" + valores + "']")
				}
              
                
              

			}

        }
        configurarMostrarOcultar()
    });
}

function validarKeyPress(idformulario) {

    //Recorrimos todos los controles
    var elementosNames = document.querySelectorAll("#" + idformulario + " [name]");
    var control, nombreclases, clases, cantidad;
    var resultado;
    for (var i = 0; i < elementosNames.length; i++) {
        control = elementosNames[i];
        control.onkeypress = function (e) {
            
            //form-control ob (Sacamos su clase completa)

            nombreclases = e.target.className;
            //["form-control","ob"]
            clases = nombreclases.split(" ");
            //Solo letras
            resultado = clases.filter(p => p == "sl")
            if (resultado.length > 0) {
               
                    //alert(String.fromCharCode(e.keyCode))
                    //alert(e.target.value)
                    var cadena = e.target.value + String.fromCharCode(e.keyCode)
                    //alert(cadena)
                    if (!/^[a-zA-Z]+$/.test(cadena)) {
                        e.preventDefault();
                    }
                    //if (String.fromCharCode(e.keyCode) == "5") {
                    //    e.preventDefault();
                    //}
                
            }
            //Letras con espacio en blanco
            resultado = clases.filter(p => p == "slcenb")
            if (resultado.length > 0) {
               
                    var cadena = e.target.value + String.fromCharCode(e.keyCode)
                    if (!/^[a-zA-Z ]+$/.test(cadena)) {
                        e.preventDefault();
                    }
                
            }
            //Solo numeros
            resultado = clases.filter(p => p == "sn")
            if (resultado.length > 0) {
                
                    var cadena = e.target.value + String.fromCharCode(e.keyCode)
                    if (!/^[0-9]+$/.test(cadena)) {
                        e.preventDefault();
                    }
                
            }
            //Solo numeros , letras y espacios en blanco
            resultado = clases.filter(p => p == "snslcenb")
            if (resultado.length > 0) {
                
                    var cadena = e.target.value + String.fromCharCode(e.keyCode)
                    if (!/^[a-zA-Z0-9(),;: ]+$/.test(cadena)) {
                        e.preventDefault();
                    }
                
            }
            resultado = clases.filter(p => p.includes("max-"))
            if (resultado.length > 0) {
                //max-100
                var nombreClaseConMax = resultado[0]
                //"100"
               
                    var valorMaximo = nombreClaseConMax.replace("max-", "") * 1
                    var cadena = e.target.value + String.fromCharCode(e.keyCode)
                    // var longitudTexto = control.value.length
                    var longitudTexto = cadena.length;
                    if (longitudTexto > valorMaximo) {
                        e.preventDefault();
                    }
                

            }
		}
       
    }
}



function ValidarDatos(idformulario) {
    var error = "";

    //Buscar las validaciones(ob-) ->type radio
    var contenedorchecks = document.querySelectorAll("#" + idformulario + " [class*='ob-']")
    var contenedor;
    for (var i = 0; i < contenedorchecks.length; i++) {
        contenedor = contenedorchecks[i];
        var numero = contenedor.className.replace("ob-", "") * 1;
        var marcados = 0;
        var hijos = contenedor.children;
        var hijo;
        for (var j = 0; j < hijos.length; j++) {
            hijo = hijos[j];
            if (hijo.type == "radio" && hijo.checked == true) marcados++;
        }
        if (marcados == 0) {
            error = "Debe seleccionar un valor";
            return error;
		}
	}
    //Recorrimos todos los controles
    var elementosNames = document.querySelectorAll("#" + idformulario + " [name]");
    var control, nombreclases, clases, cantidad;
    var resultado;
    for (var i = 0; i < elementosNames.length; i++) {
        control = elementosNames[i];
        //form-control ob (Sacamos su clase completa)
        if (control.parentNode.style.display != "none") {
            nombreclases = control.className;
            //["form-control","ob"]
            clases = nombreclases.split(" ");
            //Obligatorios
            resultado = clases.filter(p => p == "ob")
            if (resultado.length > 0) {
                if (control.tagName.toUpperCase() == "INPUT" || control.tagName.toUpperCase() == "TEXTAREA") {
                    if (control.value.trim() == "") {
                        error = "Debe ingresar el campo " + control.name;
                        return error;
                    }
                } else if (control.tagName.toUpperCase() == "SELECT") {
                    if (control.selectedIndex == 0) {
                        error = "Debe ingresar el campo " + control.name;
                        return error;
                    }
                } else if (control.tagName.toUpperCase() == "IMG") {
                    if (control.src == "" || control.src == window.location.href) {
                        error = "Debe ingresar la imagen ";
                        return error;
                    }
                }

            }
            //Maximo
            resultado = clases.filter(p => p.includes("max-"))
            if (resultado.length > 0) {
                //max-100
                var nombreClaseConMax = resultado[0]
                //"100"
                var valorMaximo = nombreClaseConMax.replace("max-", "") * 1
                var longitudTexto = control.value.length
                if (longitudTexto > valorMaximo) {
                    error = "El campo  " + control.name + " su longitud maxima es " + valorMaximo +
                        " y usted a escrito una cadena con longitud " + longitudTexto;
                    return error;
                }
            }
            //Minimo
            resultado = clases.filter(p => p.includes("min-"))
            if (resultado.length > 0) {
                //max-100
                var nombreClaseConMin = resultado[0]
                //"100"
                var valorMinimo = nombreClaseConMin.replace("min-", "") * 1
                var longitudTexto = control.value.length
                if (longitudTexto < valorMinimo) {
                    error = "El campo  " + control.name + " su longitud minima es " + valorMinimo +
                        " y usted a escrito una cadena con longitud " + longitudTexto;
                    return error;
                }
            }
            //Solo letras
            resultado = clases.filter(p => p == "sl")
            if (resultado.length > 0) {
                if (!/^[a-zA-ZÀ-ÿ]+$/.test(control.value)) {
                    error = "El campo " + control.name + " solo debe tener letras minusculas o mayusculas ";
                    return error
                }
            }
            //Solo letras con espacio
            resultado = clases.filter(p => p == "slcenb")
            if (resultado.length > 0) {
                if (!/^[a-zA-ZÀ-ÿ,; ]+$/.test(control.value)) {
                    error = "El campo " + control.name + " solo debe tener letras minusculas , mayusculas o espacio en blanco ";
                    return error
                }
            }
            //Solo numeros
            resultado = clases.filter(p => p == "sn")
            if (resultado.length > 0) {
                if (!/^[0-9]+$/.test(control.value)) {
                    error = "El campo " + control.name + " solo debe tener numeros del 0 al 9 ";
                    return error
                }
            }
            //Solo numeros , letras y espacios en blanco
            resultado = clases.filter(p => p == "snslcenb")
            if (resultado.length > 0) {
                if (!/^[a-zA-Z0-9À-ÿ,;(): ]+$/.test(control.value)) {
                    error = "El campo " + control.name + " solo debe tener numeros , letras o espacios en blanco ";
                    return error
                }
            }
        }
    }
    return error;
}

function getN(namecontrol) {
    return document.getElementsByName(namecontrol)[0].value
}

function Error(titulo = "Error", texto = "Ocurrio un error") {
    if (titulo != "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.")
    Swal.fire({
        icon: 'error',
        title: titulo,
        text: texto
    })
}

function Confirmacion(titulo = "Confirmacion", texto = "Desea guardar los cambios?", callback) {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    })
}

function Exito(titulo = "Se guardo correctamente") {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: titulo,
        showConfirmButton: false,
        timer: 1500
    })
}

function LimpiarDatos(idformulario) {
    var elementosName = document.querySelectorAll("#" + idformulario + " [name]");
    var elementoActual;
    var elementoName;
    for (var i = 0; i < elementosName.length; i++) {
        elementoActual = elementosName[i]
        elementoName = elementoActual.name;
        //Combo
        if (elementoActual.tagName.toUpperCase() == "SELECT") {
            document.getElementById(elementoActual.id).selectedIndex = 0;
        }
        else if (elementoActual.tagName.toUpperCase() == "IMG") {
            setSRC(elementoName, "", idformulario)
        }
        else if ((elementoActual.tagName.toUpperCase() == "INPUT" && elementoActual.type.toUpperCase() != "RADIO")
            || (elementoActual.tagName.toUpperCase() == "TEXTAREA")) {
            //INPUE
            setN(elementoName, "", idformulario);
        }

    }
    //Radio Button (Selector CSS)
    var radios = document.querySelectorAll("#" + idformulario + " [type*='radio']");
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    //CheckBox
    var checboks = document.querySelectorAll("#" + idformulario + " [type*='checkbox']");
    for (var i = 0; i < checboks.length; i++) {
        checboks[i].checked = false;
    }
    for (var i = 0; i < idradios.length; i++) {
        if (document.getElementById(idradios[i]))
            document.getElementById(idradios[i]).checked = true;
    }
}

function setURL(url) {
    var raiz = document.getElementById("hdfOculto").value;
    //http://localhost........
    var urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz
        + url

    return urlCompleta;
}

async function fetchGet(url, tiporespuesta, callback, retorno = false) {
    document.getElementById("divLoading").style.display = "block";
    try {
        var raiz = document.getElementById("hdfOculto").value;
        //http://localhost........
        var urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz
            + url
        var res = await fetch(urlCompleta)
        if (tiporespuesta == "json")
            res = await res.json();
        else if (tiporespuesta == "text")
            res = await res.text();
        //JSON (Object)

        document.getElementById("divLoading").style.display = "none";
        if (retorno == false || retorno == null)
            callback(res)
        else
            return res;
    } catch (e) {
        alert("Ocurrion un error");
        console.log(e)
        document.getElementById("divLoading").style.display = "none";
    }
}
//[{"iidlaboratorio":1,"nombre":"SynLab","direccion":null,"personacontacto":null}
//, { "iidlaboratorio": 2, "nombre": "Multilab", "direccion": null, "personacontacto": null }, { "iidlaboratorio": 3, "nombre": "Suiza Lab", "direccion": null, "personacontacto": null }]
function llenarCombo(data, idcontrol, propiedadId, propiedadNombre, textoprimeraopcion = "--Seleccione--", valueprimeraopcion = "") {

    var contenido = "";
    var objActual;

    contenido += "<option value='" + valueprimeraopcion + "'>" + textoprimeraopcion + "</option>"
    for (var i = 0; i < data.length; i++) {
        objActual = data[i];
        contenido += "<option value='" + objActual[propiedadId] + "'>" + objActual[propiedadNombre] + "</option>"
    }
    if (typeof (idcontrol) == "string")
        setI(idcontrol, contenido)
    else {
        for (var j = 0; j < idcontrol.length; j++) {
            setI(idcontrol[j], contenido);
        }
    }
    //document.getElementById(idcontrol).innerHTML = contenido;
}

async function fetchPost(url, tiporespuesta, frm, callback) {
    try {
        var raiz = document.getElementById("hdfOculto").value;
        document.getElementById("divLoading").style.display = "block";
        //http://localhost........
        var urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz + url
        var res = await fetch(urlCompleta, {
            method: "POST",
            body: frm
        });
        if (tiporespuesta == "json")
            res = await res.json();
        else if (tiporespuesta == "text")
            res = await res.text();
        //JSON (Object)
        callback(res)
        document.getElementById("divLoading").style.display = "none";

    } catch (e) {
        console.log(e)
        alert("Ocurrion un error");
        document.getElementById("divLoading").style.display = "none";
    }
}

function EliminarFila(btn) {
    var fila = btn.parentNode.parentNode;
    var tbody = fila.parentNode;
    tbody.removeChild(fila)
}

function AgregarFila(tabla) {
    //Array
    var propiedadesTabla = objConfiguracionGlobal.propiedades;
    //Obj
    var elementotabla = document.getElementById(tabla);
    var columnaReadOnly = objConfiguracionGlobal.columnreadonly;
    var objtbody = document.getElementById("tbody" + tabla);
    var propiedadActual;
    var contenido = "<tr>";
    for (var i = 0; i < propiedadesTabla.length; i++) {
        propiedadActual = propiedadesTabla[i];
        contenido += "<td ondblclick='clickcelda(this)'>";
        contenido += `<input ${columnaReadOnly.includes(propiedadActual) ? 'readonly' : ''} class='form-control' type='text' />`
        contenido += "</td>";
    }
    contenido += `<td>
         <button class='btn btn-danger' onclick='EliminarFila(this)'>Eliminar</button>
         <button class='btn btn-success' onclick="GuardarElementos(this)">Guardar</button>
         </td>`
    contenido += "</tr>";
    objtbody.insertAdjacentHTML("beforeend", contenido);
}

//{url:"",columnas:[],propiedades:[]}

var objConfiguracionGlobal;
var objBusquedaGlobal;
var objFormularioGlobal;
function pintar(objConfiguracion, objBusqueda, objFormulario) {

    var contenido = "";


    if (objConfiguracion != null) {
        if (objConfiguracion.divContenedorTabla == undefined)
            objConfiguracion.divContenedorTabla = "divContenedorTabla"
        if (objConfiguracion.divPintado == undefined)
            objConfiguracion.divPintado = "divTabla"
        if (objConfiguracion.editar == undefined)
            objConfiguracion.editar = false
        if (objConfiguracion.eliminar == undefined)
            objConfiguracion.eliminar = false
        if (objConfiguracion.propiedadId == undefined)
            objConfiguracion.propiedadId = ""
        if (objConfiguracion.popup == undefined)
            objConfiguracion.popup = false
        if (objConfiguracion.type == undefined)
            objConfiguracion.type = ""
        if (objConfiguracion.columnreadonly == undefined)
            objConfiguracion.columnreadonly = []
        if (objConfiguracion.agregar == undefined)
            objConfiguracion.agregar = false
        if (objConfiguracion.idtabla == undefined)
            objConfiguracion.idtabla = "tabla"
    }


    if (objFormulario != undefined && objFormulario.type == undefined)
        objFormulario.type = "fieldset"
    if (objFormulario != undefined && objFormulario.type == "popup") {
        contenido += `<button onclick="EditarGenerico(0)" type="button" class="btn btn-primary"
                           data-bs-toggle="modal" data-bs-target="#${objConfiguracion.popupId}">
            Nuevo
                         </button>`
        contenido += `
<div class="modal fade" id="${objConfiguracion.popupId}" 
        data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="lbltitulo"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">`;

        contenido += ConstruirFormulario(objFormulario)

        contenido += `
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="btnCerrarModal" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="GuardarGenericoFormulario('${objFormulario.idformulario}','popup')">Guardar</button>
      </div>
    </div>
  </div>
</div>
            `
    }
    //Este es su lugar
    //agregar
    objConfiguracionGlobal = objConfiguracion;
    objBusquedaGlobal = objBusqueda;
    objFormularioGlobal = objFormulario;
    //Configuraciòn
    if (objConfiguracion != null && objConfiguracion.agregar == true) {
        contenido += `<button onclick="AgregarFila('${objConfiguracion.idtabla}')" type="button" class="btn btn-primary" >
                      Agregar
                    </button>`
    }
    if (objConfiguracion != null && objConfiguracion.nuevo == true && objConfiguracion.popup == true) {
        contenido += `<button onclick="CallbackEditar(0)" type="button" class="btn btn-primary" data-bs-toggle="modal" 
                      data-bs-target="#${objConfiguracion.popupId}">
                      Nuevo
                    </button>`
    }

    if (objFormulario != undefined && objFormulario.type == "fieldset") {
        if (objFormulario.pos != undefined && objFormulario.pos == "top") {
            //outerHTML
            var contenidoDatos = document.getElementById(objFormulario.posid).outerHTML;
            contenido += contenidoDatos;
            document.getElementById(objFormulario.posid).outerHTML = "";
        }
        contenido += ConstruirFormulario(objFormulario, "registro")
        if (objFormulario.pos != undefined && objFormulario.pos == "bottom") {
            var contenidoDatos = document.getElementById(objFormulario.posid).outerHTML;
            contenido += contenidoDatos;
            document.getElementById(objFormulario.posid).outerHTML = "";
        }
    }

    if (objBusqueda != null && objBusqueda != undefined) {
        if (objBusqueda.pos != undefined && objBusqueda.pos == "top") {
            //outerHTML
            var contenidoDatos = document.getElementById(objBusqueda.posid).outerHTML;
            contenido += contenidoDatos;
            document.getElementById(objBusqueda.posid).outerHTML = "";
        }
        contenido += ConstruirFormulario(objBusqueda, "busqueda")
        if (objBusqueda.pos != undefined && objBusqueda.pos == "bottom") {
            var contenidoDatos = document.getElementById(objBusqueda.posid).outerHTML;
            contenido += contenidoDatos;
            document.getElementById(objBusqueda.posid).outerHTML = "";
        }
    }
    if (objConfiguracion != null) {
        fetchGet(objConfiguracion.url, "json", function (res) {


            contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>";
            //........................................................
            contenido += generarTabla(res)
            contenido += "</div>";
            //Pinta los controles en pantalla
            setI(objConfiguracion.divPintado, contenido)

            if (objConfiguracion.paginar == true) {
                $("#" + objConfiguracion.idtabla).DataTable();
			}
            //Pintado
            var objeto;
            for (var j = 0; j < objBusquedaCombos.length; j++) {
                objeto = objBusquedaCombos[j]
                llenarCombo(objeto.data, objeto.id, objeto.valuemostrar, objeto.propiedadmostrar, "-------Todos--------", "0")
            }
            if (objFormulario!=null)
            validarKeyPress(objFormulario.idformulario)
            /////////
            

            //  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido;
        })
    } else {
        if (objFormulario.divPintado == undefined) objFormulario.divPintado = "divTabla";
        setI(objFormulario.divPintado, contenido)

        var objeto;
        for (var j = 0; j < objBusquedaCombos.length; j++) {
            objeto = objBusquedaCombos[j]
            llenarCombo(objeto.data, objeto.id, objeto.valuemostrar, objeto.propiedadmostrar, "-------Todos--------", "0")
        }
    }

    configurarMostrarOcultar()



}

function configurarMostrarOcultar() {
    //data-visible
    var elementos = document.querySelectorAll("[data-visible]");
    var elemento;
    for (var i = 0; i < elementos.length; i++) {
        //objeto
        elemento = elementos[i];
        var objAtributoCadena = elemento.getAttribute("data-visible");
        var objAtributoObjeto = JSON.parse(objAtributoCadena)
        var elementosobjeto;
        if (document.getElementsByName(objAtributoObjeto.proppropiedadName).length>0)
         elementosobjeto = document.querySelectorAll("#" + objAtributoObjeto.propidformulario +
             " [name='" + objAtributoObjeto.proppropiedadName + "']")
        else
            elementosobjeto = document.querySelectorAll("#" + objAtributoObjeto.propidformulario +
                " [name='" + objAtributoObjeto.proppropiedadName + "[]" + "']")

        var longitud = elemento.getAttribute("data-longitud") * 1;
        var operadorBoolIniciar;

        for (var g = 0; g < longitud; g++) {
            var propiedadAfecta = elemento.getAttribute(g == 0 ? "data-ocultarmultiple" : "data-ocultarmultiple"+g);
            var valor;
            if (document.getElementsByName(propiedadAfecta).length > 0) {
                var tipo = document.getElementsByName(propiedadAfecta)[0].type;
                //true o false
                if (tipo == "checkbox") valor = document.getElementsByName(propiedadAfecta)[0].checked.toString();
                //radio 
                else if (tipo == "radio") valor = [...document.getElementsByName(propiedadAfecta)].filter(p => p.checked == true)[0].value;
                else if (tipo == "text") valor = document.getElementsByName(propiedadAfecta)[0].value;
            } else {
                var tipo = document.getElementsByName(propiedadAfecta + "[]")[0].type;
                //true o false
                if (tipo == "checkbox") valor = document.getElementsByName(propiedadAfecta + "[]")[0].checked.toString();
                //radio 
                else if (tipo == "radio")
                    valor = [...document.getElementsByName(propiedadAfecta + "[]")].filter(p => p.checked == true)[0].value;
                else if (tipo == "text") valor = document.getElementsByName(propiedadAfecta + "[]")[0].value;

            }
              var valorOperador = objAtributoObjeto.propoperador;
        if (valorOperador == "==") operadorBoolIniciar = (valor == objAtributoObjeto.propvalor)
        else if (valorOperador == ">") operadorBoolIniciar = (valor > objAtributoObjeto.propvalor)
        else if (valorOperador == ">=") operadorBoolIniciar = (valor >= objAtributoObjeto.propvalor)
        else if (valorOperador == "<") operadorBoolIniciar = (valor < objAtributoObjeto.propvalor)
        else if (valorOperador == "<=") operadorBoolIniciar = (valor <= objAtributoObjeto.propvalor)
            else operadorBoolIniciar = (valor == objAtributoObjeto.propvalor)
            if (operadorBoolIniciar == false) break;
		}
       
        //Apenas cargue vamos a ser esta validaciòn
        //var d = document.getElementById(objAtributoObjeto.propidformulario);
        //var frm = new FormData(d);
      /*  for (var objeto of frm.entries()) {*/
          /*  if (objeto[0] == objAtributoObjeto.proppropiedadName) {*/
                //block (dinamico)
              


                if (operadorBoolIniciar) {
                    document.querySelector("#" + objAtributoObjeto.propidformulario +
                        " [name='" + objAtributoObjeto.propname + "']").parentNode.style.display = "block"
                }
                //none
                else {
                    document.querySelector("#" + objAtributoObjeto.propidformulario +
                        " [name='" + objAtributoObjeto.propname + "']").parentNode.style.display = "none"
                }
          /*  }*/
            //Name
            //console.log(objeto[0])
            //Valor
      //      console.log(objeto[1])
      /*  }*/
        var elementoObjeto;
        for (var j = 0; j < elementosobjeto.length; j++) {
            elementoObjeto = elementosobjeto[j];
            elementoObjeto.setAttribute("data-valorcamporar", objAtributoObjeto.propvalor)
            elementoObjeto.setAttribute("data-controlocultar", objAtributoObjeto.propname)
            elementoObjeto.setAttribute("data-idformulario", objAtributoObjeto.propidformulario)
            elementoObjeto.setAttribute("data-operador", objAtributoObjeto.propoperador)

            console.log(elementoObjeto)
            var evento = "";
            if (elementoObjeto.type == "radio") evento = "change"
            else if (elementoObjeto.type == "select-one") evento = "change"
            else if (elementoObjeto.type == "text") evento = "keyup"
            else if (elementoObjeto.type == "checkbox") evento = "change"
            else evento = "keyup"
            //Evento
            elementoObjeto.addEventListener(evento, function () {

                var elementos = document.querySelectorAll("[data-visible]");
                var elemento;
                for (var i = 0; i < elementos.length; i++) {
                    elemento = elementos[i];
                    //No se muestra
                    operadorBoolIniciar = false;
                    var longitud = elemento.getAttribute("data-longitud") * 1;
                    //Recorremos a ver si encontramos
                    for (var z = 0; z < longitud; z++) {
                        var indice = (z == 0) ? "" : z;
                        var objAtributoCadena = elemento.getAttribute("data-visible" + indice);
                        var objAtributoObjeto = JSON.parse(objAtributoCadena)
                        //if (objAtributoObjeto.proppropiedadName ==this.name.replace("[]","")) {
                        var elementosobjeto;
                        if (document.getElementsByName(objAtributoObjeto.proppropiedadName).length > 0)
                            elementosobjeto = document.querySelectorAll("#" + objAtributoObjeto.propidformulario +
                                " [name='" + objAtributoObjeto.proppropiedadName + "']")
                        else
                            elementosobjeto = document.querySelectorAll("#" + objAtributoObjeto.propidformulario +
                                " [name='" + objAtributoObjeto.proppropiedadName + "[]" + "']")

                        var operadorBoolIniciar;
                        //for (var g = 0; g < longitud; g++) {
                        var propiedadAfecta = elemento.getAttribute(z == 0 ? "data-ocultarmultiple" : "data-ocultarmultiple" + z).replace(" ", "");
                        var valor;
                        if (document.getElementsByName(propiedadAfecta).length > 0) {
                            var tipo = document.getElementsByName(propiedadAfecta)[0].type;
                            //true o false
                            if (tipo == "checkbox") valor = document.getElementsByName(propiedadAfecta)[0].checked.toString();
                            //radio 
                            else if (tipo == "radio") valor = [...document.getElementsByName(propiedadAfecta)].filter(p => p.checked == true)[0].value;
                            else if (tipo == "text") valor = document.getElementsByName(propiedadAfecta)[0].value;
                        } else {
                            var tipo = document.getElementsByName(propiedadAfecta + "[]")[0].type;
                            //true o false
                            if (tipo == "checkbox") valor = document.getElementsByName(propiedadAfecta + "[]")[0].checked.toString();
                            //radio 
                            else if (tipo == "radio")
                                valor = [...document.getElementsByName(propiedadAfecta + "[]")].filter(p => p.checked == true)[0].value;
                            else if (tipo == "text") valor = document.getElementsByName(propiedadAfecta + "[]")[0].value;

                        }
                        var valorOperador = objAtributoObjeto.propoperador;
                        if (valorOperador == "==") operadorBoolIniciar = (valor == objAtributoObjeto.propvalor.replace(" ", ""))
                        else if (valorOperador == ">") operadorBoolIniciar = (valor > objAtributoObjeto.propvalor.replace(" ", ""))
                        else if (valorOperador == ">=") operadorBoolIniciar = (valor >= objAtributoObjeto.propvalor.replace(" ", ""))
                        else if (valorOperador == "<") operadorBoolIniciar = (valor < objAtributoObjeto.propvalor.replace(" ", ""))
                        else if (valorOperador == "<=") operadorBoolIniciar = (valor <= objAtributoObjeto.propvalor.replace(" ", ""))
                        else operadorBoolIniciar = (valor == objAtributoObjeto.propvalor)
                        if (operadorBoolIniciar == false) break;
                        //}
                        /*}*/

                    }

                    if (operadorBoolIniciar) {
                        document.querySelector("#" + objAtributoObjeto.propidformulario +
                            " [name='" + objAtributoObjeto.propname + "']").parentNode.style.display = "block"
                    }
                    //none
                    else {
                        document.querySelector("#" + objAtributoObjeto.propidformulario +
                            " [name='" + objAtributoObjeto.propname + "']").parentNode.style.display = "none"
                    }
                }

            })
            //     elementoObjeto.onchange = function () {

            //}
            //     elementoObjeto.onkeyup = function () {

            //}

        }
        console.log(objAtributoCadena)
        console.log(objAtributoObjeto)
        console.log(elementosobjeto)
    }
}


function clickcelda(td) {
    var valor = td.getAttribute("data-valor");
    td.innerHTML = "";
    td.insertAdjacentHTML("beforeend", `
     <input class='form-control' value='${valor}' />
     `)

    var trfila = td.parentNode;
    var tdultimo = trfila.lastChild;
    tdultimo.setAttribute("data-botones", tdultimo.innerHTML);
    tdultimo.innerHTML = "";
    // if (tdultimo.children.length == 0) {
    tdultimo.insertAdjacentHTML("beforeend", `
            <button class='btn btn-success' onclick='GuardarElementos(this)' >Guardar</button>
            <button onclick='Cancelar(this)' class='btn btn-danger'  >Cancelar</button>
        `);
    //}

}

function GuardarElementos(btn) {
    var trActual = btn.parentNode.parentNode;
    var nhijos = trActual.children.length;
    var valores = [];
    var elementoActual;
    for (var i = 0; i < nhijos - 1; i++) {
        elementoActual = trActual.children[i];
        //Hay un input
        if (elementoActual.children.length > 0 && elementoActual.children[0].nodeName.toUpperCase() == "INPUT") {
            valores.push(elementoActual.children[0].value)
        }
        //else
        else {
            valores.push(elementoActual.getAttribute("data-valor"));
        }
    }
    //Valores[] valores
    var urlGuardar = objConfiguracionGlobal.urlguardar;
    //Propiedades
    var propiedades = objConfiguracionGlobal.propiedades;

    var frm = new FormData();
    for (var j = 0; j < propiedades.length; j++) {
        frm.append(propiedades[j], valores[j])
    }
    Confirmacion(undefined, undefined, function (rpta) {
        fetchPost(urlGuardar, "text", frm, function (data) {
            if (data != "0") {
                var tdUltimo = trActual.lastChild;
                var botones = tdUltimo.getAttribute("data-botones");
                tdUltimo.innerHTML = botones;
                tdUltimo.setAttribute("data-botones", "");
                if (valores[0] == "") {
                    valores[0] = data;
                }
                Exito("Se actualizo correctamente");
                for (var i = 0; i < nhijos - 1; i++) {
                    elementoActual = trActual.children[i];
                    elementoActual.setAttribute("data-valor", valores[i])
                    elementoActual.innerHTML = valores[i];
                }
                //trActual.lastChild.innerHTML = "";
            } else Error();
        })
    })

    // return valores;
}

function Cancelar(btn) {
    var tdActual = btn.parentNode;
    var trActual = tdActual.parentNode;
    var nhijos = trActual.children.length;
    var obj;
    for (var i = 0; i < nhijos; i++) {
        //obj es el objeto td 
        obj = trActual.children[i];
        //Texto
        obj.innerHTML = obj.getAttribute("data-valor");
    }
    var tdUltimo = trActual.lastChild
    var botones = tdUltimo.getAttribute("data-botones");
    tdUltimo.innerHTML = botones;
    tdUltimo.setAttribute("data-botones", "");
}

function generarTabla(res, objConfiguracionEspecifico) {
    if (objConfiguracionEspecifico!=undefined && objConfiguracionEspecifico.check == undefined) objConfiguracionEspecifico.check = false;
    var contenido = "";
    //["Id tipo medicamento", "Nombre", "Descripcion"]
    var cabeceras = (objConfiguracionEspecifico == undefined || objConfiguracionEspecifico.cabeceras == undefined)
         ? objConfiguracionGlobal.cabeceras :
        objConfiguracionEspecifico.cabeceras;
    //: ["idtipomedicamento", "nombre","descripcion"]
    var nombrepropiedades = (objConfiguracionEspecifico == undefined || objConfiguracionEspecifico.propiedades == undefined)
                                  ? objConfiguracionGlobal.propiedades :
        objConfiguracionEspecifico.propiedades;
    var idtablaEspecifico = (objConfiguracionEspecifico == undefined || objConfiguracionEspecifico.idtabla == undefined)
        ? objConfiguracionGlobal.idtabla :
        objConfiguracionEspecifico.idtabla;
    var editarEspecifico = (objConfiguracionEspecifico == undefined)
        ? objConfiguracionGlobal.editar :
        (objConfiguracionEspecifico.editar == undefined ? false : objConfiguracionEspecifico.editar );
    var eliminarEspecifico = (objConfiguracionEspecifico == undefined)
        ? objConfiguracionGlobal.eliminar :
        (objConfiguracionEspecifico.eliminar == undefined ? false : objConfiguracionEspecifico.eliminar);
    var typeEspecifico = (objConfiguracionEspecifico == undefined)
        ? objConfiguracionGlobal.type :
        (objConfiguracionEspecifico.type == undefined ? "" : objConfiguracionEspecifico.type);
    var nameEspecifico = (objConfiguracionEspecifico == undefined)
        ? objConfiguracionGlobal.name :
        (objConfiguracionEspecifico.name == undefined ? "" : objConfiguracionEspecifico.name);
    var propiedadIdEspecifico = (objConfiguracionEspecifico == undefined)
        ? objConfiguracionGlobal.propiedadId :
        (objConfiguracionEspecifico.propiedadId == undefined ? "" : objConfiguracionEspecifico.propiedadId);
    contenido += "<table id='" + idtablaEspecifico + "' class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    if (objConfiguracionEspecifico != undefined && objConfiguracionEspecifico.check == true) {
        contenido+="<td></td>"
	}
    for (var i = 0; i < cabeceras.length; i++) {
        contenido += "<td>" + cabeceras[i] + "</td>";
    }
    //Una columna adicional (thead)
    if (editarEspecifico==true || eliminarEspecifico == true || typeEspecifico == "edit") {
        contenido += "<td>Operaciones</td>";
    }
    //contenido += "<td>Id tipo medicamento</td>";
    //contenido += "<td>Nombre</td>";
    //contenido += "<td>Descripcion</td>";
    contenido += "</tr>";
    contenido += "</thead>"

    var nregistros = res.length;
    var obj;
    var propiedadActual;
 
    contenido += "<tbody id='tbody" + idtablaEspecifico + "'>";
    for (var i = 0; i < nregistros; i++) {
        obj = res[i]
        contenido += `<tr ${objConfiguracionGlobal != null && objConfiguracionGlobal.cursor != undefined ?
                                 "style='cursor:pointer'" : ''}
                        ${objConfiguracionGlobal != null && objConfiguracionGlobal.rowClick != undefined ?
                           `onclick='rowClickEvent(${JSON.stringify(obj)})'` : "" }
                  >`;
        if (objConfiguracionEspecifico != undefined && objConfiguracionEspecifico.check == true) {
            contenido += `<td><input type='checkbox' name="${nameEspecifico}[]" value="${obj[propiedadIdEspecifico]}" /></td> `
		}
        for (var j = 0; j < nombrepropiedades.length; j++) {
            propiedadActual = nombrepropiedades[j]
            if (typeEspecifico != "edit") {
                contenido += "<td>" + obj[propiedadActual] + "</td>";
            }

            else {
                var columnasNoEditables = objConfiguracionGlobal.columnreadonly;
                if (!columnasNoEditables.includes(propiedadActual))
                    contenido += "<td ondblclick='clickcelda(this)' data-valor='" + obj[propiedadActual] + "' >" + obj[propiedadActual] + "</td>";
                else
                    contenido += "<td data-valor='" + obj[propiedadActual] + "' >" + obj[propiedadActual] + "</td>";
            }

        }
        //Una columna adicional (tbody)
        if (editarEspecifico == true || eliminarEspecifico == true || typeEspecifico == "edit") {
            //var propiedadId = objConfiguracionGlobal.propiedadId;
            contenido += "<td>";
            if (editarEspecifico == true) {
                var tienepopup = objConfiguracionGlobal.popup
                contenido += `<i 
                        ${tienepopup == true ? `data-bs-toggle="modal" data-bs-target="#${objConfiguracionGlobal.popupId}" ` : ``}
                onclick=" ${objFormularioGlobal == undefined ? `CallbackEditar(${obj[propiedadIdEspecifico]})` :
                    `EditarGenerico(${obj[propiedadIdEspecifico]})`
                    } " class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                  </svg ></i>`
            }
            if (eliminarEspecifico == true) {
                contenido += `
             <i onclick="CallbackEliminar(${obj[propiedadIdEspecifico]})"
                       class="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                  class="bi bi-trash-fill" viewBox="0 0 16 16">
                 <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg></i>
            `
            }
            contenido += "</td>";
        }
        //contenido += "<td>" + obj[idtipomedicamento] + "</td>";
        //contenido += "<td>" + obj.[nombre] + "</td>";
        //contenido += "<td>" + obj.[descripcion] + "</td>";
        contenido += "</tr>";
    }
    contenido += "</tbody>"
    contenido += "</table>";
    return contenido;
}

function rowClickEvent(cadena) {
    objConfiguracionGlobal.rowClick(cadena);
}

function EditarGenerico(id) {
    LimpiarDatos(objFormularioGlobal.idformulario);
    //Nuevo
    if (id == 0) {
        if (objFormularioGlobal.type == "popup")
            setI("lbltitulo", "Agregar " + objConfiguracionGlobal.titlePopup)
    }
    //Editar
    else {
        if (objFormularioGlobal.type == "popup")
            setI("lbltitulo", "Editar " + objConfiguracionGlobal.titlePopup)
        recuperarGenerico("" + objFormularioGlobal.urlrecuperar + "/?" + objFormularioGlobal.parametrorecuperar + "=" + id,
            objFormularioGlobal.idformulario)
    }
}

function CallbackEliminar(id) {
    if (objConfiguracionGlobal.urleliminar == undefined) {
        Eliminar(id)
    }
    else {
        if (objConfiguracionGlobal.nombreparametroeliminar == undefined) {
            objConfiguracionGlobal.nombreparametroeliminar = "id";
        }
        if (objConfiguracionGlobal.confirmacioneliminar == undefined) {
            objConfiguracionGlobal.confirmacioneliminar = "Desea eliminar el registro?"
        }
        Confirmacion(undefined, objConfiguracionGlobal.confirmacioneliminar, function () {
            fetchGet(objConfiguracionGlobal.urleliminar + "/?" + objConfiguracionGlobal.nombreparametroeliminar + "=" + id,
                "text", function (data) {
                    if (data == "1") {
                        Exito("Se elimino correctamente");
                        fetchGet(objConfiguracionGlobal.url, "json", function (rpta) {
                            document.getElementById(objConfiguracionGlobal.divContenedorTabla).innerHTML = generarTabla(rpta);
                            if (objConfiguracionGlobal.paginar == true) {
                                $("#" + objConfiguracionGlobal.idtabla).DataTable();
                            }
                        })
                        //listarTipoAdministracion();
                    } else Error();
                })
        });
    }
}

function CallbackEditar(id) {

    if (objConfiguracionGlobal!=null && objConfiguracionGlobal.popup == true) {
        //Nuevo
        if (objConfiguracionGlobal.titleId != undefined && objConfiguracionGlobal.titlePopup != undefined) {
            if (id == 0) {

                setI(objConfiguracionGlobal.titleId, "Agregar " + objConfiguracionGlobal.titlePopup);
            }
            //Editar
            else {
                setI(objConfiguracionGlobal.titleId, "Editar " + objConfiguracionGlobal.titlePopup);
            }
        }

    }
    if (objFormularioGlobal == undefined || objFormularioGlobal.urlrecuperar == undefined) {
        Editar(id);
    } else {
        recuperarGenerico("" + objFormularioGlobal.urlrecuperar + "/?" + objFormularioGlobal.parametrorecuperar + "=" + id,
            objFormularioGlobal.idformulario)
    }

}
var objBusquedaCombos = [];
var idradios = [];

function ConstruirFormulario(objFormulario, tipo = "") {
    var contenido = "";
    var formulario = objFormulario.formulario;
    var elemento
    var numeroelementos
    var objetoActual;
    contenido += `<fieldset>`
    contenido += `<legend>${objFormulario.legend}</legend>`
    contenido += `<form id="${objFormulario.idformulario}" method="post" class="mb-3">`;
    for (var i = 0; i < formulario.length; i++) {
        //array () [{},{}]
        elemento = formulario[i];
        numeroelementos = elemento.length;
        contenido += "<div class='row'>";
        for (var j = 0; j < numeroelementos; j++) {
            //{class: "col-md-6", label: "Id medicamento", name: "iidmedicamento", type:"number", readonly:false}
            objetoActual = elemento[j]
            if (objetoActual.class == undefined) objetoActual.class = "col-md-6"
            if (objetoActual.type == undefined) objetoActual.type = "text"
            if (objetoActual.readonly == undefined) objetoActual.readonly = false
            if (objetoActual.label == undefined) objetoActual.label = ""
            if (objetoActual.name == undefined) objetoActual.name = ""
            if (objetoActual.classControl == undefined) objetoActual.classControl = ""
            if (objetoActual.id == undefined) objetoActual.id = ""
            contenido += `<div class="${objetoActual.class}" ${objetoActual.ocultar == true ? `style="display:none"` : "" }    >`;
            contenido += `<label>${objetoActual.label}</label>`;
            var propiedadName = "";
            var valor = "";
            var operador = "";
            var array=[];
            if (objetoActual.visible != undefined) {
                if (objetoActual.visible.includes("==")) operador = "=="
                else if (objetoActual.visible.includes("!=")) operador = "!="
                else if (objetoActual.visible.includes(">=")) operador = ">="
                else if (objetoActual.visible.includes("<=")) operador = "<="
                else if (objetoActual.visible.includes(">")) operador = ">"
                else if (objetoActual.visible.includes("<")) operador = "<"
                var condiciones = objetoActual.visible.split("&&");
                for (var k = 0; k < condiciones.length; k++) {
                    var valores = condiciones[k].split(operador)
                    var propiedadName = valores[0];
                    var valor = valores[1];
                    var objDatosVisible = {
                        proppropiedadName: propiedadName, propoperador: operador,
                        propvalor: valor, propname: objetoActual.name,
                        propidformulario: objFormulario.idformulario
                    };
                    array.push(objDatosVisible)
				}
                

            }
            if (objetoActual.type == "text" || objetoActual.type == "number" || objetoActual.type == "password") {

                contenido += `
                       
                      <input
                   ${objetoActual.visible != undefined && array[0]!=undefined ?
                    ` data-visible='${JSON.stringify(array[0])}' data-ocultarmultiple='${array[0].proppropiedadName}' ` : ""}
                   ${objetoActual.visible != undefined && array[1] != undefined ?
                        ` data-visible1='${JSON.stringify(array[1])}' data-ocultarmultiple1='${array[1].proppropiedadName}' ` : ""}
                 type="${objetoActual.type}"  ${objetoActual.readonly == true ? "readonly" : ""} 
                      value="${objetoActual.value == undefined ? "" : objetoActual.value}"
             class="form-control ${objetoActual.classControl}"
                            ${objetoActual.visible != undefined ? `data-longitud='${array.length}'` : "" }
                              name="${objetoActual.name}" />
                  `;

            } else if (objetoActual.type == "textarea") {

                contenido += `
                    <textarea
                   ${objetoActual.visible != undefined ?
                    ` data-visible='${JSON.stringify(objDatosVisible)}' data-ocultarmultiple='${objDatosVisible.proppropiedadName}' ` : ""}
                  name="${objetoActual.name}"
                  ${objetoActual.readonly == true ? "readonly" : ""} class="form-control ${objetoActual.classControl}" ></textarea>
                `;

            } else if (objetoActual.type == "combobox") {
                contenido += `
                           <select
              ${objetoActual.visible != undefined
                    ? ` data-visible='${JSON.stringify(objDatosVisible)}' data-ocultarmultiple='${objDatosVisible.proppropiedadName}' ` : ""}
  ${objetoActual.visible != undefined && array[1] != undefined ?
                    ` data-visible1='${JSON.stringify(array[1])}' data-ocultarmultiple1='${array[1].proppropiedadName}' ` : ""}
     ${objetoActual.visible != undefined ? `data-longitud='${array.length}'` : "" }
id="${objetoActual.id}" class="form-control ${objetoActual.classControl}" name="${objetoActual.name}">
                             </select>
                    `;

                objBusquedaCombos.push(objetoActual);
            } else if (objetoActual.type == "radio" || objetoActual.type == "checkbox") {
                contenido += "<br />"
                //Ponemos al div padre
                contenido += `<div  class="${objetoActual.classControl}">`
                for (var z = 0; z < objetoActual.labels.length; z++) {
                    contenido += `
                       <input
                            ${objetoActual.visible != undefined ? ` data-visible='${JSON.stringify(objDatosVisible)}' ` : ""}
                 type="${objetoActual.type}"  
                ${objetoActual.checked != undefined && objetoActual.checked.includes(objetoActual.ids[z]) ? "checked" : ""} 
                id="${objetoActual.ids[z]}" 
                         name="${objetoActual.name}${objetoActual.type == "checkbox" ? "[]" : ""}" 
             value="${objetoActual.values[z]}" /> <label>${objetoActual.labels[z]}</label>
                     `;
                }
                contenido += `</div>`
                //checked(string)
                if (objetoActual.type == "radio")
                    idradios.push(objetoActual.checked);
                else
                    idradios = idradios.concat(objetoActual.checked)

            } else if (objetoActual.type == "file") {
                contenido += ` <br />
                <img id="img${objetoActual.namefoto}" width="${objetoActual.imgwidth}" class="${objetoActual.classControl}"
                      height="${objetoActual.imgheight}" name="${objetoActual.namefoto}"  />
                <br />
                <input accept=".jpg,.png" onchange='previewImage(this,"img${objetoActual.namefoto}")' 
                     type="file" name="${objetoActual.name}" />`
            } else if (objetoActual.type == "list") {
                contenido += generarTabla(objetoActual.data, {
                    cabeceras: objetoActual.cabeceras ,
                    propiedades: objetoActual.propiedades,
                    idtabla: "tablacheck",
                    check: objetoActual.check,
                    name: objetoActual.name,
                    propiedadId: objetoActual.propiedadId
                })
			}
            contenido += `</div>`;
        }
        contenido += "</div>";

    }
    contenido += `</form>`;
    if (tipo == "busqueda") {
        contenido += ` <button class="btn btn-primary" onclick="BuscarDatosGenericoBusqueda('${objFormulario.idformulario}')">Buscar</button>
        <button class="btn btn-danger" onclick="LimpiarGenericoBusqueda('${objFormulario.idformulario}')" >Limpiar</button>`
    } else if (tipo == "registro") {
        contenido += ` <button class="btn btn-primary" onclick="GuardarGenericoFormulario('${objFormulario.idformulario}')">
                            Guardar</button>
        <button class="btn btn-danger" onclick="LimpiarGenericoBusqueda('${objFormulario.idformulario}')" >Limpiar</button>`
        if (objFormularioGlobal.regresar == true) {
            contenido += ` 
          <button class="btn btn-secondary" id='btnRegresar' onclick="Regresar()" >Regresar</button>`
        }
    }
    contenido += `</fieldset>`
    return contenido;
}

function previewImage(input, idimagen) {
    //archivo
    var file = input.files[0];
    //control img
    var img = document.getElementById(idimagen);
    var reader = new FileReader();
    reader.onloadend = function () {
        img.src = reader.result;
    }

    reader.readAsDataURL(file)

}

function GuardarGenericoFormulario(idformulario, type) {
    var errores = ValidarDatos(idformulario)
    if (errores != "") {
        Error(errores)
        return;
    }
    var frmGuardar = document.getElementById(idformulario);
    var frm = new FormData(frmGuardar);
    Confirmacion(undefined, undefined, function (rpta) {
        fetchPost(objFormularioGlobal.urlguardar, "text", frm, function (data) {
            if (data == "1") {
                if (type == "popup") {
                    document.getElementById("btnCerrarModal").click();
                }
                Exito();
                //Refrezcar
                //listarTipoMedicamento();
                if (objConfiguracionGlobal != null) {
                    fetchPost(objConfiguracionGlobal.url, "json", frm, function (res) {
                        document.getElementById(objConfiguracionGlobal.divContenedorTabla).innerHTML = generarTabla(res);
                        if (objConfiguracionGlobal.paginar == true) {
                            $("#" + objConfiguracionGlobal.idtabla).DataTable();
                        }
                    })
                } else {
                    if (document.getElementById("btnRegresar"))
                        document.getElementById("btnRegresar").click();
				}
               
                //
                LimpiarDatos(idformulario)
            } else Error();
        })
    })
}

function LimpiarGenericoBusqueda(idformulario) {
    LimpiarDatos(idformulario);
    var frBusqueda = document.getElementById(idformulario);
    var frm = new FormData(frBusqueda)
    fetchPost(objConfiguracionGlobal.url, "json", frm, function (res) {
        document.getElementById(objConfiguracionGlobal.divContenedorTabla).innerHTML = generarTabla(res);
        if (objConfiguracionGlobal.paginar == true) {
            $("#" + objConfiguracionGlobal.idtabla).DataTable();
        }
    })
}

function BuscarDatosGenericoBusqueda(id) {
    var formu = document.getElementById(id);
    var frm = new FormData(formu);
    fetchPost(objBusquedaGlobal.url, "json", frm, function (res) {
        document.getElementById(objConfiguracionGlobal.divContenedorTabla).innerHTML = generarTabla(res);
        if (objConfiguracionGlobal.paginar == true) {
            $("#" + objConfiguracionGlobal.idtabla).DataTable();
        }
    })
}