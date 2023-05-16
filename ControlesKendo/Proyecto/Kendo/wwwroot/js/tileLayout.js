$("#tilelayout").kendoTileLayout({
    containers: [{
        colSpan: 3,
        rowSpan: 1,
        header: {
            text: "Page Views"
        },
        bodyTemplate: kendo.template($("#views-chart-template").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "Conversion Rate"
        },
        bodyTemplate: kendo.template($("#conversion-rate").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "Currently"
        },
        bodyTemplate: kendo.template($("#current").html())
    }, {
        colSpan: 2,
        rowSpan: 1,
        header: {
            text: "Most Visited Pages"
        },
        bodyTemplate: kendo.template($("#pages-chart-template").html())
    }, {
        colSpan: 2,
        rowSpan: 2,
        header: {
            text: "Conversions by Channel"
        },
        bodyTemplate: kendo.template($("#conversions-grid-template").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "Bounce Rate"
        },
        bodyTemplate: kendo.template($("#bounce-rate").html())
    }, {
        colSpan: 2,
        rowSpan: 2,
        header: {
            text: "Users by Channel"
        },
        bodyTemplate: kendo.template($("#users-grid-template").html())
    }, {
        colSpan: 1,
        rowSpan: 2,
        header: {
            text: "Visitors"
        },
        bodyTemplate: kendo.template($("#visitors-chart-template").html())
    }, {
        colSpan: 2,
        rowSpan: 1,
        header: {
            text: "Conversion This Month"
        },
        bodyTemplate: kendo.template($("#conversion-chart-template").html())
    }],
    columns: 5,
    columnsWidth: 300,
    rowsHeight: 235,
    reorderable: true,
    resizable: true,
    resize: function (e) {
        var rowSpan = e.container.css("grid-column-end");
        var chart = e.container.find(".k-chart").data("kendoChart");
        if (rowSpan === "span 1" && chart) {
            chart.options.categoryAxis.labels.visible = false;
            chart.redraw();
        }
        if (rowSpan !== "span 1" && chart) {
            chart.options.categoryAxis.labels.visible = true;
            chart.redraw();
        }

        https://docs.telerik.com/kendo-ui/styles-and-layout/using-kendo-in-responsive-web-pages
        kendo.resize(e.container, true);
    }
});

var gridDs = new kendo.data.DataSource({
    data: [
        { channel: "Organic Search", conversion: 8232, users: 70500 },
        { channel: "Direct", conversion: 6574, users: 24900 },
        { channel: "Referral", conversion: 4932, users: 20000 },
        { channel: "Social Media", conversion: 2928, users: 19500 },
        { channel: "Email", conversion: 2456, users: 18100 },
        { channel: "Other", conversion: 1172, users: 16540 },
    ],
    schema: {
        model: {
            fields: {
                conversion: { type: "number" },
                users: { type: "number" }
            }
        }
    }
});

$("#conversions-grid").kendoGrid({
    dataSource: gridDs,
    columns: [{
        field: "channel", title: "Channel", width: 100
    }, {
        field: "conversion", title: "Conversion", format: "{0:n0}", width: 80
    }],
});

$("#users-grid").kendoGrid({
    dataSource: gridDs,
    columns: [{
        field: "channel", title: "Channel", width: 100
    }, {
        field: "users", title: "Users", format: "{0:n0}", width: 80
    }]
});

