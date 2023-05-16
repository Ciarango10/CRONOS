function createTreeMap() {
    $("#treeMap").kendoTreeMap({
        dataSource: {
            transport: {
                read: {
                    url: "../DataManagement/DatosTreeMap",
                }
            },
            schema: {
                model: {
                    children: "items"
                }
            }
        },
        valueField: "value",
        textField: "name"
    });
}

$(document).ready(function () {
    createTreeMap();
    $(document).bind("kendo:skinChange", createTreeMap);
    $(".options").bind("change", refresh);
});

function refresh() {
    $("#treeMap").getKendoTreeMap().setOptions({
        type: $("input[name=type]:checked").val()
    });
}