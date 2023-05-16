var idPersona = "";
$(document).ready(function () {
    console.log("1");

});

function llenarDatos() {
    $.ajax({
        url: "../DataManagement/DatosGrid",
        data: {
            identificacion: "10"
        },
        success: function (e) {
            console.log(e);
        }
    });
}

/*llenarDatos();*/


$("#grid1").kendoGrid({
    dataSource: {
        transport: {
            read: "../DataManagement/DatosGrid"
        },
        //pageSize: 20
    },
    //height: 550,
    //groupable: true,
    //sortable: true,
    //pageable: {
    //    refresh: false,
    //    pageSizes: true,
    //    buttonCount: 5
    /*},*/
    columns: [
        {
            field: "Identificacion",
            title: "Identificacion"
        },
        {
            field: "Nombres",
            title: "Nombres"
        },
        {
            field: "Apellidos",
            title: "Apellidos"
        },
        {
            field: "Celular",
            title: "Celular"
        },
        {
            field: "Edad",
            title: "Edad"
        },
        {
            field: "Email",
            title: "Email"
        },
        {
            field: "EsTrabajador",
            title: "EsTrabajador"
        },
        {
            field: "FechaNacimiento",
            title: "FechaNacimiento"
        },
        {
            field: "Ingresos",
            title: "Ingresos"
        }
    ]

});


$("#grid2").kendoGrid({
    dataSource: {
        transport: {
            read: "../DataManagement/DatosGrid"
        },
        //pageSize: 20
    },
    dataBound: function (e) {
        e.sender.autoFitColumns();
    },
    //height: 550,
    groupable: true,
    sortable: true,
    resizable: true,
    //pageable: {
    //    refresh: false,
    //    pageSizes: true,
    //    buttonCount: 5
    /*},*/
    columns: [
        {
            field: "Identificacion",
            title: "Identificacion"

        },
        {
            field: "Nombres",
            title: "Nombres"

        },
        {
            field: "Apellidos",
            title: "Apellidos"

        },
        {
            field: "Celular",
            title: "Celular"
        },
        {
            field: "Edad",
            title: "Edad"
        },
        {
            field: "Email",
            title: "Email"
        },
        {
            field: "EsTrabajador",
            title: "EsTrabajador",

        },
        {
            field: "FechaNacimiento",
            title: "FechaNacimiento"
        },
        {
            field: "Ingresos",
            title: "Ingresos"
        },
    ]

});

$("#grid3").kendoGrid({
    dataSource: {
        transport: {
            read: "../DataManagement/DatosGrid"
        },
        schema: {
            model: {
                fields: {
                    FechaNacimiento: {
                        type: "date"
                    }
                }
            }
        },
    },
    dataBound: function (e) {
        e.sender.autoFitColumns();
    },
    groupable: true,
    sortable: true,
    resizable: true,
    columns: [
        {
            field: "Identificacion",
            title: "Identificacion"

        },
        {
            field: "Nombres",
            title: "Nombres"

        },
        {
            field: "Apellidos",
            title: "Apellidos"

        },
        {
            field: "Celular",
            title: "Celular"
        },
        {
            field: "Edad",
            title: "Edad"
        },
        {
            field: "Email",
            title: "Email"
        },
        {
            field: "EsTrabajador",
            title: "EsTrabajador",
            template: "# if(EsTrabajador == true) {#<span>Si</span>#} else {#<span>No</span>#} #"

        },
        {
            field: "FechaNacimiento",
            title: "FechaNacimiento",
            format: "{0:yyyy/MM/dd}",

        },
        {
            field: "FechaNacimiento",
            title: "Fecha",
            format: "{0:yyyy/MM/dd hh:mm tt}",
            /* template: "#= kendo.parseDate(FechaNacimiento,'yyyy-MM-dd')#"*/


        },
        {
            field: "Ingresos",
            title: "Ingresos",
            format: "{0:c0}"
        },
    ]

});
//Filtrado
$("#grid4").kendoGrid({
    dataSource: {
        transport: {
            read: "../DataManagement/DatosGrid"
        },
        schema: {
            model: {
                fields: {
                    Identificacion: { type: "number" },
                    Nombres: { type: "string" },
                    Apellidos: { type: "string" },
                    Celular: { type: "number" },
                    Edad: { type: "number" },
                    Email: { type: "string" },
                    EsTrabajador: { type: "string" },
                    FechaNacimiento: { type: "date" },
                }
            }
        },
        /* pageSize: 20,*/
        //serverPaging: true,
        //serverFiltering: true,
    },
    filterable: true,
    /*pageable: true,*/
    columns:
        [
            {
                field: "Identificacion",
                /* filterable: {*/
                //cell: {
                //    showOperators: false
                //}
                /*}*/
            },
            {
                field: "Nombres",
                title: "Nombres",
                //filterable: {
                //    cell: {
                //        operator: "contains",
                //        suggestionOperator: "contains"
                //    }
                //}
            },
            {
                field: "Apellidos",
                title: "Apellidos",
                //filterable: {
                //    cell: {
                //        operator: "contains"
                //    }
                //}
            },
            {
                field: "Celular",
                title: "Celular",
                //filterable: {
                //    cell: {
                //        operator: "contains"
                //    }
                //}

            },
            {
                field: "Edad",
                title: "Edad",
                //filterable: {
                //    cell: {
                //        operator:"contains"
                //    }
                //}
            },
            {
                field: "Email",
                title: "Email",
                //filterable: {
                //    cell: {
                //        operator:"contains"
                //    }
                //}
            },
            {
                field: "EsTrabajador",
                title: "EsTrabajador",
                //filterable: {
                //    cell: {
                //        operator:"contains"
                //    }
                //}
            },
            {
                field: "FechaNacimiento",
                title: "FechaNacimiento",
                format: "{0:yyyy/MM/dd}",
                //filterable: {
                //    cell: {
                //        operator:"contains"
                //    }
                //}
            }
        ]
});

