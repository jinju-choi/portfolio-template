$(document).ready(
  function () {
    //gnb current ==========================================
    $("header .gnb li:nth-child(1) a").addClass("gnb--click");
    $("header .gnb li a").click(
      function () {
        $(this).addClass("gnb--click");
        $("header .gnb li a").not(this).removeClass("gnb--click");
      });

    //service 위치 변경 =========================================
    var ser_top = $("#service ul li").innerHeight() / 2;
    var ser_left = $("#service ul li").innerWidth() / 2;
    var ser_ul = $("#service ul li").innerHeight() * 2 + 30;
    $("#service ul").css({
      "position": "relative",
      "height": ser_ul
    });
    $("#service ul li").each(function () {
      $(this).css({
        "position": "absolute",
        "left": "calc(50% - " + (ser_left) + ")",
        "top": "calc(50% - " + (ser_top) + ")"
      });
    });

    //work current ==========================================//
    $("#portfolio ul.list li:nth-child(1) a").addClass("work--click");
    $("#portfolio ul.list li a").click(
      function () {
        $(this).addClass("work--click");
        $("#portfolio ul.list li a").not(this).removeClass("work--click");
        return false;
      });

    // work이미지 position으로 위치 지정 ==========================================
    var detail_li = $("#portfolio ul.list--detail li");
    var port_left;
    var port_top;
    var ii = 0;
    var j = 0;

    var list_imgH = $(detail_li).height() * 2 + 20 * 3; // 이미지ul높이
    $("#portfolio ul.list--detail").css("height", list_imgH); // 이미지ul높이

    $(detail_li).each(function () { //이미지위치값 지정
      ii = ii % 3;
      port_left = $(detail_li).width() * ii + 20 * ii;
      port_top = $(detail_li).height() * Math.floor(j / 3) + 20 * Math.floor(j / 3);
      $(this).css({
        "position": "absolute",
        "left": port_left,
        "top": port_top
      });
      ii++;
      j++;
    });

    //work 클릭시 분류 ==========================================
    var li_po;
    $("#portfolio ul.list li a").click(function () {
      li_po = $(this).parent().attr("class");
      if (li_po != null) {
        $("#portfolio ul.list--detail li." + li_po).show();
        ii = 0;
        j = 0;
        $("#portfolio ul.list--detail li." + li_po).each(function () {
          ii = ii % 3;
          port_left = $(this).width() * ii + 20 * ii;
          port_top = $(this).height() * Math.floor(j / 3) + 20 * Math.floor(j / 3);
          $(this).css({
            "position": "absolute",
            "left": port_left,
            "top": port_top
          });
          ii++;
          j++;
        });
        $(detail_li).not("#portfolio ul.list--detail li." + li_po).hide();
        return false;
      } else {
        $(detail_li).show();
        ii = 0;
        j = 0;
        $(detail_li).each(function () {
          ii = ii % 3;
          port_left = $(this).width() * ii + 20 * ii;
          port_top = $(this).height() * Math.floor(j / 3) + 20 * Math.floor(j / 3);
          $(this).css({
            "position": "absolute",
            "left": port_left,
            "top": port_top
          });
          ii++;
          j++;
          console.log(port_top);
        });
      }

    });

    // var i = 0;
    // var addText = ["작품1", "작품2", "작품3", "작품4", "작품5", "작품6"];
    // $("#portfolio ul.list--detail li").each(function () {
    //   $(this).addClass("s" + i);
    //   $(this).prepend("<p>" + addText[i] + "</p>");
    //   $(this).attr("data-n", "hello" + i);
    //   i += 1;
    // });

    //메뉴클릭 스크롤링 ==========================================
    var po1 = $("#title").offset().top;
    var po2 = Math.floor($("#about").offset().top);
    var po3 = Math.floor($("#service").offset().top);
    var po4 = Math.floor($("#client").offset().top);
    var po5 = Math.floor($("#portfolio").offset().top);
    var po6 = Math.floor($("#contact").offset().top);
    var po = [po1, po2, po3, po4, po5, po6];
    var n;
    $(window).resize(
      function () {
        po2 = Math.floor($("#about").offset().top);
        po3 = Math.floor($("#service").offset().top);
        po4 = Math.floor($("#client").offset().top);
        po5 = Math.floor($("#portfolio").offset().top);
        po6 = Math.floor($("#contact").offset().top);
        po = [po1, po2, po3, po4, po5, po6];
      }
    );

    // 대메뉴클릭 페이지스크롤링 ==========================================
    $("ul.gnb li a").click(function () {
      n = $(this).attr("data-n");
      $("html,body").stop().animate({
        scrollTop: po[n]
      }, 1000);
      console.log("클릭시 section위치값:" + po[n]);
      return false;
    });

    //down button ==========================================
    $("#title p.down").click(function () {
      $("html,body").animate({
        scrollTop: po2
      }, 1000);
    });

    // 새로고침시 페이지위치에 따라 헤더 스타일적용 ====================
    if ($(window).scrollTop() >= po2) {
      $("header").addClass("header-bg");
    }

    po2 = po2 - $("header").height();
    $(window).scroll(function () {
      if ($(window).scrollTop() >= po2) {
        $("header").addClass("header-bg");
      } else {
        $("header").removeClass("header-bg");
      }

      // 어바웃영역시에 대메뉴색상변경 addClass =======================
      if ($(window).scrollTop() >= po1) {
        $("ul.gnb li:nth-child(1) a").addClass("gnb--click");
        $("ul.gnb li a").not("ul.gnb li:nth-child(1) a").removeClass("gnb--click");
      }
      if ($(window).scrollTop() >= po2) {
        $("ul.gnb li:nth-child(2) a").addClass("gnb--click");
        $("ul.gnb li a").not("ul.gnb li:nth-child(2) a").removeClass("gnb--click");
        $(".top").addClass("ani_attach");
      }
      if ($(window).scrollTop() < po2) {
        $(".top").removeClass("ani_attach");
      }
      if ($(window).scrollTop() >= po3) {
        $("ul.gnb li:nth-child(3) a").addClass("gnb--click");
        $("ul.gnb li a").not("ul.gnb li:nth-child(3) a").removeClass("gnb--click");
      }
      if ($(window).scrollTop() >= po4) {
        $("ul.gnb li:nth-child(4) a").addClass("gnb--click");
        $("ul.gnb li a").not("ul.gnb li:nth-child(4) a").removeClass("gnb--click");
      }
      if ($(window).scrollTop() >= po5) {
        $("ul.gnb li:nth-child(5) a").addClass("gnb--click");
        $("ul.gnb li a").not("ul.gnb li:nth-child(5) a").removeClass("gnb--click");
      }
      if ($(window).scrollTop() >= po6) {
        $("ul.gnb li:nth-child(6) a").addClass("gnb--click");
        $("ul.gnb li a").not("ul.gnb li:nth-child(6) a").removeClass("gnb--click");
      }
    });

    // 스트롤이벤트시 service li분산이동 ==========================================
    var k = 0;
    var m = 0;
    var sl;
    var st;
    $(document).on("scroll", function () {
      if ($(window).scrollTop() >= po3) {
        $("ul.gnb li:nth-child(3) a").addClass("gnb--click");
        $("ul.gnb li a").not("ul.gnb li:nth-child(3) a").removeClass("gnb--click");
        // li항목들이 위치로 분산이 --------------
        $("#service ul li").each(function () {
          k = k % 3;
          sl = $(this).innerWidth() * k + 20 * k;
          st = $(this).innerHeight() * Math.floor(m / 3) + 20 * Math.floor(m / 3);
          $(this).css({
            "left": sl,
            "top": st
          });
          k++;
          m++;
          if (m == 6) {
            $(document).off("scroll");
            //  $(window).off("scroll");
          }
        });
      }

    });

    //scroll top ==========================================
    $("button.scroll-top").click(
      function () {
        $("html,body").animate({
          scrollTop: "0px"
        }, 1000);
        console.log(scrollTop);
      }
    );

    //portfolio ==========================================
    var winw = window.innerWidth; // 창전체 너비(스크롤바포함) 
    var docw = document.documentElement.clientWidth; //문서의 너비
    var scrw = winw - docw;

    var pf_img;
    var closeT;
    var closeR;
    $("#portfolio").append("<div class='pf_box'></div>");
    $("div.pf_box").hide();
    $("#portfolio ul.list--detail li").click(
      function () {
        // 스크롤너비만큼 패딩주기
        $("html").css({
          "overflow-y": "hidden",
          "padding-right": scrw
        });
        $("header div").css({
          "padding-right": scrw
        });
        $("scroll-top").css({
          "right": 30 + scrw
        });
        //포트폴리오 클릭시 나타나기
        $("div.pf_box").fadeIn();
        pf_img = $(this).children("img").attr("src")
        $("div.pf_box img").remove();
        $("div.pf_box").append("<img src='' alt=''>");
        $("div.pf_box img").attr("src", pf_img);

        closeT = $(window).height() - $("div.pf_box img").height();
        closeT = closeT / 2 - 20;
        closeR = $(window).width() - $("div.pf_box img").width();
        closeR = closeR / 2 - 40;

        $("button.close").remove();
        $("div.pf_box").append("<button class='close'>x</button>");
        $("button.close").css({
          "top": closeT,
          "right": closeR
        });

        // 스크롤너비만큼 여백빼기
        $("html").css({
          "overflow-y": "auto",
          "padding-right": 0
        });
        $("header div").css({
          "padding-right": 0
        });
        $("scroll-top").css({
          "right": "30px"
        });

        $("button.close").bind("click", function () {
          $("div.pf_box").fadeOut();
          $("html").css("overflow-y", "auto");
        });
      }
    );

    //사이드 메뉴  ==========================================
    $(window).scroll(function () {
      if ($(window).scrollTop() >= po2) {
        $("aside").show();
        console.log("po2위치값" + po2);
      } else {
        $("aside").hide();
      }
    });
    var click = 0;
    $("aside button").click(function () {
      $("aside").toggleClass("side-menu-click");
      if (click == 0) {
        $(this).children("span").css("transform", "rotate(45deg)");
        click = 1;
      } else {
        $(this).children("span").css("transform", "rotate(0deg)");
        click = 0;
      }
    });

    //클라이언트 슬라이드 ==========================================
    var cn = 1;
    $("#client .slide--bar li:nth-child(1)").addClass("slide-click");
    $("#client .slide--bar li").click(
      function () {
        $(this).addClass("slide-click");
        $(this).siblings().removeClass("slide-click");
        $("#client ul.slide").stop().animate({
          "left": -100 * cn + "%"
        }, 1000);
        cn = $(this).attr("data-cn");
      });

    //클라이언트 자동슬라이드 ==========================================
    var cn1 = 1;
    setInterval(function () {
      if (cn < 3) {
        if (cn == 0) {
          cn1 = cn1 * -1;
        }
        $("#client ul.slide").stop().animate({
          "left": -100 * cn + "%"
        }, 2000);
        $("#client .slide--bar li:eq(" + cn + ")").addClass("slide-click");
        $("#client .slide--bar li:eq(" + cn + ")").siblings().removeClass("slide-click");
        // cn++;//cn=cn+1
        cn = cn + cn1;
      } else if (cn == 3) {
        cn = 2;
        cn1 = cn1 * -1;
      }
    }, 4000);
  });

//팝업창 닫기 ==========================================
window.open("popup.html", "_blank", "width=300, height=400");

function closewin() {
  $("#popup").hide();
}