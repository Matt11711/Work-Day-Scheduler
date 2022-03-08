var currentItem = {}

var calendarList = $(".calendarList")
function checkTime() {
var currentHour = moment().hour()
for (var i=9;i<=17; i++) {

    var currentSchedule = $('#'+i).children("textarea")
    currentSchedule.removeClass("bg-secondary bg-danger bg-success")
    if (currentHour<i) {
currentSchedule.addClass("bg-success")
    }
    else if (currentHour===i) {
        currentSchedule.addClass("bg-danger")
    }
    else {
        currentSchedule.addClass("bg-secondary") 
    }
   
      
   }
  
   $('#currentDay').text(moment().format('dddd, MMMM Do'))
}


function loadTasks() {
    for (var i=9;i<=17; i++) {

            var currentSchedule = JSON.parse(localStorage.getItem(i))
            
           $("#"+i).children("textarea").val(currentSchedule)
              
           }
           checkTime()
}
$(calendarList).on("click","button",function() {
    var currentId= $(this).parent().attr("id")
    var currentSchedule = $(this).parent().children("textarea").val().trim()
    currentItem = {
        id: currentId,
schedule: currentSchedule
    }
   
    localStorage.setItem(currentId, JSON.stringify(currentSchedule))
})


loadTasks()
setInterval(checkTime,(60*1000))
