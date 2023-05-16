var octData = [{
    category: "Impressions ",
    value: 434823,
    color: "#0e5a7e"
}, {
    category: "Clicks",
    value: 356854,
    color: "#166f99"
}, {
    category: "Unique Visitors",
    value: 280022,
    color: "#2185b4"
}, {
    category: "Downloads",
    value: 190374,
    color: "#319fd2"
}, {
    category: "Purchases",
    value: 120392,
    color: "#3eaee2"
}];

var novData = [{
    category: "Impressions ",
    value: 984528,
    color: "#0e5a7e"
}, {
    category: "Clicks",
    value: 856287,
    color: "#166f99"
}, {
    category: "Unique Visitors",
    value: 643694,
    color: "#2185b4"
}, {
    category: "Downloads",
    value: 567843,
    color: "#319fd2"
}, {
    category: "Purchases",
    value: 389137,
    color: "#3eaee2"
}];

var decData = [{
    category: "Impressions ",
    value: 1200528,
    color: "#0e5a7e"
}, {
    category: "Clicks",
    value: 989287,
    color: "#166f99"
}, {
    category: "Unique Visitors",
    value: 885694,
    color: "#2185b4"
}, {
    category: "Downloads",
    value: 788843,
    color: "#319fd2"
}, {
    category: "Purchases",
    value: 694137,
    color: "#3eaee2"
}];

function createChart(chartName, data, text) {
    $('#' + chartName).kendoChart({
        title: {
            text: text,
            position: "bottom"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                color: "white",
                format: "N0"
            },
            dynamicSlope: false,
            dynamicHeight: false
        },
        series: [{
            type: "funnel",
            data: data
        }],
        tooltip: {
            visible: true,
            template: "#= category #"
        }
    });
}

function createCharts() {
    createChart('chart-oct', octData, "October");
    createChart('chart-nov', novData, "November");
    createChart('chart-dec', decData, "December");
}

$(document).ready(function () {

    createCharts();

    $('.box-col').on('click', ':checkbox', refresh);
    $(document).bind("kendo:skinChange", createCharts);
});

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "The AIDA model"
        },
        legend: {
            position: "top"
        },
        seriesDefaults: {
            dynamicHeight: false,
            labels: {
                template: "#= category #",
                visible: true,
                font: "15px sans-serif",
                align: "center",
                position: "center",
                background: "transparent",
                color: "#000",
                padding: 5,
                border: {
                    width: 1,
                    dashType: "dot",
                    color: "#000"
                },
                format: "N0"
            }
        },
        series: [{
            type: "funnel",
            data: [{
                category: "Awareness",
                value: 4
            }, {
                category: "Interest",
                value: 3
            }, {
                category: "Desire",
                value: 2
            }, {
                category: "Action",
                value: 1
            }]
        }],
        tooltip: {
            visible: true,
            template: "#= category # - #= kendo.format('{0:P}', percentage) #"
        }
    });
}

$(document).ready(function () {
    createChart2();
    $(document).bind("kendo:skinChange", createChart2);
});

function refresh() {
    var chart = $("#chart2").data("kendoChart"),
        labels = $("#labels").prop("checked"),
        alignInputs = $("input[name='alignType']"),
        alignLabels = alignInputs.filter(":checked").val(),
        positionInputs = $("input[name='positionType']"),
        position = positionInputs.filter(":checked").val();
}

function createChart3() {
    $("#chart3").kendoChart({
        dataSource: {
            transport: {
                read: {
                    url: "../content/dataviz/js/spain-electricity.json",
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "desc"
            }
        },
        legend: {
            visible: false
        },
        title: {
            text: "Spain windpower electricity production (GWh)"
        },
        seriesDefaults: {
            type: "funnel",
            dynamicSlope: true,
            dynamicHeight: false,
            labels: {
                visible: true,
                template: "#= dataItem.year #"
            }
        },
        series: [{
            field: "wind",
            categoryField: "year",
            segmentSpacing: 2
        }],
        tooltip: {
            visible: true,
            template: "#= category # - #= value # GWh"
        }
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);

var dataBefore = [{
    description: "All Visitors",
    visitors: 23945
}, {
    description: "Tried the Demos",
    visitors: 19156
}, {
    description: "Downloaded",
    visitors: 13984
}, {
    description: "Requested a Quote",
    visitors: 3216
}, {
    description: "Purchased",
    visitors: 1673
}];

var dataAfter = [{
    description: "All Visitors",
    visitors: 28536
}, {
    description: "Tried the Demos",
    visitors: 26539
}, {
    description: "Downloaded",
    visitors: 23088
}, {
    description: "Requested a Quote",
    visitors: 13853
}, {
    description: "Purchased",
    visitors: 9697
}];

function createChart4(chartName, data, description) {
    $("#" + chartName).kendoChart({
        title: {
            text: description,
            margin: {
                top: 10,
                bottom: 10,
                left: -5
            }
        },
        legend: {
            visible: false
        },
        dataSource: {
            data: data
        },
        series: [{
            type: "funnel",
            dynamicSlope: true,
            field: "visitors",
            categoryField: "description",
            dynamicHeight: false,
            labels: {
                color: "black",
                visible: true,
                background: "transparent",
                template: "#= category #: #= value#",
                align: "left"
            }
        }],
        tooltip: {
            visible: true,
            template: "#= category # #= kendo.format('{0:p}',value/dataItem.parent()[0].visitors)#"
        }
    });
}

function createCharts4() {
    createChart4("before", dataBefore, "Before optimization");
    createChart4("after", dataAfter, "After optimization");
}

$(document).ready(createCharts4);
$(document).bind("kendo:skinChange", createCharts4);
