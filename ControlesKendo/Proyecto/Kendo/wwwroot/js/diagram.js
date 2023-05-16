var data = [{
    firstName: "Antonio",
    lastName: "Moreno",
    image: "antonio.jpg",
    title: "Team Lead",
    colorScheme: "#1696d3",
    items: [{
        firstName: "Elizabeth",
        image: "elizabeth.jpg",
        lastName: "Brown",
        title: "Design Lead",
        colorScheme: "#ef6944",
        items: [{
            firstName: "Ann",
            lastName: "Devon",
            image: "ann.jpg",
            title: "UI Designer",
            colorScheme: "#ef6944"
        }]
    }, {
        firstName: "Diego",
        lastName: "Roel",
        image: "diego.jpg",
        title: "QA Engineer",
        colorScheme: "#ee587b",
        items: [{
            firstName: "Fran",
            lastName: "Wilson",
            image: "fran.jpg",
            title: "QA Intern",
            colorScheme: "#ee587b"
        }]
    }, {
        firstName: "Felipe",
        lastName: "Izquiedro",
        image: "felipe.jpg",
        title: "Senior Developer",
        colorScheme: "#75be16",
        items: [{
            firstName: "Daniel",
            lastName: "Tonini",
            image: "daniel.jpg",
            title: "Developer",
            colorScheme: "#75be16"
        }]
    }]
}];

function visualTemplate(options) {
    var dataviz = kendo.dataviz;
    var g = new dataviz.diagram.Group();
    var dataItem = options.dataItem;

    g.append(new dataviz.diagram.Rectangle({
        width: 210,
        height: 75,
        stroke: {
            width: 0
        },
        fill: {
            gradient: {
                type: "linear",
                stops: [{
                    color: dataItem.colorScheme,
                    offset: 0,
                    opacity: 0.5
                }, {
                    color: dataItem.colorScheme,
                    offset: 1,
                    opacity: 1
                }]
            }
        }
    }));

    g.append(new dataviz.diagram.TextBlock({
        text: dataItem.firstName + " " + dataItem.lastName,
        x: 85,
        y: 20,
        fill: "#fff"
    }));

    g.append(new dataviz.diagram.TextBlock({
        text: dataItem.title,
        x: 85,
        y: 40,
        fill: "#fff"
    }));

    g.append(new dataviz.diagram.Image({
        source: "../content/dataviz/diagram/people/" + dataItem.image,
        x: 3,
        y: 3,
        width: 68,
        height: 68
    }));

    return g;
}

function createDiagram() {
    $("#diagram").kendoDiagram({
        dataSource: new kendo.data.HierarchicalDataSource({
            data: data,
            schema: {
                model: {
                    children: "items"
                }
            }
        }),
        layout: {
            type: "layered"
        },
        shapeDefaults: {
            visual: visualTemplate
        },
        connectionDefaults: {
            stroke: {
                color: "#979797",
                width: 2
            }
        }
    });

    var diagram = $("#diagram").getKendoDiagram();
    diagram.bringIntoView(diagram.shapes);
}

$(document).ready(createDiagram);

function visualTemplate(options) {
    var dataviz = kendo.dataviz;
    var g = new dataviz.diagram.Group();
    var dataItem = options.dataItem;

    if (dataItem.JobTitle === "President") {
        g.append(new dataviz.diagram.Circle({
            radius: 60,
            stroke: {
                width: 2,
                color: dataItem.Color || "#586477"
            },
            fill: "#e8eff7"
        }));
    } else {
        g.append(new dataviz.diagram.Rectangle({
            width: 240,
            height: 67,
            stroke: {
                width: 0
            },
            fill: "#e8eff7"
        }));

        g.append(new dataviz.diagram.Rectangle({
            width: 8,
            height: 67,
            fill: dataItem.Color,
            stroke: {
                width: 0
            }
        }));
    }

    return g;
}

function onDataBound(e) {
    var that = this;
    setTimeout(function () {
        that.bringIntoView(that.shapes);
    }, 0);
}

