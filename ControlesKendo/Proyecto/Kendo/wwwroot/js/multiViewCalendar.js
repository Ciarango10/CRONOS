$(document).ready(function () {
    $("#multiViewCalendar").kendoMultiViewCalendar();

    $("#numberOfViews").kendoNumericTextBox({
        restrictDecimals: true,
        decimals: 0,
        min: 2,
        max: 10,
        value: 2,
        format: "{0:n0}"
    });

    $("#numberOfViewsBtn").kendoButton({
        click: click
    });

    $("#multiViewCalendar2").kendoMultiViewCalendar({
        selectable: "range",
        showViewHeader: true
    });
});
function click() {
    var numberOfViews = $("#numberOfViews").data().kendoNumericTextBox.value();
    if (numberOfViews > 0) {
        $("#multiViewCalendar2").data().kendoMultiViewCalendar.setOptions({ views: numberOfViews });
    }
}

$("#multipleMultiViewCalendar3").kendoMultiViewCalendar({
    selectable: "multiple",
});

$("#multiViewCalendar4").kendoMultiViewCalendar({
    weekNumber: true,
    messages: {
        weekColumnHeader: "Wk"
    }
});



        

