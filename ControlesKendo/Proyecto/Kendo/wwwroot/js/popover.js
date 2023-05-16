var today = new Date(),
    events = [
        +new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        +new Date(today.getFullYear(), today.getMonth(), 12),
        +new Date(today.getFullYear(), today.getMonth(), 24),
    ];

$("#calendar").kendoCalendar({
    componentType: "modern",
    dates: events,
    min: new Date(today.getFullYear(), today.getMonth(), 1),
    max: new Date(today.getFullYear(), today.getMonth() + 1, 0),
    month: {
        content: '# if ($.inArray(+data.date, data.dates) != -1) { #' +
            '<div class="' +
            "eventful" +
            '">#= data.value #</div>' +
            '# } else { #' +
            '#= data.value #' +
            '# } #'
    }
});

createPopover();
        

function createPopover() {
    $(".k-calendar-td:has(.eventful) a").removeAttr("href");

    $("#calendar").kendoPopover({
        showOn: "click",
        filter: ".k-calendar-td:has(.eventful)",
        width: "300px",
        height: "208px",
        position: "right",
        header: function (e) {
            var dateString = $("a.k-calendar-title").text();
            return dateString.substr(0, dateString.indexOf(' ')) + " " + e.target.text();
        },
        body: kendo.template($("#body-template").html())
    });
}

$("#products2").kendoPopover({
    filter: "li",
    showOn: "click",
    width: "330px",
    position: "right",
    header: kendo.template($("#header-template2").html()),
    body: kendo.template($("#body-template2").html()),
    actionsPosition: "evenly",
    actions: [
        {
            text: "Cerrar",
            click: function (e) {
                e.sender.hide();
            }
        }]
});

function onShow(e) {
    console.log("Evento :: Mostrar");
}

function onHide(e) {
    console.log("Evento :: Esconder");
}

$(document).ready(function () {
    $("#popover3").kendoPopover({
        width: "330px",
        position: "bottom",
        header: "Popover header",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        show: onShow,
        hide: onHide
    })
})