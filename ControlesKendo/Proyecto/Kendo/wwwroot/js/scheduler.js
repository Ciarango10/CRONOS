$("#scheduler").kendoScheduler({
    date: new Date("2013/6/13"),
    startTime: new Date("2013/6/13 07:00 AM"),
    height: 600,
    views: [
        "day",
        { type: "workWeek", selected: true },
        "week",
        "month",
        "year",
        "agenda",
        { type: "timeline", eventHeight: 50 }
    ],
    timezone: "Etc/UTC",
    dataSource: {
        batch: true,
        transport: {
            read: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks",
                dataType: "jsonp"
            },
            update: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
                dataType: "jsonp"
            },
            create: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
                dataType: "jsonp"
            },
            destroy: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        schema: {
            model: {
                id: "taskId",
                fields: {
                    taskId: { from: "TaskID", type: "number" },
                    title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                    start: { type: "date", from: "Start" },
                    end: { type: "date", from: "End" },
                    startTimezone: { from: "StartTimezone" },
                    endTimezone: { from: "EndTimezone" },
                    description: { from: "Description" },
                    recurrenceId: { from: "RecurrenceID" },
                    recurrenceRule: { from: "RecurrenceRule" },
                    recurrenceException: { from: "RecurrenceException" },
                    ownerId: { from: "OwnerID", defaultValue: 1 },
                    isAllDay: { type: "boolean", from: "IsAllDay" }
                }
            }
        },
        filter: {
            logic: "or",
            filters: [
                { field: "ownerId", operator: "eq", value: 1 },
                { field: "ownerId", operator: "eq", value: 2 }
            ]
        }
    },
    resources: [
        {
            field: "ownerId",
            title: "Owner",
            dataSource: [
                { text: "Alex", value: 1, color: "#f8a398" },
                { text: "Bob", value: 2, color: "#2572c0" },
                { text: "Charlie", value: 3, color: "#118640" }
            ]
        }
    ]
});

$("#scheduler2").kendoScheduler({
    date: new Date("2020/6/13"),
    height: 600,
    views: [
        "day",
        {
            type: "year",
            selected: true
        }
    ],
    selectable: true,
    timezone: "Etc/UTC",
    dataSource: {
        batch: true,
        transport: {
            read: {
                url: "https://demos.telerik.com/kendo-ui/service/meetings",
                dataType: "jsonp"
            },
            update: {
                url: "https://demos.telerik.com/kendo-ui/service/meetings/update",
                dataType: "jsonp"
            },
            create: {
                url: "https://demos.telerik.com/kendo-ui/service/meetings/create",
                dataType: "jsonp"
            },
            destroy: {
                url: "https://demos.telerik.com/kendo-ui/service/meetings/destroy",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        schema: {
            model: {
                id: "meetingID",
                fields: {
                    meetingID: { from: "MeetingID", type: "number" },
                    title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                    start: { type: "date", from: "Start" },
                    end: { type: "date", from: "End" },
                    startTimezone: { from: "StartTimezone" },
                    endTimezone: { from: "EndTimezone" },
                    description: { from: "Description" },
                    recurrenceId: { from: "RecurrenceID" },
                    recurrenceRule: { from: "RecurrenceRule" },
                    recurrenceException: { from: "RecurrenceException" },
                    roomId: { from: "RoomID", nullable: true },
                    isAllDay: { type: "boolean", from: "IsAllDay" }
                }
            }
        }
    },
    resources: [
        {
            field: "roomId",
            dataSource: [
                { text: "Meeting Room 101", value: 1, color: "#2572c0" },
                { text: "Meeting Room 201", value: 2, color: "#f8a398" }
            ],
            title: "Room"
        }
    ]
});

$("#scheduler3").kendoScheduler({
    date: new Date("2013/6/13"),
    startTime: new Date("2013/6/13 07:00 AM"),
    height: 600,
    selectable: true,
    editable: {
        resize: false
    },
    views: [
        "day",
        { type: "week", selected: true },
        "month",
        "timeline"
    ],
    timezone: "Etc/UTC",
    dataSource: {
        batch: true,
        transport: {
            read: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks",
                dataType: "jsonp"
            },
            update: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
                dataType: "jsonp"
            },
            create: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
                dataType: "jsonp"
            },
            destroy: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        schema: {
            model: {
                id: "taskId",
                fields: {
                    taskId: { from: "TaskID", type: "number" },
                    title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                    start: { type: "date", from: "Start" },
                    end: { type: "date", from: "End" },
                    startTimezone: { from: "StartTimezone" },
                    endTimezone: { from: "EndTimezone" },
                    description: { from: "Description" },
                    recurrenceId: { from: "RecurrenceID" },
                    recurrenceRule: { from: "RecurrenceRule" },
                    recurrenceException: { from: "RecurrenceException" },
                    isAllDay: { type: "boolean", from: "IsAllDay" }
                }
            }
        }
    }
});

