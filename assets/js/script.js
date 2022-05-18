//need to make 8-9 blocks for calendar
//each block divided into 3 sections - 1 10 1 (for bootstrap)
// have diff colors and .class
//different border based on time of day
//different background color, based on time of day.

//BOOTSTRAP GRID: https://getbootstrap.com/docs/4.3/layout/grid/

var schedule = {};

var containerEl = $("#timeblock-container");

//declare current time element

var currentTimeDate = moment().format("dddd, MMMM Do");
var currentTimeEl = $("#currentDay");
currentTimeEl.text(currentTimeDate);



var displaySchedule = function() {
    for (var i  =0; i< 9; i++){
        //create box for row
        var hourBoxEl = $("<div>").attr("id","hour-box").addClass("row");


        //time-box, schedule-item, save-box
        var timeboxEl = $("<div>").attr("id","time-box-" + i ).addClass("col-1");
        //add hours to hear for moment to compare to the time.

        var scheduleBoxEl = $("<div>").attr("id","schedule-item-box").addClass("col-10 bg-secondary text-white");
        var scheduleItemEl = $("<p>").attr("id", "schedule-item")
        


        var saveBoxEl = $("<div>").attr("id","save-box").addClass("col-1"); 
       
        //append elements
        $(hourBoxEl).append(timeboxEl);
        $(scheduleBoxEl).append(scheduleItemEl);
        $(hourBoxEl).append(scheduleBoxEl);
        $(hourBoxEl).append(saveBoxEl);
        $(containerEl).append(hourBoxEl);
    }
}


$("#schedule-item").on("click", "p", function() {
    console.log("click");
        //var scheduleInputEl = $("<input>").attr("id", "input-text-" + i);

    //if there's text, this grabs it
    var text = $(this).text().trim();
    //
    var scheduleInput = $("<textarea>"). /*attr("type", "text").*/val(text).addClass("schedule-item");
   
    $(this).replaceWith(scheduleInput);

    textInput.trigger("focus");

   $(".schedule-item-box".on("blur", "textarea", function() {
       var text = $(this).val().trim();

      
   }));


});








displaySchedule();




//give it a class

//make text content equal moment stuff.
//moment().format('MMMM Do YYYY, h:mm:ss a');



var refreshCalendar = function(){
//if container isn't empty, refresh, else fill it
if (containerEl) {
//put in the refresh every 30min thing?
} else {
    loadSchedule()
}
}

var loadSchedule = function() {

    //schedule = JSON.parse(localStorage.getItem(scheduleItems));
 /*$each.(hour, function(){
    if 
})
*/   
}




//gonna make 3 col boxes
//one in the middle will like have class of col-10

//for chanign border colors - use the "focus" feature?
//As far as color goes, maybe they all have an id number that corresponds to a color?


//_____________________________

