$(document).ready(function () {
    /*var service = "https://demos.telerik.com/kendo-ui/service";*/

    $("#treelist").kendoTreeList({
        dataSource: {
            transport: {
                read: {
                    url: "../DatosKendo/DatosTreelist",
                  /*  dataType: "jsonp"*/
                }
            },
            schema: {
                model: {
                    id: "EmployeeID",
                    parentId: "ReportsTo",
                    fields: {
                        ReportsTo: { field: "ReportsTo", nullable: true },
                        EmployeeID: { field: "EmployeeId", type: "number" },
                        Extension: { field: "Extension", type: "number" }
                    },
                    expanded: true
                }
            }
        },
        height: 540,
        filterable: true,
        sortable: true,
        columns: [
            {
                field: "FirstName", title: "First Name", width: 280,
            },
            { field: "LastName", title: "Last Name", width: 160 },
            { field: "Position" },
            { field: "Phone", width: 200 },
            { field: "Extension", width: 140 },
            { field: "Address" }
        ],
        pageable: {
            pageSize: 15,
            pageSizes: true
        }
    });
});

$(function () {
    var dataSource = new kendo.data.TreeListDataSource({
        data: [
            { id: 1, Name: "Daryl Sweeney", Position: "CEO", Phone: "(555) 924-9726", parentId: null },
            { id: 2, Name: "Guy Wooten", Position: "Chief Technical Officer", Phone: "(438) 738-4935", parentId: 1 },
            { id: 32, Name: "Buffy Weber", Position: "VP, Engineering", Phone: "(699) 838-6121", parentId: 2 },
            { id: 11, Name: "Hyacinth Hood", Position: "Team Lead", Phone: "(889) 345-2438", parentId: 32 },
            { id: 60, Name: "Akeem Carr", Position: "Junior Software Developer", Phone: "(738) 136-2814", parentId: 11 },
            { id: 78, Name: "Rinah Simon", Position: "Software Developer", Phone: "(285) 912-5271", parentId: 11 },
            { id: 42, Name: "Gage Daniels", Position: "Software Architect", Phone: "(107) 290-6260", parentId: 32 },
            { id: 43, Name: "Constance Vazquez", Position: "Director, Engineering", Phone: "(800) 301-1978", parentId: 32 },
            { id: 46, Name: "Darrel Solis", Position: "Team Lead", Phone: "(327) 977-0216", parentId: 43 },
            { id: 47, Name: "Brian Yang", Position: "Senior Software Developer", Phone: "(565) 146-5435", parentId: 46 },
            { id: 50, Name: "Lillian Bradshaw", Position: "Software Developer", Phone: "(323) 509-3479", parentId: 46 },
            { id: 51, Name: "Christian Palmer", Position: "Technical Lead", Phone: "(490) 421-8718", parentId: 46 },
            { id: 55, Name: "Summer Mosley", Position: "QA Engineer", Phone: "(784) 962-2301", parentId: 46 },
            { id: 56, Name: "Barry Ayers", Position: "Software Developer", Phone: "(452) 373-9227", parentId: 46 },
            { id: 59, Name: "Keiko Espinoza", Position: "Junior QA Engineer", Phone: "(226) 600-5305", parentId: 46 },
            { id: 61, Name: "Candace Pickett", Position: "Support Officer", Phone: "(120) 117-7475", parentId: 46 },
            { id: 63, Name: "Mia Caldwell", Position: "Team Lead", Phone: "(848) 636-6470", parentId: 43 },
            { id: 65, Name: "Thomas Terry", Position: "Senior Enterprise Support Officer", Phone: "(764) 831-4248", parentId: 63 },
            { id: 67, Name: "Ruth Downs", Position: "Senior Software Developer", Phone: "(138) 991-1440", parentId: 63 },
            { id: 70, Name: "Yasir Wilder", Position: "Senior QA Enginner", Phone: "(759) 701-8665", parentId: 63 },
            { id: 71, Name: "Flavia Short", Position: "Support Officer", Phone: "(370) 133-9238", parentId: 63 },
            { id: 74, Name: "Aaron Roach", Position: "Junior Software Developer", Phone: "(958) 717-9230", parentId: 63 },
            { id: 75, Name: "Eric Russell", Position: "Software Developer", Phone: "(516) 575-8505", parentId: 63 },
            { id: 76, Name: "Cheyenne Olson", Position: "Software Developer", Phone: "(241) 645-0257", parentId: 63 },
            { id: 77, Name: "Shaine Avila", Position: "UI Designer", Phone: "(844) 435-1360", parentId: 63 },
            { id: 81, Name: "Chantale Long", Position: "Senior QA Enginner", Phone: "(252) 419-6891", parentId: 63 },
            { id: 83, Name: "Dane Cruz", Position: "Junior Software Developer", Phone: "(946) 701-6165", parentId: 63 },
            { id: 84, Name: "Regan Patterson", Position: "Technical Writer", Phone: "(265) 946-1765", parentId: 63 },
            { id: 85, Name: "Drew Mckay", Position: "Senior Software Developer", Phone: "(327) 293-0162", parentId: 63 },
            { id: 88, Name: "Bevis Miller", Position: "Senior Software Developer", Phone: "(525) 557-0169", parentId: 63 },
            { id: 89, Name: "Bruce Mccarty", Position: "Support Officer", Phone: "(936) 777-8730", parentId: 63 },
            { id: 90, Name: "Ocean Blair", Position: "Team Lead", Phone: "(343) 586-6614", parentId: 43 },
            { id: 91, Name: "Guinevere Osborn", Position: "Software Developer", Phone: "(424) 741-0006", parentId: 90 },
            { id: 92, Name: "Olga Strong", Position: "Graphic Designer", Phone: "(949) 417-1168", parentId: 90 },
            { id: 93, Name: "Robert Orr", Position: "Support Officer", Phone: "(977) 341-3721", parentId: 90 },
            { id: 95, Name: "Odette Sears", Position: "Senior Software Developer", Phone: "(264) 818-6576", parentId: 90 },
            { id: 45, Name: "Zelda Medina", Position: "QA Architect", Phone: "(563) 359-6023", parentId: 32 },
            { id: 3, Name: "Priscilla Frank", Position: "Chief Product Officer", Phone: "(217) 280-5300", parentId: 1 },
            { id: 4, Name: "Ursula Holmes", Position: "EVP, Product Strategy", Phone: "(370) 983-8796", parentId: 3 },
            { id: 24, Name: "Melvin Carrillo", Position: "Director, Developer Relations", Phone: "(344) 496-9555", parentId: 3 },
            { id: 29, Name: "Martha Chavez", Position: "Developer Advocate", Phone: "(140) 772-7509", parentId: 24 },
            { id: 30, Name: "Oren Fox", Position: "Developer Advocate", Phone: "(714) 284-2408", parentId: 24 },
            { id: 41, Name: "Amos Barr", Position: "Developer Advocate", Phone: "(996) 587-8405", parentId: 24 }
        ],

        schema: {
            model: {
                id: "id",
                expanded: true
            }
        }
    });

    $("#treelist2").kendoTreeList({
        dataSource: dataSource,
        height: 540,
        columns: [
            { field: "Position" },
            { field: "Name" },
            { field: "Phone" }
        ]
    });
});

