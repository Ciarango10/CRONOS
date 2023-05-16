function createChart() {
    $("#column-chart").kendoChart({
        dataSource: {
            transport: {
                read: {
                    url: "../content/dataviz/js/properties-sales.json",
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "asc"
            }
        },
        title: {
            text: "Sales by Product Category Over Time"
        },
        legend: {
            position: "bottom"
        },
        series:
            [{
                type: "column",
                field: "vacantLand",
                categoryField: "year",
                name: "Vacant Land",
                color: "#2185b4"
            }, {
                type: "column",
                field: "residentialProperties",
                categoryField: "year",
                name: "Residential Properties",
                color: "#319fd2"
            }, {
                type: "column",
                field: "commercialProperties",
                categoryField: "year",
                name: "Commercial Properties",
                color: "#3eaee2"
            }, {
                type: "line",
                field: "total",
                categoryField: "year",
                name: "Total Sales",
                axis: "axis",
                color: "red"
            }],
        categoryAxis: {
            axisCrossingValue: [0, 10],
            majorGridLines: {
                visible: false
            }
        },
        valueAxis: [{
            title: {
                text: "Sales"
            },
            majorUnit: 1000000,
            labels: {
                template: "#= formatSales(value) #"
            },
            line: {
                visible: false
            }
        },
        {
            name: "axis",
            title: {
                text: "Total sales"
            },
            majorUnit: 2000000,
            labels: {
                template: "#= formatSales(value) #"
            },
            line: {
                visible: false
            }
        }],
        tooltip: {
            visible: true,
            format: "N0"
        }
    });
}