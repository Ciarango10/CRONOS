$(document).ready(function () {
    $("#sortable-basic").kendoSortable({
        hint: function (element) {
            return element.clone().addClass("hint");
        },
        placeholder: function (element) {
            return element.clone().addClass("placeholder").text("drop here");
        },
        cursorOffset: {
            top: -10,
            left: -230
        }
    });
});

$(document).ready(function () {
    $("#sortable-filter2").kendoSortable({
        filter: ".sortable"
    });

    $("#sortable-disable2").kendoSortable({
        disabled: ".disabled"
    });
});

$("#sortable-handlers").kendoSortable({
    handler: ".handler",
    hint: function (element) {
        return element.clone().addClass("hint");
    }
});

function placeholder(element) {
    return $("<li class='list-item' id='placeholder'>Soltar Acá!</li>");
}

$(document).ready(function () {
    $("#sortable-listA").kendoSortable({
        connectWith: "#sortable-listB",
        placeholder: placeholder
    });

    $("#sortable-listB").kendoSortable({
        placeholder: placeholder
    });

    $("#sortable-listC").kendoSortable({
        connectWith: "#sortable-listD",
        placeholder: placeholder
    });

    $("#sortable-listD").kendoSortable({
        connectWith: "#sortable-listC",
        placeholder: placeholder
    });
});



$("#sidebar").kendoSortable({
    filter: ">div",
    cursor: "move",
    connectWith: "#main-content",
    placeholder: placeholder,
    hint: hint
});

$("#main-content").kendoSortable({
    filter: ">div",
    cursor: "move",
    connectWith: "#sidebar",
    placeholder: placeholder,
    hint: hint
});

//exapand
$(".panel-wrap").on("click", "span.k-i-sort-desc-sm", function (e) {
    var contentElement = $(e.target).closest(".widget").find(">div");
    $(e.target)
        .removeClass("k-i-sort-desc-sm")
        .addClass("k-i-sort-asc-sm");

    kendo.fx(contentElement).expand("vertical").stop().play();
});

//collapse
$(".panel-wrap").on("click", "span.k-i-sort-asc-sm", function (e) {
    var contentElement = $(e.target).closest(".widget").find(">div");
    $(e.target)
        .removeClass("k-i-sort-asc-sm")
        .addClass("k-i-sort-desc-sm");

    kendo.fx(contentElement).expand("vertical").stop().reverse();
});


function placeholder(element) {
    return element.clone().addClass("placeholder");
}

function hint(element) {
    return element.clone().addClass("hint")
        .height(element.height())
        .width(element.width());
}