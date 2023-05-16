var smallLoader = $('#loader-small').kendoLoader({
    size: 'small'
}).data("kendoLoader");

var mediumLoader = $('#loader-medium').kendoLoader({
    size: 'medium'
}).data("kendoLoader");

var largeLoader = $('#loader-large').kendoLoader({
    size: 'large'
}).data("kendoLoader");

$("#type").kendoDropDownList({
    dataSource: ["pulsing", "infinite-spinner", "converging-spinner"],
    change: function onChange(e) {
        smallLoader.setOptions({ type: e.sender.text() })
        mediumLoader.setOptions({ type: e.sender.text() })
        largeLoader.setOptions({ type: e.sender.text() });
    }
})

var primary = $('#loader-primary').kendoLoader({
    themeColor: 'primary'
}).data("kendoLoader");

var secondary = $('#loader-secondary').kendoLoader({
    themeColor: 'secondary'
}).data("kendoLoader");

var info = $('#loader-info').kendoLoader({
    themeColor: 'info'
}).data("kendoLoader");

var success = $('#loader-success').kendoLoader({
    themeColor: 'success'
}).data("kendoLoader");

var warning = $('#loader-warning').kendoLoader({
    themeColor: 'warning'
}).data("kendoLoader");

var error = $('#loader-error').kendoLoader({
    themeColor: 'error'
}).data("kendoLoader");

$("#type2").kendoDropDownList({
    dataSource: ["pulsing", "infinite-spinner", "converging-spinner"],
    change: function onChange(e) {
        primary.setOptions({ type: e.sender.text() })
        secondary.setOptions({ type: e.sender.text() })
        info.setOptions({ type: e.sender.text() });
        success.setOptions({ type: e.sender.text() });
        warning.setOptions({ type: e.sender.text() });
        error.setOptions({ type: e.sender.text() });
    }
})

var loader = $('#loader').kendoLoader({
    visible: false,
    size: "small"
}).data('kendoLoader');

$("#toggle").click(function () {
    loader.show();
    setTimeout(function () {
        loader.hide();
    }, 3000)
})