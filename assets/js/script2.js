//array for schedule tasks with 9 empty string items
var scheduleListArr = [];
//container for timeblock
var containerEl = $(".container");
//changes to true when it's the current time.
var currentTimeBool = false;

//declare current time elements - date, then hour
var currentTimeDate = moment().format("dddd, MMMM Do");
var currentTimeHour = moment().format("h A");

//array for each hour
var timeHourArray =[];

//12 hours ahead - uncomment lines below for testing at night
// var twelveAhead = moment().hour(11).format("h A");
// currentTimeHour = twelveAhead;

//places date at top of page
var currentTimeEl = $("#currentDay");
currentTimeEl.text(currentTimeDate);

//ID element for referencing a specific box
var thisID = null;

//checks if there's already save data and puts it into an array, if there is
var loadScheduleArrayItem = function() {
    //checks if there's anything in local storage
    if (localStorage.getItem('scheduleListArr') != null){
        //adds local storage to array
        var stringOfArray = localStorage.getItem("scheduleListArr");
        console.log(stringOfArray);
        scheduleListArr = JSON.parse(stringOfArray);   
        console.log(scheduleListArr);
    } 
    else {
        //creates empty array with blank spaces
        scheduleListArr = ["","","","","","","","",]
    }
}

//runs when you load/refresh the page
var displaySchedule = function() {
//loads schedules items from storage
loadScheduleArrayItem();

//loop through each hour and display content if there is any, as well as creates schedule elements
        for (var i = 0; i < 9; i++){
        //create box for row
        var hourBoxEl = $("<div>").addClass("row time-block").attr("id", "hour-" + i);
    
        //time-box, text, add hour
        var timeBoxEl = $("<div>").addClass("col-1 hour");
        var timeTextEl = $("<p>");
        var thisTime = moment().hour(9+i).format("h A")
        //displays it in hour box
        $(timeTextEl).text(thisTime);
        //adds to time array
        timeHourArray.push(thisTime);
        
        //Schedule items - box and text
        var scheduleBoxEl = $("<div>").addClass("col-10 past ");
        var scheduleTextEl = $("<input>").attr("id", "schedule-item-" + i).attr("type", "text").addClass("past w-100 h-100");

//checks if the time for the row matches the current time and changes classes
        if (thisTime === currentTimeHour) {
            currentTimeBool = true;
            console.log("this row's time is " + thisTime + ", which is the same as " + currentTimeHour);
            $(scheduleBoxEl).removeClass("past").addClass("present");
            $(scheduleTextEl).removeClass("past").addClass("present");
        } 
        //if the times are not the same, checks if there's already been a time that's the same, and makes sure the time is after
        else if ((currentTimeHour) <  (timeHourArray[i]) && currentTimeBool) {
            console.log("this row's time is " + thisTime);
            console.log("which is after the current time, " + currentTimeHour);
            $(scheduleBoxEl).removeClass("past").addClass("future");
             $(scheduleTextEl).removeClass("past").addClass("future");
         } else {
            console.log("this row's time is " + thisTime);
            console.log("which comes before " + currentTimeHour);
         }

        //grabs scheduleListArr, then importants text elements to schedule if it's not empty
        if (scheduleListArr[i] != ""){
                    scheduleTextEl.val(scheduleListArr[i]);

        }

        //save box
        var saveBoxEl = $("<div>").attr("id","save-box-" + i).addClass("col-1 saveBtn"); 
        var saveIconEl = $("<i>").addClass("fa-solid fa-floppy-disk");
        saveBoxEl.append(saveIconEl);
        
       //on click, allows you to edit schedule item
        $(scheduleBoxEl).on("click", "input", function() {
           var thisScheduleID = $(this)
                    .attr("id")
                    .replace("schedule-item-", "");       
            thisID = thisScheduleID;
        });

        //SAVE FUNCTION (makes sure it saves the correct save box)
        $(saveBoxEl).on("click", function() {
            var thisSaveID = $(this)
            .attr("id")
            .replace("save-box-", "");  
        thisID = thisSaveID;
        

        var scheduleText = $("#schedule-item-" + thisID).val();
        scheduleListArr[thisID] = scheduleText;
        console.log(scheduleListArr);
        saveFunction();
    });

    //now that the for loop is done:
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
//save
var newArray = JSON.stringify(scheduleListArr);
(localStorage.setItem("scheduleListArr", newArray));
}

//code on start
displaySchedule();