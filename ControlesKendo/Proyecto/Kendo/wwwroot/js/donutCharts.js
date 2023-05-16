function createChart() {
    $("#chart").kendoChart({
        title: {
            position: "bottom",
            text: "Share of Internet Population Growth"
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            type: "donut",
            startAngle: 150
        },
        series: [{
            name: "2011",
            data: [{
                category: "Asia",
                value: 30.8,
                color: "#9de219"
            }, {
                category: "Europe",
                value: 21.1,
                color: "#90cc38"
            }, {
                category: "Latin America",
                value: 16.3,
                color: "#068c35"
            }, {
                category: "Africa",
                value: 17.6,
                color: "#006634"
            }, {
                category: "Middle East",
                value: 9.2,
                color: "#004d38"
            }, {
                category: "North America",
                value: 4.6,
                color: "#033939"
            }]
        }, {
            name: "2012",
            data: [{
                category: "Asia",
                value: 53.8,
                color: "#9de219"
            }, {
                category: "Europe",
                value: 16.1,
                color: "#90cc38"
            }, {
                category: "Latin America",
                value: 11.3,
                color: "#068c35"
            }, {
                category: "Africa",
                value: 9.6,
                color: "#006634"
            }, {
                category: "Middle East",
                value: 5.2,
                color: "#004d38"
            }, {
                category: "North America",
                value: 3.6,
                color: "#033939"
            }],
            labels: {
                visible: true,
                background: "transparent",
                position: "outsideEnd",
                template: "#= category #: \n #= value#%"
            }
        }],
        tooltip: {
            visible: true,
            template: "#= category # (#= series.name #): #= value #%"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

var data = [{
    "source": "Hydro",
    "percentage": 22,
    "explode": true
}, {
    "source": "Solar",
    "percentage": 2
}, {
    "source": "Nuclear",
    "percentage": 49
}, {
    "source": "Wind",
    "percentage": 27
}];

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Break-up of Spain Electricity Production for 2008"
        },
        legend: {
            position: "bottom"
        },
        dataSource: {
            data: data
        },
        series: [{
            type: "donut",
            field: "percentage",
            categoryField: "source",
            explodeField: "explode"
        }],
        seriesColors: ["#42a7ff", "#666666", "#999999", "#cccccc"],
        tooltip: {
            visible: true,
            template: "${ category } - ${ value }%"
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);
