$("#vertical").kendoSplitter({
    orientation: "vertical",
    panes: [
        { collapsible: false },
        { collapsible: false, size: "100px" },
        { collapsible: false, resizable: false, size: "100px" }
    ]
});

$("#horizontal").kendoSplitter({
    panes: [
        { collapsible: true },
        { collapsible: false },
        { collapsible: true }
    ]
});


$(document).on("keydown.examples", function (e) {
    if (e.altKey && e.keyCode === 87 /* w */) {
        $("#horizontal").find(".k-splitbar:first").focus();
    }
});

function onResize(e) {
    console.log("Resized :: Splitter <b>#" + this.element[0].id + "</b>");
}

function onExpand(e) {
    console.log("Expanded :: Pane <b>#" + e.pane.id + "</b> from splitter <b>#" + this.element[0].id + "</b> expanded");
}

function onCollapse(e) {
    console.log("Collapsed :: Pane <b>#" + e.pane.id + "</b> from splitter <b>#" + this.element[0].id + "</b> collapsed");
}

$("#splitter2").kendoSplitter({
    orientation: "vertical",
    panes: [
        { collapsible: true, size: "100px" },
        { collapsible: true, size: "20%" }
    ],
    expand: onExpand,
    collapse: onCollapse,
    resize: onResize
});