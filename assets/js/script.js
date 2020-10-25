
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });
});

var updateHour = function() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

var currentDay = moment().format('MMMM Do YYYY');
$('#currentDay').append(currentDay);
 

updateHour();

$("#hour-8 .textarea").val(localStorage.getItem("hour-8"));
$("#hour-9 .textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 .textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 .textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 .textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 .textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 .textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 .textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 .textarea").val(localStorage.getItem("hour-16"));
$("#hour-17 .textarea").val(localStorage.getItem("hour-17"));