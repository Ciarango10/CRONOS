$(document).ready(function () {
    var pivotgrid = $("#pivotgrid").kendoPivotGrid({
        filterable: true,
        sortable: true,
        columnWidth: 200,
        height: 580,
        dataSource: {
            type: "xmla",
            columns: [
                { name: "[Date].[Calendar]", expand: true },
                { name: "[Product].[Category]" }
            ],
            rows: [{ name: "[Geography].[City]" }],
            measures: ["[Measures].[Reseller Freight Cost]"],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: "https://demos.telerik.com/olap/msmdpump.dll"
            },
            schema: {
                type: "xmla"
            },
            error: function (e) {
                alert("Error: " + kendo.stringify(e.errors[0]));
            }
        }
    }).data("kendoPivotGrid");

    $("#configurator").kendoPivotConfigurator({
        dataSource: pivotgrid.dataSource,
        filterable: true,
        sortable: true,
        height: 580
    });
});

$(document).ready(function () {
    var pivotgrid = $("#pivotgrid2").kendoPivotGrid({
        filterable: true,
        sortable: true,
        columnWidth: 200,
        height: 580,
        dataSource: {
            type: "xmla",
            columns: [{ name: "[Date].[Calendar]", expand: true }, { name: "[Product].[Category]" }],
            rows: [{ name: "[Geography].[City]" }],
            measures: [
                { name: "[Measures].[Internet Revenue Status]", type: "status" }, //KPI Status measure that will render kpiStatusTemplate
                { name: "[Measures].[Internet Revenue Trend]", type: "trend" } //KPI Trend measure that will render kpiTrendTemplate
            ],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: "https://demos.telerik.com/olap/msmdpump.dll"
            },
            schema: {
                type: "xmla"
            },
            error: function (e) {
                alert("error: " + kendo.stringify(e.errors[0]));
            }
        }
    }).data("kendoPivotGrid");

    $("#configurator2").kendoPivotConfigurator({
        dataSource: pivotgrid.dataSource,
        filterable: true,
        sortable: true,
        height: 580
    });
});

//$(document).ready(function () {
//    var pivotgrid = $("#pivotgrid3").kendoPivotGrid({
//        filterable: true,
//        sortable: true,
//        columnWidth: 120,
//        height: 570,
//        dataSource: {
//            data: products,
//            schema: {
//                model: {
//                    fields: {
//                        ProductName: { type: "string" },
//                        UnitPrice: { type: "number" },
//                        UnitsInStock: { type: "number" },
//                        Discontinued: { type: "boolean" },
//                        CategoryName: { field: "Category.CategoryName" }
//                    }
//                },
//                cube: {
//                    dimensions: {
//                        ProductName: { caption: "All Products" },
//                        CategoryName: { caption: "All Categories" },
//                        Discontinued: { caption: "Discontinued" }
//                    },
//                    measures: {
//                        "Sum": { field: "UnitPrice", format: "{0:c}", aggregate: "sum" },
//                        "Average": { field: "UnitPrice", format: "{0:c}", aggregate: "average" }
//                    }
//                }
//            },
//            columns: [{ name: "CategoryName", expand: true }, { name: "ProductName" }],
//            rows: [{ name: "Discontinued", expand: true }],
//            measures: ["Sum"]
//        }
//    }).data("kendoPivotGrid");

//    $("#configurator3").kendoPivotConfigurator({
//        dataSource: pivotgrid.dataSource,
//        filterable: true,
//        sortable: true,
//        height: 570
//    });
//});

$(document).ready(function () {
    var pivotgrid = $("#pivotgrid4").kendoPivotGridV2({
        height: 700,
        dataSource: {
            type: "xmla",
            columns: [{ name: ['[Date].[Calendar]'], expand: true },
            { name: ['[Product].[Category]'] }],
            rows: [{ name: ['[Geography].[City]'], expand: true }],
            measures: [{ name: ['[Measures].[Reseller Freight Cost]'] }],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: 'https://demos.telerik.com/olap/msmdpump.dll'
            }
        }
    }).data("kendoPivotGridV2");

    $("#configurator4").kendoPivotConfiguratorV2({
        dataSource: pivotgrid.dataSource,
        filterable: true,
        sortable: true
    });

    $("#pivotbutton4").kendoPivotConfiguratorButton({
        configurator: "configurator"
    });

    $("#container4").kendoPivotContainer({
        configuratorPosition: "left"
    });
});

//$(document).ready(function () {

//    var pivotgrid = $("#pivotgrid5").kendoPivotGridV2({
//        columnWidth: 120,
//        height: 570,
//        dataSource: {
//            data: revenue,
//            sort: { field: "Year", dir: "asc" },
//            schema: {
//                model: {
//                    fields: {
//                        Country: { type: "string" },
//                        Revenue: { type: "number" },
//                        Year: { type: "number" },
//                        Sector: { type: "string" }
//                    }
//                },
//                cube: {
//                    dimensions: {
//                        Country: { caption: "All Countries" },
//                        Sector: { caption: "All Sectors" },
//                        Year: { caption: "All Years" }
//                    },
//                    measures: {
//                        "Sum": { field: "Revenue", format: "{0:c}", aggregate: "sum" },
//                        "Average": { field: "Revenue", format: "{0:c}", aggregate: "average" }
//                    }
//                }
//            },
//            columns: [{ name: "Year", expand: true }, { name: "Sector" }],
//            rows: [{ name: "Country", expand: true }],
//            measures: ["Sum", "Average"]
//        }
//    }).data("kendoPivotGridV2");

//    $("#configurator5").kendoPivotConfiguratorV2({
//        dataSource: pivotgrid.dataSource,
//        filterable: true,
//        sortable: true
//    });

//    $("#pivotbutton5").kendoPivotConfiguratorButton({
//        configurator: "configurator"
//    });

//    $("#container5").kendoPivotContainer({
//        configuratorPosition: "left"
//    });
//});

$(document).ready(function () {
    var pivotgrid = $("#pivotgrid6").kendoPivotGridV2({
        height: 700,
        dataCellTemplate: $("#dataCellTemplate").html(),
        columnHeaderTemplate: $("#headerTemplate").html(),
        rowHeaderTemplate: $("#headerTemplate").html(),
        dataSource: {
            type: "xmla",
            columns: [{ name: ['[Date].[Calendar]'], expand: true }],
            rows: [{ name: ['[Geography].[City]'], expand: true }],
            measures: [{ name: ['[Measures].[Reseller Freight Cost]'] }],
            transport: {
                connection: {
                    catalog: "Adventure Works DW 2008R2",
                    cube: "Adventure Works"
                },
                read: 'https://demos.telerik.com/olap/msmdpump.dll'
            }
        }
    }).data("kendoPivotGridV2");

    $("#configurator6").kendoPivotConfiguratorV2({
        dataSource: pivotgrid.dataSource,
        filterable: true,
        sortable: true,
        height: 580
    });

    $("#pivotbutton6").kendoPivotConfiguratorButton({
        configurator: "configurator"
    });

    $("#container6").kendoPivotContainer({
        configuratorPosition: "left"
    });
});