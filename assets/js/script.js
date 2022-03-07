var currentItem = {}
// function loadTasks() {
//    calendarList.each(function() {
// //        for (var i=9;i<=17; i++) {
// //     var currentID = JSON.parse(localStorage.getItem(i))
// //     // console.log(currentID)
// //     console.log($(this).attr("id"))
// //        if (($(this).attr("id"))=== i ) {
// //        $(this).text(currentID)
// //    }}
// console.log(this)
// })}

var calendarList = $(".calendarList")

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

// $(".calendarList").on("change","<textarea>", function() {
// $(this).text()
// })
loadTasks()
