function createChart() {
    $("#chart").kendoChart({
        title: {
            text: "Market Value of Major Banks"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "radarLine"
        },
        series: [{
            name: "Market value as of 2007",
            data: [116, 165, 215, 75, 100, 49, 80, 116, 108, 90, 67, 76, 91, 255, 120]
        }, {
            name: "Market value as of 2009",
            data: [64, 85, 97, 27, 16, 26, 35, 32, 26, 17, 10, 7, 19, 5]
        }],
        categoryAxis: {
            categories: ["Santander", "JP Morgan", "HSBC", "Credit Suisse",
                "Goldman Sachs", "Morgan Stanley", "Societe Generale", "UBS",
                "BNP Paribas", "Unicredit", "Credit Agricole", "Deutsche Bank",
                "Barclays", "Citigroup", "RBS"]
        },
        valueAxis: {
            labels: {
                format: "${0}"
            }
        },
        tooltip: {
            visible: true,
            format: "${0} bln"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function createChart2() {
    $("#chart2").kendoChart({
        title: {
            text: "Employment candidate review"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "radarArea"
        },
        series: [{
            name: "Andrew Dodsworth",
            data: [10, 3, 3, 10, 2, 10]
        }, {
            name: "Margaret Peacock",
            data: [9, 7, 7, 9, 6, 7]
        }, {
            name: "Nancy Callahan",
            data: [4, 10, 10, 5, 5, 4]
        }],
        categoryAxis: {
            categories: [
                "Experience", "Communication", "Friendliness",
                "Subject knowledge", "Presentation", "Education"
            ],
            majorGridLines: {
                visible: false
            }
        },
        valueAxis: {
            labels: {
                format: "{0}%"
            },
            line: {
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
            text: "Nutrient balance: Apples, raw"
        },
        legend: {
            visible: false
        },
        series: [{
            type: "radarColumn",
            name: "Nutrients",
            data: [
                5, 1, 1, 5, 0, 1,
                1, 2, 1, 2, 1, 0,
                0, 2, 1, 0, 3, 1,
                1, 1, 0, 0, 0
            ]
        }],
        categoryAxis: {
            categories: [
                "Df", "Pr", "A", "C", "D", "E",
                "Th", "Ri", "Ni", "B", "F", "B",
                "Se", "Mn", "Cu", "Zn", "K", "P",
                "Fe", "Ca", "Na", "Ch", "Sf"
            ]
        },
        valueAxis: {
            visible: false
        }
    });
}

$(document).ready(createChart3);
$(document).bind("kendo:skinChange", createChart3);

var proteinData = [{
    name: "Tryptophan",
    abbr: "Trp",
    score: 3
}, {
    name: "Threonine",
    abbr: "Thr",
    score: 4
}, {
    name: "Isoleucine",
    abbr: "Iso",
    score: 5
}, {
    name: "Leucine",
    abbr: "Leu",
    score: 5
}, {
    name: "Lysine",
    abbr: "Lys",
    score: 5
}, {
    name: "Methionine + Cystine",
    abbr: "M+C",
    score: 2
}, {
    name: "Phenylalanine + Tyrosine",
    abbr: "p+T",
    score: 3
}, {
    name: "Valine",
    abbr: "Val",
    score: 5
}, {
    name: "Histidine",
    abbr: "Hys",
    score: 4
}];

function createChart4() {
    $("#chart4").kendoChart({
        title: {
            text: "Protein quality, Apple raw"
        },
        dataSource: {
            data: proteinData
        },
        series: [{
            name: "Proteins",
            type: "radarColumn",
            field: "score",
            categoryField: "abbr"
        }],
        valueAxis: {
            visible: false
        },
        tooltip: {
            visible: true
        },
        legend: {
            visible: false
        }
    });
}

$(document).ready(createChart4);
$(document).bind("kendo:skinChange", createChart4);