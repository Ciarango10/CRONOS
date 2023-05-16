function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Gross domestic product growth \n /GDP annual %/"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                }
            }
        },
        series: [{
            name: "India",
            data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
        }, {
            name: "World",
            data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
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
            text: "Browser Usage Trends"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area",
            stack: true
        },
        series: [{
            name: "Chrome",
            data: [0, 0, 0, 0, 3.6, 9.8, 22.4, 34.6]
        }, {
            name: "Firefox",
            data: [0, 23.6, 29.9, 36.3, 44.4, 46.4, 43.5, 37.7]
        }, {
            name: "Internet Explorer",
            data: [76.2, 68.9, 60.6, 56.0, 46.0, 37.2, 27.5, 20.2]
        }, {
            name: "Mozilla",
            data: [16.5, 2.8, 2.5, 1.2, 0, 0, 0, 0]
        }, {
            name: "Opera",
            data: [1.6, 1.5, 1.5, 1.6, 2.4, 2.3, 2.2, 2.5]
        }, {
            name: "Safari",
            data: [0, 0, 0, 1.8, 2.7, 3.6, 3.8, 4.2]
        }],
        valueAxis: {
            labels: {
                format: "{0}%"
            },
            line: {
                visible: false
            },
            axisCrossingValue: -10,
            max: 100
        },
        categoryAxis: {
            categories: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0}%",
            template: "#= series.name #: #= value #%"
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

function createChart3() {
    $("#chart3").kendoChart({
        title: {
            text: "Browser Usage Trends"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area",
            stack: {
                type: "100%"
            }
        },
        series: [{
            name: "Chrome",
            data: [0, 0, 0, 0, 3.6, 9.8, 22.4, 34.6]
        }, {
            name: "Firefox",
            data: [0, 23.6, 29.9, 36.3, 44.4, 46.4, 43.5, 37.7]
        }, {
            name: "Internet Explorer",
            data: [76.2, 68.9, 60.6, 56.0, 46.0, 37.2, 27.5, 20.2]
        }, {
            name: "Mozilla",
            data: [16.5, 2.8, 2.5, 1.2, 0, 0, 0, 0]
        }, {
            name: "Opera",
            data: [1.6, 1.5, 1.5, 1.6, 2.4, 2.3, 2.2, 2.5]
        }, {
            name: "Safari",
            data: [0, 0, 0, 1.8, 2.7, 3.6, 3.8, 4.2]
        }],
        valueAxis: {
            line: {
                visible: false
            }
        },
        categoryAxis: {
            categories: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0}%",
            template: "#= series.name #: #= value #%"
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
            type: "area",
            data: [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8],
            line: {
                style: "step"
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
            text: "A digital signal"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "area",
            data: [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8],
            line: {
                style: "smooth"
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
            text: "Hybrid car mileage report"
        },
        legend: {
            position: "top"
        },
        series: [{
            type: "column",
            data: [20, 40, 45, 30, 50],
            stack: true,
            name: "on battery",
            color: "#003c72"
        }, {
            type: "column",
            data: [20, 30, 35, 35, 40],
            stack: true,
            name: "on gas",
            color: "#0399d4"
        }, {
            type: "area",
            data: [30, 38, 40, 32, 42],
            name: "mpg",
            color: "#642381",
            axis: "mpg"
        }, {
            type: "area",
            data: [7.8, 6.2, 5.9, 7.4, 5.6],
            name: "l/100 km",
            color: "#e5388a",
            axis: "l100km"
        }],
        valueAxes: [{
            title: { text: "miles" },
            min: 0,
            max: 100
        }, {
            name: "km",
            title: { text: "km" },
            min: 0,
            max: 161,
            majorUnit: 32
        }, {
            name: "mpg",
            title: { text: "miles per gallon" },
            color: "#642381"
        }, {
            name: "l100km",
            title: { text: "liters per 100km" },
            color: "#e5388a"
        }],
        categoryAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            // Align the first two value axes to the left
            // and the last two to the right.
            //
            // Right alignment is done by specifying a
            // crossing value greater than or equal to
            // the number of categories.
            axisCrossingValues: [0, 0, 10, 10]
        }
    });
}

$(document).ready(createChart6);
$(document).bind("kendo:skinChange", createChart6);

function createChart7() {
    $("#chart7").kendoChart({
        title: {
            text: "GDP growth and standard deviation"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "area"
        },
        series: [{
            data: [7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552],
            errorBars: {
                value: "stddev"
            }
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
            categories: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
            line: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0}%",
            template: "#= value # (σ = #= kendo.toString(high - low, 'N2') #)"
        }
    });
}

$(document).ready(createChart7);
$(document).bind("kendo:skinChange", createChart7);

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

function createChart8() {
    $("#chart8").kendoChart({
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
            type: "area",
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
        },
        tooltip: {
            visible: true,
            format: "{0}%",
            template: "#= category # - #= value #%"
        }
    });
}

$(document).ready(createChart8);
$(document).bind("kendo:skinChange", createChart8);
