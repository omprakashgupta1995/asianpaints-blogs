/* document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            var resp = JSON.parse(this.responseText);
            similararticles(resp);
        }
    });

    xhr.open("GET", "/article.json");

    xhr.send();
})
var htp = {
    el: $(".similar-articles"),
    sliderEl: $(".similar-articles__slider"),
    sliderNavEl: $(".similar-articles__slider-navigation"),
    init: function init() {
        this.events.initSlick();
        this.events.click();
    },
    events: {
        initSlick: function initSlick() {
            var sliderEl = htp.sliderEl,
                parentEl = htp.sliderNavEl;
            if (sliderEl.find("article").length <= 4) {
                parentEl.find(".prev").addClass("disabled");
                parentEl.find(".next").addClass("disabled");
            }
            sliderEl.on("afterChange", function (event, slick, currentSlide) {
                if (slick.slickGetOption("infinite") == false && parentEl.length > 0) {
                    var numOfSlides = sliderEl.find(".slick-slide").length; // if slide is at start

                    if (currentSlide == 0) {
                        parentEl.find(".prev").addClass("disabled");
                    } else {
                        parentEl.find(".prev").removeClass("disabled");
                    }

                    var slidesToShow = slick.slickGetOption("slidesToShow"); // if last slide is reached

                    if (numOfSlides <= currentSlide + slidesToShow) {
                        parentEl.find(".next").addClass("disabled");
                    } else {
                        parentEl.find(".next").removeClass("disabled");
                    }
                }
            });
            sliderEl.slick({
                arrows: false,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2.2
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1.2
                    }
                }]
            });
        },
        click: function click() {
            var sliderEl = htp.sliderEl,
                parentEl = htp.sliderNavEl;
            parentEl.find(".prev").on("click", function (e) {
                sliderEl.slick("slickPrev");
            });
            parentEl.find(".next").on("click", function (e) {
                sliderEl.slick("slickNext");
            });
        }
    }
};
var fs = {
    el: $(".similar-articles__slider"),
    init: function init() {
        this.events.register();
    },
    events: {
        register: function register() {
            this.click();
        },
        click: function click() {
            var fsElement = fs.el;
            var fsLink = fsElement.find(".article__inner");
            fsLink.on("click", function (e) {
                //e.preventDefault();
                var _this = $(e.currentTarget);
                // window.location = _this.data("href");
                return true;
            });
        }
    }
};
function similararticles(resp) {
    var listing = "";
    var resptest = resp.data;
    document.querySelector(".similar-articles-data").innerHTML='<div class="similar-articles__row"><div class="similar-articles__row-left"><h2 class="similar-articles__title">Similar Articles</h2><a role="button"><span></span></a></div><div class="similar-articles__row-right"><div class="similar-articles__slider-navigation"> <div class="similar-articles__slider-nav prev disabled"><span class="icon-arrow-prev"></span></div> <div class="similar-articles__slider-nav next"><span class="icon-arrow-next"></span></div></div></div></div>'
    for (var i = 0; i < resptest.length; i++) {
        listing += '<article class="article"> <a class="article__inner" href="' + resptest[i].Page_Link + '"> <div class="article__thumbnail"> <img src="' + resptest[i].Image + '" alt="Beautifulhomes"> <div class="article__bookmark"><span class="icon-bookmark-o" data-type="article"></span></div><small class="article__category">' + resptest[i].Tag + '</small></div><div class="article__content"> <h4 class="article__title">' + resptest[i].Title + '</h4><p class="article__desc">' + resptest[i].Description + '</p></div></a><div class="featured-story__read" ><a class="featured-story__author-name">' + resptest[i].Author_Name + '</a></div></article>';
    }
    document.querySelector(".similar-articles-data").innerHTML+='    <div class="similar-articles__slider" id="similar-articles__slider"></div>'
    document.querySelector("#similar-articles__slider").innerHTML += listing;
    htp.sliderEl = $(".similar-articles__slider");
    htp.sliderNavEl=$(".similar-articles__slider-navigation")
    htp.init();
    fs.init();
}

 */