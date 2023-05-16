$("#progressbar").kendoCircularProgressBar({
    value: 0,
    colors: [{
        to: 25,
        color: '#C0392B'
    }, {
        from: 25,
        to: 50,
        color: '#D35400'
    }, {
        from: 50,
        to: 75,
        color: '#D4AC0D'
    }, {
        from: 75,
        to: 99,
        color: '#58D68D'
    }, {
        from: 99,
        color: '#229954'
    }],
    centerTemplate: '<span style="color: #: color #;">#= value == 100 ? "<span class=\'k-icon k-i-check\'></span>" : value + "%" #</span>'
});

$("#start-progress").kendoButton({
    themeColor: "secondary",
    click: function () {
        startProgress();
    }
});

$("#reset-progress").kendoButton({
    themeColor: "error",
    click: function () {
        let pb = $("#progressbar").data("kendoCircularProgressBar");

        pb.value(0);
    }
});

function startProgress() {
    let interval = setInterval(function () {
        let pb = $("#progressbar").data("kendoCircularProgressBar");
        let value = pb.value();

        if (value >= 100) {
            clearInterval(interval);
            return;
        }

        pb.value(value + 1);
    }, 50);
}

$("#progressbar3").kendoCircularProgressBar({
    indeterminate: true,
    color: "#0071bc"
});

$("#progressbar4").kendoCircularProgressBar({
    value: 0,
    colors: [{
        to: 25,
        color: '#C0392B'
    }, {
        from: 25,
        to: 50,
        color: '#D35400'
    }, {
        from: 50,
        to: 75,
        color: '#D4AC0D'
    }, {
        from: 75,
        to: 100,
        color: '#229954'
    }],
    centerTemplate: '<span style="color: #: color #;">#: value #%</span>'
});

$("#value1").kendoButton({
    click: function () {
        let pb1 = $("#progressbar4").data("kendoCircularProgressBar");
        pb1.value(0);
    }
});

$("#value2").kendoButton({
    click: function () {
        let pb1 = $("#progressbar4").data("kendoCircularProgressBar");
        pb1.value(25);
    }
});

$("#value3").kendoButton({
    click: function () {
        let pp1 = $("#progressbar4").data("kendoCircularProgressBar");
        pb1.value(50);
    }
});

$("#value4").kendoButton({
    click: function () {
        let pb1 = $("#progressbar4").data("kendoCircularProgressBar");
        pb1.value(75);
    }
});

$("#value5").kendoButton({
    click: function () {
        let pb1 = $("#progressbar4").data("kendoCircularProgressBar");
        pb1.value(100);
    }
});