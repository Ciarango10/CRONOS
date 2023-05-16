function createSparklines() {
    $("#press-log").kendoSparkline({
        data: [
            936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
            1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
            974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
            952, 940, 937, 980, 966, 965, 928, 916, 910, 980
        ]
    });

    $("#temp-log").kendoSparkline({
        type: "column",
        data: [
            16, 17, 18, 19, 20, 21, 21, 22, 23, 22,
            20, 18, 17, 17, 16, 16, 17, 18, 19, 20,
            21, 22, 23, 25, 24, 24, 22, 22, 23, 22,
            22, 21, 16, 15, 15, 16, 19, 20, 20, 21
        ],
        tooltip: {
            format: "{0} &deg;C"
        }
    });

    $("#hum-log").kendoSparkline({
        type: "area",
        data: [
            71, 70, 69, 68, 65, 60, 55, 55, 50, 52,
            73, 72, 72, 71, 68, 63, 57, 58, 53, 55,
            63, 59, 61, 64, 58, 53, 48, 48, 45, 45,
            63, 64, 63, 67, 58, 56, 53, 59, 51, 54
        ],
        tooltip: {
            format: "{0} %"
        }
    });

    $("#temp-range").kendoSparkline({
        type: "bullet",
        data: [21, 23],
        valueAxis: {
            min: 0,
            max: 30,
            plotBands: [{
                from: 0, to: 15, color: "#787878", opacity: 0.15
            }, {
                from: 15, to: 22, color: "#787878", opacity: 0.3
            }, {
                from: 22, to: 30, color: "#787878", opacity: 0.15
            }]
        },
        tooltip: {
            visible: true
        }
    });

    $("#stats-mon").kendoSparkline({
        type: "pie",
        data: [14, 10]
    });

    $("#stats-tue").kendoSparkline({
        type: "pie",
        data: [8, 16]
    });

    $("#stats-wed").kendoSparkline({
        type: "pie",
        data: [8, 16]
    });

    $("#stats-thu").kendoSparkline({
        type: "pie",
        data: [12, 12]
    });

    $("#stats-fri").kendoSparkline({
        type: "pie",
        data: [6, 18]
    });

    $("#stats-sat").kendoSparkline({
        type: "pie",
        data: [1, 23]
    });

    $("#stats-sun").kendoSparkline({
        type: "pie",
        data: [5, 19]
    });
}

$(document).ready(createSparklines);
$("#example").bind("kendo:skinChange", createSparklines);
