function createGauge() {
    $("#gauge").kendoRadialGauge({
        pointer: {
            value: $("#gauge-value").val()
        },
        scale: {
            minorUnit: 5,
            startAngle: -30,
            endAngle: 210,
            max: 180
        }
    });
}

$(document).ready(function () {
    createGauge();

    function updateValue() {
        $("#gauge").data("kendoRadialGauge").value($("#gauge-value").val());
    }

    if (kendo.ui.Slider) {
        $("#gauge-value").kendoSlider({
            min: 0,
            max: 180,
            showButtons: false,
            change: updateValue
        });
    } else {
        $("#gauge-value").change(updateValue);
    }


    $(document).bind("kendo:skinChange", function (e) {
        createGauge();
    });
});

function createGauge2(labelPosition) {
    $("#gauge2").kendoRadialGauge({
        pointer: {
            value: 65
        },

        scale: {
            minorUnit: 5,
            startAngle: -30,
            endAngle: 210,
            max: 180,
            labels: {
                position: labelPosition || "inside"
            },
            ranges: [
                {
                    from: 80,
                    to: 120,
                    color: "#ffc700"
                }, {
                    from: 120,
                    to: 150,
                    color: "#ff7a00"
                }, {
                    from: 150,
                    to: 180,
                    color: "#c20000"
                }
            ]
        }
    });
}

$(document).ready(function () {
    createGauge2();

    $(".box-col").bind("change", refresh);

    $(document).bind("kendo:skinChange", function (e) {
        createGauge2();
    });

    window.configuredRanges = $("#gauge2").data("kendoRadialGauge").options.scale.ranges;
});

function refresh() {
    var gauge = $("#gauge2").data("kendoRadialGauge"),
        showLabels = $("#labels").prop("checked"),
        showRanges = $("#ranges").prop("checked"),
        positionInputs = $("input[name='labels-position']"),
        labelsPosition = positionInputs.filter(":checked").val(),
        options = gauge.options;

    options.transitions = false;
    options.scale.labels.visible = showLabels;
    options.scale.labels.position = labelsPosition;
    options.scale.ranges = showRanges ? window.configuredRanges : [];

    gauge.redraw();
}