$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        groupable: true,
        sortable: true,
        resizable: true,
        filterable: true, 
        columnMenu: true,
        columns: [{
            field: "nombre",
            title: "Nombre"
        },
        {
            field: "pais",
            title: "País",
        },
        {
            field: "ciudad",
            title: "Ciudad"
        },
        {
            field: "barrio",
            title: "Barrios"
        },
        {
            field: "profesiones",
            title: "Profesiones"
        },
        {
            field: "hobbies",
            title: "Hobbies"
        }]
    });

    $("#grid2").kendoGrid({
        toolbar: ["pdf"],
        pdf: {
            paperSize: "A4",
            margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
            landscape: true,
            repeatHeaders: true,
            template: $("#page-template").html(),
            scale: 0.8
        },
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        selectable: "multiple cell",
        pageable: true,
        scrollable: false,
        navigatable: true,
        mobile: true,
        columns: [{
            field: "nombre",
            title: "Nombre"
        },
        {
            field: "pais",
            title: "País",
        },
        {
            field: "ciudad",
            title: "Ciudad"
        },
        {
            field: "barrio",
            title: "Barrios"
        },
        {
            field: "profesiones",
            title: "Profesiones"
        },
        {
            field: "hobbies",
            title: "Hobbies"
        }]
    });

    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service",
        dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                },
                update: {
                    url: crudServiceBaseUrl + "/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: crudServiceBaseUrl + "/Products/Create",
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
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        });

    $("#grid3").kendoGrid({
        dataSource: dataSource,
        navigatable: true,
        pageable: true,
        height: 550,
        toolbar: ["create", "save", "cancel"],
        columns: [{
            field: "nombre",
            title: "Nombre"

        },
        {
            field: "pais",
            title: "País"

        },
        {
            field: "ciudad",
            title: "Ciudad"

        },
        {
            field: "barrio",
            title: "Barrios"

        },
        {
            field: "profesiones",
            title: "Profesiones"

        },
        {
            field: "hobbies",
            title: "Hobbies"

        }],
        editable: true
    });

    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service",
        dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                },
                update: {
                    url: crudServiceBaseUrl + "/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: crudServiceBaseUrl + "/Products/Create",
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
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        });
    $("#grid4").kendoGrid({
        dataSource: dataSource,
        navigatable: true,
        pageable: true,
        height: 550,
        toolbar: ["create"],
        columns: [{
            field: "nombre",
            title: "Nombre"

        },
        {
            field: "pais",
            title: "País"

        },
        {
            field: "ciudad",
            title: "Ciudad"

        },
        {
            field: "barrio",
            title: "Barrios"

        },
        {
            field: "profesiones",
            title: "Profesiones"

        },
        {
            field: "hobbies",
            title: "Hobbies"

        },
        {
            command: ["edit", "destroy"],
            title: "&nbsp"
        }
        ],
        editable: "inline"
    });

    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service",
        dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                },
                update: {
                    url: crudServiceBaseUrl + "/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: crudServiceBaseUrl + "/Products/Create",
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
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        });
    $("#grid5").kendoGrid({
        dataSource: dataSource,
        navigatable: true,
        pageable: true,
        height: 550,
        toolbar: ["create"],
        columns: [{
            field: "nombre",
            title: "Nombre"

        },
        {
            field: "pais",
            title: "País"

        },
        {
            field: "ciudad",
            title: "Ciudad"

        },
        {
            field: "barrio",
            title: "Barrios"

        },
        {
            field: "profesiones",
            title: "Profesiones"

        },
        {
            field: "hobbies",
            title: "Hobbies"

        },
        {
            command: ["edit", "destroy"],
            title: "&nbsp"
        }
        ],
        editable: "popup"
    });

    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service",
        dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                },
                update: {
                    url: crudServiceBaseUrl + "/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: crudServiceBaseUrl + "/Products/Create",
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
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        });
    $("#grid6").kendoGrid({
        dataSource: dataSource,
        pageable: true,
        height: 550,
        toolbar: ["create"],
        columns: [{
            field: "nombre",
            title: "Nombre"

        },
        {
            field: "pais",
            title: "País",
            editor: categoryDropDownEditor

        },
        {
            field: "ciudad",
            title: "Ciudad"

        },
        {
            field: "barrio",
            title: "Barrios"

        },
        {
            field: "profesiones",
            title: "Profesiones"

        },
        {
            field: "hobbies",
            title: "Hobbies"

        },
        {
            command: ["destroy"],
            title: " "
        }
        ],
        editable: true
    });

    function categoryDropDownEditor(container, options) {
        $('<input required name="' + options.field + '"/>')
            .appendTo(container)
            .kendoDropDownList({
                autoBind: false,
                dataTextField: "pais",
                dataValueField: "pais",
                dataSource: {
                    transport: {
                        read: {
                            url: "../Grid/DatosGrid"
                        }
                    }
                }
            });
    }
    $("#grid7").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
            },
            schema: {
                model: {
                    fields: {
                        OrderID: { type: "number" },
                        Freight: { type: "number" },
                        ShipName: { type: "string" },
                        OrderDate: { type: "date" },
                        ShipCity: { type: "string" }
                    }
                }
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
        },
        height: 550,
        filterable: {
            mode: "row"
        },
        pageable: true,
        columns:
            [{
                field: "OrderID",
                width: 225,
                filterable: {
                    cell: {
                        showOperators: false
                    }
                }
            },
            {
                field: "ShipName",
                width: 500,
                title: "Ship Name",
                filterable: {
                    cell: {
                        operator: "contains",
                        suggestionOperator: "contains"
                    }
                }
            }, {
                field: "Freight",
                width: 255,
                filterable: {
                    cell: {
                        operator: "gte"
                    }
                }
            }, {
                field: "OrderDate",
                width: 255,
                title: "Order Date",
                format: "{0:MM/dd/yyyy}"
            }]
    });

    var telerikWebServiceBase = "https://demos.telerik.com/kendo-ui/service/";

    $("#client").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                },
                update: {
                    url: crudServiceBaseUrl + "/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: crudServiceBaseUrl + "/Products/Create",
                    dataType: "jsonp"
                },
                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                },

            },
            batch: true,
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        filterable: true,
        toolbar: ["create", "save", "cancel"],
        columns: [{
            field: "nombre",
            title: "Nombre"
        },
        {
            field: "pais",
            title: "País",
            editor: categoryDropDownEditor
        },
        {
            field: "ciudad",
            title: "Ciudad"

        },
        {
            field: "barrio",
            title: "Barrios"

        },
        {
            field: "profesiones",
            title: "Profesiones"

        },
        {
            field: "hobbies",
            title: "Hobbies"

        },
        {
            command: ["destroy"],
            title: " "
        }
        ],
        editable: true
    });

    $("#server").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: telerikWebServiceBase + "Northwind.svc/Employees"
            },
            pageSize: 20,
            serverPaging: true,
            serverSorting: true,
            serverFiltering: true,
        },
        editable: true,
        filterable: true,
        pageable: true,
        columns: [
            {
                field: "FirstName",
                title: "First Name",
                filterable: {
                    multi: true,
                    //when serverPaging of the Grid is enabled, dataSource should be provided for all the Filterable Multi Check widgets
                    dataSource: {
                        transport: {
                            read: {
                                url: telerikWebServiceBase + "Employees/Unique",
                                dataType: "jsonp",
                                data: {
                                    field: "FirstName"
                                }
                            }
                        }
                    }
                },
                width: "220px"
            },
            {
                field: "LastName",
                filterable: {
                    dataSource: {
                        transport: {
                            read: {
                                url: telerikWebServiceBase + "Employees/Unique",
                                dataType: "jsonp",
                                data: {
                                    field: "LastName"
                                }
                            }
                        }
                    },
                    multi: true
                },
                title: "Last Name",
                width: "220px"
            },
            {
                field: "Country",
                filterable: {
                    multi: true,
                    dataSource: {
                        transport: {
                            read: {
                                url: telerikWebServiceBase + "Employees/Unique",
                                dataType: "jsonp",
                                data: {
                                    field: "Country"
                                }
                            }
                        }
                    },
                    itemTemplate: function (e) {
                        if (e.field == "all") {
                            //handle the check-all checkbox template
                            return "<div><label><strong><input type='checkbox' />#= all#</strong></label></div>";
                        } else {
                            //handle the other checkboxes
                            return "<span><label><input type='checkbox' name='" + e.field + "' value='#=Country#'/><span>#= Country #</span></label></span>"
                        }
                    }
                },
                width: "220px"
            },
            {
                field: "City",
                filterable: {
                    multi: true,
                    dataSource: [{
                        City: "Seattle",
                    }, {
                        City: "Tacoma",
                    }, {
                        City: "Kirkland",
                    }, {
                        City: "Redmond",
                    }, {
                        City: "London"
                    }],
                    checkAll: false
                },
                width: "220px"
            },
            {
                filterable: {
                    multi: true,
                    dataSource: {
                        transport: {
                            read: {
                                url: telerikWebServiceBase + "Employees/Unique",
                                dataType: "jsonp",
                                data: {
                                    field: "Title"
                                }
                            }
                        }
                    }
                },
                field: "Title"
            }
        ]
    });


    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";
    var inStockData = [],
        discontinuedData = [];
    $.ajax({
        type: "READ",
        url: crudServiceBaseUrl + "/Products",
        dataType: "jsonp",
        success: function (data) {
            data.forEach(function (item) {
                item.Discontinued === false ? inStockData.push(item) : discontinuedData.push(item);
            });
        }
    }).done(function () {
        var inStockDS = new kendo.data.DataSource({
            data: inStockData,
            schema: {
                model: {
                    id: "ProductID"
                }
            },
            pageSize: 10,
        });

        var discontinuedDS = new kendo.data.DataSource({
            data: discontinuedData,
            schema: {
                model: {
                    id: "ProductID"
                }
            },
            pageSize: 10
        });

        $("#inStockProductsGrid").data("kendoGrid").setDataSource(inStockDS);
        $("#discontinuedGrid").data("kendoGrid").setDataSource(discontinuedDS);
    });

    $("#inStockProductsGrid").kendoGrid({
        pageable: true,
        height: 400,
        width: 550,
        columns: [
            { draggable: true, width: "40px" },
            { field: "ProductName", title: "Product Name", width: "200px" },
            { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "140px" },
            {
                field: "Discontinued", title: "In Stock",
                template: "<span id='badge_#=ProductID#' class='badgeTemplate'></span>",
                attributes: { style: "text-align: center;" },
                width: "130px"
            }],
        dataBound: onDataBound,
        navigatable: true,
        reorderable: {
            rows: true
        },
        rowReorder: onRowRordered
    });

    $("#discontinuedGrid").kendoGrid({
        pageable: true,
        height: 400,
        width: 550,
        columns: [
            { draggable: true, width: "40px" },
            { field: "ProductName", title: "Product Name", width: "200px" },
            { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "140px" },
            {
                field: "Discontinued", title: "In Stock",
                template: "<span id='badge_#=ProductID#' class='badgeTemplate'></span>",
                attributes: { style: "text-align: center;" },
                width: "130px"
            }],
        dataBound: onDataBound,
        navigatable: true,
        reorderable: {
            rows: true
        },
        rowReorder: onRowRordered
    });


    function onDataBound(e) {
        var grid = this;
        grid.table.find("tr").each(function () {
            var dataItem = grid.dataItem(this);
            var themeColor = dataItem.Discontinued ? 'error' : 'success';
            var text = dataItem.Discontinued ? 'not available' : 'available';

            $(this).find(".badgeTemplate").kendoBadge({
                themeColor: themeColor,
                text: text,
            });
        })
    }

    function onRowRordered(ev) {
        var grid = ev.sender,
            dataSource = grid.dataSource,
            externalGrid, externalDataItem;

        if (ev.oldIndex === -1) { // Row dropped from external grid
            ev.preventDefault();
            externalGrid = ev.row.parents(".k-grid").data("kendoGrid");

            externalDataItem = externalGrid.dataItem(ev.row);
            externalDataItem.Discontinued === true ? externalDataItem.Discontinued = false : externalDataItem.Discontinued = true;

            externalGrid.dataSource.remove(externalDataItem);
            dataSource.insert(ev.newIndex, externalDataItem.toJSON());
        }
    }

    $("#singleSort").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        sortable: {
            mode: "single",
            allowUnsort: false
        },
        scrollable: false,
        columns: [{
            field: "nombre",
            title: "Nombre"

        },
        {
            field: "pais",
            title: "País"

        },
        {
            field: "ciudad",
            title: "Ciudad"

        },
        {
            field: "barrio",
            title: "Barrios"

        },
        {
            field: "profesiones",
            title: "Profesiones"

        },
        {
            field: "hobbies",
            title: "Hobbies"

        }
        ],
    });

    $("#mixedSort").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        sortable: {
            mode: "mixed",
            allowUnsort: true,
            showIndexes: true
        },
        scrollable: false,
        columns: [{
            field: "nombre",
            title: "Nombre"

        },
        {
            field: "pais",
            title: "País",

        },
        {
            field: "ciudad",
            title: "Ciudad"

        },
        {
            field: "barrio",
            title: "Barrios"

        },
        {
            field: "profesiones",
            title: "Profesiones"

        },
        {
            field: "hobbies",
            title: "Hobbies"

        }
        ]
    })

    $("#grid8").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
            },
            schema: {
                model: {
                    fields: {
                        OrderID: { type: "number" },
                        Freight: { type: "number" },
                        ShipName: { type: "string" },
                        OrderDate: { type: "date" },
                        ShipCity: { type: "string" }
                    }
                }
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true
        },
        height: 550,
        sortable: {
            mode: "mixed",
            allowUnsort: true,
            showIndexes: true
        },
        toolbar: ["search"],
        search: {
            fields: [
                { name: "OrderID", operator: "eq" },
                { name: "Freight", operator: "gte" },
                { name: "ShipName", operator: "contains" },
                { name: "ShipCity", operator: "contains" },
            ]
        },
        columns: [
            {
                field: "OrderID",
                title: "Order ID",
            },
            "Freight",
            {
                field: "OrderDate",
                title: "Order Date",
                format: "{0:MM/dd/yyyy}"
            }, {
                field: "ShipName",
                title: "Ship Name"
            }, {
                field: "ShipCity",
                title: "Ship City"
            }
        ]
    });

    $("#rowSelection").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        selectable: "multiple",
        scrollable: false,
        persistSelection: true,
        navigatable: true,
        columns: [
            {
                field: "nombre",
                title: "Nombre"

            },
            {
                field: "pais",
                title: "País"

            },
            {
                field: "ciudad",
                title: "Ciudad"

            },
            {
                field: "barrio",
                title: "Barrios"

            },
            {
                field: "profesiones",
                title: "Profesiones"

            },
            {
                field: "hobbies",
                title: "Hobbies"

            }
        ],
    });

    $("#cellSelection").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        selectable: "multiple cell",
        pageable: {
            buttonCount: 5
        },
        scrollable: false,
        navigatable: true,
        columns: [
            {
                field: "nombre",
                title: "Nombre"

            },
            {
                field: "pais",
                title: "País"

            },
            {
                field: "ciudad",
                title: "Ciudad"

            },
            {
                field: "barrio",
                title: "Barrios"

            },
            {
                field: "profesiones",
                title: "Profesiones"

            },
            {
                field: "hobbies",
                title: "Hobbies"

            }
        ]
    });

    function onChange(arg) {
        console.log("El id del producto seleccionado es: [" + this.selectedKeyNames().join(", ") + "]");
    }

    $("#grid9").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        scrollable: false,
        persistSelection: true,
        sortable: true,
        change: onChange,
        columns: [
            { selectable: true, width: "50px" },
            {
                field: "nombre",
                title: "Nombre"

            },
            {
                field: "pais",
                title: "País"

            },
            {
                field: "ciudad",
                title: "Ciudad"

            },
            {
                field: "barrio",
                title: "Barrios"

            },
            {
                field: "profesiones",
                title: "Profesiones"

            },
            {
                field: "hobbies",
                title: "Hobbies"

            }
        ]
    });

    $("#grid10").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
            },
            serverPaging: true,
            serverSorting: true
        },
        sortable: true,
        pageable: true,
        detailInit: detailInit,
        dataBound: function () {
            this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
        columns: [
            {
                field: "FirstName",
                title: "First Name",
                width: "110px"
            },
            {
                field: "LastName",
                title: "Last Name",
                width: "110px"
            },
            {
                field: "Country",
                width: "110px"
            },
            {
                field: "City",
                width: "110px"
            },
            {
                field: "Title"
            }
        ]
    });

    function detailInit(e) {
        $("<div/>").appendTo(e.detailCell).kendoGrid({
            dataSource: {
                type: "odata",
                transport: {
                    read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                },
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                pageSize: 10,
                filter: { field: "EmployeeID", operator: "eq", value: e.data.EmployeeID }
            },
            scrollable: false,
            sortable: true,
            pageable: true,
            columns: [
                { field: "OrderID", width: "110px" },
                { field: "ShipCountry", title: "Ship Country", width: "110px" },
                { field: "ShipAddress", title: "Ship Address" },
                { field: "ShipName", title: "Ship Name", width: "300px" }
            ]
        });
    }

    $("#grid11").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            },
            pageSize: 20
        },
        height: 550,
        groupable: true,
        sortable: true,
        reorderable: true,
        resizable: true,
        columnMenu: true,
        filterable: {
            mode: "row"
        },
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            field: "ContactName",
            title: "Contact Name",
            width: 250,
            locked: true
        }, {
            field: "ContactTitle",
            title: "Contact Title",
            width: 350
        }, {
            field: "CompanyName",
            title: "Company Name",
            width: 350
        }, {
            field: "Country",
            width: 450
        }]
    });

    var grid = $("#grid11").data("kendoGrid");

    $("#save").click(function (e) {
        e.preventDefault();
        localStorage["kendo-grid-options"] = kendo.stringify(grid.getOptions());
    });

    $("#load").click(function (e) {
        e.preventDefault();
        var options = localStorage["kendo-grid-options"];
        if (options) {
            grid.setOptions(JSON.parse(options));
        }
    });

    $("#grid12").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        scrollable: true,
        sortable: true,
        filterable: true,
        groupable: true,
        pageable: {
            input: true,
            numeric: false
        },
        columns: [
            {
                field: "nombre",
                title: "Nombre",
                hideOnGroup: true

            },
            {
                field: "pais",
                title: "País",
                hideOnGroup: true

            },
            {
                field: "ciudad",
                title: "Ciudad",
                hideOnGroup: true

            },
            {
                field: "barrio",
                title: "Barrios",
                hideOnGroup: true

            },
            {
                field: "profesiones",
                title: "Profesiones",
                hideOnGroup: true

            },
            {
                field: "hobbies",
                title: "Hobbies",
                hideOnGroup: true

            }
        ]
    });

    $("#grid13").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        sortable: true,
        reorderable: true,
        resizable: true,
        filterable: true,
        groupable: true,
        columnMenu: true,
        pageable: true,
        columns: [
            {
                field: "nombre",
                title: "Nombre",
                lockable: false

            },
            {
                field: "pais",
                title: "País",

            },
            {
                field: "ciudad",
                title: "Ciudad",


            },
            {
                field: "barrio",
                title: "Barrios",

            },
            {
                field: "profesiones",
                title: "Profesiones",

            },
            {
                field: "hobbies",
                title: "Hobbies",
                lockable: false

            }
        ]
    });

    $("#grid14").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        sortable: true,
        reorderable: true,
        groupable: true,
        resizable: true,
        filterable: true,
        columnMenu: true,
        pageable: true,
        columns: [
            {
                field: "nombre",
                title: "Nombre",
                stickable: true
            },
            {
                field: "pais",
                title: "País",
                stickable: true
            },
            {
                field: "ciudad",
                title: "Ciudad",
                stickable: true

            },
            {
                field: "barrio",
                title: "Barrios",
                sticky: true

            },
            {
                field: "profesiones",
                title: "Profesiones",
                stickable: true

            },
            {
                field: "hobbies",
                title: "Hobbies",
                stickable: true
            }
        ]
    });

    $("#grid15").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        sortable: true,
        reorderable: true,
        groupable: true,
        resizable: true,
        columnMenu: true,
        columns: [
            {
                field: "nombre",
                title: "Nombre",
            },
            {
                title: "Localización",
                columns: [
                    {
                        field: "pais",
                        title: "País",
                    },
                    {
                        field: "ciudad",
                        title: "Ciudad",

                    },
                    {
                        field: "barrio",
                        title: "Barrios",

                    }
                ]
            },
            {
                field: "profesiones",
                title: "Profesiones",
            },
            {
                field: "hobbies",
                title: "Hobbies",
            }
        ]
    });

    $("#grid16").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        sortable: true,
        reorderable: true,
        resizable: true,
        pageable: true,
        columns: [
            {
                field: "nombre",
                title: "Nombre",
            },
            {
                field: "pais",
                title: "País",
            },
            {
                field: "ciudad",
                title: "Ciudad",

            },
            {
                field: "barrio",
                title: "Barrios",

            },

            {
                field: "profesiones",
                title: "Profesiones",
            },
            {
                field: "hobbies",
                title: "Hobbies",
            }
        ]
    });

    $("#grid17").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            },
            schema: {
                model: {
                    fields: {
                        Nombre: { editable: false, nullable: true },
                        Pais: { validation: { required: true } },
                        Ciudad: { validation: { required: true, min: 1 } },
                        Barrio: { validation: { required: true } },
                        Profesiones: { validation: { required: true } },
                        Hobbies: { validation: { required: true } }
                    }
                }
            }
        },
        sortable: true,
        reorderable: true,
        resizable: true,
        pageable: true,
        columns: [
            {
                field: "nombre",
                title: "Nombre",
            },
            {
                field: "pais",
                title: "País",
            },
            {
                field: "ciudad",
                title: "Ciudad",

            },
            {
                field: "barrio",
                title: "Barrios",

            },

            {
                field: "profesiones",
                title: "Profesiones",
            },
            {
                field: "hobbies",
                title: "Hobbies",
            }
        ]
    });

    var paises = [
        {
            "value": 1,
            "text": "Alemania"
        },
        {
            "value": 2,
            "text": "Colombia"
        },
        {
            "value": 3,
            "text": "España"
        },
        {
            "value": 4,
            "text": "Italia"
        }, {
            "value": 5,
            "text": "Estados Unidos"
        }
    ];

    var dataSource = new kendo.data.DataSource({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        autoSync: true,
        schema: {
            model: {
                fields: {
                    Nombre: { editable: false, nullable: true },
                    IdPais: { field: "IdPais", type: "number" },
                    Ciudad: { validation: { required: true, min: 1 } },
                    Barrio: { validation: { required: true } },
                    Profesiones: { validation: { required: true } },
                    Hobbies: { validation: { required: true } }
                }
            }
        }
    });

    $("#grid18").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        filterable: true,
        groupable: true,
        pageable: true,
        toolbar: ["create"],
        columns: [
            {
                field: "nombre",
                title: "Nombre",
            },
            {
                field: "idPais",
                title: "País",
                values: paises
            },
            {
                field: "ciudad",
                title: "Ciudad",

            },
            {
                field: "barrio",
                title: "Barrios",

            },

            {
                field: "profesiones",
                title: "Profesiones",
            },
            {
                field: "hobbies",
                title: "Hobbies",
            },
            { command: "destroy", title: " " }
        ],
        editable: true
    });

    function onChange(arg) {
        var selected = $.map(this.select(), function (item) {
            return $(item).text();
        });

        console.log("Seleccionado: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }

    function onDataBound(arg) {
        console.log("Grid data bound");
    }

    function onDataBinding(arg) {
        console.log("Grid data binding");
    }

    function onSorting(arg) {
        console.log("Clasificación en el campo: " + arg.sort.field + ", direction:" + (arg.sort.dir || "none"));
    }

    function onFiltering(arg) {
        console.log("Filtro " + kendo.stringify(arg.filter));
    }

    function onPaging(arg) {
        console.log("Pasar al índice de páginas:" + arg.page);
    }

    function onGrouping(arg) {
        console.log(" Grupo sobre: " + kendo.stringify(arg.groups));
    }

    function onGroupExpand(arg) {
        console.log("El grupo a ampliar: " + kendo.stringify(arg.group));
    }

    function onGroupCollapse(arg) {
        console.log("El grupo a colapsar: " + kendo.stringify(arg.group));
    }
    var grid = $("#grid19").kendoGrid({
        dataSource: {
            transport: {
                read: {
                    url: "../Grid/DatosGrid"
                }
            }
        },
        change: onChange,
        dataBound: onDataBound,
        dataBinding: onDataBinding,
        selectable: "multiple cell",
        pageable: true,
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
                field: "nombre",
                title: "Nombre",
            },
            {
                field: "pais",
                title: "País",
            },
            {
                field: "ciudad",
                title: "Ciudad",

            },
            {
                field: "barrio",
                title: "Barrios",

            },
            {
                field: "profesiones",
                title: "Profesiones",
            },
            {
                field: "hobbies",
                title: "Hobbies",
            }
        ]
    });
});








