$(document).ready(function () {
    var myWindow = $("#window"),
        undo = $("#undo");

    undo.click(function () {
        myWindow.data("kendoWindow").open();
        undo.fadeOut();
    });

    function onClose() {
        undo.fadeIn();
    }

    myWindow.kendoWindow({
        width: "600px",
        title: "About Alvar Aalto",
        visible: false,
        actions: [
            "Pin",
            "Minimize",
            "Maximize",
            "Close"
        ],
        close: onClose
    }).data("kendoWindow").center().open();
});

$("#window2").kendoWindow({
    width: "300px",
    height: "250px",
    draggable: {
        containment: "#container2"
    },
    title: "About Alvar Aalto",
    actions: ["Minimize", "Maximize", "Pin"]
}).data("kendoWindow").open();

var myWindow = $("#window3"),
    undo = $("#undo3");

myWindow.kendoWindow({
    width: "500px",
    actions: ["Custom", "Minimize", "Maximize", "Close"],
    title: "About Josef Hoffmann",
    close: function () {
        undo.fadeIn();
    }
});

myWindow.data("kendoWindow").wrapper
    .find(".k-i-custom").parent().click(function (e) {
        alert("Custom action button clicked");
        e.preventDefault();
    });

undo.click(function () {
    myWindow.data("kendoWindow").open();
    undo.fadeOut();
});

function onOpen(e) {
    console.log("Evento :: Abrir");
}

function onClose(e) {
    $("#undo4").fadeIn();
    console.log("Evento :: Cerrar");
}

function onActivate(e) {
    console.log("Evento :: Activar");
}

function onDeactivate(e) {
    console.log("Evento :: Desactivar");
}

function onRefresh(e) {
    console.log("Evento :: Refrescar");
}

function onResize(e) {
    console.log("Evento :: Ajustar");
}

function onRestore(e) {
    console.log("Evento :: Restaurar");
}

function onMaximize(e) {
    console.log("Evento :: Maximizar");
}

function onDragStart(e) {
    console.log("Evento :: Inicio Movimiento");
}

function onDragEnd(e) {
    console.log("Evento :: Fin Movimiento");
}

$("#undo4").click(function () {
    $("#window4").data("kendoWindow").open();
    $("#undo4").fadeOut();
});

$(document).ready(function () {
    $("#window4").kendoWindow({
        width: "630px",
        height: "315px",
        title: "Rams's Ten Principles of Good Design",
        actions: ["Refresh", "Maximize", "Close"],
        content: "../content/web/window/ajax/ajaxContent1.html",
        visible: false,
        open: onOpen,
        activate: onActivate,
        close: onClose,
        deactivate: onDeactivate,
        refresh: onRefresh,
        resize: onResize,
        maximize: onMaximize,
        restore: onRestore,
        dragstart: onDragStart,
        dragend: onDragEnd
    }).data("kendoWindow").open();
});
