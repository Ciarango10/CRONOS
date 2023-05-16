$(function () {
    $("#listView").kendoListView({
        dataSource: {
            transport: {
                read: {
                    url: "../DataManagement/DatosGrid"
                }
            },
            pageSize: 21
        },
        template: kendo.template($("#template").html()),
        pageable: true
    });
});

$(document).ready(function () {
        dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "../DataManagement/DatosGrid",
                },
                update: {
                    url: "../DataManagement/ActualizarDatos",                  
                },
                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }
            },
            batch: true,
            pageSize: 4,
            schema: {
                model: {
                    id: "ID",
                    fields: {
                        Identificacion: { editable: false, nullable: true },
                        Nombres: "Nombres",
                        Apellidos: "Apellidos",
                        Edad: { type: "number" },
                        Celular: { type: "number" },
                        EsTrabajador: { type: "boolean" },
                        FechaNacimiento: { type: "date" },
                        Ingresos: { type: "number" }
                    }
                }
            }
        });
    var listView = $("#listView2").kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#template2").html()),
        editTemplate: kendo.template($("#editTemplate2").html()),
        pageable: true
    }).data("kendoListView");

    $("#add-new-button2").click(function (e) {
        listView.add();
        e.preventDefault();
    });
});

$(function () {
    $("#listView3").kendoListView({
        dataSource: {
            transport: {
                read: {
                    url: "../DataManagement/DatosGrid",
                }
            },
            pageSize: 15
        },
        selectable: "multiple",
        pageable: true,
        dataBound: onDataBound,
        change: onChange,
        template: kendo.template($("#template3").html())
    });

    function onDataBound() {
        console.log("ListView data bound");
    }

    function onChange() {
        var data = this.dataSource.view(),
            selected = $.map(this.select(), function (item) {
                return data[$(item).index()].Nombres;
            });

        console.log("Seleccionado: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }
});

$(function () {
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "../DataManagement/DatosGrid",
            }
        }
    });
    $("#listView4").kendoListView({
        dataSource: dataSource,
        height: 350,
        scrollable: "endless",
        template: kendo.template($("#template4").html())
    });
});

$(function () {
    $("#listView5").kendoListView({
        dataSource: {
            transport: {
                read: {
                    url: "../DataManagement/DatosGrid",
                }
            },
        },
        template: kendo.template($("#template5").html()),
        pageable: true
    });
});

function destinationURL(name) {
    return '../content/shared/images/destinations/' + name;
}

$(function () {
    var destinations = [
        {
            'Country': 'Belgium',
            'Title': 'BRUSSELS, BELGIUM',
            'Description': 'Chocolate, beer, music and surrealism.',
            'ImageUrl': 'brussels-180x150.png'
        },
        {
            'Country': 'Portugal',
            'Title': 'PORTO, PORTUGAL',
            'Description': 'Taste it, drink it, eat it, love it. Bem-vindo ao Porto!',
            'ImageUrl': 'porto-180x150.png'
        },
        {
            'Country': 'Portugal',
            'Title': 'LISBON, PORTUGAL',
            'Description': 'The pure pleasure of being in one of the best cities in the world.',
            'ImageUrl': 'lisbon-180x150.png'
        }
    ];

    var dataSource = new kendo.data.DataSource({
        data: destinations,
        group: {
            field: 'Country',
            dir: 'desc',
            compare: function (a, b) {
                if (a.items.length === b.items.length) {
                    return 0;
                } else if (a.items.length > b.items.length) {
                    return 1;
                } else {
                    return -1;
                }
            }
        }
    });

    $("#listView6").kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#template6").html())
    });
});
