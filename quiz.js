/*jslint browser: true*/
/*global $, jQuery*/

var counterForSubmit = 0;
var counterForNext = 0;
var answer = "";
$(document).ready(function () {
  
    

    //convert array of answers into list elements:
    
    function cList(x){ 
        $.each(answerArray[x], function(i)
               { $('ol.answers').append("<li class='new_item'> <input type='radio' class='box'/> <span class='the_real_item'>"                  + answerArray[x][i] + "</span></li>");
                });
    }
    
    
    var start = function () {
        $(".question").html(questionArray[0]);
        cList(0);
    };
    
    var initiate = function () {
        $("#first_button").remove();
        $("#question_area").removeClass();
        $("#question_area").addClass("visible");
        
        $('body').animate({
            backgroundColor: '#020202',           
        }, 5000, 'linear');
        
        $('#content').animate({
            backgroundColor: '#e6e5e6',
            color: '#626060'
        }, 5000, 'linear');
        
        start();
    };
    
    var evaluate = function() {
        counterForSubmit++;
        $("ol").empty();
        $("#question_area").removeClass();
        $("#question_area").addClass("hidden");
        $("#answer_area").removeClass();
        $("#answer_area").addClass("visible");
    
        
       
        alert(answer);
        $(".explanation").html(explanationArray[counterForSubmit]);
        
    };

    var nextQuestion = function() {
        counterForNext++;
        $("ol").empty();
        $("#answer_area").removeClass();
        $("#answer_area").addClass("hidden");
        $("#question_area").removeClass();
        $("#question_area").addClass("visible");
        
        $(".question").html(questionArray[counterForNext]);
        cList(counterForNext);

    };
    
    
    //pulsating button
    
    function fadeButtonIn(){
    $("#next").animate({backgroundColor: "#ed3" }, 4000, function(){fadeButtonOut();});
    }

    function fadeButtonOut(){
    $("#next").animate({backgroundColor: "#3de" }, 4000, function(){fadeButtonIn();});
    }

    $(document).ready(function(){
    fadeButtonIn();
    });
    
    
    
    
    
    //EVENT LISTENERS   
    //clicking the "New Quiz" button:
    $("#new").click(initiate);
    //clicking "Submit" button:
    $("#submit").click(evaluate);
    //clicking "Next" button:
    $("#next").click(nextQuestion);
    //listen for user's selection of answer and update the global variable "answer"
    $(document).on("click", "input:radio", function() {
        answer = $(this).val();
    });

});