var currentItem = {}

var calendarList = $(".calendarList")
function checkTime() {
var currentTime = moment().hour()
for (var i=9;i<=17; i++) {

    var currentSchedule = $('#'+i).children("textarea")
    currentSchedule.removeClass("bg-secondary bg-danger bg-success")
    if (currentTime<i) {
currentSchedule.addClass("bg-success")
    }
    else if (currentTime===i) {
        currentSchedule.addClass("bg-danger")
    }
    else {
        currentSchedule.addClass("bg-secondary") 
    }
   $("#"+i).children("textarea").val(currentSchedule)
      
   }
}

checkTime()
function loadTasks() {
    for (var i=9;i<=17; i++) {

            var currentSchedule = JSON.parse(localStorage.getItem(i))
            
           $("#"+i).children("textarea").val(currentSchedule)
              
           }
}
$(calendarList).on("click","button",function() {
    var currentId= $(this).parent().attr("id")
    var currentSchedule = $(this).parent().children("textarea").val().trim()
    currentItem = {
        id: currentId,
schedule: currentSchedule
    }
    console.log(currentItem)
    console.log($(this).text())
    localStorage.setItem(currentId, JSON.stringify(currentSchedule))
})


loadTasks()
