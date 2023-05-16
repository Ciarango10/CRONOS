$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform").kendoForm({
        orientation: "vertical",
        formData: {
            Username: "carlos",
            Email: "carlos@email.com",
            Password: "pass123",
            Birth: new Date(),
            Agree: false
        },
        items: [{
            type: "group",
            label: "Formulario de registro",
            items: [
                { field: "Username", label: "Usuario:", validation: { required: true } },
                { field: "Email", label: "Email:", validation: { required: true, email: true } },
                {
                    field: "Password",
                    label: "Contraseña:",
                    validation: { required: true },
                    hint: "Pista: Solo valores alfanumericos",
                    editor: function (container, options) {
                        $('<input type="password" id="Password" name="' + options.field + '" title="Password" required="required" autocomplete="off" aria-labelledby="Password-form-label" data-bind="value: Password" aria-describedby="Password-form-hint"/>')
                            .appendTo(container)
                            .kendoTextBox();
                    }
                },
                { field: "Birth", label: { text: "Fecha de Nacimiento: ", optional: true } },
                { field: "Agree", label: "Aceptar terminos:", validation: { required: true } }
            ]
        }],
        validateField: function (e) {
            validationSuccess.html("");
        },
        submit: function (e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Información de formulario Válida!</div>");
        },
        clear: function (ev) {
            validationSuccess.html("");
        }
    });

    var validationSuccess = $("#validation-success2");

    $("#exampleform2").kendoForm({
        orientation: "vertical",
        formData: {
            Email: "carlosarango@gmail.com"
        },
        items: [{
            type: "group",
            label: "Formulario retroalimentacion",
            items: [
                {
                    field: "Feedback",
                    label: "Retroalimentacion",
                    editor: "TextArea",
                    editorOptions: { rows: 5 },
                    validation: { required: true },
                    hint: "Pista: Ingresa tu explicacion detallada, para poder trabajar en tu retroalimentacion"

                },
                { field: "Email", label: { text: "Email:", optional: true }, validation: { email: true } },

            ]
        }],
        validateField: function (e) {
            validationSuccess.html("");
        },
        submit: function (e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Informacion de formulario Válida!</div>");
        },
        clear: function (ev) {
            validationSuccess.html("");
        }
    });

    var validationSuccess = $("#validation-success3");

    $("#exampleform3").kendoForm({
        orientation: "horizontal",
        formData: {
            TextBox: "Carlos Arango",
            TextArea: "Multiline\nInput",
            NumericTextBox: 2,
            MaskedTextBox: 21313,
            DatePicker: new Date(),
            DateTimePicker: new Date(),
            Switch: true,
            RadioGroup: "Admin",
            CheckBoxGroup: ["Spanish"],
            ComboBox: 1,
            DropDownList: 2
        },
        items: [
            {
                field: "TextBox",
                label: "TextBox:",
                validation: { required: true },
                editor: "TextBox",
                editorOptions: {
                    placeholder: "TextBox"
                }
            },
            {
                field: "TextArea",
                label: "TextArea:",
                editor: "TextArea",
                editorOptions: {
                    placeholder: "Multiline value",
                    rows: 2
                }
            },
            {
                field: "NumericTextBox",
                editor: "NumericTextBox",
                label: "NumericTextBox:",
                validation: { required: true }
            },
            {
                field: "MaskedTextBox",
                editor: "MaskedTextBox",
                label: "MaskedTextBox:",
                validation: { required: true }
            },
            {
                field: "DatePicker",
                editor: "DatePicker",
                label: "DatePicker:",
                validation: { required: true }
            },
            {
                field: "DateTimePicker",
                editor: "DateTimePicker",
                label: "DateTimePicker:",
                validation: { required: true }
            },
            {
                field: "RadioGroup",
                editor: "RadioGroup",
                label: "RadioGroup:",
                validation: { required: true },
                editorOptions: {
                    items: ["Admin", "Manager", "Employee"],
                    layout: "horizontal",
                    labelPosition: "before"
                }
            },
            {
                field: "CheckBoxGroup",
                editor: "CheckBoxGroup",
                label: "CheckBoxGroup:",
                validation: { required: false },
                editorOptions: {
                    items: ["English", "Russian", "Spanish"],
                    layout: "horizontal",
                    labelPosition: "before"
                }
            },
            {
                field: "Switch",
                editor: "Switch",
                label: "Switch:",
                validation: { required: true }
            },
            {
                field: "ComboBox", editor: "ComboBox", label: "ComboBox:", validation: { required: true },
                editorOptions: {
                    placeholder: "Select product",
                    dataTextField: "ProductName",
                    dataValueField: "ProductID",
                    filter: "contains",
                    dataSource: {
                        type: "odata",
                        serverFiltering: true,
                        transport: {
                            read: {
                                url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                            }
                        }
                    }
                }
            },
            {
                field: "DropDownList", editor: "DropDownList", label: "DropDownList:", validation: { required: true },
                editorOptions: {
                    placeholder: "Select product",
                    dataTextField: "ProductName",
                    dataValueField: "ProductID",
                    filter: "contains",
                    dataSource: {
                        type: "odata",
                        serverFiltering: true,
                        transport: {
                            read: {
                                url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                            }
                        }
                    }
                }
            }
        ],
        validateField: function (e) {
            validationSuccess.html("");
        },
        submit: function (e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Información válida del Formulario!</div>");
        },
        clear: function (ev) {
            validationSuccess.html("");
        }
    });

    var validationSuccess = $("#validation-success4");

    $("#exampleform4").kendoForm({
        formData: {
            FirstName: "Carlos",
            LastName: "Arango",
            Email: "carlosa@gmail.com",
            Country: "1",
            City: "Medellin",
            AddressLine: ""
        },
        layout: "grid",
        grid: {
            cols: 2,
            gutter: 20
        },
        items: [
            {
                type: "group",
                label: "Informacion Personal",
                layout: "grid",
                grid: { cols: 1, gutter: 10 },
                items: [
                    {
                        field: "FirstName",
                        label: "Primer Nombre: ",
                        validation: { required: true }
                    },
                    {
                        field: "LastName",
                        label: "Segundo Nombre: ",
                        validation: { required: true }
                    },
                    {
                        field: "Email",
                        label: "Email: ",
                        validation: {
                            required: true,
                            email: true
                        }
                    }
                ]
            },
            {
                type: "group",
                label: "Direccion: ",
                layout: "grid",
                grid: { cols: 2, gutter: 10 },
                items: [
                    {
                        field: "Country",
                        editor: "DropDownList",
                        label: "Pais: ",
                        validation: { required: true },
                        colSpan: 1,
                        editorOptions: {
                            optionLabel: "Seleccione...",
                            dataSource: [
                                { Name: "France", Id: 1 },
                                { Name: "Germany", Id: 2 },
                                { Name: "Italy", Id: 3 },
                                { Name: "Spain", Id: 4 }
                            ],
                            dataTextField: "Name",
                            dataValueField: "Id"
                        }
                    },
                    {
                        field: "City",
                        label: "Ciudad",
                        validation: { required: true },
                        colSpan: 1,
                    },
                    {
                        field: "AddressLine",
                        label: "Direccion",
                        colSpan: 2,
                        validation: { required: true }
                    },
                ]
            }
        ],
        validateField: function (e) {
            validationSuccess.html("");
        },
        submit: function (e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Informacion del formulario Válida!</div>");
        },
        clear: function (ev) {
            validationSuccess.html("");
        }
    });

    var validationSuccess = $("#validation-success4");

    $("#exampleForm4").kendoForm({
        formData: {
            FirstName: "Carlos",
            LastName: "Arango",
            Email: "carlosarango3101@gmail.com",
            Country: "1",
            City: "Medellin",
            AddressLine: "",
            Birth: new Date(),
            Agree: false
        },
        items: [
            {
                type: "group",
                label: "Informacion Personal",
                items: [
                    {
                        field: "FirstName",
                        label: "Nombre: ",
                        validation: { required: true }
                    },
                    {
                        field: "LastName",
                        label: "Apellido: ",
                        validation: { required: true }
                    },
                    {
                        field: "Email",
                        label: "Email: ",
                        validation: {
                            required: true,
                            email: true
                        }
                    },
                    {
                        field: "Password",
                        label: "Contraseña: ",
                        validation: { required: true },
                        hint: "Pista: Solo valores alfanuméricos",
                        editor: function (container, options) {
                            $('<input type="password" id="Password" name="' + options.field + '" title="Password" required="required" autocomplete="off" aria-labelledby="Password-form-label" data-bind="value: Password" aria-describedby="Password-form-hint"/>')
                                .appendTo(container)
                                .kendoTextBox();
                        }
                    },
                    {
                        field: "Birth",
                        label: { text: "Fecha de nacimiento: ", optional: true }
                    }
                ]
            },
            {
                type: "group",
                label: "Direccion: ",
                items: [
                    {
                        field: "Country", editor: "DropDownList", label: "Country:", validation: { required: true }, editorOptions: {
                            optionLabel: "Seleccionar Pais...",
                            dataSource: [
                                { Name: "France", Id: 1 },
                                { Name: "Germany", Id: 2 },
                                { Name: "Italy", Id: 3 },
                                { Name: "Spain", Id: 4 }
                            ],
                            dataTextField: "Name",
                            dataValueField: "Id"
                        }
                    },
                    {
                        field: "City",
                        label: "Ciudad:",
                        validation: { required: true }
                    },
                    {
                        field: "AddressLine",
                        label: "Direccion: ",
                        validation: { required: true }
                    },
                ]
            },
            {
                field: "Agree",
                label: "Aceptar Términos:",
                validation: { required: true }
            }
        ],
        validateField: function (e) {
            validationSuccess.html("");
        },
        submit: function (e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Información del formulario Válida!</div>");
        },
        clear: function (ev) {
            validationSuccess.html("");
        }
    });

});