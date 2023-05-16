function createGauges() {
    var value = $("#gauge-value").val();

    $("#gauge").kendoLinearGauge({
        pointer: {
            value: 28
        },
        scale: {
            majorUnit: 20,
            minorUnit: 2,
            min: -40,
            max: 60,
            vertical: true,
            ranges: [
                {
                    from: -40,
                    to: -20,
                    color: "#2798df"
                }, {
                    from: 30,
                    to: 45,
                    color: "#ffc700"
                }, {
                    from: 45,
                    to: 60,
                    color: "#c20000"
                }
            ]
        }
    });
}

$(document).ready(function () {
    createGauges();

    $(document).bind("kendo:skinChange", function (e) {
        createGauges();
    });
});