$("#rowSelection").kendoGrid({
    dataSource: {
        transport: {
            read: "../DataManagement/DatosGrid"
        },
        schema: {
            model: {
                fields: {
                    FechaNacimiento: {
                        type: "date"
                    }
                }
            }
        },
    },
    selectable: "multiple",
    persistSelection: true,

    dataBound: function (e) {
        e.sender.autoFitColumns();
    },
    scrollable: false,
    persistSelection: true,
    navigatable: true,
    groupable: true,
    sortable: true,
    resizable: true,
    columns: [
        {
            field: "Identificacion",
            title: "Identificacion"

        },
        {
            field: "Nombres",
            title: "Nombres"

        },
        {
            field: "Apellidos",
            title: "Apellidos"

        },
        {
            field: "Celular",
            title: "Celular"
        },
        {
            field: "Edad",
            title: "Edad"
        },
        {
            field: "Email",
            title: "Email"
        },
        {
            field: "EsTrabajador",
            title: "EsTrabajador",
            template: "# if(EsTrabajador == true) {#<span>Si</span>#} else {#<span>No</span>#} #"

        },
        {
            field: "FechaNacimiento",
            title: "FechaNacimiento",
            format: "{0:yyyy/MM/dd}",

        },
        {
            field: "FechaNacimiento",
            title: "Fecha",
            format: "{0:yyyy/MM/dd hh:mm tt}",
            /* template: "#= kendo.parseDate(FechaNacimiento,'yyyy-MM-dd')#"*/


        },
        {
            field: "Ingresos",
            title: "Ingresos",
            format: "{0:c0}"
        },
    ]

});

$("#cellSelection").kendoGrid({
    dataSource: {
        transport: {
            read: "../DataManagement/DatosGrid"
        }
    },
    selectable: "multiple cell",
    scrollable: false,
    navigatable: true,
    columns: [
        {
            field: "Identificacion",
            title: "Identificacion"

        },
        {
            field: "Nombres",
            title: "Nombres"

        },
        {
            field: "Apellidos",
            title: "Apellidos"

        },
        {
            field: "Celular",
            title: "Celular"
        },
        {
            field: "Edad",
            title: "Edad"
        },
        {
            field: "Email",
            title: "Email"
        },
        {
            field: "EsTrabajador",
            title: "EsTrabajador",
            template: "# if(EsTrabajador == true) {#<span>Si</span>#} else {#<span>No</span>#} #"

        },
        {
            field: "FechaNacimiento",
            title: "FechaNacimiento",
            format: "{0:yyyy/MM/dd}",

        },
        {
            field: "FechaNacimiento",
            title: "Fecha",
            format: "{0:yyyy/MM/dd hh:mm tt}",



        },
        {
            field: "Ingresos",
            title: "Ingresos",
            format: "{0:c0}"
        },
    ]
});

