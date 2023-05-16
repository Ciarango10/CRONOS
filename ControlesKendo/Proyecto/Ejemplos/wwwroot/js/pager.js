$(document).ready(function () {
    var template = kendo.template($("#template").html());

    var dataSource = new kendo.data.DataSource({
        transport: {
            read: "../DataManagement/DatosGrid"
        },
        pageSize: 4,
        change: function () {
            $(".contests-wrapper").html(kendo.render(template, this.view()));
        }
    });

    $("#pager").kendoPager({
        dataSource: dataSource
    });

    dataSource.read();
});

$(document).ready(function () {

    var dataSource = new kendo.data.DataSource({
        transport: {
            read: "../DataManagement/DatosGrid"
        },
        schema: {
            model: {
                fields: {
                    Id: { type: "number" },
                    Identificacion: { type: "number" },
                    Nombres: { type: "string" },
                    Apellidos: { type: "string" },
                    FechaNacimiento: { type: "date" },
                    Edad: { type: "number" },
                    Ingresos: { type: "number" }
                }
            }
        },
        pageSize: 20,
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true
    });

    $("#pager2").kendoPager({
        dataSource: dataSource,
        buttonCount: 5,
        pageSizes: [10, 20, 50]
    });

    $("#grid2").kendoGrid({
        dataSource: dataSource,
        height: 360,
        filterable: true,
        sortable: true,
        columns: [
        {
            field: "Identificacion",
            title: "Identificacion",
            filterable: true
        },
        {
            field: "FechaNacimiento",
            title: "FechaNacimiento",
            format: "{0:MM/dd/yyyy}"
        },
        {
            field: "Nombres",
            title:" Nombres"
        },
        {
            field: "Apellidos",
            title: "Apellidos"
        },
        {
            field: "Edad",
            title: "Edad"
        }, {
            field: "Ingresos",
            title: "Ingresos"
        }
        ]
    });

    dataSource.read();
});

$(function () {
    var template = kendo.template($("#template3").html());

    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "../DataManagement/DatosGrid"
            }
        },
        change: function () {
            $(".contests-wrapper").html(kendo.render(template, this.view()));
        }
    });

    $("#pager3").kendoPager({
        dataSource: dataSource,
        navigatable: true
    });

    dataSource.read();

    $(document).on("keydown.examples", function (e) {
        if (e.altKey && e.keyCode === 87) {
            $("#pager3").data("kendoPager").element.focus();
        }
    });
});
        