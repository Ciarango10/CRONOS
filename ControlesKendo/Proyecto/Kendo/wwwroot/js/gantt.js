﻿$(document).ready(function () {
    var serviceRoot = "https://demos.telerik.com/kendo-ui/service";
    var tasksDataSource = new kendo.data.GanttDataSource({
        transport: {
            read: {
                url: serviceRoot + "/GanttTasks",
                dataType: "jsonp"
            },
            update: {
                url: serviceRoot + "/GanttTasks/Update",
                dataType: "jsonp",
                timeout: 5000
            },
            destroy: {
                url: serviceRoot + "/GanttTasks/Destroy",
                dataType: "jsonp",
                timeout: 5000
            },
            create: {
                url: serviceRoot + "/GanttTasks/Create",
                dataType: "jsonp",
                timeout: 5000
            },
            parameterMap: function (options, operation) {
                if (operation !== "read") {
                    return { models: kendo.stringify(options.models || [options]) };
                }
            }
        },
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { from: "ID", type: "number" },
                    orderId: { from: "OrderID", type: "number", validation: { required: true } },
                    parentId: { from: "ParentID", type: "number", defaultValue: null, nullable: true, validation: { required: true } },
                    start: { from: "Start", type: "date" },
                    end: { from: "End", type: "date" },
                    title: { from: "Title", defaultValue: "", type: "string" },
                    percentComplete: { from: "PercentComplete", type: "number" },
                    summary: { from: "Summary", type: "boolean" },
                    expanded: { from: "Expanded", type: "boolean", defaultValue: true }
                }
            }
        },
        error: function (ev) {
            ev.sender.cancelChanges();
            kendo.alert("Task was not Created, Updated or Destroyed properly!</br></br>" +
                "If you are using this service for local demo or in dojo consider <a href='https://github.com/telerik/kendo-ui-demos-service/tree/master/demos-and-odata-v3'>downloading and running the service locally</a>.</br>" +
                "And make sure to set the <a href='https://github.com/telerik/kendo-ui-demos-service/blob/master/demos-and-odata-v3/KendoCRUDService/Models/Gantt/GanttTaskRepository.cs#L12'>UpdateDatabase</a> flag to true.");
        }
    });

    var dependenciesDataSource = new kendo.data.GanttDependencyDataSource({
        transport: {
            read: {
                url: serviceRoot + "/GanttDependencies",
                dataType: "jsonp"
            },
            update: {
                url: serviceRoot + "/GanttDependencies/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: serviceRoot + "/GanttDependencies/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: serviceRoot + "/GanttDependencies/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read") {
                    return { models: kendo.stringify(options.models || [options]) };
                }
            }
        },
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { from: "ID", type: "number" },
                    predecessorId: { from: "PredecessorID", type: "number" },
                    successorId: { from: "SuccessorID", type: "number" },
                    type: { from: "Type", type: "number" }
                }
            }
        }
    });

    var gantt = $("#gantt").kendoGantt({
        dataSource: tasksDataSource,
        dependencies: dependenciesDataSource,
        views: [
            "day",
            { type: "week", selected: true },
            "month"
        ],
        columns: [
            { field: "id", title: "ID", width: 60 },
            { field: "title", title: "Title", editable: true, sortable: true },
            {
                title: "Timings",
                columns: [
                    { field: "start", title: "Start Time", format: "{0:MM/dd/yyyy}", width: 100, editable: true, sortable: true },
                    { field: "end", title: "End Time", format: "{0:MM/dd/yyyy}", width: 100, editable: true, sortable: true }
                ]
            }
        ],
        height: 700,
        showWorkHours: false,
        showWorkDays: false,
        snap: false
    }).data("kendoGantt");

    $(document).bind("kendo:skinChange", function () {
        gantt.refresh();
    });
});
