/* ==========================================
base.js
========================================== */

/* base
========================================== */

function ResetSliderImageSource() {
    var devicewidth = device_width();
    //alert(devicewidth);
    $("section#main .slide-images figure img").each(function (index, element) {
        if (devicewidth <= 400) {
            // do nothing
        } else if (devicewidth <= 700) {
            element.src = element.src.replace("_400", "_700");
        } else {
            element.src = element.src.replace("_400", "_800");
        }
    });
}

$(function () {
    /* ----- images replacement for each device */
    if (content != undefined) {
        $('#sliderContainer').html("");
        $('#sliderContainer').html(content);
        ResetSliderImageSource();
    }

    //    var devicewidth = device_width();
    //    alert(devicewidth);
    //    $("section#main .slide-images figure img").each(function (index, element) {
    //        if (devicewidth <= 400) {
    //            // do nothing
    //        } else if (devicewidth <= 700) {
    //            element.src = element.src.replace("_400", "_700");
    //        } else {
    //            element.src = element.src.replace("_400", "_800");
    //        }
    //    });
    /* images replacement for each device ----- */

    /* ----- page top */
    var topBtn = $("#page-top");
    topBtn.hide();
    $(window).scroll(function () {
        //スクロールが150を超えたら、page top表示
        if ($(this).scrollTop() > 150) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }

        //スクロールが100を超えたら、shadow表示
        if ($(this).scrollTop() > 100) {
            $("header:first").addClass("global-header-shadow");
        } else {
            $("header:first").removeClass("global-header-shadow");
        }
    });
    //Back to Top
    topBtn.click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    /* page top ----- */

    /* ----- accordion navigation */
    $("#accordion-btn").click(function () {
        $("#lang-navi > ul").slideToggle();
        $("#global-navi > ul:first").slideToggle();
        if ($("#accordion-btn").css("background-color") == "rgb(238,64,54)" || $("#accordion-btn").css("background-color") == "rgb(238, 64, 54)" || $("#accordion-btn").css("background-color") == "#ee4036") {
            $("#accordion-btn").css("background-color", "#000000");
            $("#accordion-btn").css("textShadow", "none");
        } else {
            $("#accordion-btn").css("background-color", "#ee4036");
            $("#accordion-btn").css("textShadow", "0px 2px 0px #D63A31");
        }
    });
    /* accordion navigation ----- */

    /* ----- analog clock ----- */
    analog_clock();

    /* ----- contact map part equalize ----- */
    contact_map_equalize();
});
//var slider1;
var content;
/* base of window load & resize
========================================== */

$(window).bind("load", function () {
    /* ----- bxSlider */
    //    content = '<div id="slider1">';
    //    content += '<div class="slider_row" style="display:none;"><figure><a href="en/contact-us/index.html"><img src="/common/images/banners/Banners-Singapore_400.png" alt=""></a></figure></div>';
    //    content += '<div class="slider_row" style="display:none;"><figure><a href="en/showcase/index.html#reach"><img src="/common/images/banners/Banners-Reach_400.png" alt=""></a></figure></div>';
    //    content += '<div class="slider_row" style="display:none;"><figure><a href="en/what-we-do/innovation-lab.html"><img src="/common/images/banners/Banners-Lab_400.png" alt=""></a></figure></div>';
    //    content += '<div class="slider_row" style="display:none;"><figure><a href="en/contact-us/index.html"><img src="/common/images/banners/Banners-global_400.png" alt=""></a></figure></div>';
    //    content += '</div>';

    
    ResetSliderImageSource();
    //alert($('#sliderContainer').html());
    $('#slider1').bxSlider({
        auto: true,
        infiniteLoop: true,
        speed: 1000,
        pause: 3500
    });
    //alert($('#sliderContainer').html());
    /* bxSlider ----- */
    //alert($("div.slider_row"));
    $("div.slider_row").each(function () {
        var style = $(this).attr("style");
        style = style.replace("display: none;", "");
        //alert($(this).attr("style"));
        $(this).attr("style", style);
    })

    $(window).resize(function (e) {
        //slider1.reloadShow();
        //alert(content);

        if (content == undefined) {
            return;
        }

        $('#sliderContainer').html("");
        $('#sliderContainer').html(content);
        ResetSliderImageSource();
        $('#slider1').bxSlider({
            auto: true,
            infiniteLoop: true,
            speed: 1000,
            pause: 3500
        });

        $("div.slider_row").each(function () {
            var style = $(this).attr("style");
            style = style.replace("display: none;", "");
            //alert($(this).attr("style"));
            $(this).attr("style", style);
        })
    });
});