$(function () {
    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeeDirectory",
                dataType: "jsonp"
            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { field: "ReportsTo", nullable: true }
                }
            }
        }
    });

    $("#treelist3").kendoTreeList({
        dataSource: dataSource,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Extension", title: "Ext", format: "{0:#}" }
        ]
    });
});

var service = "https://demos.telerik.com/kendo-ui/service";

$("#treelist4").kendoTreeList({
    dataSource: {
        transport: {
            read: {
                url: service + "/EmployeeDirectory/All",
                dataType: "jsonp"
            }
        },
        schema: {
            model: {
                id: "EmployeeID",
                parentId: "ReportsTo",
                fields: {
                    ReportsTo: { field: "ReportsTo", nullable: true },
                    EmployeeID: { field: "EmployeeId", type: "number" },
                    Extension: { field: "Extension", type: "number" }
                },
                expanded: true
            }
        }
    },
    height: 540,
    editable: {
        move: {
            reorderable: true
        }
    },
    columns: [
        {
            field: "FirstName", title: "First Name", width: 280,
            template: $("#photo-template").html()
        },
        { field: "LastName", title: "Last Name", width: 160 },
        { field: "Position" }
    ]
});

$(function () {
    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/All",
                dataType: "jsonp"
            },
            update: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        batch: true,
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" },
                    FirstName: { validation: { required: true } },
                    LastName: { validation: { required: true } },
                    HireDate: { type: "date" },
                    Phone: { type: "string" },
                    HireDate: { type: "date" },
                    BirthDate: { type: "date" },
                    Extension: { type: "number", validation: { min: 0, required: true } },
                    Position: { type: "string" }
                },
                expanded: true
            }
        }
    });

    $("#treelist5").kendoTreeList({
        dataSource: dataSource,
        toolbar: ["create"],
        editable: true,
        height: 540,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 220 },
            { field: "LastName", title: "Last Name", width: 100 },
            { field: "Position" },
            { field: "HireDate", title: "Hire Date", format: "{0:MMMM d, yyyy}" },
            { field: "Phone", title: "Phone" },
            { field: "Extension", title: "Ext", format: "{0:#}" },
            { command: [{ name: "createchild", text: "Add child" }, "edit", "destroy"], width: 300 }
        ]
    });
});

