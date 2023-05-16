$(function () {
    $("#spreadsheet").kendoSpreadsheet({
        excel: {
            //Requiere activar el guardar archivos en navegadores antiguos
            proxyURL: ""
        },
        pdf: {
            proxyURL: ""
        },
        sheets: [
            {
                name: "Personas",
                mergedCells: [
                    "A1:G1",
                    "C15:E15"
                ],
                rows: [
                    {
                        height: 70,
                        cells: [
                            {
                                index: 0, value: "Tabla Personas", fontSize: 32, background: "rgb(96,181,255)",
                                textAlign: "center", color: "white"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "Identificacion",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Nombres",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Apellidos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Edad",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Email",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Celular",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "EsTrabajador",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "FechaNacimiento",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ingresos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "1025643641",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Carlos",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Arango",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "17",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosa@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3163338892",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Si",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("31/01/2005"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "102892163",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ivan",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Londono",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "18",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosarango3101@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3164470934",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "No",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("12/05/2004"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "1600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    }
                ],
                columns: [
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 }
                ]
            }
        ]
    });
});

$(function () {
    $("#spreadsheet2").kendoSpreadsheet({
        excel: {
            //Requiere activar el guardar archivos en navegadores antiguos
            proxyURL: ""
        },
        pdf: {
            proxyURL: ""
        },
        sheets: [
            {
                name: "Personas",
                mergedCells: [
                    "A1:G1",
                    "C15:E15"
                ],
                filter: {
                    ref: "A2:I4",
                    columns:[]
                },
                rows: [
                    {
                        height: 70,
                        cells: [
                            {
                                index: 0, value: "Tabla Personas", fontSize: 32, background: "rgb(96,181,255)",
                                textAlign: "center", color: "white"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "Identificacion",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Nombres",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Apellidos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Edad",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Email",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Celular",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "EsTrabajador",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "FechaNacimiento",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ingresos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "1025643641",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Carlos",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Arango",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "17",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosa@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3163338892",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Si",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("31/01/2005"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "102892163",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ivan",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Londono",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "18",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosarango3101@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3164470934",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "No",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("12/05/2004"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "1600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    }
                ],
                columns: [
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 }
                ]
            }
        ]
    });
});

$(function () {
    $("#spreadsheet3").kendoSpreadsheet({
        rows: 3,
        columns:8,
        excel: {
            //Requiere activar el guardar archivos en navegadores antiguos
            proxyURL: ""
        },
        pdf: {
            proxyURL: ""
        },
        sheets: [
            {
                name: "Personas",
                mergedCells: [
                    "A1:I1"
                ],
                rows: [
                    {
                        height: 70,
                        cells: [
                            {
                                index: 0, value: "Tabla Personas", fontSize: 32, background: "rgb(96,181,255)",
                                textAlign: "center", color: "white"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "Identificacion",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Nombres",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Apellidos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Edad",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Email",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Celular",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "EsTrabajador",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "FechaNacimiento",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ingresos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "1025643641",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Carlos",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Arango",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "17",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosa@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3163338892",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Si",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("31/01/2005"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "102892163",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ivan",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Londono",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "18",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosarango3101@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3164470934",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "No",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("12/05/2004"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "1600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    }
                ],
                columns: [
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 }
                ]
            }
        ]
    });
});

$("#rowsCount").kendoNumericTextBox({
    min: 1,
    max: 1000,
    decimals: 0,
    format: "n0",
    value: 4
});

$("#columnsCount").kendoNumericTextBox({
    min: 1,
    max: 1000,
    decimals: 0,
    format: "n0",
    value: 5
});

$("#resize").click(function () {
    var rows = $("#rowsCount").data('kendoNumericTextBox').value();
    var cols = $("#columnsCount").data('kendoNumericTextBox').value();
    var spreadsheet = $("#spreadsheet3").data("kendoSpreadsheet");
    var sheet = spreadsheet.activeSheet();
    sheet.resize(rows, cols);
});

$(function () {
    $("#spreadsheet4").kendoSpreadsheet({
        sheets: [
            {
                name: "Personas",
                mergedCells: [
                    "A1:I1",
                ],
                rows: [
                    {
                        height: 70,
                        cells: [
                            {
                                index: 0, value: "Tabla Personas", fontSize: 32, background: "rgb(96,181,255)",
                                textAlign: "center", color: "white"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "Identificacion",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Nombres",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Apellidos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Edad",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Email",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Celular",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "EsTrabajador",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "FechaNacimiento",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ingresos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "1025643641",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)",
                                enable:false
                            },
                            {
                                value: "Carlos",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Arango",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "17",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosa@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3163338892",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Si",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("31/01/2005"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "102892163",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)",
                                enable: false
                            },
                            {
                                value: "Ivan",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Londono",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "18",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosarango3101@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3164470934",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "No",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("12/05/2004"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "1600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    }
                ],
                columns: [
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 }
                ]
            }
        ]
    }).data("kendoSpreadsheet");

    $("#toggle4").click(function () {
        var range = spreadsheet.activeSheet().range("C3:C4");
        var enabled = range.enable();

        if (enabled === null) {
            enabled = true;
        }
        range.enable(!enabled);
    });
});

kendo.spreadsheet.registerEditor("color", function () {
    var context, dlg, colorpicker, model;
    function create() {
        if (!dlg) {
            model = kendo.observable({
                value: "#000000",
                ok: function () {
                    context.callback(model.value);
                    dlg.close();
                },
                cancel: function () {
                    dlg.close();
                }
            });

            var el = $("<div data-visible='true' data-role='window' data-modal='true' data-resizable='false' data-title='Select color'> " + " <div data-role='flatcolorpicker' data-bind='value: value'></div>"
                + "<div style='margin-top: 1em;text-align:right'>" + "<button style='width:6em' class='k-button k-button-solid-base k-button-solid k-button-md k-rounded-md' data-bind='click:ok'>OK</button>"
                + "<button style='width:6em' class='k-button k-button-solid-primary k-button-solid k-button-md k-rounded-md' data-bind='click: cancel'>Cancel</button>"
                + "</div>" + "</div>");
            kendo.bind(el, model);
            dlg = el.getKendoWindow();
        }
    }

    function open() {
        create();
        dlg.open();
        dlg.center();
        var value = context.range.value();
        if (value != null) {
            model.set("value", value);
        }
    }

    return {
        edit: function (options) {
            context = options;
            open();
        },
        icon: "k-i-background"
    }
});

$(function () {
    $("#spreadsheet5").kendoSpreadsheet({
        columns: 5,
        rows: 10,
        sweetsbar: false,
        excel: {
            // Requiere la habilitacion de navegadores antiguos
            proxyURL: ""
        },
        sheets: [{
            rows: [
                {
                    cells: [
                        {
                            value: "Select date: ", bold: true,
                        },
                        {
                            format: "MMMM d, yyyy",
                            background: "#fef0cd",
                            validation: {
                                dataType: "date",
                                showButton: true,
                                comparerType: "between",
                                from: 'DATEVALUE("01/31/2005")',
                                to: 'DATEVALUE("01/31/2100")',
                                allowsNulls: true,
                                type: "reject",
                                titleTemplate: "Error de seleccion de Fecha",
                                messageTemplate: "La fecha seleccionada debe estar entre el año 2005 y 2100",
                            }
                        }
                    ]
                },
                {
                    cells: [
                        {
                            value:"Select item: ", bold: true
                        },
                        {
                            background: "#fef0cd",
                            validation: {
                                dataType: "list",
                                showButton: true,
                                comparerType: "list",
                                from: '"Foo item 1,Bar item 2,Bar item 3"',
                                allowNulls: true,
                                type: "reject"
                            }
                        }
                    ]
                },
                {
                    cells: [
                        {
                            value: "Select color:", bold: true
                        },
                        {
                            background: "#fef0cd", editor: "color"
                        }
                    ]
                }

            ]
        }]
    });
});

function onRender(arg) {
    console.log("Hoja de calculo renderizada");
}

function onSelect(arg) {
    console.log("Nuevo rango seleccionado. Nuevo valor: " + arg.range.value());
}

//function onChanging(arg) {
//    console.log("Hoja de calculo en cambio. La operacion de tipo de cambio es : " = arg.changeType);
//}

function onChange(arg) {
    console.log("Hoja de calculo cambiada. Nuevo valor:" + arg.range.calue());
}

function onChangeFormat(arg) {
    console.log("Formato de rango con valor " + arg.range.value() + "ha sido cambiado a " + arg.range.format());
}

function onExcelExport(arg) {
    console.log("Hoja de calculo exportada a Excel");
}

function onPdfExport(arg) {
    console.log("Hola de calculo exportada a PDF");
}

function onInsertSheet(arg) {
    console.log("Nueva hoja insertada");
}

function onRemoveSheet(arg) {
    console.log(arg.sheet.name() + "Hoja removida");
}

function onRenameSheet(arg) {
    console.log(arg.sheet.name() + "renombrado a" + arg.newSheetName);
}

function onSelectSheet(arg) {
    console.log(arg.sheet.name() + " La Hoja esta seleccionada");
}

function onUnhideColumn(arg) {
    console.log("La columna en posicion " + arg.index + " de la hoja " + arg.sheet.name() + " no esta oculta");
}

function onUnhideRow(arg) {
    console.log("La fila en posicion " + arg.index + " de la hoja " + arg.sheet.name() + " no esta oculta");
}

function onHideColumn(arg) {
    console.log("la columna en posicion" + arg.index + " de la hoja " + arg.sheet.name() + " esta oculta");
}

function onHideRow(arg) {
    console.log("La fila en posicion " + arg.index + " de la hoja " + arg.sheet.name() + " esta oculta");
}

function onDeleteColumn(arg) {
    console.log("La columna en posicion" + arg.index + " de la hoja " + arg.sheet.name() + " ha sido eliminada");
}

function onDeleteRow(arg) {
    kendoConsole.log("La fila en posicion " + arg.index + " de la hoja " + arg.sheet.name() + " ha sido eliminada");
}

function onInsertColumn(arg) {
    kendoConsole.log("Nueva columna en posicion " + arg.index + " de la hoja" + arg.sheet.name() + " ha sido insertada");
}

function onInsertRow(arg) {
    kendoConsole.log("Nueva fila en posicion " + arg.index + " de la hoja " + arg.sheet.name() + " h sido insertada");
}

function onCopy(arg) {
    kendoConsole.log("Contenido copiado. Los valores copiados son: " + arg.range.values());
}

function onCut(arg) {
    kendoConsole.log("Contenido cortado. Los valores cortados son: " + arg.range.values());
}

function onPaste(arg) {
    var values = arg.clipboardContent.data.map(function (row) {
        return row.map(function (cell) {
            return cell.value;
        });
    });

    kendoConsole.log("Contenido pegado. Los valores pegados son: " + values);
}

function exportSpreadsheet() {
    var spreadsheet = $("#spreadsheet6").data("kendoSpreadsheet");
    spreadsheet.saveAsPdf();
}

$(function () {
    $("#exportButton6").kendoButton({
        themeColor: "primary",
        click: exportSpreadsheet
    });

    $("#spreadsheet6").kendoSpreadsheet({
       /* render: onRender,*/
        select: onSelect,
        change: onChange,
        changeFormat: onChangeFormat,
        pdfExport: onPdfExport,
        excelExport: onExcelExport,
        insertSheet: onInsertSheet,
        removeSheet: onRemoveSheet,
        renameSheet: onRenameSheet,
        selectSheet: onSelectSheet,
        unhideColumn: onUnhideColumn,
        unhideRow: onUnhideRow,
        hideColumn: onHideColumn,
        hideRow: onHideRow,
        deleteColumn: onDeleteColumn,
        deleteRow: onDeleteRow,
        insertColumn: onInsertColumn,
        insertRow: onInsertRow,
        copy: onCopy,
        cut: onCut,
        paste: onPaste,
        pdf: {
            area: "sheet"
        },
        sheets: [
            {
                name: "Personas",
                mergedCells: [
                    "A1:G1",
                    "C15:E15"
                ],
                rows: [
                    {
                        height: 70,
                        cells: [
                            {
                                index: 0, value: "Tabla Personas", fontSize: 32, background: "rgb(96,181,255)",
                                textAlign: "center", color: "white"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "Identificacion",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Nombres",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Apellidos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Edad",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Email",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Celular",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "EsTrabajador",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "FechaNacimiento",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ingresos",
                                background: "rgb(167,214,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "1025643641",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Carlos",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Arango",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "17",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosa@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3163338892",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Si",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("31/01/2005"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                value: "102892163",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Ivan",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "Londono",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "18",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "carlosarango3101@gmail.com",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "3164470934",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "No",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: new Date("12/05/2004"),
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            },
                            {
                                value: "1600000",
                                background: "rgb(255,255,255)",
                                textAlign: "center",
                                color: "rgb(0,62,117)"
                            }
                        ]
                    }
                ],
                columns: [
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 },
                    { width: 100 }
                ]
            }
        ]
    });
});
