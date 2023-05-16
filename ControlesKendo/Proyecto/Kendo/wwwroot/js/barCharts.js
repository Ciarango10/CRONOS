function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Site Visitors Stats"
        },
        subtitle: {
            text: "/thousands/"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "bar"
        },
        series: [{
            name: "Total Visits",
            data: [56000, 63000, 74000, 91000, 117000, 138000]
        }, {
            name: "Unique visitors",
            data: [52000, 34000, 23000, 48000, 67000, 83000]
        }],
        valueAxis: {
            max: 140000,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            },
            labels: {
                rotation: "auto"
            }
        },
        categoryAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Gross domestic product growth /GDP annual %/"
        },
        legend: {
            position: "top"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            name: "India",
            data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
        }, {
            name: "Russian Federation",
            data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
        }, {
            name: "Germany",
            data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
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
                padding: { top: 135 }
            }
        },
        tooltip: {
            visible: true,
            format: "{0}%",
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
            type: "bar",
            stack: true
        },
        series: [{
            name: "Gold Medals",
            data: [40, 32, 34, 36, 45, 33, 34, 83, 36, 37, 44, 37, 35, 36, 46],
            color: "#f3ac32"
        }, {
            name: "Silver Medals",
            data: [19, 25, 21, 26, 28, 31, 35, 60, 31, 34, 32, 24, 40, 38, 29],
            color: "#b8b8b8"
        }, {
            name: "Bronze Medals",
            data: [17, 17, 16, 28, 34, 30, 25, 30, 27, 37, 25, 33, 26, 36, 29],
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
            categories: [1952, 1956, 1960, 1964, 1968, 1972, 1976, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012],
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
            text: "World population by age group and sex"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            name: "0-19",
            stack: "Female",
            data: [854622, 925844, 984930, 1044982, 1100941, 1139797, 1172929, 1184435, 1184654]
        }, {
            name: "20-39",
            stack: "Female",
            data: [490550, 555695, 627763, 718568, 810169, 883051, 942151, 1001395, 1058439]
        }, {
            name: "40-64",
            stack: "Female",
            data: [379788, 411217, 447201, 484739, 395533, 435485, 499861, 569114, 655066]
        }, {
            name: "65-79",
            stack: "Female",
            data: [97894, 113287, 128808, 137459, 152171, 170262, 191015, 210767, 226956]
        }, {
            name: "80+",
            stack: "Female",
            data: [16358, 18576, 24586, 30352, 36724, 42939, 46413, 54984, 66029]
        }, {
            name: "0-19",
            stack: "Male",
            data: [900268, 972205, 1031421, 1094547, 1155600, 1202766, 1244870, 1263637, 1268165]
        }, {
            name: "20-39",
            stack: "Male",
            data: [509133, 579487, 655494, 749511, 844496, 916479, 973694, 1036548, 1099507]
        }, {
            name: "40-64",
            stack: "Male",
            data: [364179, 401396, 440844, 479798, 390590, 430666, 495030, 564169, 646563]
        }, {
            name: "65-79",
            stack: "Male",
            data: [74208, 86516, 98956, 107352, 120614, 138868, 158387, 177078, 192156]
        }, {
            name: "80+",
            stack: "Male",
            data: [9187, 10752, 13007, 15983, 19442, 23020, 25868, 31462, 39223]
        }],
        seriesColors: ["#cd1533", "#d43851", "#dc5c71", "#e47f8f", "#eba1ad",
            "#009bd7", "#26aadd", "#4db9e3", "#73c8e9", "#99d7ef"],
        valueAxis: {
            labels: {
                template: "#= kendo.format('{0:N0}', value / 1000) # M"
            },
            line: {
                visible: false
            }
        },
        categoryAxis: {
            categories: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.stack #s, age #= series.name #"
        }
    });
}

$(document).ready(createChart4);
$(document).bind("kendo:skinChange", createChart4);

