/*jslint browser: true*/
/*global $, jQuery*/

var counterForSubmit = -1;
var counterForNext = 0;
var answer = "";

$(document).ready(function () {    

    //convert array of answers into list elements:    
    function cList(x){
        $.each(answerArray[x], function(i){ 
            $('ol.answers').append("<li class='new_item'> <input type='radio' class='box' value='"+i+"' name='question'/>                   <span class='the_real_item'>" + answerArray[x][i] + "</span></li>");
        });
    }
    
    var check = function() {         
        if (correctArray[counterForSubmit] == answer) {$("#verdict").text("Correct!");}
        else {$("#verdict").text("Incorrect");}
    };
    
    var start = function () {
        $(".question").html(questionArray[0]);
        cList(0);
    };
    
    var initiate = function () {
        $("#first_button").remove();
        $("#question_area").removeClass().addClass("visible");
        
        $('body').animate({
            backgroundColor: '#020202',           
        }, 5000, 'linear');
        
        $('#content').animate({
            backgroundColor: '#e6e5e6',
            color: '#626060'
        }, 5000, 'linear');
        
        start();
    };
    
    var finish = function() {
        $("ol").empty();
        $("#question_area").removeClass().addClass("hidden");
        $("#answer_area").removeClass().addClass("visible");         
        $("#next").removeClass().addClass("hidden");        
        $("#new_game").toggleClass("hidden visible");        
        check();
        $(".explanation").html(explanationArray[counterForSubmit]);
        
    };
    
    var evaluate = function() {
        counterForSubmit++;
        if (! $("input").is(':checked')) {
            alert("Select an answer please");
            counter--;
        }
        else if (counterForSubmit == 4) {finish();}
        
        else {
        $("#next").removeClass().addClass("button visible");
        $("ol").empty();
        $("#question_area").removeClass().addClass("hidden");
        $("#answer_area").removeClass().addClass("visible");     
        check();
        $(".explanation").html(explanationArray[counterForSubmit]);
              }
    };

    var nextQuestion = function() {
        counterForNext++;
        $("ol").empty();
        $("#answer_area").removeClass().addClass("hidden");
        $("#question_area").removeClass().addClass("visible");        
        $(".question").html(questionArray[counterForNext]);
        cList(counterForNext);

    };
    
    
    //pulsating button
    
    function fadeButtonIn(){
    $("#next, #first_button, #submit, #new_game").animate({backgroundColor: "#ed3" }, 4000, function(){fadeButtonOut();});
    }

    function fadeButtonOut(){
    $("#next, #first_button, #submit, #new_game").animate({backgroundColor: "#3de" }, 4000, function(){fadeButtonIn();});
    }

    
    fadeButtonIn();
    

    
    var beginAnew = function() {
        counterForSubmit = -1;
        counterForNext = 0;
        answer = "";
        $("#verdict, .explanation").empty();
        $("#new_game").toggleClass("visible hidden");       
        $("#question_area").removeClass().addClass("visible");
        start();
    };
    
    
    
    //EVENT LISTENERS   
    //clicking the "New Quiz" button:
    $("#first_button").click(initiate);
    //clicking "Submit" button:
    $("#submit").click(evaluate);
    //clicking "Next" button:
    $("#next").click(nextQuestion);
    //listen for user's selection of answer and update the global variable "answer"
    $(document).on("click", "input:radio", function() {
        answer = $(this).val();    
    });
    //start a new game:
    $("#new_game").click(beginAnew);

});