function createCharts() {
    var showLabels = $(document).width() > 677;

    $("#views-chart").kendoChart({
        dataSource: {
            data: [
                { value: 2000, date: new Date(2020, 2, 30) },
                { value: 80000, date: new Date(2020, 3, 5) },
                { value: 130000, date: new Date(2020, 3, 10) },
                { value: 170000, date: new Date(2020, 3, 15) },
                { value: 190000, date: new Date(2020, 3, 20) },
                { value: 150000, date: new Date(2020, 3, 25) },
                { value: 160000, date: new Date(2020, 3, 30) }]
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "line",
            style: "smooth",
            markers: {
                visible: false
            }
        },
        series: [{
            field: "value",
            categoryField: "date"
        }],
        valueAxis: {
            line: {
                width: 0
            },
            labels: {
                step: 2
            },
            min: 0,
            max: 200000,
        },
        categoryAxis: {
            baseUnit: "fit",
            labels: {
                rotation: "auto",
                format: "{0:d MMMM}",
                visible: showLabels
            },
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        }
    });

    $("#pages-chart").kendoChart({
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            data: [90000, 60000, 40000, 30000, 10000]
        }],
        valueAxis: {
            line: {
                width: 0
            },
            labels: {
                step: 5
            },
            majorUnit: 10000,
            min: 0,
            max: 100000
        },
        categoryAxis: {
            categories: ["Home", "Price", "Sign-up", "Product", "Blog"],
            labels: {
                rotation: "auto",
                visible: showLabels
            },
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        }
    });

    $("#conversion-chart").kendoChart({
        dataSource: {
            data: [
                { value: 2000, date: new Date(2020, 3, 1) },
                { value: 80000, date: new Date(2020, 3, 5) },
                { value: 130000, date: new Date(2020, 3, 10) },
                { value: 170000, date: new Date(2020, 3, 15) },
                { value: 190000, date: new Date(2020, 3, 20) },
                { value: 190000, date: new Date(2020, 3, 30) }
            ]
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "line",
            style: "smooth",
            markers: {
                visible: false
            }
        },
        series: [{
            field: "value",
            categoryField: "date"
        }],
        valueAxis: {
            line: {
                width: 0
            },
            labels: {
                step: 2
            },
            min: 0,
            max: 200000,
        },
        categoryAxis: {
            baseUnitStep: "auto",
            autoBaseUnitSteps: {
                days: [9]
            },
            labels: {
                rotation: "auto",
                format: "{0:d MMMM}",
                visible: showLabels
            },
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        }
    });

    $("#visitors-chart").kendoChart({
        dataSource: {
            data: [
                { value: 70, type: "New" },
                { value: 30, type: "Returning" },
            ]
        },
        series: [{
            type: "donut",
            field: "value",
            categoryField: "type",
            startAngle: 70,
            holeSize: 30
        }],
        legend: {
            position: "bottom"
        }
    });

    kendo.resize($(".k-grid"));
}

$(document).ready(createCharts);
$(document).bind("kendo:skinChange", createCharts);

$(window).on("resize", function () {
    kendo.resize($(".k-chart"));
});

$("#tilelayout2").kendoTileLayout({
    containers: [{
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "Barcelona"
        },
        bodyTemplate: kendo.template($("#barcelona").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "Sofia"
        },
        bodyTemplate: kendo.template($("#sofia").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "Rome"
        },
        bodyTemplate: kendo.template($("#rome").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "South Africa"
        },
        bodyTemplate: kendo.template($("#sa").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "San Francisco"
        },
        bodyTemplate: kendo.template($("#sanfran").html())
    }, {
        colSpan: 1,
        rowSpan: 1,
        header: {
            text: "Sea View Apartments"
        },
        bodyTemplate: kendo.template($("#seaview").html())
    }],
    columns: 2,
    columnsWidth: 285,
    rowsHeight: 285,
    reorderable: true
});

$("#tilelayout3").kendoTileLayout({
    containers: [{
        colSpan: 5,
        rowSpan: 2,
        header: {
            text: "Team Performance"
        },
        bodyTemplate: kendo.template($("#chart-template2").html())
    }, {
        colSpan: 3,
        rowSpan: 2,
        header: {
            text: "Employee Hierarchy"
        },
        bodyTemplate: kendo.template($("#treelist-template2").html())
    }, {
        colSpan: 2,
        rowSpan: 2,
        header: {
            text: "Engagement"
        },
        bodyTemplate: kendo.template($("#gauge-template2").html())
    }],
    columns: 5,
    columnsWidth: 285,
    rowsHeight: 180,
    resizable: true,
    resize: function (e) {
        var colSpan = e.container.css("grid-column-end");
        var rowSpan = e.container.css("grid-row-end");

        var chart = e.container.find(".k-chart").data("kendoChart");
        if (colSpan === "span 1" && chart) {
            var options = {
                axisDefaults: {
                    labels: { visible: false }
                }
            };

            if (rowSpan === "span 1") {
                options.legend = { visible: false };
            }

            chart.setOptions(options);
        }

        if (colSpan !== "span 1" && chart) {
            var options = {};
            if (colSpan === "span 2" && rowSpan === "span 1") {
                options.axisDefaults = { visible: false };
                options.legend = { visible: false };
            }

            if (rowSpan !== "span 1") {
                options.legend = { visible: true };
                options.axisDefaults = { visible: true };
            }
            chart.setOptions(options);
        }

        kendo.resize(e.container, true);
    }
});

