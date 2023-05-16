var series = [{
    name: "Total Visits",
    data: [56000, 63000, 74000, 91000, 117000, 138000],

    // Line chart marker type
    markers: { type: "square" }
}, {
    name: "Unique visitors",
    data: [52000, 34000, 23000, 48000, 67000, 83000]
}];

function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Site Visitors Stats /thousands/"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "column",
            stack: true
        },
        series: series,
        valueAxis: {
            line: {
                visible: false
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
            format: "{0}"
        }
    });
}

$(document).ready(function () {
    createChart();
    $(document).bind("kendo:skinChange", createChart);
    $(".options").bind("change", refresh);
});

function refresh() {
    var chart = $("#chart").data("kendoChart"),
        type = $("input[name=seriesType]:checked").val(),
        stack = $("#stack").prop("checked");

    for (var i = 0, length = series.length; i < length; i++) {
        series[i].stack = stack;
        series[i].type = type;
    };

    chart.setOptions({
        series: series
    });
}

//function createChart2() {
//    $("#chart2").kendoChart({
//        dataSource: {
//            transport: {
//                read: {
//                    url: "../content/dataviz/js/spain-electricity.json",
//                    dataType: "json"
//                }
//            },
//            sort: {
//                field: "year",
//                dir: "asc"
//            }
//        },
//        title: {
//            text: "Spain electricity production (GWh)"
//        },
//        legend: {
//            position: "top"
//        },
//        seriesDefaults: {
//            type: "column"
//        },
//        series:
//            [{
//                field: "nuclear",
//                categoryField: "year",
//                name: "Nuclear"
//            }, {
//                field: "hydro",
//                categoryField: "year",
//                name: "Hydro"
//            }, {
//                field: "wind",
//                categoryField: "year",
//                name: "Wind"
//            }],
//        categoryAxis: {
//            labels: {
//                rotation: -90
//            }
//        },
//        valueAxis: {
//            labels: {
//                format: "{0:N0}"
//            },
//            majorUnit: 10000
//        },
//        tooltip: {
//            visible: true,
//            format: "{0:N0}"
//        },
//        //seriesClick: onSeriesClick,
//        //seriesHover: onSeriesHover,
//        //dataBound: onDataBound,
//        //axisLabelClick: onAxisLabelClick,
//        //legendItemClick: onLegendItemClick,
//        //legendItemHover: onLegendItemHover,
//        //plotAreaClick: onPlotAreaClick,
//        //plotAreaHover: onPlotAreaHover,
//        //render: onRender,
//        //dragStart: onDragStart,
//        //drag: onDrag,
//        //dragEnd: onDragEnd,
//        //zoomStart: onZoomStart,
//        //zoom: onZoom,
//        //zoomEnd: onZoomEnd
//    });
//}

////function onSeriesClick(e) {
////    console.log(kendo.format("Series clickeada :: {0} ({1}): {2}",
////        e.series.name, e.category, e.value));
////}

////function onSeriesHover(e) {
////    console.log(kendo.format("Series hover :: {0} ({1}): {2}",
////        e.series.name, e.category, e.value));
////}

////function onDataBound(e) {
////    console.log("Data bound");
////}

////function onAxisLabelClick(e) {
////    console.log(kendo.format("Axis label click :: {0} axis : {1}",
////        e.axis.type, e.text));
////}

////function onLegendItemClick(e) {
////    console.log(kendo.format("Legend item click :: {0}", e.text));
////}

////function onLegendItemHover(e) {
////    console.log(kendo.format("Legend item hover :: {0}", e.text));
////}

////function onPlotAreaClick(e) {
////    console.log(kendo.format("Plot area click :: {0} : {1:N0}",
////        e.category, e.value
////    ));
////}

////function onPlotAreaHover(e) {
////    console.log(kendo.format("Plot area hover :: {0} : {1:N0}",
////        e.category, e.value
////    ));
////}

////function onRender(e) {
////    console.log("Render");
////}

////function onDragStart(e) {
////    console.log("Drag start");
////}

////function onDrag(e) {
////    console.log("Drag");
////}

////function onDragEnd(e) {
////    console.log("Drag end");
////}

////function onZoomStart(e) {
////    console.log("Zoom start");
////}

////function onZoom(e) {
////    console.log(kendo.format("Zoom :: {0}", e.delta));

////    // Prevent scrolling
////    e.originalEvent.preventDefault();
////}

////function onZoomEnd(e) {
////    console.log("Zoom end");
///*}*/

//$(document).ready(createChart2);
//$(document).bind("kendo:skinChange", createChart2);

$(".export-pdf").click(function () {
    var chart = $("#chart2").getKendoChart();
    chart.exportPDF({ paperSize: "auto", margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" } }).done(function (data) {
        kendo.saveAs({
            dataURI: data,
            fileName: "chart.pdf",
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
        });
    });
});

$(".export-img").click(function () {
    var chart = $("#chart2").getKendoChart();
    chart.exportImage().done(function (data) {
        kendo.saveAs({
            dataURI: data,
            fileName: "chart.png",
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
        });
    });
});

$(".export-svg").click(function () {
    var chart = $("#chart2").getKendoChart();
    chart.exportSVG().done(function (data) {
        kendo.saveAs({
            dataURI: data,
            fileName: "chart.svg",
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
        });
    });
});

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Hybrid car mileage report",
            font: "bold 16px 'DejaVu Sans'"
        },
        legend: {
            position: "top",
            labels: {
                font: "12px 'DejaVu Sans'"
            }
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

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

function createChart3() {
    $("#chart3").kendoChart({
        title: {
            text: "Olympic Medals won by USA"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "column"
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
        categoryAxis: {
            categories: [1952, 1956, 1960, 1964, 1968, 1972, 1976, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012],
            majorGridLines: {
                visible: false
            },
            select: {
                from: 2,
                to: 5
            }
        },
        selectStart: onSelectStart,
        select: onSelect,
        selectEnd: onSelectEnd
    });
}

function formatRange(e) {
    var categories = e.axis.categories;

    return kendo.format("{0} - {1} ({2} - {3})",
        e.from, e.to,
        categories[e.from],
        // The last category included in the selection is at (to - 1)
        categories[e.to - 1]
    );
}

function onSelectStart(e) {
    console.log(kendo.format("Select start :: {0}", formatRange(e)));
}

function onSelect(e) {
    console.log(kendo.format("Select :: {0}", formatRange(e)));
}

function onSelectEnd(e) {
    console.log(kendo.format("Select end :: {0}", formatRange(e)));
}

function setOptions() {
    var chart = $("#chart3").data("kendoChart");

    $.extend(true /* deep */, chart.options, {
        categoryAxis: {
            select: {
                mousewheel: {
                    reverse: $("#reverse").prop("checked"),
                    zoom: $("#zoom").val()
                }
            }
        }
    });

    chart.refresh();
}

$("#reverse, #zoom").click(setOptions);

$(document).ready(createChart3);
$("#example3").bind("kendo:skinChange", createChart3);



 