function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Gross domestic product growth \n /GDP annual %/"
        },
        legend: {
            position: "bottom"
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            type: "line",
            style: "smooth"
        },
        series: [{
            name: "India",
            data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
        }, {
            name: "World",
            data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
        }, {
            name: "Russian Federation",
            data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
        }, {
            name: "Haiti",
            data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
        }],
        valueAxis: {
            labels: {
                format: "{0}%"
            },
            line: {
                visible: false
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        },
        tooltip: {
            visible: true,
            format: "{0}%",
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Olympic Medals won by USA"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "line",
            missingValues: "gap",
            stack: true
        },
        series: [{
            name: "Gold Medals",
            data: [40, 32, 34, 36, 45, 33, 34, null, 83, 36, 37, 44, 37, 35, 36, 46],
            color: "#f3ac32"
        }, {
            name: "Silver Medals",
            data: [19, 25, 21, 26, 28, 31, 35, null, 60, 31, 34, 32, 24, 40, 38, 29],
            color: "#b8b8b8"
        }, {
            name: "Bronze Medals",
            data: [17, 17, 16, 28, 34, 30, 25, null, 30, 27, 37, 25, 33, 26, 36, 29],
            color: "#bb6e36"
        }],
        valueAxis: {
            max: 180,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            categories: [1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

function createChart3() {
    $("#chart3").kendoChart({
        title: {
            text: "Olympic Medals won by USA"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "line",
            missingValues: "gap",
            stack: {
                type: "100%"
            }
        },
        series: [{
            name: "Gold Medals",
            data: [40, 32, 34, 36, 45, 33, 34, null, 83, 36, 37, 44, 37, 35, 36, 46],
            color: "#f3ac32"
        }, {
            name: "Silver Medals",
            data: [19, 25, 21, 26, 28, 31, 35, null, 60, 31, 34, 32, 24, 40, 38, 29],
            color: "#b8b8b8"
        }, {
            name: "Bronze Medals",
            data: [17, 17, 16, 28, 34, 30, 25, null, 30, 27, 37, 25, 33, 26, 36, 29],
            color: "#bb6e36"
        }],
        valueAxis: {
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            categories: [1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);

function createChart4() {
    $("#chart4").kendoChart({
        title: {
            text: "A digital signal"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "line",
            data: [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8],
            style: "step",
            markers: {
                visible: false
            }
        }],
        categoryAxis: {
            title: {
                text: "time"
            },
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        },
        valueAxis: {
            max: 22,
            title: {
                text: "voltage"
            },
            majorGridLines: {
                visible: false
            },
            visible: false
        }
    });
}

$(document).ready(createChart4);
$(document).bind("kendo:skinChange", createChart4);

function createChart5() {
    $("#chart5").kendoChart({
        title: {
            text: "Analog signal"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "line",
            data: [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8],
            style: "smooth",
            markers: {
                visible: false
            }
        }],
        categoryAxis: {
            title: {
                text: "time"
            },
            majorGridLines: {
                visible: false
            },
            majorTicks: {
                visible: false
            }
        },
        valueAxis: {
            max: 22,
            title: {
                text: "voltage"
            },
            majorGridLines: {
                visible: false
            },
            visible: false
        }
    });
}

$(document).ready(createChart5);
$(document).bind("kendo:skinChange", createChart5);

function createChart6() {
    $("#chart6").kendoChart({
        title: {
            text: "March Weather Report"
        },
        legend: {
            position: "bottom"
        },
        series: [{
            type: "line",
            data: [6, 10, 10, 10, 10, 9, 5, 5, 10, 8, 8, 5, 8, 11, 9, 15, 20, 23, 24, 21, 21, 20, 22, 22, 20, 18, 16, 15, 20, 13.2, 18],
            name: "Max. Temperature [&deg;C]",
            color: "#ff1c1c",
            axis: "temp"
        }, {
            type: "line",
            data: [-5, -6, 0, -4, -3, -5.2, -5, -1.7, -1, 0, -0.4, -2, -2, -5, 4, -2, -4, -1, -1, 2, 4, -1, 1, 1, 4, 0, -1, 1, -2, 5.7, 5],
            name: "Min. Temperature [&deg;C]",
            color: "#ffae00",
            axis: "temp"
        }, {
            type: "area",
            data: [16.4, 21.7, 35.4, 19, 10.9, 13.6, 10.9, 10.9, 10.9, 16.4, 16.4, 13.6, 13.6, 29.9, 27.1, 16.4, 13.6, 10.9, 16.4, 10.9, 24.5, 10.9, 8.1, 19, 21.7, 27.1, 24.5, 16.4, 27.1, 29.9, 27.1],
            name: "Wind Speed [km/h]",
            color: "#73c100",
            axis: "wind"
        }, {
            type: "area",
            data: [5.4, 2, 5.4, 3, 2, 1, 3.2, 7.4, 0, 8.2, 0, 1.8, 0.3, 0, 0, 2.3, 0, 3.7, 5.2, 6.5, 0, 7.1, 0, 4.7, 0, 1.8, 0, 0, 0, 1.5, 0.8],
            name: "Rainfall [mm]",
            color: "#007eff",
            axis: "rain"
        }],
        valueAxes: [{
            name: "rain",
            color: "#007eff",
            min: 0,
            max: 60
        }, {
            name: "wind",
            color: "#73c100",
            min: 0,
            max: 60
        }, {
            name: "temp",
            min: -30,
            max: 30
        }],
        categoryAxis: {
            categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            axisCrossingValues: [32, 32, 0],
            justified: true
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= category #/03: #= value #"
        }
    });
}

$(document).ready(createChart6);
$(document).bind("kendo:skinChange", createChart6);

var grandSlam = [{
    "year": "2003",
    "win": 13,
    "extremum": "MIN: 13",
    "loss": 3
}, {
    "year": "2004",
    "win": 22,
    "loss": 1
}, {
    "year": "2005",
    "win": 24,
    "loss": 2
}, {
    "year": "2006",
    "win": 27,
    "extremum": "MAX: 27",
    "loss": 1
}, {
    "year": "2007",
    "win": 26,
    "loss": 1
}, {
    "year": "2008",
    "win": 24,
    "loss": 3
}, {
    "year": "2009",
    "win": 26,
    "loss": 2
}, {
    "year": "2010",
    "win": 20,
    "loss": 3
}, {
    "year": "2011",
    "win": 20,
    "loss": 4
}, {
    "year": "2012",
    "win": 19,
    "loss": 3
}];

function createChart7() {
    $("#chart7").kendoChart({
        dataSource: {
            data: grandSlam
        },
        title: {
            text: "Roger Federer Grand Slam tournament performance"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "line"
        },
        series: [{
            name: "Wins",
            field: "win",
            categoryField: "year",
            noteTextField: "extremum",
            notes: {
                label: {
                    position: "outside"
                },
                position: "bottom"
            }
        }, {
            field: "loss",
            name: "Losses"
        }],
        valueAxis: {
            line: {
                visible: false
            }
        },
        categoryAxis: {
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart7);
$(document).bind("kendo:skinChange", createChart7);

function createChart8() {
    $("#chart8").kendoChart({
        title: {
            text: "Gross domestic product growth and percentage error"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "line",
            errorBars: {
                value: "percentage(20)"
            }
        },
        series: [{
            name: "India",
            data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
        }, {
            name: "World",
            data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
        }],
        valueAxis: {
            labels: {
                format: "{0}%"
            },
            line: {
                visible: false
            },
            axisCrossingValue: 0
        },
        categoryAxis: {
            categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
            line: {
                visible: false
            },
            labels: {
                padding: { top: 80 }
            }
        },
        tooltip: {
            visible: true,
            format: "{0}%",
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart8);
$(document).bind("kendo:skinChange", createChart8);

var internetUsers = [
    {
        "country": "United States",
        "year": "1994",
        "value": 4.9
    },
    {
        "country": "United States",
        "year": "1995",
        "value": 9.2
    },
    {
        "country": "United States",
        "year": "1996",
        "value": 16.4
    },
    {
        "country": "United States",
        "year": "1997",
        "value": 21.6
    },
    {
        "country": "United States",
        "year": "1998",
        "value": 30.1
    },
    {
        "country": "United States",
        "year": "1999",
        "value": 35.9
    },
    {
        "country": "United States",
        "year": "2000",
        "value": 43.1
    },
    {
        "country": "United States",
        "year": "2001",
        "value": 49.2
    },
    {
        "country": "United States",
        "year": "2002",
        "value": 59.0
    },
    {
        "country": "United States",
        "year": "2003",
        "value": 61.9
    },
    {
        "country": "United States",
        "year": "2004",
        "value": 65
    },
    {
        "country": "United States",
        "year": "2005",
        "value": 68.3
    },
    {
        "country": "United States",
        "year": "2006",
        "value": 69.2
    },
    {
        "country": "United States",
        "year": "2007",
        "value": 75.3
    },
    {
        "country": "United States",
        "year": "2008",
        "value": 74.2
    },
    {
        "country": "United States",
        "year": "2009",
        "value": 71.2
    },
    {
        "country": "United States",
        "year": "2010",
        "value": 74.2
    },
    {
        "country": "United States",
        "year": "2011",
        "value": 78.2
    }
];

function createChart9() {
    $("#chart9").kendoChart({
        dataSource: {
            data: internetUsers
        },
        title: {
            text: "Internet Users in United States"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "line",
            labels: {
                visible: true,
                format: "{0}%",
                background: "transparent"
            }
        },
        series: [{
            field: "value",
            categoryField: "year",
            name: "United States"
        }],
        valueAxis: {
            labels: {
                format: "{0}%"
            },
            line: {
                visible: false
            }
        },
        categoryAxis: {
            majorGridLines: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart9);
$(document).bind("kendo:skinChange", createChart9);