function createChart5() {
    $("#chart5").kendoChart({
        title: {
            text: "Olympic Medals won by USA"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "bar",
            stack: {
                type: "100%"
            }
        },
        series: [{
            name: "Gold Medals",
            data: [40, 32, 34, 36, 45, 33, 34, 83, 36, 37, 44, 37, 35, 36, 46],
            color: "#f3ac32"
        }, {
            name: "Silver Medals",
            data: [19, 25, 21, 26, 28, 31, 35, 60, 31, 34, 32, 24, 40, 38, 29],
            color: "#b8b8b8"
        }, {
            name: "Bronze Medals",
            data: [17, 17, 16, 28, 34, 30, 25, 30, 27, 37, 25, 33, 26, 36, 29],
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
            categories: [1952, 1956, 1960, 1964, 1968, 1972, 1976, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012],
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

$(document).ready(createChart5);
$(document).bind("kendo:skinChange", createChart5);

function createChart6(){
    $("#chart6").kendoChart({
        title: {
            text: "World population by age group and sex"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "column",
            stack: {
                type: "100%"
            }
        },
        series: [{
            name: "0-19",
            stack: {
                group: "Female"
            },
            data: [854622, 925844, 984930, 1044982, 1100941, 1139797, 1172929, 1184435, 1184654]
        }, {
            name: "20-39",
            stack: {
                group: "Female"
            },
            data: [490550, 555695, 627763, 718568, 810169, 883051, 942151, 1001395, 1058439]
        }, {
            name: "40-64",
            stack: {
                group: "Female"
            },
            data: [379788, 411217, 447201, 484739, 395533, 435485, 499861, 569114, 655066]
        }, {
            name: "65-79",
            stack: {
                group: "Female"
            },
            data: [97894, 113287, 128808, 137459, 152171, 170262, 191015, 210767, 226956]
        }, {
            name: "80+",
            stack: {
                group: "Female"
            },
            data: [16358, 18576, 24586, 30352, 36724, 42939, 46413, 54984, 66029]
        }, {
            name: "0-19",
            stack: {
                group: "Male"
            },
            data: [900268, 972205, 1031421, 1094547, 1155600, 1202766, 1244870, 1263637, 1268165]
        }, {
            name: "20-39",
            stack: {
                group: "Male"
            },
            data: [509133, 579487, 655494, 749511, 844496, 916479, 973694, 1036548, 1099507]
        }, {
            name: "40-64",
            stack: {
                group: "Male"
            },
            data: [364179, 401396, 440844, 479798, 390590, 430666, 495030, 564169, 646563]
        }, {
            name: "65-79",
            stack: {
                group: "Male"
            },
            data: [74208, 86516, 98956, 107352, 120614, 138868, 158387, 177078, 192156]
        }, {
            name: "80+",
            stack: {
                group: "Male"
            },
            data: [9187, 10752, 13007, 15983, 19442, 23020, 25868, 31462, 39223]
        }],
        seriesColors: ["#cd1533", "#d43851", "#dc5c71", "#e47f8f", "#eba1ad",
            "#009bd7", "#26aadd", "#4db9e3", "#73c8e9", "#99d7ef"],
        valueAxis: {
            line: {
                visible: false
            }
        },
        categoryAxis: {
            categories: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.stack.group #s, age #= series.name #"
        }
    });
}

$(document).ready(createChart6);
$(document).bind("kendo:skinChange", createChart6);

function fibonacciSequence(n) {
    var data = [1, 1];
    for (var i = 2; i < n; i++) {
        data.push(data[i - 1] + data[i - 2]);
    }
    return data;
}

function createChart7() {
    $("#chart7").kendoChart({
        title: {
            text: "Fibonacci sequence"
        },
        series: [{
            data: fibonacciSequence(39)
        }],
        tooltip: {
            visible: true
        },
        valueAxis: {
            type: "log",
            minorGridLines: {
                visible: true
            }
        }
    });
}

$(document).ready(createChart7);
$(document).bind("kendo:skinChange", createChart7);

function createChart8() {
    $("#chart8").kendoChart({
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
            color: "#cc6e38"
        }, {
            type: "column",
            data: [20, 30, 35, 35, 40],
            stack: true,
            name: "on gas",
            color: "#ef955f"
        }, {
            type: "line",
            data: [30, 38, 40, 32, 42],
            name: "mpg",
            color: "#ec5e0a",
            axis: "mpg"
        }, {
            type: "line",
            data: [7.8, 6.2, 5.9, 7.4, 5.6],
            name: "l/100 km",
            color: "#4e4141",
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
            color: "#ec5e0a"
        }, {
            name: "l100km",
            title: { text: "liters per 100km" },
            color: "#4e4141"
        }],
        categoryAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            axisCrossingValues: [0, 0, 10, 10]
        }
    });
}

$(document).ready(createChart8);
$(document).bind("kendo:skinChange", createChart8);

function createChart9() {
    $("#chart9").kendoChart({
        title: {
            text: "Gross domestic product growth and standard error"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
            errorBars: {
                value: "stderr"
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
            categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
            line: {
                visible: false
            },
            labels: {
                padding: { top: 160 }
            }
        },
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });
}

$(document).ready(createChart9);
$(document).bind("kendo:skinChange", createChart9);

var drawing = kendo.drawing;
var geometry = kendo.geometry;
function createChart10() {
    $("#chart10").kendoChart({
        title: {
            text: "Site Visitors Stats /thousands/"
        },
        legend: {
            position: "bottom",
            item: {
                visual: createLegendItem
            }
        },
        seriesDefaults: {
            type: "column",
            stack: true,
            highlight: {
                toggle: function (e) {
                    e.preventDefault();

                    var visual = e.visual;
                    var opacity = e.show ? 0.8 : 1;

                    visual.opacity(opacity);
                }
            },
            visual: function (e) {
                return createColumn(e.rect, e.options.color);
            }
        },
        series: [{
            name: "Total Visits",
            data: [56000, 63000, 74000, 91000, 117000, 138000, 128000, 115000, 102000, 98000, 123000, 113000]
        }, {
            name: "Unique visitors",
            data: [52000, 34000, 23000, 48000, 67000, 83000, 40000, 50000, 64000, 72000, 75000, 81000]
        }],
        panes: [{
            clip: false
        }],
        valueAxis: {
            line: {
                visible: false
            }
        },
        categoryAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            majorGridLines: {
                visible: false
            },
            line: {
                visible: false
            }
        },
        tooltip: {
            visible: true
        }
    });
}

function createColumn(rect, color) {
    var origin = rect.origin;
    var center = rect.center();
    var bottomRight = rect.bottomRight();
    var radiusX = rect.width() / 2;
    var radiusY = radiusX / 3;
    var gradient = new drawing.LinearGradient({
        stops: [{
            offset: 0,
            color: color
        }, {
            offset: 0.5,
            color: color,
            opacity: 0.9
        }, {
            offset: 0.5,
            color: color,
            opacity: 0.9
        }, {
            offset: 1,
            color: color
        }]
    });

    var path = new drawing.Path({
        fill: gradient,
        stroke: {
            color: "none"
        }
    }).moveTo(origin.x, origin.y)
        .lineTo(origin.x, bottomRight.y)
        .arc(180, 0, radiusX, radiusY, true)
        .lineTo(bottomRight.x, origin.y)
        .arc(0, 180, radiusX, radiusY);

    var topArcGeometry = new geometry.Arc([center.x, origin.y], {
        startAngle: 0,
        endAngle: 360,
        radiusX: radiusX,
        radiusY: radiusY
    });

    var topArc = new drawing.Arc(topArcGeometry, {
        fill: {
            color: color
        },
        stroke: {
            color: "#ebebeb"
        }
    });
    var group = new drawing.Group();
    group.append(path, topArc);
    return group;
}

function createLegendItem(e) {
    var color = e.options.markers.background;
    var labelColor = e.options.labels.color;
    var rect = new geometry.Rect([0, 0], [120, 50]);
    var layout = new drawing.Layout(rect, {
        spacing: 5,
        alignItems: "center"
    });

    var overlay = drawing.Path.fromRect(rect, {
        fill: {
            color: "#fff",
            opacity: 0
        },
        stroke: {
            color: "none"
        },
        cursor: "pointer"
    });

    var column = createColumn(new geometry.Rect([0, 0], [15, 10]), color);
    var label = new drawing.Text(e.series.name, [0, 0], {
        fill: {
            color: labelColor
        }
    })

    layout.append(column, label);
    layout.reflow();

    var group = new drawing.Group().append(layout, overlay);

    return group;
}

$(document).ready(createChart10);
$(document).bind("kendo:skinChange", createChart10);

var blogComments = [{
    "blog": "My blog",
    "day": "1",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "2",
    "value": 7,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "3",
    "value": 12,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "4",
    "value": 15,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "5",
    "value": 6,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "6",
    "value": 23,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "7",
    "value": 12,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "8",
    "value": 10,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "9",
    "value": 17,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "10",
    "value": 13,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "11",
    "value": 14,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "12",
    "value": 15,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "13",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "14",
    "value": 6,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "15",
    "value": 23,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "16",
    "value": 25,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "17",
    "value": 21,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "18",
    "value": 18,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "19",
    "value": 17,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "20",
    "value": 16,
    "userColor": "#565656"
}, {
    "blog": "My blog",
    "day": "21",
    "value": 11,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "22",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "23",
    "value": 8,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "24",
    "value": 5,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "25",
    "value": 4,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "26",
    "value": 1,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "27",
    "value": 7,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "28",
    "value": 6,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "29",
    "value": 3,
    "userColor": "#ffd600"
}, {
    "blog": "My blog",
    "day": "30",
    "value": 6,
    "userColor": "#ffd600"
}];

function createChart11() {
    $("#chart11").kendoChart({
        dataSource: {
            data: blogComments
        },
        title: {
            align: "left",
            text: "Comments per day"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "column",
            labels: {
                visible: true,
                background: "transparent"
            }
        },
        series: [{
            field: "value",
            categoryField: "day",
            colorField: "userColor"
        }],
        valueAxis: {
            max: 28,
            majorGridLines: {
                visible: false
            },
            visible: false
        },
        categoryAxis: {
            majorGridLines: {
                visible: false
            },
            line: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart11);
$(document).bind("kendo:skinChange", createChart11);