function onChange(arg) {
    var selected = $.map(this.select(), function (item) {
        return $(item).text();
    });

    console.log("Seleccionaste: " + selected.length + "items(s), [" + selected.join(",") + "]");
}

function onDataBound(arg) {
    console.log("Grid data bound");
}

function onSorting(arg) {
    console.log("Sorteado por campo: " + arg.sort.field + ", direccion: " + (arg.sort.dir || "Ninguno"));
}

function onFiltering(arg) {
    console.log("Filtrar en " + kendo.stringify(arg.filter));
}

function onPaging(arg) {
    console.log("Numero de paginacion: " + arg.page);
}

function onGrouping(arg) {
    console.log("Grupo" + kendo.stringify(arg.groups));
}

function onGroupExpand(arg) {
    console.log("El grupo ha sido expandido: " + kendo.stringify(arg.group));
}

function onGroupCollapse(arg) {
    console.log("El grupo ha sido collapsado: " + kendo.stringify(arg.group));
}

$("#grid5").kendoGrid({
    dataSource: {
        transport: {
            read: "../DataManagement/DatosGrid"
        }
    },
    change: onChange,
    dataBound: onDataBound,
    selectable: "multiple cell",
    sortable: true,
    filterable: true,
    groupable: true,
    sort: onSorting,
    filter: onFiltering,
    group: onGrouping,
    page: onPaging,
    groupExpand: onGroupExpand,
    groupCollapse: onGroupCollapse,
    columns: [
        {
            field: "Identificacion",
            title: "Identificacion"

        },
        {
            field: "Nombres",
            title: "Nombres"

        },
        {
            field: "Apellidos",
            title: "Apellidos"

        },
        {
            field: "Celular",
            title: "Celular"
        },
        {
            field: "Edad",
            title: "Edad"
        },
        {
            field: "Email",
            title: "Email"
        },
        {
            field: "EsTrabajador",
            title: "EsTrabajador",
            template: "# if(EsTrabajador == true) {#<span>Si</span>#} else {#<span>No</span>#} #"

        },
        {
            field: "FechaNacimiento",
            title: "FechaNacimiento",
            format: "{0:yyyy/MM/dd}",

        },
        {
            field: "FechaNacimiento",
            title: "Fecha",
            format: "{0:yyyy/MM/dd hh:mm tt}",



        },
        {
            field: "Ingresos",
            title: "Ingresos",
            format: "{0:c0}"
        },
    ]
});

//Edicion

var ds6 = new kendo.data.DataSource({
    transport: {
        read: {
            url: "../DataManagement/DatosGrid"
        },
        update: {
            url: "../DataManagement/ActualizarDatos"
        },
        parameterMap: function (options, operation) {
            if (operation !== "read" && options.models) {
                return { models: kendo.stringify(options.models) };
            }
        }
    },
    schema: {
        model: {
            id: "Id",
            fields: {
                Identificacion: { editable: true, nullable: false },
                Nombres: { editable: true, nullable: false },
                Apellidos: { editable: true, nullable: false },
                Celular: {
                    type: "number", validation: { required: true }
                },
                Edad: { type: "number" },
                Email: { editable: true, nullable: false },
                EsTrabajador: { type: "boolean" },
                FechaNacimiento: { editable: true, nullable: false },
                Ingresos: { editable: true, nullable: false },
            }
        }
    },
    batch: true,
});
$("#grid6").kendoGrid({
    dataSource: ds6,
    
    toolbar: ["create", "save", "cancel"],
    columns: [
        { field: "Identificacion", title: "Identificacion" },
        { field: "Nombres", title: "Nombres" },
        { field: "Apellidos", title: "Apellidos" },
        { field: "Celular", title: "Celular" },
        { field: "Edad", title: "Edad" },
        { field: "Email", title: "Email" },
        { field: "EsTrabajador", title: "EsTrabajador" },
        { field: "FechaNacimiento", title: "FechaNacimiento" },
        { field: "Ingresos", title: "Ingresos" },
    ],
    editable: true
});

