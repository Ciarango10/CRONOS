var data = [
    { id: 1, name: "Gevin Bell", title: "CEO", expanded: true, avatar: "../content/web/treelist/people/1.jpg" },
    { id: 2, name: "Clevey Thrustfield", title: "COO", expanded: true, parentId: 1, avatar: "../content/web/treelist/people/2.jpg" },
    { id: 3, name: "Carol Baker", title: "CFO", expanded: false, parentId: 1, avatar: "../content/web/treelist/people/3.jpg" },
    { id: 4, name: "Kendra Howell", title: "CMO", expanded: false, parentId: 1, avatar: "../content/web/treelist/people/4.jpg" },
    { id: 5, name: "Sean Rusell", title: "Financial Manager", expanded: true, parentId: 3, avatar: "../content/web/treelist/people/5.jpg" },
    { id: 6, name: "Steven North", title: "Senior Manager", expanded: false, parentId: 3, avatar: "../content/web/treelist/people/6.jpg" },
    { id: 7, name: "Michelle Hudson", title: "Operations Manager", expanded: true, parentId: 2, avatar: "../content/web/treelist/people/7.jpg" },
    { id: 8, name: "Andrew Berry", title: "Team Lead", parentId: 5, avatar: "../content/web/treelist/people/8.jpg" },
    { id: 9, name: "Jake Miller", title: "Junior Accountant", parentId: 5, avatar: "../content/web/treelist/people/9.jpg" },
    { id: 10, name: "Austin Piper", title: "Accountant", parentId: 5, avatar: "../content/web/treelist/people/10.jpg" },
    { id: 11, name: "Dilyana Newman", title: "Accountant", parentId: 5, avatar: "../content/web/treelist/people/11.jpg" },
    { id: 12, name: "Eva Andrews", title: "Team Lead", parentId: 6, avatar: "../content/web/treelist/people/12.jpg" },
    { id: 13, name: "Kaya Nilsen", title: "Financial Specialist", parentId: 6, avatar: "../content/web/treelist/people/13.jpg" },
    { id: 14, name: "Elena Austin", title: "Team Lead", parentId: 4, avatar: "../content/web/treelist/people/14.jpg" },
    { id: 15, name: "Lora Samuels", title: "Lawyer", parentId: 4, avatar: "../content/web/treelist/people/15.jpg" },
    { id: 16, name: "Lillian Carr", title: "Operator", parentId: 7, avatar: "../content/web/treelist/people/17.jpg" },
    { id: 17, name: "David Henderson", title: "Team Lead", parentId: 7, avatar: "../content/web/treelist/people/16.jpg" }
];

$("#orgchart").kendoOrgChart({
    dataSource: data
});

var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

$("#orgchart2").kendoOrgChart({
    editable: false,
    dataSource: {
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeesOrgChart",
                dataType: "json"
            }
        },
        schema: {
            model: {
                expanded: true,
                fields: {
                    id: { field: "Id", type: "number", editable: false, nullable: false },
                    parentId: { field: "ParentId", nullable: true },
                    title: { field: "Position", nullable: true },
                    avatar: { field: "Avatar", nullable: true },
                    name: { field: "FullName" }
                }
            }
        }
    }
});

var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

$("#orgchart3").kendoOrgChart({
    editable: false,
    dataSource: {
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeesOrgChart/LoadOnDemand",
                dataType: "json"
            }
        },
        schema: {
            model: {
                id: "Id",
                parentId: "ParentId",
                fields: {
                    Id: { type: "number", editable: false, nullable: false },
                    ParentId: { field: "ParentId", nullable: true },
                    hasChildren: { field: "HasChildren", nullable: true },
                    expanded: { field: "Expanded", nullable: true },
                    title: { field: "Position", nullable: true },
                    avatar: { field: "Avatar", nullable: true },
                    name: { field: "FullName" }
                }
            }
        }
    }
});

var dataSource = new kendo.data.OrgChartDataSource({
    data: [
        { ID: 1, name: "Gevin Bell", position: "CEO", department: "CEO", avatar: "../content/web/treelist/people/1.jpg", parentId: null },
        { ID: 2, name: "Clevey Thrustfield", position: "CEO", department: "CEO", avatar: "../content/web/treelist/people/2.jpg", parentId: null },
        { ID: 3, name: "Carol Baker", position: "CMO", department: "Chief Officers", parentId: 1, avatar: "../content/web/treelist/people/3.jpg" },
        { ID: 4, name: "Kendra Howell", position: "CFO", department: "Chief Officers", parentId: 1, avatar: "../content/web/treelist/people/4.jpg" },
        { ID: 5, name: "Sean Rusell", position: "Financial Manager", department: "Financial Department", parentId: 2, avatar: "../content/web/treelist/people/5.jpg" },
        { ID: 6, name: "Andrew Berry", position: "Team Lead", department: "Team Leads", parentId: 3, avatar: "../content/web/treelist/people/8.jpg" },
        { ID: 7, name: "Jake Miller", position: "Senior Operations Manager", department: "Operations Managers", parentId: 3, avatar: "../content/web/treelist/people/9.jpg" },
        { ID: 8, name: "Austin Piper", position: "Accountant", department: "Accountants", parentId: 5, avatar: "../content/web/treelist/people/10.jpg" },
        { ID: 9, name: "Dilyana Newman", position: "Junior Accountant", department: "Accountants", parentId: 5, avatar: "../content/web/treelist/people/11.jpg" },
        { ID: 10, name: "Eva Andrews", position: "Operations Manager", department: "Operations Managers", parentId: 4, avatar: "../content/web/treelist/people/12.jpg" }
    ],
    schema: {
        model: {
            id: "ID",
            parentId: "parentId",
            expanded: true,
            title: "position"
        }
    }
});

