

var calendarList = $(".calendarList")
// gets checks time against each hour block
function checkTime() {
    // gets current time 
var currentHour = moment().hour()
// loops through every element in the document(hours 9 through 17)
for (var i=9;i<=17; i++) {
// gets the textarea for that element and removes any coloring
    var currentSchedule = $('#'+i).children("textarea")
    currentSchedule.removeClass("bg-secondary bg-danger bg-success")
    // if its before that hour, make it green
    if (currentHour<i) {
currentSchedule.addClass("bg-success")
    }
    // if it is that hour, make it red
    else if (currentHour===i) {
        currentSchedule.addClass("bg-danger")
    }
    // otherwise make it gray
    else {
        currentSchedule.addClass("bg-secondary") 
    }
   
      
   }
//   show the current day at the top of the page
   $('#currentDay').text(moment().format('dddd, MMMM Do'))
}


function loadTasks() {
    // for every hour block on the page
    for (var i=9;i<=17; i++) {
// get the item with that id as its key and put it in the textarea
            var currentSchedule = JSON.parse(localStorage.getItem(i))
            
           $("#"+i).children("textarea").val(currentSchedule)
              
           }
        //    check time to color the areas
           checkTime()
}
// this saves the item next to the button into local storage
$(calendarList).on("click","button",function() {
    // gets the id of the parent to know which item to save it to
    var currentId= $(this).parent().attr("id")
    //  gets the text in the textarea thats the sibling of the button
    var currentSchedule = $(this).parent().children("textarea").val().trim()
//    saves the schedule text as the element ID
    localStorage.setItem(currentId, JSON.stringify(currentSchedule))
})

// loads tasks on startup
loadTasks()
// refreshes the time checker every minute
setInterval(checkTime,(60*1000))
