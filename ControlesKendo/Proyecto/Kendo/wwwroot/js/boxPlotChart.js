function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Monthly Mean Temperatures (&deg;F)"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "boxPlot",
            data: [
                [26.2, 38.3, 51, 61.45, 68.9, 49.0, [18.3, 20, 70, 72, 5]],
                [26.4, 38.125, 46.8, 60.425, 66.8, 47.3, [18, 69, 71.3, 71.5]],
                [31.6, 41.725, 52.35, 62.175, 70.8, 52.3, [14, 16.4, 74]],
                [34.4, 39.375, 49.9, 61.425, 69.2, 50.3, [16, 18, 72, 72.5]],
                [29.9, 38.35, 50.4, 60.875, 69.7, 49.9, [19, 20, 76, 78]],
                [22.3, 36.875, 48.9, 62.65, 70.3, 49.0, [16.5, 17, 74, 75, 78]],
                [32.3, 39.5, 54.1, 61.175, 67.3, 50.8, [13, 14, 15, 74.3, 75.2, 76]],
                [28.5, 36.075, 50.5, 64.2, 70.4, 49.6, [18, 22, 73.4, 75]],
                [33.6, 40.65, 49.55, 62.8, 69.2, 51.1, [17, 73]],
                [33.6, 38.6, 47.9, 60.825, 67, 49.7, [12, 13.5, 16, 73, 74.6, 77]],
                [31.9, 36.425, 49.3, 61.825, 69.7, 49.4, [17, 76]],
                [34, 41.225, 51.15, 62.4, 68.8, 51.6, [14.6, 17.3, 72.3, 74]]
            ],
            tooltip: {
                visible: true,
                format: "<table>" +
                    "<tr><th colspan='2'>{6:d}</th></tr>" +
                    "<tr><td>Lower:</td><td>{0:N}</td></tr>" +
                    "<tr><td>Q1:</td><td>{1:N}</td></tr>" +
                    "<tr><td>Median:</td><td>{2:N}</td></tr>" +
                    "<tr><td>Mean:</td><td>{5:N}</td></tr>" +
                    "<tr><td>Q3:</td><td>{3:N}</td></tr>" +
                    "<tr><td>Upper:</td><td>{4:N}</td></tr>" +
                    "</table>"
            }
        }],
        categoryAxis: {
            categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Monthly Mean Temperatures (&deg;F)"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "verticalBoxPlot",
            data: [
                [26.2, 38.3, 51, 61.45, 68.9, 49.0, [18.3, 20, 70, 72, 5]],
                [26.4, 38.125, 46.8, 60.425, 66.8, 47.3, [18, 69, 71.3, 71.5]],
                [31.6, 41.725, 52.35, 62.175, 70.8, 52.3, [14, 16.4, 74]],
                [34.4, 39.375, 49.9, 61.425, 69.2, 50.3, [16, 18, 72, 72.5]],
                [29.9, 38.35, 50.4, 60.875, 69.7, 49.9, [19, 20, 76, 78]],
                [22.3, 36.875, 48.9, 62.65, 70.3, 49.0, [16.5, 17, 74, 75, 78]],
                [32.3, 39.5, 54.1, 61.175, 67.3, 50.8, [13, 14, 15, 74.3, 75.2, 76]],
                [28.5, 36.075, 50.5, 64.2, 70.4, 49.6, [18, 22, 73.4, 75]],
                [33.6, 40.65, 49.55, 62.8, 69.2, 51.1, [17, 73]],
                [33.6, 38.6, 47.9, 60.825, 67, 49.7, [12, 13.5, 16, 73, 74.6, 77]],
                [31.9, 36.425, 49.3, 61.825, 69.7, 49.4, [17, 76]],
                [34, 41.225, 51.15, 62.4, 68.8, 51.6, [14.6, 17.3, 72.3, 74]]
            ],
            tooltip: {
                visible: true,
                format: "<table>" +
                    "<tr><th colspan='2'>{6:d}</th></tr>" +
                    "<tr><td>Lower:</td><td>{0:N}</td></tr>" +
                    "<tr><td>Q1:</td><td>{1:N}</td></tr>" +
                    "<tr><td>Median:</td><td>{2:N}</td></tr>" +
                    "<tr><td>Mean:</td><td>{5:N}</td></tr>" +
                    "<tr><td>Q3:</td><td>{3:N}</td></tr>" +
                    "<tr><td>Upper:</td><td>{4:N}</td></tr>" +
                    "</table>"
            }
        }],
        categoryAxis: {
            categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

var data = [
    { year: 1990, lower: 1.3, q1: 2.15, median: 2.95, q3: 3.725, upper: 4.7, mean: 2.9, outliers: [1, 9] },
    { year: 1991, lower: 2, q1: 3.825, median: 5.45, q3: 6.425, upper: 8.2, mean: 5.2, outliers: [1.5, 2, 8.9] },
    { year: 1992, lower: 3.8, q1: 4.725, median: 5.55, q3: 5.75, upper: 8.7, mean: 5.5 },
    { year: 1993, lower: 3, q1: 4.375, median: 4.95, q3: 5.85, upper: 8, mean: 5.2, outliers: [3, 9.5] },
    { year: 1994, lower: 2.5, q1: 3.925, median: 4.15, q3: 4.45, upper: 5.1, mean: 4.1 },
    { year: 1995, lower: 2.4, q1: 3.725, median: 4.95, q3: 5.85, upper: 7.7, mean: 4.9, outliers: [2.1, 8.3, 9.8] },
    { year: 1996, lower: 1.7, q1: 2.3, median: 3.9, q3: 5, upper: 5.5, mean: 3.7, outliers: [1.1, 9.1] },
    { year: 1997, lower: 2.2, q1: 2.5, median: 3.1, q3: 3.975, upper: 4.3, mean: 3.2, outliers: [1.6, 1.8, 9.8] },
    { year: 1998, lower: 1.9, q1: 2.7, median: 3.35, q3: 4.575, upper: 5.7, mean: 3.6, outliers: [1.1, 8.3] },
    { year: 1999, lower: 1.7, q1: 2.65, median: 3.3, q3: 4.05, upper: 5, mean: 3.4 },
    { year: 2000, lower: 1.4, q1: 2.25, median: 3.3, q3: 4.65, upper: 5.7, mean: 3.4 },
    { year: 2001, lower: 1.9, q1: 2.85, median: 4, q3: 4.45, upper: 6.1, mean: 3.9, outliers: [1, 1.2] },
    { year: 2002, lower: 1.5, q1: 2.35, median: 4.1, q3: 5.225, upper: 5.7, mean: 3.9, outliers: [9, 9.5] },
    { year: 2003, lower: 1.8, q1: 2.325, median: 3.35, q3: 4, upper: 5.4, mean: 3.3, outliers: [1, 6] },
    { year: 2004, lower: 1.8, q1: 2.75, median: 3.35, q3: 3.825, upper: 4.9, mean: 3.4 },
    { year: 2005, lower: 1.7, q1: 2.275, median: 3.2, q3: 3.825, upper: 5.5, mean: 3.2, outliers: [0.5, 6.7] },
    { year: 2006, lower: 1.2, q1: 1.95, median: 2.45, q3: 3.075, upper: 3.5, mean: 2.5 },
    { year: 2007, lower: 1.3, q1: 1.9, median: 3.05, q3: 3.425, upper: 4, mean: 2.7, outliers: [7, 8.5] }
];

function createChart3() {
    $("#chart3").kendoChart({
        dataSource: {
            data: data
        },
        title: {
            text: "Ozone Concentration (ppm)"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "boxPlot",
            lowerField: "lower",
            q1Field: "q1",
            medianField: "median",
            q3Field: "q3",
            upperField: "upper",
            meanField: "mean",
            outliersField: "outliers",
            categoryField: "year"
        }],
        categoryAxis: {
            majorGridLines: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);