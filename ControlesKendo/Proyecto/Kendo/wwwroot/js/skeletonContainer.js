$(function () {
    $("#skeleton").kendoSkeletonContainer({
        animation: "pulse",
        template: `<div class="k-card">
                                    <div class="k-card-header">
                                        <div>
                                            <span data-shape-circle class="k-card-image avatar"></span>
                                        </div>
                                        <div class="user-info" style="width: 100%;">
                                            <span data-shape-text class='k-card-title'></span>
                                            <span data-shape-text class='k-card-subtitle' style="width: 35%;"></span>
                                        </div>
                                    </div>
                                    <span data-shape-rectangle style="width: 340px; height: 100%;"></span>
                                    <div class="k-card-body">
                                        <span data-shape-text></span>
                                    </div>
                  </div>`
    });
});

$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            type: "odata",
            serverPaging: true,
            serverSorting: true,
            pageSize: 20,
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
            }
        },
        height: 543,
        scrollable: {
            virtual: true
        },
        loaderType: "skeleton",
        sortable: true,
        columns: [
            { field: "OrderID", title: "Order ID", width: 110 },
            { field: "CustomerID", title: "Customer ID", width: 130 },
            { field: "ShipName", title: "Ship Name", width: 280 },
            { field: "ShipAddress", title: "Ship Address" },
            { field: "ShipCity", title: "Ship City", width: 160 },
            { field: "ShipCountry", title: "Ship Country", width: 160 }
        ]
    });
});