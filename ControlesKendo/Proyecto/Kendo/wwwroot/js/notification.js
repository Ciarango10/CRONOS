var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
var staticNotification = $("#staticNotification").kendoNotification({
    appendTo: "#appendto"
}).data("kendoNotification");

$("#showPopupNotification").click(function () {
    var d = new Date();
    popupNotification.show(kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000"), "error");
});

$("#showStaticNotification").click(function () {
    var d = new Date();
    staticNotification.show(kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000"), "info");
    var container = $(staticNotification.options.appendTo);
    container.scrollTop(container[0].scrollHeight);
});

$("#hideAllNotifications").click(function () {
    popupNotification.hide();
    staticNotification.hide();
});

var notification = $("#notification2").kendoNotification({
    position: {
        pinned: true,
        top: 30,
        right: 30
    },
    autoHideAfter: 0,
    stacking: "down",
    templates: [{
        type: "info",
        template: $("#emailTemplate2").html()
    }, {
        type: "error",
        template: $("#errorTemplate2").html()
    }, {
        type: "success",
        template: $("#successTemplate2").html()
    }]

}).data("kendoNotification");

$("#showEmailNotification2").click(function () {
    notification.show({
        title: "Nuevo E-mail",
        message: "Tienes 1 nuevo email!"
    }, "info");
});

$("#showErrorNotification2").click(function () {
    notification.show({
        title: "Contraseña Incorrecta",
        message: "Por favor ingresa tu contraseña nuevamente."
    }, "error");
});

$("#showSuccessNotification2").click(function () {
    notification.show({
        message: "Actualización exitosa!"
    }, "success");
});

$("#hideAllNotifications2").click(function () {
    notification.hide();
});

$(document).one("kendo:pageUnload", function () { if (notification) { notification.hide(); } });

function onShow(e) {
    console.log("evento :: Mostrar (" + $(e.element).find(".timeWrap").text() + ")");
}

function onHide(e) {
    console.log("evento :: Esconder (" + $(e.element).find(".timeWrap").text() + ")");
}

var notification = $("#notification3").kendoNotification({
    width: "12em",
    show: onShow,
    hide: onHide,
    templates: [{
        type: "time",
        template: "<div style='padding: .6em 1em'>La hora es: <span class='timeWrap'>#: time #</span></div>"
    }]
}).data("kendoNotification");

$("#showNotification3").click(function () {
    var d = new Date();
    notification.show({ time: kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000") }, "time");
});

$("#hideAllNotifications3").click(function () {
    notification.hide();
});



       