var service = "https://demos.telerik.com/kendo-ui/service";

$("#treelist2").kendoTreeList({
    dataSource: {
        transport: {
            read: {
                url: service + "/EmployeeDirectory/All",
                dataType: "jsonp"
            }
        },
        schema: {
            model: {
                id: "EmployeeID",
                parentId: "ReportsTo",
                fields: {
                    ReportsTo: { field: "ReportsTo", nullable: true },
                    EmployeeID: { field: "EmployeeId", type: "number" },
                    Extension: { field: "Extension", type: "number" }
                },
                expanded: true
            }
        }
    },
    filterable: true,
    sortable: true,
    columns: [
        {
            field: "FirstName", title: "First Name", width: 230,
        },
        { field: "LastName", title: "Last Name", width: 130 },
        { field: "Position", width: 180 }
    ]
});

function createCharts2() {
    $("#chart2").kendoChart({
        legend: {
            position: "bottom"
        },
        series: [{
            type: "line",
            data: [6, 10, 10, 10, 10, 9, 5, 5, 10, 8, 8, 5, 8, 11, 9, 15, 20, 23, 24, 21, 21, 20, 22, 22, 20, 18, 16, 15, 20, 13.2],
            name: "Company Average"
        }, {
            type: "bar",
            data: [16.4, 21.7, 35.4, 19, 10.9, 13.6, 10.9, 10.9, 10.9, 16.4, 16.4, 13.6, 13.6, 29.9, 27.1, 16.4, 13.6, 10.9, 16.4, 10.9, 24.5, 10.9, 8.1, 19, 21.7, 27.1, 24.5, 16.4, 27.1, 29.9],
            name: "Planned"
        }, {
            type: "bar",
            data: [15.4, 20, 35.4, 13, 12, 16, 13.2, 7.4, 20, 18.2, 20, 17.8, 20.3, 10, 30, 29.3, 20, 13.7, 25.2, 16.5, 10, 17.1, 10, 14.7, 20, 14.8, 10, 12, 20, 13.5],
            name: "Completed"
        }],
        valueAxes: [{
            line: {
                width: 0
            },
            min: 0,
            max: 40,
            majorUnit: 20
        }],
        categoryAxis: {
            categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        },
        tooltip: {
            visible: true,
            format: "{0}"
        }
    });

    $("#gauge2").kendoArcGauge({
        value: 90,
        centerTemplate: '#: value #%'
    });

    kendo.resize($(".k-card-body"));
}

$(document).ready(createCharts2);
$(document).bind("kendo:skinChange", createCharts2);
$(window).on("resize", function () {
    kendo.resize($(".k-card-body"));
});

$(document).ready(function () {
    function onResize(e) {
        console.log("Reajustado: " + e.container.find("> .k-card-header").text());
    }

    function onReorder(e) {
        console.log(e)
        console.log("Reordenado: " + e.container.find(".k-card-header").text());
    }

    $("#tilelayout4").kendoTileLayout({
        containers: [{
            colSpan: 1,
            rowSpan: 2,
            header: {
                text: "Shells"
            },
            bodyTemplate: kendo.template($("#shells").html())
        }, {
            colSpan: 1,
            rowSpan: 1,
            header: {
                text: "Tulips"
            },
            bodyTemplate: kendo.template($("#tulips").html())
        }, {
            colSpan: 1,
            rowSpan: 1,
            header: {
                text: "Cherry Blossoms"
            },
            bodyTemplate: kendo.template($("#park").html())
        }],
        columns: 2,
        columnsWidth: 285,
        rowsHeight: 350,
        reorderable: true,
        resizable: true,
        resize: onResize,
        reorder: onReorder
    })
});