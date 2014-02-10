/*jslint browser: true*/
/*global $, jQuery*/



$(document).ready(function () {
    
    function FullQuestion(question, answerArray, explanation) {
        this.question = question;
        this.answerArray = answerArray;
        this.explanation = explanation;
    }
     
    var q1 = new FullQuestion();
    this.question = "What is a bourbon?";
    this.answerArray = ["a. blah", "b. blah", "c. blah", "d. blah"];
    this.explanation = "A bourbon is a.........";
     
    var start = function() {
        //alert(q1.question);
        
        $(".question").html(q1.question);
        $(".answers").html(q1.answerArray);
        $(".explanation").html(q1.explanation);
    }
    
    $("#new").click(start);
    
    
});