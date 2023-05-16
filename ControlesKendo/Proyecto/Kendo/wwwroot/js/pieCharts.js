function createChart() {
    $("#chart").kendoChart({
        title: {
            position: "bottom",
            text: "Share of Internet Population Growth, 2007 - 2012"
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: \n #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 150,
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
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

var data = [
    {
        "source": "Hydro",
        "percentage": 22,
        "explode": true
    },
    {
        "source": "Solar",
        "percentage": 2
    },
    {
        "source": "Nuclear",
        "percentage": 49
    },
    {
        "source": "Wind",
        "percentage": 27
    }
];

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
            type: "pie",
            field: "percentage",
            categoryField: "source",
            explodeField: "explode"
        }],
        seriesColors: ["#03a9f4", "#ff9800", "#fad84a", "#4caf50"],
        tooltip: {
            visible: true,
            template: "${ category } - ${ value }%"
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

