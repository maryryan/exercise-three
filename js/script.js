$(document).ready(function() {
    
    getData();

});


function getData() {

    $.getJSON("js/columbia.json", function(schoolsData) {
        //Callback is a fnc that runs after something else executes
        //$.getJSON is an AJAX fnc

        console.log(schoolsData);

        loopThroughData(schoolsData);

    });

}

//displaying all school names in file to console
function loopThroughData(s) {

    for (i = 0; i < s.length; i++) {

        var schoolName = s[i]["SCHOOL_NAME"];
        var year = s[i]["YEAR"];
        var gradPct = s[i]["GRADUATES_PCT"];
        // if (gradPct < 60 && gradPct != 0){
        //     //the not zero condition weeds out the juvenile center and non-graduating schools like elementary and middle school
        //     console.log(year, schoolName, gradPct);
        // }

        var barWidth = gradPct * 5;

        if (schoolName === "FREDERICK DOUGLASS HIGH") {
            //same in value and type
            $(".chart").append(
                "<div class='bar' style='width: "+barWidth+"px'></div>"
            ); //adding the bar shit to anywhere that has a chart class

        }

    }

}

