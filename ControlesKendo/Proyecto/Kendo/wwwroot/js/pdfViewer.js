$.when(
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"),
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js")
)
    .done(function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    }).then(function () {
        $("#pdfViewer").kendoPDFViewer({
            pdfjsProcessing: {
                file: "../content/web/pdfViewer/sample.pdf"
            },
            width: "100%",
            height: 1200
        });
    })

$.when(
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"),
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js")
)
    .done(function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    }).then(function () {
        $("#pdfViewer2").kendoPDFViewer({
            pdfjsProcessing: {
                file: "../content/web/pdfViewer/sample.pdf"
            },
            width: "100%",
            height: 700,
            render: function (e) {
                console.log("Página renderizada: " + e.page.pageNumber);
            },
            open: function (e) {
                console.log("Archivo abierto: " + e.file.name);
            },
            error: function (e) {
                console.log("Mensaje de error: " + e.message);
            },
        })
    })