function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Job Growth for 2011"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "bubble"
        },
        series: [{
            data: [{
                x: -2500,
                y: 50000,
                size: 500000,
                category: "Microsoft"
            }, {
                x: 500,
                y: 110000,
                size: 7600000,
                category: "Starbucks"
            }, {
                x: 7000,
                y: 19000,
                size: 700000,
                category: "Google"
            }, {
                x: 1400,
                y: 150000,
                size: 700000,
                category: "Publix Super Markets"
            }, {
                x: 2400,
                y: 30000,
                size: 300000,
                category: "PricewaterhouseCoopers"
            }, {
                x: 2450,
                y: 34000,
                size: 90000,
                category: "Cisco"
            }, {
                x: 2700,
                y: 34000,
                size: 400000,
                category: "Accenture"
            }, {
                x: 2900,
                y: 40000,
                size: 450000,
                category: "Deloitte"
            }, {
                x: 3000,
                y: 55000,
                size: 900000,
                category: "Whole Foods Market"
            }]
        }],
        xAxis: {
            labels: {
                format: "{0:N0}",
                skip: 1,
                rotation: "auto"
            },
            axisCrossingValue: -5000,
            majorUnit: 2000,
            plotBands: [{
                from: -5000,
                to: 0,
                color: "#00f",
                opacity: 0.05
            }]
        },
        yAxis: {
            labels: {
                format: "{0:N0}"
            },
            line: {
                width: 0
            }
        },
        tooltip: {
            visible: true,
            format: "{3}: {2:N0} applications",
            opacity: 1
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

var jobGrowth = [{
    growth: -2500,
    jobs: 50000,
    applications: 500000,
    company: "Microsoft"
}, {
    growth: 500,
    jobs: 110000,
    applications: 7600000,
    company: "Starbucks"
}, {
    growth: 7000,
    jobs: 19000,
    applications: 700000,
    company: "Google"
}, {
    growth: 1400,
    jobs: 150000,
    applications: 700000,
    company: "Publix Super Markets"
}, {
    growth: 2400,
    jobs: 30000,
    applications: 300000,
    company: "PricewaterhouseCoopers"
}, {
    growth: 2450,
    jobs: 34000,
    applications: 90000,
    company: "Cisco"
}, {
    growth: 2700,
    jobs: 34000,
    applications: 400000,
    company: "Accenture"
}, {
    growth: 2900,
    jobs: 40000,
    applications: 450000,
    company: "Deloitte"
}, {
    growth: 3000,
    jobs: 55000,
    applications: 900000,
    company: "Whole Foods Market"
}];

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Job Growth for 2011"
        },
        legend: {
            visible: false
        },
        dataSource: {
            data: jobGrowth
        },
        series: [{
            type: "bubble",
            xField: "growth",
            yField: "jobs",
            sizeField: "applications",
            categoryField: "company"
        }],
        xAxis: {
            labels: {
                format: "{0:N0}",
                skip: 1
            },
            axisCrossingValue: -5000,
            majorUnit: 2000,
            plotBands: [{
                from: -5000,
                to: 0,
                color: "#00f",
                opacity: 0.05
            }]
        },
        yAxis: {
            labels: {
                format: "{0:N0}"
            },
            line: {
                width: 0
            }
        },
        tooltip: {
            visible: true,
            format: "{3}: {2:N0} applications",
            opacity: 1
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

//function createChart() {
//    $("#chart").kendoChart({
//        dataSource: {
//            transport: {
//                read: {
//                    url: function () {
//                        return "../content/dataviz/js/olympics-japan.json";
//                    },
//                    dataType: "json"
//                }
//            },
//            group: {
//                field: "country"
//            }
//        },
//        title: {
//            text: "Olypmic Medals Won by Japan"
//        },
//        legend: {
//            visible: false
//        },
//        chartArea: {
//            background: ""
//        },
//        series: [{
//            type: "bubble",
//            minSize: 0,
//            maxSize: 70,
//            xField: "year",
//            yField: "standing",
//            sizeField: "number",
//            colorField: "medalColor",
//            opacity: 0.9
//        }],
//        xAxis: {
//            labels: {
//                skip: 1,
//                margin: { top: -25 }
//            },
//            majorUnit: 4,
//            min: 1980,
//            max: 2015,
//            majorGridLines: {
//                visible: false
//            },
//            line: {
//                visible: false
//            }
//        },
//        yAxis: {
//            labels: {
//                step: 1,
//                skip: 1,
//                template: "#= value # place",
//                margin: { right: -30 },
//                padding: { left: 20 }
//            },
//            majorUnit: 1,
//            min: 0,
//            max: 3.7,
//            majorGridLines: {
//                visible: false
//            },
//            line: {
//                visible: false
//            }
//        },
//        tooltip: {
//            visible: true,
//            template: "#= value.x #: #= value.size # Medals"
//        }
//    });
//}

//$(document).ready(createChart);
//$(document).bind("kendo:skinChange", createChart);