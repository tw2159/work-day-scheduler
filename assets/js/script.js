// Check each time block and then indicate if the hour is past, present or future
function checkTime() {
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

// Save the description to localStorage when the save button is clicked
function saveDescription() {
    $(".saveBtn").click(function() {
        var hour = $(this).parent().data("hour");
        var description = $(this).prev().val();

        localStorage.setItem(hour, description);
    });
}

// Get the descriptions from localStorage and then display them in the page
function getDescription() {
    // Loop through each time block
    $(".time-block").each(function() {
        var timeBlock = $(this);
        var hour = timeBlock.data("hour");
        var description = timeBlock.find(".description");
        description.val(localStorage.getItem(hour));
    });
}

// When the DOM is loaded, display the date and time and then execute the functions
$(document).ready(function() {
    // Display today's date and time
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

    checkTime();
    getDescription();
    saveDescription();
});