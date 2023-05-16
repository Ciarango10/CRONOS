function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Polar plot"
        },
        seriesDefaults: {
            type: "polarLine",
            style: "smooth"
        },
        series: [{
            data: [
                [0, 0], [15, 2], [30, 4],
                [45, 6], [60, 8], [75, 10],
                [90, 12], [105, 14], [120, 16],
                [135, 18], [150, 20], [165, 22],
                [180, 24], [195, 26], [210, 28],
                [225, 30], [240, 32], [255, 34],
                [270, 36], [285, 38], [300, 40],
                [315, 42], [330, 44], [345, 46],
                [360, 48], [15, 50], [30, 52],
                [45, 54], [60, 56], [75, 58], [90, 60]
            ]
        }, {
            data: [
                [0, 0], [15, 1], [30, 2],
                [45, 3], [60, 4], [75, 5],
                [90, 6], [105, 7], [120, 8],
                [135, 9], [150, 10], [165, 11],
                [180, 12], [195, 13], [210, 14],
                [225, 15], [240, 16], [255, 17],
                [270, 18], [285, 19], [300, 20],
                [315, 21], [330, 22], [345, 23],
                [360, 24], [15, 25], [30, 26],
                [45, 27], [60, 28], [75, 29], [90, 30]
            ]
        }, {
            data: [
                [0, 0], [15, 3], [30, 6],
                [45, 9], [60, 12], [75, 15],
                [90, 18], [105, 21], [120, 24],
                [135, 27], [150, 30], [165, 33],
                [180, 36], [195, 39], [210, 42],
                [225, 45], [240, 48], [255, 51],
                [270, 54], [285, 57], [300, 60],
                [315, 63], [330, 66], [345, 69],
                [360, 72], [15, 75], [30, 78],
                [45, 81], [60, 84], [75, 87], [90, 90]
            ]
        }]
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

var sunPos = [
    { "time": "08:00", "altitude": 4.9, "azimuth": 92.7 },
    { "time": "09:00", "altitude": 17.6, "azimuth": 100.6 },
    { "time": "10:00", "altitude": 30.1, "azimuth": 109.7 },
    { "time": "11:00", "altitude": 41.8, "azimuth": 121.3 },
    { "time": "12:00", "altitude": 51.8, "azimuth": 137.7 },
    { "time": "13:00", "altitude": 58.5, "azimuth": 161.5 },
    { "time": "14:00", "altitude": 59.4, "azimuth": 190.7 },
    { "time": "15:00", "altitude": 54.1, "azimuth": 216.6 },
    { "time": "16:00", "altitude": 44.8, "azimuth": 234.8 },
    { "time": "17:00", "altitude": 33.5, "azimuth": 247.6 },
    { "time": "18:00", "altitude": 21.2, "azimuth": 257.2 },
    { "time": "19:00", "altitude": 8.4, "azimuth": 265.3 },
];

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Sun position at equinox"
        },
        dataSource: {
            data: sunPos
        },
        series: [{
            type: "polarLine",
            style: "smooth",
            xField: "azimuth",
            yField: "altitude",
            labels: {
                template: "#= dataItem.time.substring(0,2) #h",
                position: "below",
                visible: true
            }
        }],
        xAxis: {
            startAngle: -90,
            majorUnit: 30
        },
        yAxis: {
            labels: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart2);
$(document).bind("kendo:skinChange", createChart2);

function createChart3() {
    $("#chart3").kendoChart({
        title: {
            text: "Buck spread"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "polarScatter"
        },
        series: [{
            name: "at 3 ft",
            data: [
                [150, 3], [150, 3.1], [152, 3.2], [152, 3.1], [151, 3.2], [153, 3.3], [149, 3]
            ]
        }, {
            name: "at 7 ft",
            data: [
                [270, 5], [250, 7], [259, 4], [270, 7], [265, 5], [250, 7], [263, 8], [261, 5]
            ]
        }],
        yAxis: {
            max: 10
        }
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);

function createChart4() {
    $("#chart4").kendoChart({
        title: {
            text: "Polar area"
        },
        legend: {
            position: "bottom"
        },
        series: [{
            type: "polarArea",
            data: [
                [10, 10], [30, 20], [50, 30],
                [70, 20], [90, 10], [90, 0],
                [230, 10], [235, 20], [240, 30],
                [245, 20], [250, 10]
            ]
        }]
    });
}

$(document).ready(createChart4);
$(document).bind("kendo:skinChange", createChart4);

var sunPos = [
    { "time": "08:00", "altitude": 4.9, "azimuth": 92.7 },
    { "time": "09:00", "altitude": 17.6, "azimuth": 100.6 },
    { "time": "10:00", "altitude": 30.1, "azimuth": 109.7 },
    { "time": "11:00", "altitude": 41.8, "azimuth": 121.3 },
    { "time": "12:00", "altitude": 51.8, "azimuth": 137.7 },
    { "time": "13:00", "altitude": 58.5, "azimuth": 161.5 },
    { "time": "14:00", "altitude": 59.4, "azimuth": 190.7 },
    { "time": "15:00", "altitude": 54.1, "azimuth": 216.6 },
    { "time": "16:00", "altitude": 44.8, "azimuth": 234.8 },
    { "time": "17:00", "altitude": 33.5, "azimuth": 247.6 },
    { "time": "18:00", "altitude": 21.2, "azimuth": 257.2 },
    { "time": "19:00", "altitude": 8.4, "azimuth": 265.3 },
];

function createChart5() {
    $("#chart5").kendoChart({
        title: {
            text: "Sun position at equinox"
        },
        dataSource: {
            data: sunPos
        },
        series: [{
            type: "polarLine",
            xField: "azimuth",
            yField: "altitude",
            labels: {
                template: "#= dataItem.time.substring(0,2) #h",
                position: "below",
                visible: true
            }
        }],
        xAxis: {
            startAngle: -90,
            majorUnit: 30
        },
        yAxis: {
            labels: {
                visible: false
            }
        }
    });
}

$(document).ready(createChart5);
$(document).bind("kendo:skinChange", createChart5);