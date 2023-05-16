$('#avatar-text').kendoAvatar({
    type: 'text',
    text: 'JS'
})

$('#avatar-text-second').kendoAvatar({
    type: 'text',
    text: 'GP'
})

$('#avatar-image-first').kendoAvatar({
    type: 'image',
    image: "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg"
})

$('#avatar-image-second').kendoAvatar({
    type: 'image',
    image: "https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg"
})

$('#avatar-icon').kendoAvatar({
    type: 'icon',
    rounded: null,
    icon: 'user'
})    

var avatar = $("#avatar2").kendoAvatar({
    type: "image",
    alt: "John Doe",
    size: "large",
    image: "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg",
}).data('kendoAvatar');

var avatarIcon = $("#avatar-icon2").kendoAvatar({
    type: "icon",
    icon: "user",
    size: "large"
}).data('kendoAvatar');

var avatarText = $("#avatar-text2").kendoAvatar({
    type: "text",
    text: "JS",
    size: "large"
}).data('kendoAvatar');

$("#changeRounded").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        { text: "Small", value: "small" },
        { text: "Medium", value: "medium" },
        { text: "Large", value: "large" },
        { text: "Full", value: "full" },
        { text: "None", value: "none" }
    ],
    value: "full",
    change: function (e) {
        avatar.setOptions({
            rounded: this.value()
        });

        avatarIcon.setOptions({
            rounded: this.value()
        });

        avatarText.setOptions({
            rounded: this.value()
        });
    }
});

$("#size").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    value: "large",
    dataSource: [
        { text: "Small", value: "small" },
        { text: "Medium", value: "medium" },
        { text: "Large", value: "large" },
        { text: "None", value: "none" }
    ],
    change: function (e) {
        avatar.setOptions({
            size: this.value()
        });

        avatarIcon.setOptions({
            size: this.value()
        });

        avatarText.setOptions({
            size: this.value()
        });
    }
});

$("#themeColor").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        { text: "Base", value: "base" },
        { text: "Primary", value: "primary" },
        { text: "Secondary", value: "secondary" },
        { text: "Teritary", value: "teritary" },
        { text: "Inherit", value: "inherit" },
        { text: "Info", value: "info" },
        { text: "Success", value: "success" },
        { text: "Warning", value: "warning" },
        { text: "Error", value: "error" },
        { text: "Dark", value: "dark" },
        { text: "Light", value: "light" },
        { text: "Inverse", value: "inverse" },
        { text: "None", value: "none" }
    ],
    value: "primary",
    change: function (e) {
        avatar.setOptions({
            themeColor: this.value()
        });

        avatarIcon.setOptions({
            themeColor: this.value()
        });

        avatarText.setOptions({
            themeColor: this.value()
        });
    }
});

$("#fill").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        { text: "Solid", value: "solid" },
        { text: "Outline", value: "outline" },
        { text: "None", value: "none" }
    ],
    value: "solid",
    change: function (e) {
        avatar.setOptions({
            fillMode: this.value()
        });

        avatarIcon.setOptions({
            fillMode: this.value()
        });

        avatarText.setOptions({
            fillMode: this.value()
        });
    }
});

$("#border").kendoButtonGroup({
    select: function (e) {

        var avatarBorder = e.indices == 0 ? true : false

        avatar.setOptions({
            border: avatarBorder
        });

        avatarIcon.setOptions({
            border: avatarBorder
        });

        avatarText.setOptions({
            border: avatarBorder
        })
    },
    index: 1
});    