$(function () {
    var service = "https://demos.telerik.com/kendo-ui/service";

    $("#treelist6").kendoTreeList({
        dataSource: {
            transport: {
                read: {
                    url: service + "/EmployeeDirectory/All",
                    dataType: "jsonp"
                }
            },
            schema: {
                model: {
                    id: "EmployeeID",
                    parentId: "ReportsTo",
                    fields: {
                        ReportsTo: { field: "ReportsTo", nullable: true },
                        EmployeeID: { field: "EmployeeId", type: "number" },
                        Extension: { field: "Extension", type: "number" }
                    },
                    expanded: true
                }
            }
        },
        height: 540,
        filterable: {
            mode: "row"
        },
        sortable: true,
        columns: [
            {
                field: "FirstName", title: "First Name", width: 180,
                template: $("#photo-template").html()
            },
            {
                field: "LastName", title: "Last Name", width: 180,
                filterable: {
                    cell: {
                        operator: "contains"
                    }
                }
            },
            {
                field: "Position", width: 190,
                filterable: {
                    cell: {
                        template: function (args) {
                            args.element.kendoDropDownList({
                                dataSource: ["CEO", "Chief Technical Officer", "VP, Engineering", "Team Lead", "Junior Software Developer", "Software Developer"],
                                optionLabel: "--Select--"
                            });
                        }
                    }
                }
            },
            { field: "Extension", width: 180 },
            { field: "Address", width: 180 }
        ],
        pageable: {
            pageSize: 15,
            pageSizes: true
        }
    });
});

$(function () {
    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/All",
                dataType: "jsonp"
            },
            update: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        batch: true,
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" },
                    FirstName: { validation: { required: true } },
                    HireDate: { type: "date" },
                    Phone: { type: "string" },
                    HireDate: { type: "date" },
                    BirthDate: { type: "date" },
                    Extension: { type: "number", validation: { min: 0 } },
                    Position: { type: "string" }
                },
                expanded: true
            }
        }
    });

    $("#treelist7").kendoTreeList({
        dataSource: dataSource,
        toolbar: ["create", "save", "cancel"],
        editable: "incell",
        height: 540,
        dataBound: function (e) {
            var items = e.sender.items();
            for (var i = 0; i < items.length; i++) {
                var dataItem = e.sender.dataItem(items[i]);
                var row = $(items[i]);
                if (dataItem.isNew()) {
                    row.find("[data-command='createchild']").hide();
                }
                else {
                    row.find("[data-command='createchild']").show();
                }
            }
        },
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Phone", title: "Phone" },
            { field: "Extension", title: "Ext", format: "{0:#}" },
            { command: [{ name: "createchild", text: "Add child" }, "destroy"], width: 240 }
        ]
    });
});

$(document).ready(function () {
    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/All",
                dataType: "jsonp"
            },
            update: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        batch: true,
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" },
                    FirstName: { validation: { required: true } },
                    LastName: { validation: { required: true } },
                    HireDate: { type: "date" },
                    Phone: { type: "string" },
                    HireDate: { type: "date" },
                    BirthDate: { type: "date" },
                    Extension: { type: "number", validation: { min: 0, required: true } },
                    Position: { type: "string" }
                },
                expanded: true
            }
        }
    });

    $("#treelist8").kendoTreeList({
        dataSource: dataSource,
        toolbar: ["create"],
        editable: "popup",
        height: 540,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Phone", title: "Phone" },
            { field: "Extension", title: "Ext", format: "{0:#}" },
            { command: [{ name: "createchild", text: "Add child" }, "edit", "destroy"], width: 300 }
        ]
    });
});

