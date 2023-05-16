function createMap1() {
    $("#map1").kendoMap({
        center: [30.268107, -97.744821],
        zoom: 3,
        layers: [{
            type: "tile",
            urlTemplate: "https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
            subdomains: ["a", "b", "c"],
            attribution: "&copy; <a href='https://osm.org/copyright'>OpenStreetMap contributors</a>"
        }],
        markers: [{
            location: [30.268107, -97.744821],
            shape: "pinTarget",
            tooltip: {
                content: "Austin, TX"
            }
        }]
    });
}

$(document).ready(createMap1);


function createMap2() {
    $("#map2").kendoMap({
        center: [51.505, -0.09],
        zoom: 3,
        layers: [{
            type: "bing",
            imagerySet: "aerialWithLabels",
            key: "PT90GNrnG5Bqxg1PfopA~Beliai2bFxJQJPNp-d2orA~AprjUTzhdIWJ5RikqfABIFIMXmOsjE6p4KClZs6lbakU5WtN-ENqHtEHLVSwqMpa"
        }]
    });
}

$(document).ready(createMap2);

function createMap3() {
    $("#map3").kendoMap({
        center: [30.268107, -97.744821],
        zoom: 15,
        layers: [{
            type: "tile",
            urlTemplate: "https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
            subdomains: ["a", "b", "c"],
            attribution: "&copy; <a href='https://osm.org/copyright'>OpenStreetMap contributors</a>." +
                "Tiles courtesy of <a href='https://www.opencyclemap.org/'>Andy Allan</a>"
        }, {
            type: "marker",
            dataSource: {
                transport: {
                    read: {
                        url: "../content/dataviz/map/store-locations.json",
                        dataType: "json"
                    }
                }
            },
            locationField: "latlng",
            titleField: "name"
        }]
    });
}

$(document).ready(createMap3);


function createMap() {
    $("#map").kendoMap({
        center: [39.6924, -97.3370],
        zoom: 4,
        layers: [{
            type: "tile",
            urlTemplate: "https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
            subdomains: ["a", "b", "c"],
            attribution: "&copy; <a href='https://osm.org/copyright'>OpenStreetMap contributors</a>." +
                "Tiles courtesy of <a href='https://www.opencyclemap.org/'>Andy Allan</a>"
        }, {
            type: "marker",
            dataSource: {
                transport: {
                    read: {
                        url: "../content/dataviz/map/store-locations.json",
                        dataType: "json"
                    }
                }
            },
            locationField: "latlng",
            titleField: "name"
        }],
        click: onClick,
        reset: onReset,
        pan: onPan,
        panEnd: onPanEnd,
        shapeClick: onShapeClick,
        shapeCreated: onShapeCreated,
        shapeFeatureCreated: onShapeFeatureCreated,
        shapeMouseEnter: onShapeMouseEnter,
        shapeMouseLeave: onShapeMouseLeave,
        zoomStart: onZoomStart,
        zoomEnd: onZoomEnd
    });
}

function onClick(e) {
    console.log(kendo.format(
        "Click en :: {0}", e.location.toString()
    ));
}

function onReset(e) {
    console.log("Resetear");
}

function onPan(e) {
    console.log(kendo.format(
        "Pan to :: {0}", e.center.toString()
    ));
}

function onPanEnd(e) {
    console.log(kendo.format(
        "Pan ended at :: {0}", e.center.toString()
    ));
}

function onShapeClick(e) {
    console.log(kendo.format(
        "Shape click :: {0}", e.shape.dataItem.properties.name
    ));
}

function onShapeCreated(e) {
    console.log(kendo.format(
        "Shape created :: {0}", e.shape.dataItem.properties.name
    ));
}

function onShapeFeatureCreated(e) {
    console.log(kendo.format(
        "Feature created :: {0} with {1} child shape(s)",
        e.properties.name,
        e.group.children.length
    ));
}

function onShapeMouseEnter(e) {
    console.log(kendo.format(
        "Shape mouseEnter :: {0}", e.shape.dataItem.properties.name
    ));
}

function onShapeMouseLeave(e) {
    console.log(kendo.format(
        "Shape mouseLeave :: {0}", e.shape.dataItem.properties.name
    ));
}

function onZoomStart(e) {
    console.log("Zoom start");
}

function onZoomEnd(e) {
    console.log("Zoom end");
}

$(document).ready(createMap);