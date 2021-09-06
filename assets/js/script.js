// Display today's date and time
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

// Color-code each time block to indicate if the hour is past, present or future
function timeCheck() {
    var currentHour = moment().hour();

    // Loop through each time block
    $(".time-block").each(function() {
        var timeBlock = $(this).data("hour");

        if(timeBlock == currentHour) {
            $(this).addClass("present");
        }
        else if(timeBlock < currentHour) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }

    });
}

$(document).ready(function() {
    timeCheck();
});