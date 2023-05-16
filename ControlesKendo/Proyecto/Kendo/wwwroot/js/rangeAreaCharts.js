function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Average Weather Conditions"
        },
        series: [{
            type: "rangeArea",
            data: [[5, 11], [5, 13], [7, 15], [10, 19], [13, 23], [17, 28],
            [20, 30], [20, 30], [17, 26], [13, 22], [9, 16], [6, 13]]
        }],
        seriesDefaults: {
            labels: {
                visible: true,
                from: {
                    template: "#=value.from# °C",
                },
                to: {
                    template: "#=value.to# °C",
                }
            }
        },
        categoryAxis: {
            categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            labels: {
                rotation: "auto"
            }
        },
        tooltip: {
            visible: true,
            template: "Avg Min Temp : #= value.from # °C <br>" +
                "Avg Max Temp : #= value.to # °C"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

var taskCompleteness = [{
    "fromA": 0,
    "toA": 10,
    "fromB": 0,
    "toB": 30,
    "day": "Monday"
}, {
    "fromA": 10,
    "toA": 30,
    "fromB": 30,
    "toB": 45,
    "day": "Tuesday"
}, {
    "fromA": 30,
    "toA": 40,
    "fromB": 45,
    "toB": 60,
    "day": "Wednesday"
}, {
    "fromA": 40,
    "toA": 60,
    "fromB": 60,
    "toB": 80,
    "day": "Thursday"
}, {
    "fromA": 60,
    "toA": 100,
    "fromB": 80,
    "toB": 100,
    "day": "Friday"
}]

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Task Completeness"
        },
        legend: {
            position: "top"
        },
        dataSource: {
            data: taskCompleteness
        },
        seriesDefaults: {
            type: "rangeArea",
            rangeArea: {
                line: {
                    style: "smooth"
                }
            }
        },
        series: [{
            name: "Task A",
            fromField: "fromA",
            toField: "toA",
            categoryField: "day"
        }],
        categoryAxis: {
            majorGridLines: {
                visible: false
            }
        },
        valueAxis: {
            max: 100
        },
        tooltip: {
            visible: true
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);