function createDiagram2() {
    var serviceRoot = "https://demos.telerik.com/kendo-ui/service";

    var shapesDataSource = {
        batch: false,
        transport: {
            read: {
                url: serviceRoot + "/DiagramShapes",
                dataType: "jsonp"
            },
            update: {
                url: serviceRoot + "/DiagramShapes/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: serviceRoot + "/DiagramShapes/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: serviceRoot + "/DiagramShapes/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read") {
                    return { models: kendo.stringify(options.models || [options]) };
                }
            }
        },
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { from: "Id", type: "number", editable: false },
                    JobTitle: { type: "string" },
                    Color: { type: "string" }
                }
            }
        }
    };

    var connectionsDataSource = {
        batch: false,
        transport: {
            read: {
                url: serviceRoot + "/DiagramConnections",
                dataType: "jsonp"
            },
            update: {
                url: serviceRoot + "/DiagramConnections/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: serviceRoot + "/DiagramConnections/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: serviceRoot + "/DiagramConnections/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read") {
                    return { models: kendo.stringify(options.models || [options]) };
                }
            }
        },
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { from: "Id", type: "number", editable: false },
                    from: { from: "FromShapeId", type: "number" },
                    to: { from: "ToShapeId", type: "number" },
                    fromX: { from: "FromPointX", type: "number" },
                    fromY: { from: "FromPointY", type: "number" },
                    toX: { from: "ToPointX", type: "number" },
                    toY: { from: "ToPointY", type: "number" }
                }
            }
        }
    };

    $("#diagram2").kendoDiagram({
        dataSource: shapesDataSource,
        connectionsDataSource: connectionsDataSource,
        layout: {
            type: "tree",
            subtype: "tipover",
            underneathHorizontalOffset: 140
        },
        shapeDefaults: {
            visual: visualTemplate,
            content: {
                template: "#= dataItem.JobTitle #",
                fontSize: 17,
                color: "#444"
            }
        },
        connectionDefaults: {
            stroke: {
                color: "#586477",
                width: 2
            }
        },
        dataBound: onDataBound
    });
}

$(document).ready(createDiagram2);

$(".export-pdf").click(function () {
    var diagram = $("#diagram3").getKendoDiagram();
    diagram.exportPDF({ paperSize: "auto", margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" } }).done(function (data) {
        kendo.saveAs({
            dataURI: data,
            fileName: "diagram.pdf",
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
        });
    });
});

$(".export-img").click(function () {
    var diagram = $("#diagram3").getKendoDiagram();
    diagram.exportImage().done(function (data) {
        kendo.saveAs({
            dataURI: data,
            fileName: "diagram.png",
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
        });
    });
});

$(".export-svg").click(function () {
    var diagram = $("#diagram3").getKendoDiagram();
    diagram.exportSVG().done(function (data) {
        kendo.saveAs({
            dataURI: data,
            fileName: "diagram.svg",
            proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
        });
    });
});

function createDiagram3() {
    var data = [{
        firstName: "Antonio",
        lastName: "Moreno",
        image: "antonio.jpg",
        title: "Team Lead",
        colorScheme: "#1696d3",
        items: [{
            firstName: "Elizabeth",
            image: "elizabeth.jpg",
            lastName: "Brown",
            title: "Design Lead",
            colorScheme: "#ef6944",
            items: [{
                firstName: "Ann",
                lastName: "Devon",
                image: "ann.jpg",
                title: "UI Designer",
                colorScheme: "#ef6944"
            }]
        }, {
            firstName: "Diego",
            lastName: "Roel",
            image: "diego.jpg",
            title: "QA Engineer",
            colorScheme: "#ee587b",
            items: [{
                firstName: "Fran",
                lastName: "Wilson",
                image: "fran.jpg",
                title: "QA Intern",
                colorScheme: "#ee587b"
            }]
        }, {
            firstName: "Felipe",
            lastName: "Izquiedro",
            image: "felipe.jpg",
            title: "Senior Developer",
            colorScheme: "#75be16",
            items: [{
                firstName: "Daniel",
                lastName: "Tonini",
                image: "daniel.jpg",
                title: "Developer",
                colorScheme: "#75be16"
            }]
        }]
    }];

    function visualTemplate(options) {
        var dataviz = kendo.dataviz;
        var g = new dataviz.diagram.Group();
        var dataItem = options.dataItem;

        g.append(new dataviz.diagram.Rectangle({
            width: 210,
            height: 75,
            stroke: {
                width: 0
            },
            fill: dataItem.colorScheme
        }));

        g.append(new dataviz.diagram.TextBlock({
            text: dataItem.firstName + " " + dataItem.lastName,
            x: 85,
            y: 20,
            fill: "#fff"
        }));

        g.append(new dataviz.diagram.TextBlock({
            text: dataItem.title,
            x: 85,
            y: 40,
            fill: "#fff"
        }));

        g.append(new dataviz.diagram.Image({
            source: "https://demos.telerik.com/kendo-ui/content/dataviz/diagram/people/" + dataItem.image,
            x: 3,
            y: 3,
            width: 68,
            height: 68
        }));

        return g;
    }

    $("#diagram3").kendoDiagram({
        dataSource: new kendo.data.HierarchicalDataSource({
            data: data,
            schema: {
                model: {
                    children: "items"
                }
            }
        }),
        layout: {
            type: "layered"
        },
        shapeDefaults: {
            visual: visualTemplate
        },
        connectionDefaults: {
            stroke: {
                color: "#979797",
                width: 2
            }
        }
    });

    var diagram = $("#diagram3").getKendoDiagram();
    diagram.bringIntoView(diagram.shapes);
}

$(document).ready(createDiagram3);
$(document).bind("kendo:skinChange", createDiagram3);