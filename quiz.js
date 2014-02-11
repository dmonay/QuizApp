/*jslint browser: true*/
/*global $, jQuery*/

var counter = 0;

   
$(document).ready(function () {
  
    

    //convert array of answers into list elements:
/*    var cList = function (x) { $('ol.answers').each(answerArray[x], function (i) {
        var li = $('<li/>')
            .addClass('ind_answer')
            .text(answerArray[x][i])
            .appendTo(cList(x));   
    }); }; 
*/
    
    var cList = $('ol.answers')
$.each(answerArray[0], function(i)
{
    var li = $('<li/>')
        .addClass('ind_answers')
        .text(answerArray[0][i])
        .appendTo(cList);

});
    
    
    var start = function () {
        $(".question").html(questionArray[0]);
        // cList(0);
        cList();
        $(".explanation").html(explanationArray[0]);
    };
    
    var initiate = function () {
        $("#first_button").remove();
        $("#main_area").removeClass();
        $("#main_area").addClass("visible");
        
        $('body').animate({
            backgroundColor: '#020202',           
        }, 5000, 'linear');
        
        $('#content').animate({
            backgroundColor: '#e6e5e6',
            color: '#626060'
        }, 5000, 'linear');
        
        start();
    };
    
    var nextQuestion = function() {
        counter++;
        $("h4 ul h3").empty();
        
        $(".question").html(questionArray[counter]);
        cList(counter);
        $(".explanation").html(explanationArray[counter]);
    };
    
    var test = function() {alert(answerArray[0][0]);};
    
    //clicking the "New Quiz" button:
    $("#new").click(initiate);
    //clicking "Next" button:
    $("#next").click(nextQuestion);
    
    
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
    
});