var ds7 = new kendo.data.DataSource({
    transport: {
        read: {
            url: "../DataManagement/DatosGrid"
        },
        //update: {
        //    url: "../DataManagement/ActualizarDatos"
        //},
        //parameterMap: function (options, operation) {
        //    if (operation !== "read" && options.models) {
        //        return { models: kendo.stringify(options.models) };
        //    }
        //}
    },
    /*batch: true,*/
    schema: {
        model: {
            id: "Id",
            //fields: {
            //    Identificacion: { editable: true, nullable: false },
            //    Nombres: { editable: true, nullable: false },
            //    Apellidos: { editable: true, nullable: false },
            //    Celular: {
            //        type: "number", validation: { required: true }
            //    },
            //    Edad: { type: "number" },
            //    Email: { editable: true, nullable: false },
            //    EsTrabajador: { type: "boolean" },
            //    FechaNacimiento: { editable: true, nullable:false },
            //    Ingresos: { editable: true, nullable: false },
            //}
        }
    }
});

$("#grid7").kendoGrid({
    dataSource:{
        transport: {
            read: {
                url: "../DataManagement/DatosGrid"
            }
        },
        schema: {
            model: {
                id: 'Id',
                fields: {
                    Identificacion: { type: "number" },
                    Nombres: { type: "string" },
                    Apellidos: { type: "string" },
                    Celular: { type: "number" },
                    Edad: { type: "number" },
                    Email: { type: "string" },
                    EsTrabajador: { type: "string" },
                    FechaNacimiento: { type: "date" },
                }
            }

        }
    },
   /* toolbar: ["create"],*/
    columns: [
        { field: "Identificacion", title: "Identificacion" },
        { field: "Nombres", title: "Nombres" },
        { field: "Apellidos", title: "Apellidos" },
        { field: "Celular", title: "Celular" },
        { field: "Edad", title: "Edad" },
        { field: "Email", title: "Email" },
        { field: "EsTrabajador", title: "EsTrabajador" },
        { field: "FechaNacimiento", title: "FechaNacimiento" },
        { field: "Ingresos", title: "Ingresos" },
        {

            template: '<button id="popupBtn" onclick="cellClick2(\'#=Identificacion#\')">#=Nombres#</button>'
        },
        /*{command: ["edit", "destroy"], title:"&nbsp"}*/
    ],
    /*editable: "popup",*/
    selectable: "row",
    change: onChange
        
    
});

function onChange() {
    let dataItem = this.dataItem(this.select());
    if (dataItem) {
        console.log(dataItem);
        console.log(dataItem.Identificacion);
        console.log(dataItem.Nombres);
        console.log(dataItem.Apellidos);
        console.log(dataItem.Celular);
        console.log(dataItem.Edad);
        console.log(dataItem.FechaNacimiento);
        console.log(dataItem.Ingresos);
        $("#txtIdentificacion").val(dataItem.Identificacion);
        $("#txtNombres").val(dataItem.Nombres);
        $("#txtApellidos").val(dataItem.Apellidos);
        $("#txtCelular").val(dataItem.Celular);
        $("#txtEdad").val(dataItem.Edad);
        $("#dtFechaNacimiento").val(dataItem.FechaNacimiento);
        $("#txtIngresos").val(dataItem.Ingresos);
    } 
}

function cellClick(id) {
    let grid = $("#grid7").data("kendoGrid");
    let dataItem = $("#grid7").data("kendoGrid").dataSource.get(id);
    console.log(dataItem);
    console.log(dataItem.Nombres);
    console.log(id);
}

function cellClick2(id) {
    $.ajax({
        url: "../DataManagement/DatosGridFiltrados",
        data: {
            identificacion: id
        },
        success: function (g) {
            console.log(g);
            $("#txtIdentificacion").val(g.Identificacion);
            $("#txtNombres").val(g.Nombres);
            $("#txtApellidos").val(g.Apellidos);
            $("#txtCelular").val(g.Celular);
            $("#txtEdad").val(g.Edad);
            $("#dtFechaNacimiento").val(g.FechaNacimiento);
            $("#txtIngresos").val(g.Ingresos);
            $("#winDatos").data("kendoWindow").center().open();
        }
        
    })
}

//$(function () {
//    var ventana = $("#winDatos"),
//        undo = $("#undo");
//    undo.click(function () {
//        myWindow.data("kendoWindow").open();
//        undo.fadeOut();
//    });

//    function onClose() {
//        undo.fadeIn();
//    }
//    ventana.kendoWindow({
//        width: "600px",
//        title: "Datos Ventana Modal",
//        visible: false,
//        actions: [
//            "Close"
//        ],
//        close: onClose
//    }).data("kendoWindow").center().open();
//});

$("#winDatos").kendoWindow({
    width: "300px",
    hieght: "100px",
    modal: true,
    title: "Datos Ventana Modal",
    visible: false
});





