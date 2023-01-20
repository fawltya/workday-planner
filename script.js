
// current datetime function
var currentDay = $('#currentDay');
function showDate() {
    var today = moment().format('Do MMM YYYY H:mm:ss')
    currentDay.text(today);
    
}
showDate()
setInterval(showDate, 1000);
var now = moment().format('H') // current hour
console.log(now);

timeblocks = $('.planner-input-row')
timeblocks.each(function() {
    var hour = $(this).attr('data-hour');
    hour = parseInt(hour, 10);
    now = parseInt(hour, 10);
    if (hour < now) {
        $(this).css('background-color', 'var(--past-color)')
    } if (hour === now) {
        $(this).css('background-color', 'var(--present-color)')
    } else $(this).css('background-color', 'var(--future-color)')
})



var formInput = $('planner-input-row')
var plannerSubmitValue = $('#9am-form');

var formHandle = function (event) {
    event.preventDefault();
    var plannerSubmit = plannerSubmitValue.val();

    plannerSubmit.appendTo(plannerSubmitValue);

}
// formHandle();

// formEl.on('submit', handleFormSubmit);
formInput.on('submit', formHandle);
