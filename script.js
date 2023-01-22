
// current datetime function
var currentDay = $('#currentDay');
function showDate() {
    var today = moment().format('Do MMM YYYY H:mm:ss')
    currentDay.text(today);
    
}
showDate()
setInterval(showDate, 1000);
var now = moment().format('H') // current hour

timeblocks = $('.planner-input-row')

timeblocks.each(function() {
    var hour = $(this).attr('data-hour');
    hour = parseInt(hour, 10)
    now = parseInt(now, 10)

    if (hour < now) {
        $(this).css('background-color', 'red')
    } else if (hour == now) {
        $(this).css('background-color', 'green')
    } else {
        $(this).css('background-color', 'purple')
        
    }
    return thisHour = hour;

})

var inputs = [];
var input = $('input')

$('.planner-input-row').on( 'submit', function(event) {
    event.preventDefault();
    // for (var i = 0; i < 2; i++) {
    inputs.push('time: ' + thisHour, 'input: ' + input.val());
    console.log(inputs)
    $('input').val('')
    // console.log(input)
//   }
} );

//   console.log(inputs)




// 3. Save input to local storage
//      create variable (an array) called inputs that will store all of the input data
//      Add event listener to all save button
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically
//
//      Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];




// var formInput = $('planner-input-row')
// var plannerSubmitValue = $('#9am-form');

// var formHandle = function (event) {
//     event.preventDefault();
//     var plannerSubmit = plannerSubmitValue.val();

//     plannerSubmit.appendTo(plannerSubmitValue);

// }
// // formHandle();

// // formEl.on('submit', handleFormSubmit);
// formInput.on('submit', formHandle);
