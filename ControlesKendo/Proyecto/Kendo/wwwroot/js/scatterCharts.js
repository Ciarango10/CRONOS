function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Rainfall - Velocidad del Viento"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "scatter"
        },
        series: [{
            name: "January 2008",
            data: [
                [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
        }, {
            name: "January 2009",
            data: [
                [6.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [2.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
        }, {
            name: "January 2010",
            data: [
                [21.7, 3], [13.6, 3.5], [13.6, 3], [29.9, 3], [21.7, 20], [19, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [16.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [13.6, 6], [13.6, 8], [13.6, 5], [10.9, 4], [16.4, 0], [32.6, 10.3], [21.7, 20.8], [24.5, 0.8], [16.4, 0], [21.7, 6.9], [13.6, 7.7], [16.4, 0], [8.1, 0], [16.4, 0], [16.4, 0]]
        }],
        xAxis: {
            max: 35,
            title: {
                text: "Velocidad del Viento [km/h]"
            },
            crosshair: {
                visible: true,
                tooltip: {
                    visible: true,
                    format: "n1"
                }
            }
        },
        yAxis: {
            min: -5,
            max: 25,
            title: {
                text: "Rainfall [mm]"
            },
            axisCrossingValue: -5,
            crosshair: {
                visible: true,
                tooltip: {
                    visible: true,
                    format: "n1"
                }
            }
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Charge current vs. charge time"
        },
        legend: {
            visible: true
        },
        seriesDefaults: {
            type: "scatterLine"
        },
        series: [{
            name: "0.8C",
            data: [[10, 10], [15, 20], [20, 25], [32, 40], [43, 50], [55, 60], [60, 70], [70, 80], [90, 100]]
        }, {
            name: "1.6C",
            data: [[10, 40], [17, 50], [18, 70], [35, 90], [47, 95], [60, 100]]
        }, {
            name: "3.1C",
            data: [[10, 70], [13, 90], [25, 100]]
        }],
        xAxis: {
            max: 90,
            labels: {
                format: "{0}m"
            },
            title: {
                text: "Time"
            }
        },
        yAxis: {
            max: 100,
            labels: {
                format: "{0}%"
            },
            title: {
                text: "Charge"
            }
        },
        tooltip: {
            visible: true,
            format: "{1}% in {0} minutes"
        }
    });
}


$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

function createChart3() {
    $("#chart3").kendoChart({
        title: {
            text: "Charge current vs. charge time"
        },
        legend: {
            visible: true
        },
        seriesDefaults: {
            type: "scatterLine",
            style: "smooth"
        },
        series: [{
            name: "0.8C",
            data: [[10, 10], [15, 20], [20, 25], [32, 15], [43, 50], [55, 30], [60, 70], [70, 50], [90, 100]]
        }, {
            name: "1.6C",
            data: [[10, 40], [17, 50], [22, 70], [35, 60], [47, 95], [60, 100]]
        }, {
            name: "3.1C",
            data: [[10, 70], [13, 90], [25, 100]]
        }],
        xAxis: {
            max: 90,
            labels: {
                format: "{0}m"
            },
            title: {
                text: "Time"
            }
        },
        yAxis: {
            max: 100,
            labels: {
                format: "{0}%"
            },
            title: {
                text: "Charge"
            }
        },
        tooltip: {
            visible: true,
            format: "{1}% in {0} minutes"
        }
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);

function createChart4() {
    $("#chart4").kendoChart({
        title: {
            text: "Dyno run results"
        },
        legend: {
            visible: false
        },
        dataSource: {
            data: enginePerformance
        },
        seriesDefaults: {
            type: "scatterLine",
            scatterLine: {
                width: 2
            }
        },
        series: [{
            name: "Power",
            xField: "rpm",
            yField: "power",
            tooltip: {
                format: "{1} bhp @ {0:N0} rpm"
            }
        }, {
            name: "Torque",
            xField: "rpm",
            yField: "torque",
            yAxis: "torque",
            tooltip: {
                format: "{1} lb-ft @ {0:N0} rpm"
            }
        }],
        xAxis: {
            title: "Engine rpm",
            axisCrossingValues: [0, 10000],
            labels: {
                format: "N0"
            }
        },
        yAxes: [{
            title: {
                text: "Power (bhp)"
            }
        }, {
            name: "torque",
            title: {
                text: "Torque (lb-ft)"
            }
        }],
        tooltip: {
            visible: true
        }
    });
}

function Sample(rpm, torque, power) {
    this.rpm = rpm;
    this.torque = torque;
    this.power = power;
}

var enginePerformance = [
    new Sample(1000, 50, 10),
    new Sample(1500, 65, 19),
    new Sample(2000, 80, 30),
    new Sample(2500, 92, 44),
    new Sample(3000, 104, 59),
    new Sample(3500, 114, 76),
    new Sample(4000, 120, 91),
    new Sample(4500, 125, 107),
    new Sample(5000, 130, 124),
    new Sample(5500, 133, 139),
    new Sample(6000, 130, 149),
    new Sample(6500, 122, 151),
    new Sample(7000, 110, 147)
];

$(document).ready(createChart4);
$(document).bind("kendo:skinChange", createChart4);

var data = [];
var step = Math.PI / 4;
for (var x = -50; x < 50; x += step) {
    data.push({ x: x, y: Math.sin(x) });
}

function createChart5() {
    $("#chart5").kendoChart({
        renderAs: "canvas",
        dataSource: {
            data: data
        },
        xAxis: {
            min: -2,
            max: 2,
            labels: {
                format: "{0:n1}"
            }
        },
        yAxis: {
            labels: {
                format: "{0:n2}"
            }
        },
        series: [{
            type: "scatterLine",
            xField: "x",
            yField: "y",
            style: "smooth",
            markers: {
                visible: false
            }
        }],
        pannable: true,
        zoomable: true
    });
}

$(document).ready(createChart5);
$("#example5").bind("kendo:skinChange", createChart5);

var data = [];
var step = Math.PI / 4;
for (var x = -25; x < 25; x += step) {
    data.push({ x: x, y: Math.sin(x) });
}

function createChart6() {
    $("#chart6").kendoChart({
        renderAs: "canvas",
        dataSource: {
            data: data
        },
        xAxis: {
            name: "xAxis",
            min: -2,
            max: 2,
            labels: {
                format: "{0:N1}"
            }
        },
        series: [{
            type: "scatterLine",
            xField: "x",
            yField: "y",
            style: "smooth",
            markers: {
                visible: false
            }
        }],
        transitions: false,
        drag: setRange,
        zoom: setRange
    });

    function setRange(e) {
        var chart = e.sender;
        var options = chart.options;
        e.originalEvent.preventDefault();

        var xRange = e.axisRanges.xAxis;
        if (xRange) {
            var xMin = xRange.min;
            var xMax = xRange.max;

            if (xMax - xMin < 2) {
                return;
            }

            chart.setOptions({
                xAxis: {
                    min: xMin,
                    max: xMax
                }
            });
        }
    }
}

$(document).ready(createChart6);
$("#example2").bind("kendo:skinChange", createChart6);

var pricePerformance = [{
    "family": "Pentium",
    "model": "D 820",
    "price": 105,
    "performance": 100
}, {
    "family": "Pentium",
    "model": "D 915",
    "price": 120,
    "performance": 102
}, {
    "family": "Pentium",
    "model": "D 945",
    "price": 160,
    "performance": 118
}, {
    "family": "Pentium",
    "model": "XE 965",
    "price": 1000,
    "performance": 137
}, {
    "family": "Core 2 Duo",
    "model": "E6300",
    "price": 185,
    "performance": 134
}, {
    "family": "Core 2 Duo",
    "model": "E6400",
    "price": 210,
    "performance": 143
}, {
    "family": "Core 2 Duo",
    "model": "E6600",
    "price": 305,
    "performance": 163
}, {
    "family": "Core 2 Duo",
    "model": "E6700",
    "price": 530,
    "performance": 177
}, {
    "family": "Core 2 Extreme",
    "model": "X6800",
    "price": 1000,
    "performance": 190
}, {
    "family": "Athlon 64",
    "model": "X2 3800+",
    "price": 148,
    "performance": 115
}, {
    "family": "Athlon 64",
    "model": "X2 4200+",
    "price": 170,
    "performance": 125
}, {
    "family": "Athlon 64",
    "model": "X2 4600+",
    "price": 205,
    "performance": 138
}, {
    "family": "Athlon 64",
    "model": "X2 5000+",
    "price": 290,
    "performance": 143
}, {
    "family": "Athlon 64",
    "model": "FX-62",
    "price": 800,
    "performance": 147
}];

function createChart7() {
    $("#chart7").kendoChart({
        title: {
            text: "Price-Performance Ratio"
        },
        legend: {
            visible: false
        },
        dataSource: {
            data: pricePerformance
        },
        seriesDefaults: {
            type: "scatter"
        },
        series: [{
            xField: "price",
            yField: "performance"
        }],
        xAxis: {
            max: 1000,
            labels: {
                format: "${0}"
            },
            title: {
                text: "Price"
            }
        },
        yAxis: {
            min: 80,
            labels: {
                format: "{0}%"
            },
            title: {
                text: "Performance Ratio"
            }
        },
        tooltip: {
            visible: true,
            template: "#= '<b>$' + value.x + ' / ' + dataItem.family + ' ' + dataItem.model + ': ' + value.y + '%</b>' #"
        }
    });
}

$(document).ready(createChart7);
$(document).bind("kendo:skinChange", createChart7);