$(function () {
    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";
    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/All",
                dataType: "jsonp"
            }
        },
        batch: true,
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" },
                    FirstName: { validation: { required: true } },
                    HireDate: { type: "date" },
                    Phone: { type: "string" },
                    HireDate: { type: "date" },
                    BirthDate: { type: "date" },
                    Extension: { type: "number", validation: { min: 0 } },
                    Position: { type: "string" }
                },
                expanded: true
            }
        }
    });

    $("#treelist9").kendoTreeList({
        dataSource: dataSource,
        toolbar: ["search"],
        height: 540,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Phone", title: "Phone" },
            { field: "Extension", title: "Ext", format: "{0:#}" }
        ]
    });
});


$(function () {
    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"

            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                expanded: true,
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                }
            }
        }
    });

    $("#treelist10").kendoTreeList({
        dataSource: dataSource,
        resizable: true,
        height: 300,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Extension", title: "Ext", format: "{0:#}" }
        ]
    });
});

$(document).ready(function () {
    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"

            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                expanded: true,
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                }
            }
        }
    });

    $("#treelist11").kendoTreeList({
        dataSource: dataSource,
        height: 540,
        columns: [
            { selectable: true, width: "65px" },
            { field: "Position" },
            { field: "FirstName" },
            { field: "Extension" }
        ]
    });
});

$(document).ready(function () {

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"
            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                }
            }
        }
    });

    $("#treelist12").kendoTreeList({
        dataSource: dataSource,
        reorderable: true,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Extension", title: "Ext", format: "{0:#}" }
        ]
    });
});

$(document).ready(function () {

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"
            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                }
            }
        }
    });

    $("#treelist13").kendoTreeList({
        dataSource: dataSource,
        columnMenu: true,
        filterable: true,
        sortable: true,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Extension", title: "Ext", format: "{0:#}", filterable: false }
        ]
    });
});

$(function () {
    $("#treelist14").kendoTreeList({
        dataSource: {
            transport: {
                read: {
                    url: "../DatosKendo/DatosTreeList"
                }
            },
            schema: {
                model: {
                    id: "EmployeeID",
                    parentId: "ReportsTo",
                    fields: {
                        ReportsTo: { field: "ReportsTo", nullable: true },
                        EmployeeID: { field: "EmployeeId", type: "number" },
                        Extension: { field: "Extension", type: "number" }
                    },
                    expanded: true
                }
            }
        },
        height: 540,
        sortable: true,
        resizable: true,
        reorderable: true,
        columnMenu: true,
        columns: [{
            field: "FirstName", title: "First Name", width: 180
        },
        {
            field: "Position"
        },
        {
           title: "Personal Info",
            columns: [
                {
                    field: "LastName", title: "Last Name", width: 120
                },
                {
                    title: "Location",
                    columns: [
                        {
                            field: "City", width: 140
                        },
                        {
                            field: "Country", width: 140
                        }
                    ]
                },
                {
                    field: "Phone"
                }
            ]
        }]
    });
});

$(function () {
    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"
            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                }
            }
        }
    });

    $("#treelist15").kendoTreeList({
        dataSource: dataSource,
        reorderable: true,
        resizable: true,
        sortable: true,
        filterable: true,
        columnMenu: true,
        columns: [
            {
                field: "FirstName",
                expandable: true,
                title: "First Name",
                locked: true,
                lockable: false,
                width: 250
            },
            {
                field: "LastName",
                title: "Last Name",
                locked: true,
                width: 200
            },
            {
                field: "Position",
                width: 400
            },
            {
                field: "Extension",
                title: "Ext",
                format: "{0:#}",
                width: 150,
                lockable: false
            }
        ]
    });
});
           
$(document).ready(function () {

    $("#treelist16").kendoTreeList({
        dataSource: {
            transport: {
                read: {
                    url: "../DatosKendo/DatosTreeList"
                }
            },
            schema: {
                model: {
                    id: "EmployeeId",
                    parentId: "ReportsTo",
                    fields: {
                        ReportsTo: { nullable: true },
                        EmployeeId: { type: "number" },
                        HireDate: { field: "HireDate", type: "date" }
                    }
                }
            },
            aggregate: [
                { field: "FirstName", aggregate: "count" },
                { field: "HireDate", aggregate: "max" }
            ]
        },
        height: 540,
        filterable: true,
        sortable: true,
        columns: [
            {
                field: "FirstName", title: "Name",
                template: "#: FirstName # #: LastName #",
                footerTemplate: "#= count # employee(s)"
            },
            { field: "Position" },
            {
                field: "HireDate", title: "Hire Date", format: "{0:MMMM d, yyyy}",
                footerTemplate: "Last employee hired on #= kendo.format('{0:MMMM d, yyyy}', max) #"
            }
        ]
    });
});   

