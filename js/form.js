$(".btn-send").click(showMsg);

function showMsg(event) {
    var msgSent = $(".invisible");
    $(".schedule-form").trigger("reset");

    msgSent.fadeIn(1000);
    setTimeout (function() {
        msgSent.fadeOut(250);
    }, 3500);
}