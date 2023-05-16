$(document).ready(function () {

    $(".export-pdf").click(function () {
        kendo.drawing.drawDOM($(".content-wrapper"))
            .then(function (group) {
                return kendo.drawing.exportPDF(group, {
                    paperSize: "auto",
                    margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" }
                });
            })
            .done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "HR-Dashboard.pdf",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
    });

    $(".export-img").click(function () {
        kendo.drawing.drawDOM($(".content-wrapper"))
            .then(function (group) {
                return kendo.drawing.exportImage(group);
            })
            .done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "HR-Dashboard.png",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
    });

    $(".export-svg").click(function () {
        kendo.drawing.drawDOM($(".content-wrapper"))
            .then(function (group) {
                return kendo.drawing.exportSVG(group);
            })
            .done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "HR-Dashboard.svg",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
    });


    var data = [{
        "source": "Approved",
        "percentage": 237
    }, {
        "source": "Rejected",
        "percentage": 112
    }];

    var refs = [{
        "source": "Dev",
        "percentage": 42
    }, {
        "source": "Sales",
        "percentage": 18
    }, {
        "source": "Finance",
        "percentage": 29
    }, {
        "source": "Legal",
        "percentage": 11
    }];

    $("#applications").kendoChart({
        legend: {
            position: "bottom"
        },
        dataSource: {
            data: data
        },
        series: [{
            type: "donut",
            field: "percentage",
            categoryField: "source"
        }],
        chartArea: {
            background: "none"
        },
        tooltip: {
            visible: true,
            template: "${ category } - ${ value } applications"
        }
    });

    $("#users").kendoChart({
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            name: "Users Reached",
            data: [340, 894, 1345, 1012, 3043, 2013, 2561, 2018, 2435, 3012]
        }, {
            name: "Applications",
            data: [50, 80, 120, 203, 324, 297, 176, 354, 401, 349]
        }],
        valueAxis: {
            labels: {
                visible: false
            },
            line: {
                visible: false
            },
            majorGridLines: {
                visible: false
            }
        },
        categoryAxis: {
            categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
            line: {
                visible: false
            },
            majorGridLines: {
                visible: false
            }
        },
        chartArea: {
            background: "none"
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= series.name #: #= value #"
        }
    });

    $("#referrals").kendoChart({
        legend: {
            position: "bottom"
        },
        dataSource: {
            data: refs
        },
        series: [{
            type: "pie",
            field: "percentage",
            categoryField: "source"
        }],
        chartArea: {
            background: "none"
        },
        tooltip: {
            visible: true,
            template: "${ category } - ${ value }%"
        }
    });

    $("#grid").kendoGrid({
        dataSource: {
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            },
            pageSize: 15,
            group: { field: "ContactTitle" }
        },
        height: 450,
        groupable: true,
        sortable: true,
        selectable: "multiple",
        reorderable: true,
        resizable: true,
        filterable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [
            {
                field: "ContactName",
                template: "<div class=\'customer-name\'>#: ContactName #</div>",
                title: "Contact",
                width: 200
            }, {
                field: "ContactTitle",
                title: "Contact Title",
                width: 220
            }, {
                field: "Phone",
                title: "Phone",
                width: 160
            }, {
                field: "CompanyName",
                title: "Company Name"
            }, {
                field: "City",
                title: "City",
                width: 160
            }
        ]
    });
});

