$(document).ready(function () {
    $("#optional").kendoListBox({
        connectWith: "selected",
        toolbar: {
            tools: ["moveUp", "moveDown", "transferTo", "transferFrom", "transferAllTo", "transferAllFrom", "remove"]
        }
    });

    $("#selected").kendoListBox();
    if (selectedTheme.indexOf("material-") === 0) {
        $(".items").kendoRippleContainer();
        $(".demo-section").show();
    } else {
        $(".demo-section").hide();
    }
});