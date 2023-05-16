function createGauge() {
    $("#gauge").kendoCircularGauge({
        value: $("#gauge-value").val(),
        scale: {
            min: 0,
            max: 140,
            majorTicks: {
                visible: true
            },
            minorTicks: {
                visible: true
            },
            labels: {
                visible: true,
            },
        },
        centerTemplate: "Temperature",
    });
}

$(document).ready(function () {
    createGauge();

    function updateValue() {
        $("#gauge").data("kendoCircularGauge").value($("#gauge-value").val());
    }

    if (kendo.ui.Slider) {
        $("#gauge-value").kendoSlider({
            min: 0,
            max: 140,
            showButtons: true,
            change: updateValue,
        });
    } else {
        $("#gauge-value").change(updateValue);
    }


    $(document).bind("kendo:skinChange", function (e) {
        createGauge();
    });
});

function createGauge2() {
    $("#gauge2").kendoCircularGauge({
        value: $("#gauge-value2").val(),
        centerTemplate: '<span style="color: #: color #;">#: value #%</span>',
        scale: {
            min: 0,
            max: 100
        },
        colors: [{
            to: 25,
            color: '#0058e9'
        }, {
            from: 25,
            to: 50,
            color: '#37b400'
        }, {
            from: 50,
            to: 75,
            color: '#ffc000'
        }, {
            from: 75,
            color: '#f31700'
        }]
    });
}

$(document).ready(function () {
    createGauge2();

    function updateValue2() {
        $("#gauge2").data("kendoCircularGauge").value($("#gauge-value2").val());
    }

    $("#gauge-value2").kendoSlider({
        min: 0,
        max: 100,
        showButtons: false,
        change: updateValue2
    });

    $(document).bind("kendo:skinChange", function (e) {
        createGauge2();
    });
});