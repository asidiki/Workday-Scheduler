//moment day and time
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
//round to the nearest hour
currentTime = currentTime.startOf("hour");

//start day at 9
var startOfDay = moment().startOf('day').add(9, "hours");

//first hour
var time1 = startOfDay.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

//second hour
var time2 = startOfDay.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

//third hour
var time3 = startOfDay.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

//fourth hour
var time4 = startOfDay.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

//fifth hour
var time5 = startOfDay.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

//sixth hour
var time6 = startOfDay.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);

//seventh hour
var time7 = startOfDay.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);

//eighth hour
var time8 = startOfDay.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);

//ninth hour
var time9 = startOfDay.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);

var storageArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

//LOGIC FOR COLOR CODING
function whatsTheTime () {
    //9am
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    
    } else {
        $(".form9").addClass("present");
    };

    //10am
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form10").addClass("future");
    
    } else {
        $(".form10").addClass("present");
    };

    //11am
    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form11").addClass("future");
    
    } else {
        $(".form11").addClass("present");
    };

    //12pm
    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form12").addClass("future");
    
    } else {
        $(".form12").addClass("present");
    };

    //1pm
    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form1").addClass("future");
    
    } else {
        $(".form1").addClass("present");
    };

    //2pm
    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form2").addClass("future");
    
    } else {
        $(".form2").addClass("present");
    };

    //3pm
    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form3").addClass("future");
    
    } else {
        $(".form3").addClass("present");
    };

    //4pm
    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form4").addClass("future");
    
    } else {
        $(".form4").addClass("present");
    };

    //5pm
    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past");

    } else if (currentTime.isBefore(time1)) {
        $(".form5").addClass("future");
    
    } else {
        $(".form5").addClass("present");
    };

}

//for loop for localStorage
for (var i = 0; i < storageArray.length; i++) {
    var hour = localStorage.getItem(storageArray[i]);
    $(".form" + storageArray[i]).val(hour);
}

//event listener
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);

})



whatsTheTime();


