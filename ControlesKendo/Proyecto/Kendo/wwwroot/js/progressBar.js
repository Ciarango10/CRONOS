$(document).ready(function () {
    var progressbars = [];
    $(".poll-results div").each(function () {
        var pb = $(this).kendoProgressBar({
            type: "percent",
            ariaRole: true,
            animation: {
                duration: 600
            }
        }).data("kendoProgressBar");
        progressbars.push(pb);
    });

    $("#example select").each(function (i) {
        $(this).kendoDropDownList();
    });

    $("#voteButton").click(function () {
        var first = $("#favouriteMovie1").val();
        var second = $("#favouriteMovie2").val();
        var third = $("#favouriteMovie3").val();

        if (first !== "" && second !== "" && third !== "" &&
            first !== second && second !== third && first !== third) {

            $.each(progressbars, function (i, pb) {
                pb.value(0);
            });

            $("#" + first).data("kendoProgressBar").value(50);
            $("#" + second).data("kendoProgressBar").value(30);
            $("#" + third).data("kendoProgressBar").value(10);

            $.each(progressbars, function (i, pb) {
                if (pb.value() === 0) {
                    pb.value(5);
                }
            });
        } else {
            alert("Please select three different movies");
        }
    });

    var pb = $("#profileCompleteness").kendoProgressBar({
        type: "chunk",
        chunkCount: 5,
        min: 0,
        max: 5,
        value: 2
    }).data("kendoProgressBar");

    $("#genderInput").kendoDropDownList();

    $("#birthdayInput").kendoDatePicker();

    $("#birthdayInput").change(function (e) {
        var currentDate = kendo.parseDate(this.value);
        if (!currentDate) {
            this.value = "";
        }
    });

    $(".forms input").change(function () {
        var completeness = 5;
        $(".forms input").each(function () {
            if (this.value == "") {
                completeness--;
            }
        });

        pb.value(completeness);
        $("#completed").text((completeness * 20) + "%");
    });

    $("#totalProgressBar").kendoProgressBar({
        type: "chunk",
        chunkCount: 4,
        min: 0,
        max: 4,
        orientation: "vertical",
        complete: onTotalComplete
    });

    $("#loadingProgressBar").kendoProgressBar({
        orientation: "vertical",
        showStatus: false,
        animation: false,
        change: onChange,
        complete: onComplete
    });

    load();
});

function onChange(e) {
    $(".loadingStatus").text(e.value + "%");
}

function onComplete(e) {
    var total = $("#totalProgressBar").data("kendoProgressBar");
    total.value(total.value() + 1);

    if (total.value() < total.options.max) {
        $(".chunkStatus").text(total.value() + 1);
        $(".loadingInfo h4").text("Loading " + itemsToLoad[total.value()]);

        load();
    }
}

function onTotalComplete(e) {
    $(".loadingInfo h4").text("All items loaded");
    $(".statusContainer").hide();
    $(".reloadButton").show();
}

function load() {
    var pb = $("#loadingProgressBar").data("kendoProgressBar");
    pb.value(0);

    var interval = setInterval(function () {
        if (pb.value() < 100) {
            pb.value(pb.value() + 1);
        } else {
            clearInterval(interval);
        }
    }, 30);
}

$(".reloadButton").click(function () {
    $(this).hide();
    $(".statusContainer").show();

    $("#totalProgressBar").data("kendoProgressBar").value(0);
    $("#loadingProgressBar").data("kendoProgressBar").value(0);
    $(".loadingInfo h4").text("Loading " + itemsToLoad[0]);
    $(".chunkStatus").text(1);

    load();
});

var itemsToLoad = ["styles", "scripts", "images", "fonts"];


var passProgress;
passProgress = $("#passStrength").kendoProgressBar({
    type: "value",
    max: 9,
    labelId: "dedov",
    ariaRole: true,
    animation: false,
    change: onChange
}).data("kendoProgressBar");

passProgress.progressStatus.text("Empty");


$("#userPass").keyup(function () {
    passProgress.value(this.value.length);
});

$("#submitButton").click(function () {
    var strength = passProgress.progressStatus.first().text();
    alert(strength + " password!");
});

function onChange(e) {
    this.progressWrapper.css({
        "background-image": "none",
        "border-image": "none"
    });

    if (e.value < 1) {
        this.progressStatus.text("Empty");
    } else if (e.value <= 3) {
        this.progressStatus.text("Weak");

        this.progressWrapper.css({
            "background-color": "#EE9F05",
            "border-color": "#EE9F05"
        });
    } else if (e.value <= 6) {
        this.progressStatus.text("Good");

        this.progressWrapper.css({
            "background-color": "#428bca",
            "border-color": "#428bca"
        });
    } else {
        this.progressStatus.text("Strong");

        this.progressWrapper.css({
            "background-color": "#8EBC00",
            "border-color": "#8EBC00"
        });
    }

}

$("#progressBar").kendoProgressBar({
    min: 0,
    max: 10,
    type: "percent",
    change: onChange,
    complete: onComplete
});

function onChange(e) {
    console.log("Change event :: value is " + e.value);
}

function onComplete(e) {
    console.log("Complete event :: value is " + e.value);

    $("#startProgress").text("Restart Progress").removeClass("k-disabled");
}

$("#startProgress").click(function () {
    if (!$(this).hasClass("k-disabled")) {
        $(this).addClass("k-disabled");
        progress();
    }
});

function progress() {
    var pb = $("#progressBar").data("kendoProgressBar");
    pb.value(0);

    var interval = setInterval(function () {
        if (pb.value() < 10) {
            pb.value(pb.value() + 1);
        } else {
            clearInterval(interval);
        }
    }, 100);
}