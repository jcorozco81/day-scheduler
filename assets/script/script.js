$(document).ready(function() {



var timeblockRows = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];

// Check and render Saved Entries
var tosave=[];
var savedTasks = JSON.parse(localStorage.getItem("saved-tasks"));
    if (savedTasks !== null)
    {
        tosave = savedTasks;
        for(i=8; i < 18; i++){
            $("#"+i).val(tosave[i]);
        }
        // console.log(tosave);
    }







// Clock

var timerInterval = setInterval(function() {

    var today = moment();
    var currenthourInt= today.format("H");
    currenthourInt=parseInt(currenthourInt);

    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

    // debug
    // console.log(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    // console.log(today.format("H"));
    // console.log(currenthourInt);

for(var x=0; x<timeblockRows.length; x++){

    if (currenthourInt==timeblockRows[x]){
        $("#"+timeblockRows[x]).css('background-color', '#FFCCCC');
    }
    else if(currenthourInt>timeblockRows[x]){
        $("#"+timeblockRows[x]).css('background-color', '#E4E4E4');     //Border #D1D1D1 Background #E4E4E4
        
    }
    else if(currenthourInt<timeblockRows[x]){
        $("#"+timeblockRows[x]).css('background-color', '#B8EAB8'); // Green
    }}




  }, 1000);

//  Save data on-click

var saveButton=$('.btn');             
saveButton.on('click', function (event) {
    event.preventDefault();
    var targerClicked = event.target;
    // console.log(targerClicked.id);
    var targerID=targerClicked.id;
    targerID=targerID.slice(0,-2);
    // console.log(targerID);
    tosave[targerID]=($("#"+targerID).val());


//Code to save all with any button clicked
// for(i=8; i < 18; i++){
//     tosave[i]=($("#"+i).val());
//     console.log(tosave[i]);
// }


localStorage.setItem("saved-tasks", JSON.stringify(tosave));
    alert('Saved');                                                     //Saved alert
  });




});