$(window).bind("load resize orientationchange", function () {
    /* ----- sub navigation adjustment for pc ----- */
    var devicewidth = device_width();

    /* orientation return value
    0: up
    90: left-pointing
    180: down
    -90: right-pointing
    */
    var windowOrientation = 0;
    windowOrientation = window.orientation;

    /* ----- branch process based on screen width */
    if ((window.matchMedia("(max-width:360px)").matches) && (windowOrientation == 0 || windowOrientation == 180)) {
        // ----- smartphone portrait -----
        gnavi01_return_to_gnavi();
        gnavi02_return_to_gnavi();
        lang_navi_move_to_gnavi_before();
        subnavi_hw_adjust("sp");
    } else if ((window.matchMedia("(max-width:480px)").matches) && (windowOrientation == 90 || windowOrientation == -90)) {
        // ----- smartphone landscape -----
        gnavi01_return_to_gnavi();
        gnavi02_return_to_gnavi();
        lang_navi_move_to_gnavi_before();
        subnavi_hw_adjust("sp");
    } else if ((window.matchMedia("(min-width:361px)").matches) && (window.matchMedia("(max-width:768px)").matches) && (windowOrientation == 0 || windowOrientation == 180)) {
        // ----- tablet portrait -----
        gnavi01_return_to_gnavi();
        gnavi02_return_to_gnavi();
        lang_navi_move_to_gnavi_before();
        subnavi_hw_adjust("sp");
    } else if ((window.matchMedia("(min-width:361px)").matches) && (window.matchMedia("(max-width:768px)").matches) && (windowOrientation == 90 || windowOrientation == -90)) {
        // ----- tablet landscape -----
        gnavi01_move_to_snavi();
        gnavi02_move_to_snavi();
        lang_navi_move_to_gnavi_after();
        subnavi_hw_adjust("pc");
    } else if (window.matchMedia("(min-width:769px)").matches) {
        // ----- pc -----
        gnavi01_move_to_snavi();
        gnavi02_move_to_snavi();
        lang_navi_move_to_gnavi_after();
        subnavi_hw_adjust("pc");
        $("#global-navi > ul").attr("style", "");
        $("#lang-navi > ul").attr("style", "");
    } else {
        // ----- IE7, IE8 because "matchMedia" can't use those browsers. -----
        gnavi01_move_to_snavi();
        gnavi02_move_to_snavi();
        lang_navi_move_to_gnavi_after();
        subnavi_hw_adjust("pc");
        $("#global-navi > ul").attr("style", "");
        $("#lang-navi > ul").attr("style", "");
    }

    /* branch process based on screen width ----- */
});


/* ------------------------------------------------
functions
------------------------------------------------ */

/* device width
========================================== */
function device_width(){
	if (navigator.userAgent.indexOf("Android 2") != -1) {
		var devicewidth = window.outerWidth;
	} else if(navigator.userAgent.indexOf("Windows Phone") != -1) {
		var devicewidth = window.screen.width;
	} else if(window.devicePixelRatio) {
		var devicewidth = window.innerWidth * window.devicePixelRatio;
	} else {
		var devicewidth = window.innerWidth;
	}

	return devicewidth;
}

/* analog clock
========================================== */
function analog_clock(){
	today = new Date();
	var hour = today.getUTCHours();
	var minute = today.getUTCMinutes();
	var second = today.getUTCSeconds();

	// Singapore & Dalian
	$("#singapore .clock_hours_hand").rotate((hour+8)*30+minute/2);
	$("#dalian .clock_hours_hand").rotate((hour+8)*30+minute/2);

	//Japan
	$("#japan .clock_hours_hand").rotate((hour+9)*30+minute/2);

	// London
	$("#london .clock_hours_hand").rotate(hour*30+minute/2);
	$(".clock_minutes_hand").rotate(minute*6+second/10);
	setTimeout("analog_clock()", 1000);
}

/* gnavi-01: move to sub-navi
========================================== */
function gnavi01_move_to_snavi() {
	if($("#gnavi-01").hasClass("active")) {
		$("#gnavi-01 > ul").prependTo("#sub-navi").css("display", "block");
		$("#sub-navi-area").css("display", "block");
	}
}

/* gnavi-02: move to sub-navi
========================================== */
function gnavi02_move_to_snavi() {
	if($("#gnavi-02").hasClass("active")) {
		$("#gnavi-02 > ul").prependTo("#sub-navi").css("display", "block");
		$("#sub-navi-area").css("display", "block");
	}
}

/* lang-navi: move to gnavi after
========================================== */
function lang_navi_move_to_gnavi_after() {
	$("#lang-navi").insertAfter("#global-navi");
	$("#global-navi").css("display", "block");
}

/* gnavi-01: return to gnavi from sub-navi
========================================== */
function gnavi01_return_to_gnavi() {
	if($("#gnavi-01").hasClass("active")) {
	} else {
		$("#sub-navi > ul").appendTo("#gnavi-02 > ul");
		$("#sub-navi-area ul").remove();
	}
}

/* gnavi-02: return to gnavi from sub-navi
========================================== */
function gnavi02_return_to_gnavi() {
	if($("#gnavi-02").hasClass("active")) {
	} else {
		$("#sub-navi > ul").appendTo("#gnavi-03 > ul");
		$("#sub-navi-area ul").remove();
	}
}

/* lang-navi: move to gnavi before
========================================== */
function lang_navi_move_to_gnavi_before() {
	$("#lang-navi").insertBefore("#global-navi");
}

/* sub-navi: height & width adjustment
========================================== */
function subnavi_hw_adjust(target) {
	if (target == "pc") {
		if($("#sub-navi > ul").hasClass("active") || $("#sub-navi > ul > li").hasClass("active")) {
			var totalWidth = 0;
			for(var i = 0; i < $("#sub-navi ul li").length; i++){
				totalWidth += $("#sub-navi ul li").eq(i).width();
			}

			$("#sub-navi ul").css("width", totalWidth+5);
		} else {
			$("section#main").css("margin-top", "150px");
		}
	} else if (target == "sp") {
		$("section#main").css("margin-top", "20px");
	}
}

/* lang-navi: menu li width adjust
========================================== */
/*
function lang_navi_width_adjust() {
	// if language is chinese, lang-navi width adjustment
	var language = $('html').attr('lang');
	if (language == "zh") {
		$("#lang-navi ul li:eq(1)").css("width", "45");
	}
}
*/

/* Contact Us: contact map part equalize
========================================== */
function contact_map_equalize(){
	$("#contact-map div").grrrid("equalize", "height");
}