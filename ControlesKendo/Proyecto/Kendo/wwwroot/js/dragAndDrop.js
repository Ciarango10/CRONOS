$("#draggable-item").kendoDraggable({
    container: $("#draggable-container"),
    hint: function () {
        return $("#draggable-item").clone();
    }
});

function draggableOnDragStart(e) {
    console.log("dragstart");

    $("#draggable").addClass("hollow");
    $("#droptarget").text("Drop here.");
    $("#droptarget").removeClass("painted");
}

function draggableOnDrag(e) {
    console.log("drag");
}

function draggableOnCancel(e) {
    console.log("drag cancel");
}

function draggableOnDragEnd(e) {
    console.log("dragend");

    var draggable = $("#draggable");

    if (!draggable.data("kendoDraggable").dropped) {
        $("#droptarget").text("Try again!");
    }
    draggable.removeClass("hollow");
}

function droptargetOnDragEnter(e) {
    console.log("dragenter");

    $("#droptarget").text("Now drop...");
    $("#droptarget").addClass("painted");
}

function droptargetOnDragLeave(e) {
    console.log("dragleave");

    $("#droptarget").text("Drop here.");
    $("#droptarget").removeClass("painted");
}

function droptargetOnDrop(e) {
    console.log("drop");

    $("#droptarget").text("You did great!");
    $("#draggable").removeClass("hollow");
}

$(document).ready(function () {
    $("#draggable").kendoDraggable({
        hint: function () {
            return $("#draggable").clone();
        },
        dragstart: draggableOnDragStart,
        drag: draggableOnDrag,
        dragend: draggableOnDragEnd,
        dragcancel: draggableOnCancel
    });

    $("#droptarget").kendoDropTarget({
        dragenter: droptargetOnDragEnter,
        dragleave: droptargetOnDragLeave,
        drop: droptargetOnDrop
    });
});