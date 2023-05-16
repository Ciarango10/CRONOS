var dialog = $('#dialog1'),
    undo = $("#undo1");

undo.click(function () {
    dialog.data("kendoDialog").open();
    undo.fadeOut();
});

function onClose() {
    undo.fadeIn();
}

dialog.kendoDialog({
    width: "450px",
    title: "Actualización de Software",
    closable: false,
    modal: false,
    content: "<p>Una nueva version de <strong>Kendo UI</strong> está disponible. ¿Quisieras descargar e instalarla ya?<p>",
    actions: [
        { text: 'Saltar esta version' },
        { text: 'Recuerdame luego' },
        { text: 'Instalar Actualizacion', primary: true }
    ],
    close: onClose
});

$("#alertBtn").on("click", function () {
    kendo.alert("Esto es un mensaje de alerta de Kendo UI");
});

$("#confirmBtn").on("click", function () {
    kendo.confirm("Estas seguro que quieres continuar?").then(function () {
        kendo.alert("Seleccionaste la accion OK");
    }, function () {
        kendo.alert("Seleccionaste la accion Cancelar");
    });
});

$("#promptBtn").on("click", function () {
    kendo.prompt("Por favor entra un valor arbitrario:", "Cualquier valor").then(function (data) {
        kendo.alert(kendo.format("El valor que ingresaste fue '{0}'", data));
    }, function () {
        kendo.alert("Cancelar ingreso de valor");
    })
});

var dialog = $("#dialog3");
var show = $("#show3");

dialog.kendoDialog({
    width: "400px",
    title: "Actualización Software",
    closable: true,
    modal: false,
    content: "<p>Una nueva versión de <strong>Kendo UI</strong> está disponible. ¿Te gustaria descargarla e instarla ahora?<p>",
    actions: [
        { text: 'Cerrar', action: onCancel },
        { text: 'OK', primary: true, action: onOK }
    ],
    initOpen: onInitOpen,
    open: onOpen,
    close: onClose,
    show: onShow,
    hide: onHide
});

function onInitOpen(e) {
    console.log("event :: InitAbrir");
}

function onOpen(e) {
   console.log("event :: abrir");
}

function onShow(e) {
    console.log("event :: mostrar");
}

function onHide(e) {
    console.log("event :: esconder");
}

function onClose(e) {
    show.fadeIn();
    console.log("event :: cerrar");
}
function onCancel(e) {
    console.log("action :: cancelar");
}

function onOK(e) {
    console.log("action :: OK");
}

show.click(function () {
    dialog.data("kendoDialog").open();
    show.fadeOut();
});


$(document).ready(function () {
    var dialog = $("#dialog").kendoDialog({
        width: "800px",
        visible: false,
        title: "Miembros",
        closable: true,
        modal: false,
        content: "<div id='treelist'></div>",
        actions: [
            { text: 'Cancelar' },
            { text: 'OK', primary: true, action: actionOK }
        ],
        initOpen: initOpen
    });

    $("#pickEmployeesButton").kendoButton({
        themeColor: "primary",
        click: openDialog
    });

    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/All",
                dataType: "jsonp"
            },
            update: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        batch: true,
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" },
                    FirstName: { validation: { required: true } },
                    LastName: { validation: { required: true } },
                    HireDate: { type: "date" },
                    Phone: { type: "string" },
                    HireDate: { type: "date" },
                    BirthDate: { type: "date" },
                    Extension: { type: "number", validation: { min: 0, required: true } },
                    Position: { type: "string" }
                },
                expanded: true
            }
        }
    });

    $("#treelist").kendoTreeList({
        dataSource: dataSource,
        height: 380,
        filterable: true,
        sortable: true,
        editable: true,
        toolbar: ["create"],
        columns: [
            {
                headerTemplate: "<input type='checkbox' onclick='toggleAll(event)' />",
                template: "<input type='checkbox' class='checkbox' data-bind='checked: checked' />",
                width: 50,
                filterable: false
            },
            {
                field: "FirstName", title: "First Name", width: 170,
                expandable: true
            },
            { field: "LastName", title: "Last Name", width: 110 },
            { field: "Position" },
            {
                title: "Edit", command: ["edit", "destroy"], width: 250,
                attributes: {
                    style: "text-align: center;"
                }
            }
        ],
        dataBound: treeListDataBound
    });
});

function treeListDataBound(e) {
    $(".checkbox").bind("change", function (e) {
        var row = $(e.target).closest("tr");
        this.checked ? row.addClass("k-selected") : row.removeClass("k-selected");
    });
}

function toggleAll(e) {
    if (e.target.checked) {
        $("#treelist [role='row'] .checkbox").each(function () {
            this.checked = "checked";
        });
    }
    else {
        $("#treelist [role='row'] .checkbox").removeAttr("checked");
    }

    $("#treelist [role='row'] .checkbox").trigger("change");
}

function initOpen(e) {
    setTimeout(function () {
        $("#treelist").data("kendoTreeList").refresh();
    })
}

function openDialog(e) {
    $("#dialog").data("kendoDialog").open();
}

function actionOK(e) {
    var treelist = $("#treelist").data("kendoTreeList");
    var items = treelist.element.find(".k-selected");
    updateResult(items, treelist);
}

function updateResult(items, treelist) {
    if (items.length > 0) {
        var result = "";
        for (var i = 0; i < items.length; i++) {
            var dataItem = treelist.dataItem(items[i]);
            result += "<span class='selectedName'>" + dataItem.FirstName + " " + dataItem.LastName + "</span>";
        }
    } else {
        result = "Ningun miembro seleccionado";
    }

    $("#result").html(result);
}

function updateSelectedCount(treeView) {
    $(".selected-count").html(getCheckedItems(treeView).length + " Empleados Seleccionados");
}

