function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Inventory"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "waterfall",
            data: [180, -60, -20, 10, 30],
            labels: {
                visible: true
            }
        }],
        categoryAxis: {
            categories: ["In stock", "Damaged", "Reserved", "In transit", "Refurbished"],
            labels: {
                rotation: "auto"
            }
        },
        axisDefaults: {
            majorGridLines: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

var requestData = [{
    caption: "DNS Lookup",
    elapsed: 20
}, {
    caption: "Connecting",
    elapsed: 122
}, {
    caption: "Sending",
    elapsed: 30
}, {
    caption: "Waiting",
    elapsed: 421
}, {
    caption: "Receiving",
    elapsed: 357
}, {
    caption: "Total",
    summary: "total"
}];

var palette = [
    "#95c3cd", "#abc75b", "#c6816f", "#968cb2", "#c0c0c0", "#2ba6ff"
];

function createChart2() {
    $("#chart2").kendoChart({
        dataSource: {
            data: requestData
        },
        title: {
            text: "Request latency breakdown"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "horizontalWaterfall",
            field: "elapsed",
            categoryField: "caption",
            summaryField: "summary",
            color: function (point) {
                return palette[point.index % palette.length];
            }
        }],
        axisDefaults: {
            majorGridLines: {
                visible: false
            }
        },
        valueAxis: {
            labels: {
                format: "{0} ms"
            }
        }
    });
}
$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

