$(document).ready(function () {
    $("#calendar2").kendoCalendar();

    $("#calendar").kendoCalendar({
        componentType: "modern"
    });

    $("#dropDownList").kendoDropDownList({
        dataSource: ["modern", "classic"],
        value: "modern",
        change: function (e) {
            var calendar = $("#calendar").data("kendoCalendar");
            var type = this.value();
            var parent = $("#calendar").parent();

            calendar.destroy();
            parent.empty();
            parent.append('<div id="calendar"></div>');
            $("#calendar").kendoCalendar({
                componentType: type
            });
        }
    });

    $("#weekend-calendar").kendoCalendar({
        disableDates: ["sa", "su"]
    });

    $("#national-holidays").kendoCalendar({
        value: new Date("1/2/2015"),
        dates: [
            new Date("1/1/2015"),
            new Date("1/19/2015"),
            new Date("2/16/2015"),
            new Date("4/16/2015"),
            new Date("5/10/2015"),
            new Date("5/25/2015"),
            new Date("6/21/2015"),
            new Date("7/3/2015"),
            new Date("9/7/2015"),
            new Date("10/12/2015"),
            new Date("11/11/2015"),
            new Date("11/26/2015"),
            new Date("11/27/2015"),
            new Date("12/25/2015")
        ],
        disableDates: function (date) {
            var dates = $("#national-holidays").data("kendoCalendar").options.dates;
            if (date && compareDates(date, dates)) {
                return true;
            } else {
                return false;
            }
        }
    });

    function compareDates(date, dates) {
        for (var i = 0; i < dates.length; i++) {
            if (dates[i].getDate() == date.getDate() &&
                dates[i].getMonth() == date.getMonth() &&
                dates[i].getYear() == date.getYear()) {
                return true
            }
        }
    }

    $("#calendar4").kendoCalendar({
        selectable: "multiple",
        weekNumber: true,
        disableDates: ["we", "sa"]
    });

    function onChange() {
        console.log("Cambio :: " + kendo.toString(this.value(), 'd'));
    }

    function onNavigate() {
        console.log("Navegar");
    }

    $("#calendar5").kendoCalendar({
        change: onChange,
        navigate: onNavigate
    });
});



