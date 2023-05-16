//Cargar Framework del bot 
src = "https://unpkg.com/botframework-directlinejs@0.11.5/dist/directline.js"
//Cargar cartas Adaptativas
src = "https://unpkg.com/adaptivecards@2.10.0/dist/adaptivecards.min.js"

$.when(
    $.getScript("https://unpkg.com/botframework-directlinejs@0.11.5/dist/directline.js"),
    $.getScript("https://unpkg.com/adaptivecards@2.10.0/dist/adaptivecards.min.js")
).done(function () {
    window.agent = new DirectLineAgent(chat, "Y_ly-If6haE.cwA.PQE.ZwOOsq4MlHcD3_YLFI-t9oW6L6DXMMBoi67LBz9WaWA");
});

window.DirectLineAgent = kendo.Class.extend({
    init: function (chat, secret) {
        this.chat = chat;
        this.iconUrl = "../content/chat/VacationBot.png";

        this.agent = new DirectLine.DirectLine({ secret: secret });

        this.agent.activity$.subscribe($.proxy(this.onResponse, this));
    },

    postMessage: function (args) {
        var postArgs = {
            text: args.text,
            type: args.type,
            timestamp: args.timestamp,
            from: args.from
        };

        this.agent.postActivity(postArgs)
            .subscribe();
    },

    onResponse: function (response) {
        if (response.from.id === this.chat.getUser().id) {
            return;
        }

        response.from.iconUrl = this.iconUrl;

        this.renderMessage(response);

        this.renderAttachments(response);

        this.renderSuggestedActions(response.suggestedActions);
    },

    renderMessage: function (message) {
        if (message.text || message.type == "typing") {
            this.chat.renderMessage(message, message.from);
        }
    },

    renderAttachments: function (data) {
        this.chat.renderAttachments(data, data.from);
    },

    renderSuggestedActions: function (suggestedActions) {
        var actions = [];

        if (suggestedActions && suggestedActions.actions) {
            actions = suggestedActions.actions;
        }

        this.chat.renderSuggestedActions(actions);
    }
});

var chat = $("#chat").kendoChat({
    post: function (args) {
        agent.postMessage(args);
    }
}).data("kendoChat");

var AdaptiveCardComponent = kendo.chat.Component.extend({
    init: function (options, view) {
        kendo.chat.Component.fn.init.call(this, options, view);

        var adaptiveCard = new AdaptiveCards.AdaptiveCard();

        adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
            fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
        });

        adaptiveCard.parse(options);

        var bodyElement = $("<div>").addClass("k-card-body").append(adaptiveCard.render());
        this.element.addClass("k-card").append(bodyElement);
    }
});

kendo.chat.registerComponent("application/vnd.microsoft.card.adaptive", AdaptiveCardComponent);


//var chat;
//$(document).ready(function () {
//    chat = $("#chat").kendoChat({
//        toolClick: function (ev) {
//            if (ev.name === "sendimage") {
//                $("#files").click();
//            }
//        },
//        toolbar: {
//            toggleable: true,
//            buttons: [
//                { name: "sendimage", iconClass: "k-icon k-i-image" }
//            ]
//        }
//    }).data("kendoChat");

//    var upload = $("#files").kendoUpload({
//        async: {
//            saveUrl: "../upload/save",
//            removeUrl: "../upload/remove",
//            autoUpload: true
//        },
//        validation: {
//            allowedExtensions: [".jpg", ".jpeg", ".png", ".bmp", ".gif"]
//        },
//        success: onSuccess,
//        showFileList: false,
//        dropZone: "#chat"
//    }).data("kendoUpload");

//    upload.wrapper.hide();
//});

//function onSuccess(e) {
//    if (e.operation === "upload") {
//        for (var i = 0; i < e.files.length; i++) {
//            var file = e.files[i].rawFile;

//            if (file) {
//                var reader = new FileReader();

//                reader.onloadend = function () {
//                    chat.renderAttachments({
//                        attachments: [{
//                            contentType: "image_card",
//                            content: {
//                                image: this.result
//                            }
//                        }],
//                        attachmentLayout: "list"
//                    }, chat.getUser());
//                };

//                reader.readAsDataURL(file);
//            }
//        }
//    }
//}

//var IMAGE_CARD_TEMPLATE = kendo.template(
//    '<div class="k-card k-card-type-rich">' +
//    '<div class="k-card-body quoteCard">' +
//    '<img alt="Kendo UI for jQuery Chat Toolbar Custom Tool Image" class="image-attachment" src="#: image #" />' +
//    '</div>' +
//    '</div>'
//);

//kendo.chat.registerTemplate("image_card", IMAGE_CARD_TEMPLATE);
