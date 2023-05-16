function createChart() {
    $("#stock-chart").kendoStockChart({
        dataSource: {
            transport: {
                read: {
                    url: "../content/dataviz/js/boeing-stock.json",
                    dataType:"json"
                }
            },
            schema: {
                model: {
                    fields: {
                        Date: { type: "date" }
                    }
                }
            }
        },
        title: {
            text: "The Boeing Company\nNYSE:BA"
        },
        dateField: "Date",
        series: [{
            type: "candlestick",
            openField: "Open",
            highField: "High",
            lowField: "Low",
            closeField: "Close"
        }],
        categoryAxis: {
            labels: {
                rotation: "auto"
            }
        },
        navigator: {
            series: {
                type: "area",
                field: "Close"
            },
            select: {
                from: "2009/02/05",
                to: "2011/10/07"
            },
            categoryAxis: {
                labels: {
                    rotation: "auto"
                }
            }
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);