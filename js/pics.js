/**
 * Created by  Leepyng  Chen on 2015/3/24.
 */
$(function () {
    console.log($('#list_num').css("width"));
    var pic_num = 0;
    $(".arrow_right_small").click(function () {
        var list_li = $("#list_num li").length - 4;
        if ($('#list_num').position().left > (((list_li * 1) * -107) + 25)) {
            $("#list_num").animate({ left: $('#list_num').position().left - 107 }, "slow");
        }
    });
    $(".arrow_left_small").click(function () {
        var list_li = $("#list_num li").length;
        var small_pic_list_width = $("#list_num li").length * 140;
        if ($("#list_num li").length > 4 &&  $('#list_num').position().left < 24) {
            $("#list_num").animate({ left: $('#list_num').position().left + 107 }, "slow");
        }
    });
    $(".arrow_left").click(function () {
        --pic_num;
        $(".big_pic img").attr("src", $("#list_num").find("li:eq(" + pic_num + ") img").attr("src"));
    });
    $(".arrow_right").click(function () {
        ++pic_num;
        $(".big_pic img").attr("src", $("#list_num").find("li:eq(" + pic_num + ") img").attr("src"));
    });
    $("#list_num img").click(function () {
        console.log("pic src:" + $("#list_num li img").index(this));
        pic_num = $("#list_num li img").index(this);
        $(".big_pic img").attr("src", $(this).attr("src"));
    });
});
