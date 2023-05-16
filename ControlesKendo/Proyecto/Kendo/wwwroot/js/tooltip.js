$(document).ready(function () {
    var tooltip = $("#agglomerations").kendoTooltip({
        filter: "span",
        width: 120,
        position: "top",
        animation: {
            open: {
                effects: "zoom",
                duration: 150
            }
        }
    }).data("kendoTooltip");

    tooltip.show($("#canton"));
});

function onShow(e) {
    console.log("Evento :: mostrar");
}

function onHide(e) {
    console.log("Evento :: ocultar");
}

$(document).ready(function () {
    $("#autohide-true").kendoTooltip({
        content: "Hola!",
        show: onShow,
        hide: onHide,
        position: "top"
    });
    $("#autohide-false").kendoTooltip({
        autoHide: false,
        show: onShow,
        hide: onHide,
        position: "top",
        content: "Hola!"
    });
});

var urlFormat = "../content/web/tooltip/ajax/ajaxContent{0}.html";

$(document).ready(function () {
    $("#products3").kendoTooltip({
        autoHide: false,
        filter: "a",
        content: kendo.template($("#template3").html()),
        width: 400,
        height: 200,
        position: "top"
    });

    $("#products3").find("a").click(false);
});