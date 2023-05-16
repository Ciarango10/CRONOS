function createChart() {
    $("#heatmap").kendoChart({
        series: [{
            name: "Number of commits per day",
            type: 'heatmap',
            tooltip: {
                visible: true,
                template: "<b>#=dataItem[0]#</b> added <b>#=dataItem[2]#</b> new commits on <b>#=kendo.toString(dataItem[1], 'dd-MM-yyyy')#</b>"
            },
            data: [
                ['Cully', new Date(2021, 7, 7), 4],
                ['Cully', new Date(2021, 7, 6), 20],
                ['Cully', new Date(2021, 7, 5), 11],
                ['Cully', new Date(2021, 7, 4), 8],
                ['Cully', new Date(2021, 7, 3), 15],
                ['Cully', new Date(2021, 7, 2), 14],
                ['Cully', new Date(2021, 7, 1), 3],
                ['Maria', new Date(2021, 7, 7), 8],
                ['Maria', new Date(2021, 7, 6), 5],
                ['Maria', new Date(2021, 7, 5), 13],
                ['Maria', new Date(2021, 7, 4), 14],
                ['Maria', new Date(2021, 7, 3), 15],
                ['Maria', new Date(2021, 7, 2), 2],
                ['Maria', new Date(2021, 7, 1), 4],
                ['Idell', new Date(2021, 7, 7), 15],
                ['Idell', new Date(2021, 7, 6), 1],
                ['Idell', new Date(2021, 7, 5), 4],
                ['Idell', new Date(2021, 7, 4), 19],
                ['Idell', new Date(2021, 7, 3), 7],
                ['Idell', new Date(2021, 7, 2), 17],
                ['Idell', new Date(2021, 7, 1), 12],
                ['Joe', new Date(2021, 7, 7), 7],
                ['Joe', new Date(2021, 7, 6), 17],
                ['Joe', new Date(2021, 7, 5), 4],
                ['Joe', new Date(2021, 7, 4), 9],
                ['Joe', new Date(2021, 7, 3), 24],
                ['Joe', new Date(2021, 7, 2), 4],
                ['Joe', new Date(2021, 7, 1), 6],
                ['Boyd', new Date(2021, 7, 7), 3],
                ['Boyd', new Date(2021, 7, 6), 20],
                ['Boyd', new Date(2021, 7, 5), 6],
                ['Boyd', new Date(2021, 7, 4), 4],
                ['Boyd', new Date(2021, 7, 3), 11],
                ['Boyd', new Date(2021, 7, 2), 0],
                ['Boyd', new Date(2021, 7, 1), 19],
                ['Curtis', new Date(2021, 7, 7), 20],
                ['Curtis', new Date(2021, 7, 6), 13],
                ['Curtis', new Date(2021, 7, 5), 7],
                ['Curtis', new Date(2021, 7, 4), 12],
                ['Curtis', new Date(2021, 7, 3), 1],
                ['Curtis', new Date(2021, 7, 2), 16],
                ['Curtis', new Date(2021, 7, 1), 16],
                ['Tom', new Date(2021, 7, 7), 4],
                ['Tom', new Date(2021, 7, 6), 3],
                ['Tom', new Date(2021, 7, 5), 19],
                ['Tom', new Date(2021, 7, 4), 2],
                ['Tom', new Date(2021, 7, 3), 21],
                ['Tom', new Date(2021, 7, 2), 10],
                ['Tom', new Date(2021, 7, 1), 7]
            ]
        }],
        legend: {
            position: "bottom"
        },
        xAxis: {
            categories: ['Cully', 'Maria', 'Idell', 'Joe', 'Boyd', 'Curtis', 'Tom'],
            labels: {
                rotation: 'auto'
            },
        },
        yAxis: {
            categories: [new Date(2021, 7, 1),
            new Date(2021, 7, 2),
            new Date(2021, 7, 3),
            new Date(2021, 7, 4),
            new Date(2021, 7, 5),
            new Date(2021, 7, 6),
            new Date(2021, 7, 7)]
        },
        pannable: true,
        zoomable: true,
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

let data = [{
    country: "United States",
    medal: "Gold",
    count: 46
},
{
    country: "United States",
    medal: "Silver",
    count: 37
},
{
    country: "United States",
    medal: "Bronze",
    count: 38
},
{
    country: "Great Britain",
    medal: "Gold",
    count: 27
},
{
    country: "Great Britain",
    medal: "Silver",
    count: 23
},
{
    country: "Great Britain",
    medal: "Bronze",
    count: 17
},
{
    country: "China",
    medal: "Gold",
    count: 26
},
{
    country: "China",
    medal: "Silver",
    count: 18
},
{
    country: "China",
    medal: "Bronze",
    count: 26
},
{
    country: "Russia",
    medal: "Gold",
    count: 19
},
{
    country: "Russia",
    medal: "Silver",
    count: 17
},
{
    country: "Russia",
    medal: "Bronze",
    count: 20
},
{
    country: "Germany",
    medal: "Gold",
    count: 17
},
{
    country: "Germany",
    medal: "Silver",
    count: 10
},
{
    country: "Germany",
    medal: "Bronze",
    count: 15
}];

function createChart2() {
    $("#heatmap2").kendoChart({
        dataSource: {
            data: data
        },
        series: [{
            name: 'Olympic Medals 2016',
            type: 'heatmap',
            xField: 'country',
            yField: 'medal',
            field: 'count',
            tooltip: {
                visible: true,
                template: "<b>#=dataItem.country# - #=dataItem.count# #=dataItem.medal# medals</b>"
            }
        }],
        legend: {
            position: "bottom"
        },
        xAxis: {
            labels: {
                rotation: 'auto'
            }
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

let markers = [
    { text: "Rectangle", value: "rect" },
    { text: "Rounded rectangle", value: "roundedRect" },
    { text: "Circle", value: "circle" },
    { text: "Triangle", value: "triangle" },
    { text: "Custom", value: "custom" }
];

$("#dropDownList").kendoDropDownList({
    dataSource: markers,
    dataTextField: "text",
    dataValueField: "value",
    value: "circle",
    change: function () {
        let value = this.value();
        let heatmap = $("#heatmap3").data("kendoChart");

        if (value === "custom") {
            heatmap.options.series[0].markers = {
                size: 30,
                rotation: -45
            };
        } else {
            heatmap.options.series[0].markers = {
                type: value
            };
        }

        heatmap.redraw();
    }
});

function createChart3() {
    $("#heatmap3").kendoChart({
        title: {
            text: "Commits added per day",
            position: "top"
        },
        series: [{
            type: 'heatmap',
            tooltip: {
                visible: true,
                template: "<b>#=dataItem[0]#</b> added <b>#=dataItem[2]#</b> new commits on <b>#=kendo.toString(dataItem[1], 'dd-MM-yyyy')#</b>"
            },
            markers: {
                type: "circle"
            },
            data: [
                ['Cully', new Date(2021, 7, 7), 4],
                ['Cully', new Date(2021, 7, 6), 20],
                ['Cully', new Date(2021, 7, 5), 11],
                ['Cully', new Date(2021, 7, 4), 8],
                ['Cully', new Date(2021, 7, 3), 15],
                ['Cully', new Date(2021, 7, 2), 14],
                ['Cully', new Date(2021, 7, 1), 3],
                ['Maria', new Date(2021, 7, 7), 8],
                ['Maria', new Date(2021, 7, 6), 5],
                ['Maria', new Date(2021, 7, 5), 13],
                ['Maria', new Date(2021, 7, 4), 14],
                ['Maria', new Date(2021, 7, 3), 15],
                ['Maria', new Date(2021, 7, 2), 2],
                ['Maria', new Date(2021, 7, 1), 4],
                ['Idell', new Date(2021, 7, 7), 15],
                ['Idell', new Date(2021, 7, 6), 1],
                ['Idell', new Date(2021, 7, 5), 4],
                ['Idell', new Date(2021, 7, 4), 19],
                ['Idell', new Date(2021, 7, 3), 7],
                ['Idell', new Date(2021, 7, 2), 17],
                ['Idell', new Date(2021, 7, 1), 12],
                ['Joe', new Date(2021, 7, 7), 7],
                ['Joe', new Date(2021, 7, 6), 17],
                ['Joe', new Date(2021, 7, 5), 4],
                ['Joe', new Date(2021, 7, 4), 9],
                ['Joe', new Date(2021, 7, 3), 24],
                ['Joe', new Date(2021, 7, 2), 4],
                ['Joe', new Date(2021, 7, 1), 6],
                ['Boyd', new Date(2021, 7, 7), 3],
                ['Boyd', new Date(2021, 7, 6), 20],
                ['Boyd', new Date(2021, 7, 5), 6],
                ['Boyd', new Date(2021, 7, 4), 4],
                ['Boyd', new Date(2021, 7, 3), 11],
                ['Boyd', new Date(2021, 7, 2), 0],
                ['Boyd', new Date(2021, 7, 1), 19],
                ['Curtis', new Date(2021, 7, 7), 20],
                ['Curtis', new Date(2021, 7, 6), 13],
                ['Curtis', new Date(2021, 7, 5), 7],
                ['Curtis', new Date(2021, 7, 4), 12],
                ['Curtis', new Date(2021, 7, 3), 1],
                ['Curtis', new Date(2021, 7, 2), 16],
                ['Curtis', new Date(2021, 7, 1), 16],
                ['Tom', new Date(2021, 7, 7), 4],
                ['Tom', new Date(2021, 7, 6), 3],
                ['Tom', new Date(2021, 7, 5), 19],
                ['Tom', new Date(2021, 7, 4), 2],
                ['Tom', new Date(2021, 7, 3), 21],
                ['Tom', new Date(2021, 7, 2), 10],
                ['Tom', new Date(2021, 7, 1), 7]
            ]
        }],
        xAxis: {
            categories: ['Cully', 'Maria', 'Idell', 'Joe', 'Boyd', 'Curtis', 'Tom'],
            labels: {
                rotation: 'auto'
            },
        },
        yAxis: {
            categories: [new Date(2021, 7, 1),
            new Date(2021, 7, 2),
            new Date(2021, 7, 3),
            new Date(2021, 7, 4),
            new Date(2021, 7, 5),
            new Date(2021, 7, 6),
            new Date(2021, 7, 7)]
        },
        pannable: true,
        zoomable: true,
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);