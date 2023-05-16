function createChart() {
    $("#chart-mmHg").kendoChart({
        legend: {
            visible: false
        },
        series: [{
            type: "bullet",
            labels: {
                visible: true,
                background: "transparent",
                template: "#= value.current# mmHg"
            },
            data: [[750, 762.5]]
        }],
        chartArea: {
            margin: {
                left: 0
            }
        },
        categoryAxis: {
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        },
        valueAxis: [{
            plotBands: [{
                from: 715, to: 752, color: "#ccc", opacity: .6
            }, {
                from: 752, to: 772, color: "#ccc", opacity: .3
            }],
            majorGridLines: {
                visible: false
            },
            min: 715,
            max: 795,
            minorTicks: {
                visible: true
            }
        }],
        tooltip: {
            visible: true,
            template: "Maximum: #= value.target # <br /> Average: #= value.current #"
        }
    });

    $("#chart-hPa").kendoChart({
        legend: {
            visible: false
        },
        series: [{
            type: "bullet",
            labels: {
                visible: true,
                background: "transparent",
                template: "#= value.current# hPa"
            },
            data: [[1001, 1017]]
        }],
        chartArea: {
            margin: {
                left: 0
            }
        },
        categoryAxis: {
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        },
        valueAxis: [{
            plotBands: [{
                from: 955, to: 1002, color: "#ccc", opacity: .6
            }, {
                from: 1002, to: 1027, color: "#ccc", opacity: .3
            }],
            majorGridLines: {
                visible: false
            },
            min: 955,
            max: 1055,
            minorTicks: {
                visible: true
            }
        }],
        tooltip: {
            visible: true,
            template: "Maximum: #= value.target # <br /> Average: #= value.current #"
        }
    });

    $("#chart-hum").kendoChart({
        legend: {
            visible: false
        },
        series: [{
            type: "bullet",
            labels: {
                visible: true,
                background: "transparent",
                template: "RH #= value.current#%"
            },
            data: [[45, 60]]
        }],
        categoryAxis: {
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        },
        valueAxis: [{
            plotBands: [{
                from: 0, to: 33, color: "#ccc", opacity: .6
            }, {
                from: 33, to: 66, color: "#ccc", opacity: .3
            }],
            majorGridLines: {
                visible: false
            },
            min: 0,
            max: 100,
            minorTicks: {
                visible: true
            }
        }],
        tooltip: {
            visible: true,
            template: "Maximum: #= value.target # <br /> Average: #= value.current #"
        }
    });

    $("#chart-temp").kendoChart({
        legend: {
            visible: false
        },
        series: [{
            type: "bullet",
            labels: {
                visible: true,
                background: "transparent",
                template: "#= value.current# C"
            },
            data: [[25, 22]]
        }],
        categoryAxis: {
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        },
        valueAxis: [{
            plotBands: [{
                from: 0, to: 10, color: "yellow", opacity: .3
            }, {
                from: 10, to: 20, color: "orange", opacity: .3
            }, {
                from: 20, to: 30, color: "red", opacity: .3
            }],
            majorGridLines: {
                visible: false
            },
            min: 0,
            max: 30,
            minorTicks: {
                visible: true
            }
        }],
        tooltip: {
            visible: true,
            template: "Maximum: #= value.target # <br /> Average: #= value.current #"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function createChart2() {
    var mmhgData = [
        { current: 750, target: 762.5, category: 1 }, { current: 754, target: 768.5, category: 2 },
        { current: 762, target: 770, category: 3 }, { current: 764, target: 773, category: 4 },
        { current: 753, target: 760, category: 5 }, { current: 748, target: 765, category: 6 },
        { current: 740, target: 760, category: 7 }, { current: 755, target: 758, category: 8 },
        { current: 765, target: 768, category: 9 }, { current: 776, target: 783, category: 10 },
        { current: 768, target: 770, category: 11 }, { current: 760, target: 762.5, category: 12 },
        { current: 763, target: 768, category: 13 }, { current: 758, target: 766, category: 14 }
    ],
        hPaData = [
            { current: 1001, target: 1017, category: 1 }, { current: 1005, target: 1024, category: 2 },
            { current: 1016, target: 1026, category: 3 }, { current: 1019, target: 1030, category: 4 },
            { current: 1004, target: 1013, category: 5 }, { current: 998, target: 1020, category: 6 },
            { current: 987, target: 1013, category: 7 }, { current: 1006.5, target: 1010, category: 8 },
            { current: 1020, target: 1023, category: 9 }, { current: 1035, target: 1044, category: 10 },
            { current: 1025, target: 1026, category: 11 }, { current: 1013, target: 1017, category: 12 },
            { current: 1017, target: 1023, category: 13 }, { current: 1010, target: 1021, category: 14 }
        ];

    $("#chart-mmHg2").kendoChart({
        legend: {
            visible: false
        },
        dataSource: {
            data: mmhgData
        },
        series: [{
            type: "verticalBullet",
            color: "#ffffff",
            opacity: .8,
            target: {
                color: "#ffffff"
            },
            currentField: "current",
            targetField: "target",
            categoryField: "category"
        }],
        categoryAxis: {
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            },
            title: {
                text: "mmHg"
            }
        },
        valueAxis: [{
            plotBands: [{
                from: 715, to: 752, color: "#2890cc", opacity: .5
            }, {
                from: 752, to: 772, color: "#2890cc", opacity: .7
            }, {
                from: 772, to: 790, color: "#2890cc", opacity: .5
            }, {
                from: 761, to: 761.5, color: "#ff0000", opacity: 1
            }],
            majorGridLines: {
                visible: false
            },
            min: 715,
            max: 790,
            minorTicks: {
                visible: true
            }
        }],
        tooltip: {
            visible: true,
            template: "Maximum: #= value.target # <br /> Average: #= value.current #"
        }
    });

    $("#chart-hPa2").kendoChart({
        legend: {
            visible: false
        },
        dataSource: {
            data: hPaData
        },
        series: [{
            type: "verticalBullet",
            color: "#ffffff",
            opacity: .8,
            target: {
                color: "#ffffff"
            },
            currentField: "current",
            targetField: "target",
            categoryField: "category"
        }],
        categoryAxis: {
            majorGridLines: {
                visible: false
            },
            axisCrossingValue: 14,
            majorTicks: {
                visible: false
            },
            title: {
                text: "hPa"
            }
        },
        valueAxis: [{
            plotBands: [{
                from: 955, to: 1002, color: "#8ebc00", opacity: .6
            }, {
                from: 1002, to: 1027, color: "#8ebc00", opacity: .8
            }, {
                from: 1027, to: 1050, color: "#8ebc00", opacity: .6
            }, {
                from: 1014, to: 1014.5, color: "#ff0000", opacity: 1
            }],
            majorGridLines: {
                visible: false
            },
            min: 955,
            max: 1050,
            minorTicks: {
                visible: true
            }
        }],
        tooltip: {
            visible: true,
            template: "Maximum: #= value.target # <br /> Average: #= value.current #"
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

function createChart3() {
    $("#chart-sales3").kendoChart({
        title: {
            text: "April sales per day"
        },
        legend: {
            visible: false
        },
        dataSource: {
            transport: {
                read: {
                    url: "../content/dataviz/js/april-sales.json",
                    dataType: "json"
                }
            }
        },
        series: [{
            type: "verticalBullet",
            currentField: "current",
            targetField: "target",
            categoryField: "category",
            target: {
                color: "#aaaaaa"
            },
            gap: 4
        }],
        categoryAxis: {
            majorGridLines: {
                visible: false
            }
        },
        valueAxis: [{
            min: 2000,
            max: 11000,
            majorGridLines: {
                visible: false
            },
            minorTicks: {
                visible: true
            },
            plotBands: [{
                from: 1000, to: 3000, color: "#aaaaaa", opacity: 0.55
            }, {
                from: 3000, to: 5000, color: "#aaaaaa", opacity: 0.4
            }, {
                from: 5000, to: 8000, color: "#aaaaaa", opacity: 0.25
            }, {
                from: 8000, to: 11000, color: "#aaaaaa", opacity: 0.1
            }]
        }],
        tooltip: {
            visible: true,
            template: "Target: #= value.target # items<br /> Actual: #= value.current # items"
        }
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);