$(document).ready(function () {
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "https://demos.telerik.com/kendo-ui/service/Products",
                dataType: "jsonp"
            }
        },
        pageSize: 30
    });

    $("#listView").kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#template").html())
    });
});

$("#listView").on("mouseenter", ".product", function (e) {
    kendo.fx($(e.currentTarget).find(".product-description")).expand("vertical").stop().play();
}).on("mouseleave", ".product", function (e) {
    kendo.fx($(e.currentTarget).find(".product-description")).expand("vertical").stop().reverse();
});

var slide = kendo.fx($("#slide-in-share")).slideIn("left"),
    visible = true;

$("#slide-in-handle").click(function (e) {
    if (visible) {
        slide.reverse();
    } else {
        slide.play();
    }
    visible = !visible;
    e.preventDefault();
});

var effect = kendo.fx("#container").flipHorizontal($("#library"), $("#store")).duration(1000),
    reverse = false;

$(".toggle").click(function () {
    effect.stop();
    reverse ? effect.reverse() : effect.play();
    reverse = !reverse;
});


var dataSource3 = new kendo.data.DataSource({
    transport: {
        read: {
            url: "https://demos.telerik.com/kendo-ui/service/Products",
            dataType: "jsonp"
        }
    },
    pageSize: 15
});

var listView = $("#listView3");

listView.kendoListView({
    dataSource: dataSource3,
    template: kendo.template($("#template3").html())
});

listView.on("click", ".product", function (e) {
    var product = $(e.currentTarget);

    kendo.fx(product).transfer($("#container3"))
        .play()
        .then(function () {
            $(this).fadeOut("slow", function () {
                $(this).remove();

                if (!listView.children().length) {
                    $("<li class='out-of-stock'>Whoa!<br/>You must really like images!</li>")
                        .appendTo(listView)
                        .fadeIn("slow");
                }
            });
        });
});

$("#wrap img").hover(function () {
    kendo.fx(this).zoom("in").startValue(1).endValue(2).play();
}, function () {
    kendo.fx(this).zoom("out").endValue(1).startValue(2).play();
});

function current(page) {
    var book = $("#book4"),
        pages = book.children(),
        pagesCount = pages.length,
        current = pages.filter(".current"),
        currentIndex = pagesCount - current.index(),
        newPage;

    if (!arguments.length) {
        return currentIndex;
    }

    if (book.data("animating")) {
        return;
    }

    $("#wrap4").toggleClass("first-page", page == 1)
        .toggleClass("last-page", page == pagesCount);

    if (page != currentIndex) {
        current.removeClass("current");
        newPage = pages.eq(pagesCount - page).addClass("current");

        if (page > currentIndex) {
            kendo.fx(book).pageturnHorizontal(current, newPage).play();
        } else {
            kendo.fx(book).pageturnHorizontal(newPage, current).reverse();
        }
    }
}

$("#previous4").click(function (e) {
    e.preventDefault();
    current(Math.max(1, current() - 1));
});

$("#next4").click(function (e) {
    e.preventDefault();
    current(Math.min(6, current() + 1));
});


$(function () {
    var index = 0,
        currentEffect;

    $("#homes a").click(function (e) {
        e.preventDefault();
        var target = parseInt($(this).data("index"));
        if (target === index) {
            return;
        }

        if (currentEffect) {
            currentEffect.stop();
        }
        $("#home" + target).show();
        currentEffect = kendo.fx("#home" + target).replace("#home" + index, "swap");
        currentEffect.run();
        index = target;
    });
});



