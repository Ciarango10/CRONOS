function createGauge() {
    $("#gauge").kendoArcGauge({
        value: $("#gauge-value").val(),
        centerTemplate: '#: value #%'
    });
}

$(document).ready(function () {
    createGauge();

    function updateValue() {
        $("#gauge").data("kendoArcGauge").value($("#gauge-value").val());
    }

    $("#gauge-value").kendoSlider({
        min: 0,
        max: 100,
        showButtons: false,
        change: updateValue
    });

    $(document).bind("kendo:skinChange", function (e) {
        createGauge();
    });
}); 

function createGauge2() {
    $("#gauge2").kendoArcGauge({
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
        $("#gauge2").data("kendoArcGauge").value($("#gauge-value2").val());
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

function createGauge3() {
    $("#gauge3").kendoArcGauge({
        value: $("#gauge-value3").val(),
        centerTemplate: '<span style="color: #: color #;">#: value #%</span>',
        scale: {
            min: 0,
            max: 100,
            startAngle: 90,
            endAngle: 360 + 90
        }
    });
}

$(document).ready(function () {
    createGauge3();

    function updateValue3() {
        $("#gauge3").data("kendoArcGauge").value($("#gauge-value3").val());
    }

    $("#gauge-value3").kendoSlider({
        min: 0,
        max: 100,
        showButtons: false,
        change: updateValue3
    });

    $(document).bind("kendo:skinChange", function (e) {
        createGauge3();
    });
});