$(document).ready(function () {
    var service = "https://demos.telerik.com/kendo-ui/service";

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"
            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                },
                expanded: true
            }
        }
    });

    $("#treelist17").kendoTreeList({
        dataSource: dataSource,
        height: 540,
        filterable: true,
        sortable: true,
        reorderable: true,
        resizable: true,
        columnMenu: true,
        columns: [
            { field: "FirstName", title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Extension", title: "Ext", format: "{0:#}" }
        ]
    });

    var treelist = $("#treelist17").data("kendoTreeList");

    $("#save").click(function (e) {
        e.preventDefault();
        localStorage["kendo-treelist-options"] = kendo.stringify(treelist.getOptions());
    });

    $("#load").click(function (e) {
        e.preventDefault();
        var options = localStorage["kendo-treelist-options"];
        if (options) {
            treelist.setOptions(JSON.parse(options));
        }
    });
});

function onEdit(arg) {
    var model = arg.model;

    console.log("TreeList edicion: " + model.FirstName + " " + model.LastName);
}

function onSave(arg) {
    console.log("TreeList Guardada");
}

function onRemove(arg) {
    console.log("TreeList Eliminada");
}

function onDataBound(arg) {
    console.log("TreeList data bound");
}

function onDataBinding(arg) {
    console.log("TreeList data binding");
}

$(function () {
    var crudServiceBaseUrl = "https://demos.telerik.com/kendo-ui/service";
    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"
            },
            update: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Update",
                dataType: "jsonp"
            },
            destroy: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Destroy",
                dataType: "jsonp"
            },
            create: {
                url: crudServiceBaseUrl + "/EmployeeDirectory/Create",
                dataType: "jsonp"
            },
            parameterMap: function (options, operation) {
                if (operation !== "read" && options.models) {
                    return { models: kendo.stringify(options.models) };
                }
            }
        },
        batch: true,
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" },
                    FirstName: { validation: { required: true } },
                    LastName: { validation: { required: true } },
                    HireDate: { type: "date" },
                    Phone: { type: "string" },
                    HireDate: { type: "date" },
                    BirthDate: { type: "date" },
                    Extension: { type: "number", validation: { min: 0, required: true } },
                    Position: { type: "string" }
                }
            }
        }
    });

    $("#treelist18").kendoTreeList({
        dataSource: dataSource,
        toolbar: ["create"],
        editable: true,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name", width: 250 },
            { field: "LastName", title: "Last Name" },
            { field: "HireDate", title: "Hire Date", format: "{0:MMMM d, yyyy}" },
            { field: "Extension", title: "Ext", format: "{0:#}" },
            { command: ["edit", "destroy"] }
        ],

        edit: onEdit,
        save: onSave,
        remove: onRemove,
        dataBinding: onDataBinding,
        dataBound: onDataBound
    });
});

$(function () {
    $(".clearSelection").click(function () {
        $("#treelist19").data("kendoTreeList").clearSelection();
    });

    var selectRow = function (e) {
        if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode) {
            var treelist = $("#treelist19").data("kendoTreeList"),
                rowIndex = $("#selectRow").val(),
                row = treelist.content.find("tr:visible").eq(rowIndex);

            treelist.select(row);
        }
    };

    var toggleGroup = function (e) {
        if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode) {
            var treelist = $("#treelist19").data("kendoTreeList"),
                rowIndex = $("#groupRow").val(),
                row = treelist.content.find("tr:visible").eq(rowIndex);

            if (row.has(".k-i-collapse").length) {
                treelist.collapse(row);
            } else {
                treelist.expand(row);
            }
        }
    };


    $(".selectRow").click(selectRow);
    $("#selectRow").keypress(selectRow);

    $(".toggleGroup").click(toggleGroup);
    $("#groupRow").keypress(toggleGroup);

    var dataSource = new kendo.data.TreeListDataSource({
        transport: {
            read: {
                url: "../DatosKendo/DatosTreeList"
            },
        },
        schema: {
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { field: "ReportsTo", nullable: true }
                }
            }
        }
    });

    $("#treelist19").kendoTreeList({
        dataSource: dataSource,
        selectable: true,
        columns: [
            { field: "FirstName", expandable: true, title: "First Name" },
            { field: "LastName", title: "Last Name" },
            { field: "Position" },
            { field: "Extension", title: "Ext", format: "{0:#}" }
        ]
    });

});


