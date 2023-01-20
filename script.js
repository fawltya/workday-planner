var currentDay = $('#currentDay');

function showDate() {
    var today = moment().format('Do MMM YYYY H:mm:ss')
    console.log(today);
    currentDay.text(today);
}
showDate()
setInterval(showDate, 1000);


var nineamform = $('.form')
projectFormEl.on('submit', handleProjectFormSubmit)
