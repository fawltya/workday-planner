
// current datetime function
var currentDay = $('#currentDay');
function showDate() {
    var today = moment().format('Do MMM YYYY H:mm:ss')
    currentDay.text(today);
    
}
showDate()
setInterval(showDate, 1000);
var now = moment().format('H') // current hour

var timeblocks = $('.planner-input-row')

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
    // return thisHour = hour;

})

var inputs = [];

timeblocks.on( 'submit', function(event) {
    event.preventDefault();
    handleForm(this);
    $('.prevInput').empty(); // Removes all current divs
    displayInputs();
});

function handleForm(timeblock) {
    var inputField = $(timeblock).find('input');
    var input = {
        time: $(timeblock).attr('data-hour'),
        inputText: inputField.val()
    }
    var previousInputs = JSON.parse(localStorage.getItem("inputs")) || [];
    previousInputs.push(input);
    localStorage.setItem("inputs", JSON.stringify(previousInputs));
    inputField.val('');
    // displayInputs()
}



function displayInputs() {
    var localStorageInput = JSON.parse(localStorage.getItem('inputs'));
    if(localStorageInput){
        localStorageInput.forEach(function(input) {
            var timeblock = $(`.planner-input-row[data-hour="${input.time}"]`);
            var appendInputDiv = $('<div class="prevInput column"></div>');
            appendInputDiv.append(input.inputText);
            // appendInputDiv.insertBefore(timeblock.planner-input);
            // appendInputDiv.append(input.inputText + "<button class='doneTick'></button>"); // tick button
            timeblock.append(appendInputDiv);
        });
    }
}



$(document).ready(function() {
    displayInputs()
});



// var localStorageInput = JSON.parse(localStorage.getItem('inputs'))
// console.log(localStorageInput)
// var appendInputDiv = $('<div class="prevInput"></div>')
// appendInputDiv.text(localStorageInput);
// timeblocks.append(appendInputDiv)




// $(document).ready(function() {
//     var localStorageInput = JSON.parse(localStorage.getItem('inputs'))
//     localStorageInput.forEach(function(input) {
//         var timeblock = $(`.planner-input-row[data-hour="${input.time}"]`);
//         var appendInputDiv = $('<div class="prevInput"></div>')
//         appendInputDiv.append(input.inputText + "<button class='doneTick' type='button'></button>");
//         timeblock.append(appendInputDiv)
//     });
// });

$('#clear-all').on( 'click', function(event) {
    event.preventDefault();
    localStorage.removeItem("inputs");
    $('.prevInput').remove();
    inputs = [];
});



// done tick (not working)
$(document).on('click', '.doneTick', function(event) {
    event.preventDefault();
//     var inputToRemove = $(this).parent(); // this refers to the button that was clicked
//     var time = inputToRemove.attr("data-hour"); // get the data-time attribute of the parent element
//     var inputs = JSON.parse(localStorage.getItem("inputs")) || [];
//     inputs = inputs.filter(function(input){
//         return input.time !== time;
//     });
//     localStorage.setItem("inputs", JSON.stringify(inputs));
//     inputToRemove.remove();
//     // displayInputs()
});





// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is
//          var parsedLocalStorageInput = parse localStorageInput
//          populate the inputs with the value from parsedLocalStorageInput
//          inputs.forEach(function(input) {
//              input => {
//                time: 9,
//                input: 'Meeting',
//              }
//              $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input)
//          })
//      if theres no data in local storage, do nothing
