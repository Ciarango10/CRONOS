function Agregar() {
    var tbody = document.getElementById("tbDatos");
	var contenido =`
        <tr>
                       <td><div class='input-group'><input class='form-control' />
                       <button class='btn btn-primary' data-bs-toggle="modal" onclick='AbrirModalMedicamento(this)'
                          data-bs-target="#staticBackdrop"  >...</button></div></td>
                       <td><input class='form-control' readonly /></td>
                       <td><input class='form-control' readonly /></td>
                       <td><input type='number' class='form-control' /></td>
                       <td><input class='form-control' readonly /></td>
                       <td><button class='btn btn-outline-danger' onclick='EliminarFilaDatos(this)' > Eliminar</button></td>
                   </tr>
     `
    tbody.insertAdjacentHTML("beforeend", contenido);
     
}

function EliminarFilaDatos(btn) {
    var tbody = document.getElementById("tbDatos");
    var tr = btn.parentNode.parentNode;
    tbody.removeChild(tr);
}
function AbrirModalMedicamento(btn) {
   var objMedicamento = {       
        url: "Medicamento/listarMedicamento",
        divPintado: "divContenedor",
        cabeceras: ["Id Medicamento", "Medicamento", "Laboratorio", "Tipo medicamento"],
        propiedades: ["iidmedicamento", "nombremedicamento", "nombrelaboratorio", "nombretipomedicamento"],
        editar: false,
        eliminar: false,
        //nuevo:true,
       propiedadId: "iidmedicamento",
       cursor: true,
       rowClick: function (data) {
           var { iidmedicamento, nombremedicamento } = data;
           var tr = btn.parentElement.parentElement.parentElement;
           tr.children[1].children[0].value = nombremedicamento;
           document.getElementById("btnCerrarModal").click();
           console.log(tr);
	   }
    }
    pintar(objMedicamento);
}
