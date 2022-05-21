//array for schedule tasks with 9 empty string items
var scheduleListArr = [];
//container for timeblock
var containerEl = $(".container");

//declare current time element
var currentTimeDate = moment().format("dddd, MMMM Do");
//grab "current day" id, assign it a variable, and make it equal the day/date
var currentTimeEl = $("#currentDay");
currentTimeEl.text(currentTimeDate);

var thisID = null;


var displaySchedule = function() {


//loop through everything and display it
  
        for (var i = 0; i < 9; i++){
        //create box for row
        var hourBoxEl = $("<div>").addClass("row border").attr("id", "hour-" + i);
    
        //time-box, text, add hour
        var timeBoxEl = $("<div>").addClass("col-1 m-auto text-center");
        var timeTextEl = $("<p>");
        $(timeTextEl).text(moment().hour(9+i).format("h A"));

        //Schedule items - box and text
        var scheduleBoxEl = $("<div>").addClass("col-10 bg-secondary text-white");
        var scheduleTextEl = $("<input>").attr("id", "schedule-item-" + i).attr("type", "text").addClass("bg-secondary");
        $(scheduleTextEl).val('').addClass(" w-100 h-100 .bg-secondary");
        
        //load scheduleListArr, then 
        
        scheduleTextEl = scheduleListArr[i];

       
            
        //save box
        var saveBoxEl = $("<div>").attr("id","save-box-" + i).addClass("col-1 bg-primary"); 
        var saveIconEl = $("<i>").addClass("fa-solid fa-floppy-disk");
        saveBoxEl.append(saveIconEl);
        
       


        $(scheduleBoxEl).on("click", "input", function() {
           var thisScheduleID = $(this)
                    .attr("id")
                    .replace("schedule-item-", "");
                    
            thisID = thisScheduleID;
        });

        //SAVE FUNCTION
        $(saveBoxEl).on("click", function() {
             // saveFunction();
     
    });





    //append hour box row to container
    $(containerEl).append(hourBoxEl);
    //hour to time box // hour text to hour box
    $(hourBoxEl).append(timeBoxEl);
    $(timeBoxEl).append(timeTextEl);
    $(scheduleBoxEl).append(scheduleTextEl);
    $(hourBoxEl).append(scheduleBoxEl);
    $(hourBoxEl).append(saveBoxEl);
    
}  

}

var saveFunction = function() {
    var thisSaveID = $(this)
    .attr("id")
    .replace("save-box-", "");
    
thisID = thisSaveID;

var scheduleText = $("#schedule-item-" + thisID).val();
//console.log(scheduleText);

scheduleListArr[thisID] = scheduleText;
console.log(scheduleListArr);


//save
var newArray = JSON.stringify(scheduleListArr);
(localStorage.setItem("scheduleListArr", newArry));
}

displaySchedule();