$("#scheduler4").kendoScheduler({
    toolbar: ["search"],
    date: new Date("2013/6/13"),
    startTime: new Date("2013/6/13 07:00 AM"),
    height: 600,
    views: [
        "day",
        { type: "workWeek", selected: true },
        "week",
        "month",
        "agenda"
    ],
    timezone: "Etc/UTC",
    dataSource: {
        batch: true,
        transport: {
            read: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks",
                dataType: "jsonp"
            },
            update: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
                dataType: "jsonp"
            },
            create: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
                dataType: "jsonp"
            },
            destroy: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        schema: {
            model: {
                id: "taskId",
                fields: {
                    taskId: { from: "TaskID", type: "number" },
                    title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                    start: { type: "date", from: "Start" },
                    end: { type: "date", from: "End" },
                    startTimezone: { from: "StartTimezone" },
                    endTimezone: { from: "EndTimezone" },
                    description: { from: "Description" },
                    recurrenceId: { from: "RecurrenceID" },
                    recurrenceRule: { from: "RecurrenceRule" },
                    recurrenceException: { from: "RecurrenceException" },
                    ownerId: { from: "OwnerID", defaultValue: 1 },
                    isAllDay: { type: "boolean", from: "IsAllDay" }
                }
            }
        }
    },
    resources: [
        {
            field: "ownerId",
            title: "Owner",
            dataSource: [
                { text: "Alex", value: 1, color: "#f8a398" },
                { text: "Bob", value: 2, color: "#2572c0" },
                { text: "Charlie", value: 3, color: "#118640" }
            ]
        }
    ]
});

$("#scheduler5").kendoScheduler({
    date: new Date("2013/6/13"),
    startTime: new Date("2013/6/13 07:00 AM"),
    height: 600,
    views: [
        "day",
        { type: "week", selected: true },
        "timeline"
    ],
    timezone: "Etc/UTC",
    dataSource: {
        batch: true,
        transport: {
            read: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks",
                dataType: "jsonp"
            },
            update: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
                dataType: "jsonp"
            },
            create: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
                dataType: "jsonp"
            },
            destroy: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        schema: {
            model: {
                id: "taskId",
                fields: {
                    taskId: { from: "TaskID", type: "number" },
                    title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                    start: { type: "date", from: "Start" },
                    end: { type: "date", from: "End" },
                    startTimezone: { from: "StartTimezone" },
                    endTimezone: { from: "EndTimezone" },
                    description: { from: "Description" },
                    recurrenceId: { from: "RecurrenceID" },
                    recurrenceRule: { from: "RecurrenceRule" },
                    recurrenceException: { from: "RecurrenceException" },
                    isAllDay: { type: "boolean", from: "IsAllDay" }
                }
            }
        }
    }
});

$(":checkbox").change(function (e) {
    var scheduler = $("#scheduler").data("kendoScheduler");

    scheduler.options.snap = this.checked;
    scheduler.view(scheduler.view().name);
});

function scheduler_dataBinding(e) {
    console.log("dataBinding");
}

function scheduler_dataBound(e) {
    console.log("dataBound");
}

function scheduler_save(e) {
    console.log("Guardar");
}

function scheduler_remove(e) {
    console.log("Borrar");
}

function scheduler_cancel(e) {
    console.log("Cancelar");
}

function scheduler_change(e) {
    var start = e.start; //selection start date
    var end = e.end; //selection end date
    var slots = e.slots; //list of selected slots
    var events = e.events; //list of selected Scheduler events

    var message = "Cambio:: seleccion desde {0:g} hasta {1:g}";

    if (events.length) {
        message += ". El evento seleccionado es '" + events[events.length - 1].title + "'";
    }

    console.log(kendo.format(message, start, end));
}

function scheduler_edit(e) {
    console.log("Editar");
}

function scheduler_add(e) {
    console.log("Agregar");
}

function scheduler_moveStart(e) {
    console.log("Inicio Mover");
}

function scheduler_move(e) {
    console.log("Mover");
}

function scheduler_moveEnd(e) {
    console.log("Final Mover");
}

function scheduler_resizeStart(e) {
    console.log("Inicio cambiar tamaño");
}

function scheduler_resize(e) {
    console.log("Cambiar tamaño");
}

function scheduler_resizeEnd(e) {
    console.log("Final cambiar tamaño");
}

function scheduler_navigate(e) {
    console.log(kendo.format("navigate:: action:{0}; view:{1}; date:{2:d};", e.action, e.view, e.date));
}

$("#scheduler6").kendoScheduler({
    date: new Date("2013/6/13"),
    startTime: new Date("2013/6/13 7:00"),
    height: 400,
    timezone: "Etc/UTC",
    views: [
        "day",
        { type: "week", selected: true },
        "month",
        "agenda",
        "timeline"
    ],
    selectable: true,
    dataBinding: scheduler_dataBinding,
    dataBound: scheduler_dataBound,
    save: scheduler_save,
    remove: scheduler_remove,
    edit: scheduler_edit,
    add: scheduler_add,
    cancel: scheduler_cancel,
    change: scheduler_change,
    moveStart: scheduler_moveStart,
    move: scheduler_move,
    moveEnd: scheduler_moveEnd,
    resizeStart: scheduler_resizeStart,
    resize: scheduler_resize,
    resizeEnd: scheduler_resizeEnd,
    navigate: scheduler_navigate,
    dataSource: {
        batch: true,
        transport: {
            read: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks",
                dataType: "jsonp"
            },
            update: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
                dataType: "jsonp"
            },
            create: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
                dataType: "jsonp"
            },
            destroy: {
                url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        schema: {
            model: {
                id: "taskID",
                fields: {
                    taskID: { from: "TaskID", type: "number" },
                    title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                    start: { type: "date", from: "Start" },
                    end: { type: "date", from: "End" },
                    startTimezone: { from: "StartTimezone" },
                    endTimezone: { from: "EndTimezone" },
                    description: { from: "Description" },
                    recurrenceId: { from: "RecurrenceID" },
                    recurrenceRule: { from: "RecurrenceRule" },
                    recurrenceException: { from: "RecurrenceException" },
                    ownerId: { from: "OwnerID", defaultValue: 1 },
                    isAllDay: { type: "boolean", from: "IsAllDay" }
                }
            }
        }
    }
});