$("#orgchart4").kendoOrgChart({
    dataSource: dataSource,
    editable: false,
    groupField: "department"
});

var data = [
    { id: 1, name: "Gevin Bell", position: "CEO Team", expanded: true, avatar: "../content/web/treelist/people/1.jpg" },
    { id: 2, name: "Clevey Thrustfield", position: "CEO Team", expanded: true, avatar: "../content/web/treelist/people/2.jpg" },
    { id: 3, name: "Carol Baker", position: "Manager", expanded: true, parentId: 1, avatar: "../content/web/treelist/people/3.jpg" },
    { id: 4, name: "Kendra Howell", position: "Manager", expanded: false, parentId: 1, avatar: "../content/web/treelist/people/4.jpg" },
    { id: 5, name: "Sean Rusell", position: "Financial Manager", expanded: true, parentId: 1, avatar: "../content/web/treelist/people/5.jpg" },
    { id: 6, name: "Andrew Berry", position: "Manager", parentId: 1, avatar: "../content/web/treelist/people/8.jpg" },
    { id: 7, name: "Jake Miller", position: "Junior Accountant", parentId: 3, avatar: "../content/web/treelist/people/9.jpg" },
    { id: 8, name: "Austin Piper", position: "Accountant", parentId: 5, avatar: "../content/web/treelist/people/10.jpg" },
    { id: 9, name: "Dilyana Newman", position: "Accountant", parentId: 5, avatar: "../content/web/treelist/people/11.jpg" },
    { id: 10, name: "Eva Andrews", position: "Operations Manager", parentId: 4, avatar: "../content/web/treelist/people/12.jpg" }
];

var orgchart = $("#orgchart5").kendoOrgChart({
    editable: false,
    groupField: "parentId",
    groupHeaderTemplate: function (e) {
        var org = $('#orgchart5').data('kendoOrgChart')
        var ds = org.dataSource
        var parent = ds.get(e.value)
        var result = ''

        if (!parent) {
            result = '<span>&nbsp</span>'
        } else {
            result = '<span>Reports To: <strong>' + parent.name + '</strong></span>'
        }
        return result;
    },
    dataSource: data
}).data('kendoOrgChart');

$(document).ready(function () {
    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

    $("#orgchart6").kendoOrgChart({
        dataSource: {
            transport: {
                read: {
                    url: crudServiceBaseUrl + "/EmployeesOrgChart",
                    dataType: "json"
                },
                create: {
                    url: crudServiceBaseUrl + "/EmployeesOrgChart/create",
                    method: "POST"
                },
                update: {
                    url: crudServiceBaseUrl + "/EmployeesOrgChart/update",
                    method: "POST"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/EmployeesOrgChart/destroy",
                    method: "POST"
                }
            },
            schema: {
                model: {
                    id: "Id",
                    parentId: "ParentId",
                    fields: {
                        Id: { type: "number", editable: false, nullable: false },
                        ParentId: { field: "ParentId", nullable: true },
                        expanded: { field: "Expanded", nullable: true },
                        title: { field: "Position", nullable: true },
                        avatar: { field: "Avatar", nullable: true },
                        name: { field: "FullName" }
                    }
                }
            }
        },
        cancel: onCancel,
        change: onChange,
        collapse: onCollapse,
        create: onCreate,
        expand: onExpand,
        dataBinding: onDataBinding,
        dataBound: onDataBound,
        delete: onDelete,
        edit: onEdit,
        save: onSave,
        select: onSelect
    });

    function onCancel(e) {
        console.log("event: Cancelado");
    }

    function onChange(e) {
        console.log("event: Cambio");
    }

    function onCollapse(e) {
        console.log("event: Collapse --> " + e.dataItems[0].name + " collapsed");
    }

    function onCreate(e) {
        console.log("event: Creado");
    }

    function onExpand(e) {
        console.log("event: Expand --> " + e.dataItems[0].name + " expanded");

    }

    function onDataBinding(e) {
        console.log("event: DataBinding");
    }

    function onDataBound(e) {
        console.log("event: DataBound");
    }

    function onDelete(e) {
        console.log("event: Borrar");
    }

    function onEdit(e) {
        console.log("event: Editar");
    }

    function onSave(e) {
        console.log("event: Guardar");
    }

    function onSelect(e) {
        console.log("event: Seleccionar --> " + e.dataItems[0].name + " seleccionado");
    }
})