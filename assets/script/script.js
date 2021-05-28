// var firstNameEl = $('input[name="first-name"]');
// var lastNameEl = $('input[name="last-name"]');
// var emailEl = $('input[name="email"]');
// var githubEl = $('input[name="github"]');
// var docroot= $('#root');

var timeblockRows = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];



// Clock

var timerInterval = setInterval(function() {

    var today = moment();
    var currenthourInt= today.format("H");
    currenthourInt=parseInt(currenthourInt);

    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

    // debug
    console.log(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    console.log(today.format("H"));
    console.log(currenthourInt);

for(var x=0; x<timeblockRows.length; x++){

    if (currenthourInt==timeblockRows[x]){
        $("#"+timeblockRows[x]).css('background-color', 'red');
    }
    else if(currenthourInt<timeblockRows[x]){
        $("#"+timeblockRows[x]).css('background-color', '#00CC00');
        
    }
    else{

    }}
    



  }, 1000);

//  Change style/color depending the hour



//  Save data