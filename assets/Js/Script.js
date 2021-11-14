$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')); 

    $(".b9").on("click", function() {
        var dayPlans = $(".d9").val();
        localStorage.setItem("9am", dayPlans);
    });
    $(".d9").val(localStorage.getItem("9am")); 
    
    // 10am iput save
    $(".b10").on("click", function() {
        var dayPlans = $(".d10").val();
        localStorage.setItem("10am", dayPlans);
    });
    $(".d10").val(localStorage.getItem("10am")); 
    
    // 11am input save 
    $(".b11").on("click", function() {
        var dayPlans = $(".d11").val();
        localStorage.setItem("11am", dayPlans);
    });
    $(".d11").val(localStorage.getItem("11am"));
    
    // 12pm input save 
    $(".b12").on("click", function() {
        var dayPlans = $(".d12").val();
        localStorage.setItem("12pm", dayPlans);
    });
    $(".d12").val(localStorage.getItem("12pm"));
    
    // 1pm input save 
    $(".b1").on("click", function() {
        var dayPlans = $(".d1").val();
        localStorage.setItem("1pm", dayPlans);
    });
    $(".d1").val(localStorage.getItem("1pm"));
    
    // 2pm input save
    $(".b2").on("click", function() {
        var dayPlans = $(".d2").val();
        localStorage.setItem("2pm", dayPlans);
    });
    $(".d2").val(localStorage.getItem("2pm"));
    
    // 3pm input save
    $(".b3").on("click", function() {
        var dayPlans = $(".d3").val();
        localStorage.setItem("3pm", dayPlans);
    });
    $(".d3").val(localStorage.getItem("3pm"));
    
    // 4pm input save 
    $(".b4").on("click", function() {
        var dayPlans = $(".d4").val();
        localStorage.setItem("4pm", dayPlans);
    });
    $(".d4").val(localStorage.getItem("4pm"));
    
    // 5pm input save
    $(".b5").on("click", function() {
        var dayPlans = $(".d5").val();
        localStorage.setItem("5pm", dayPlans);
    });
    $(".d5").val(localStorage.getItem("5pm"));
    


})


function timeColor() {
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var timeNow = parseInt($(this).attr("id").split("hour")[1]);
        console.log(timeNow, currentTime) 

        if (timeNow < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeNow === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })
}

timeColor();







