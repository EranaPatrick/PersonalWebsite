// JavaScript Document

// DEVELOPER'S NOTE:
//  
// As written, this jQuery file is set up to work with exactly 9 sections.  
// So the Menu Item #1 has to connect to section1, Menu Item #2 to section2, 
// Menu Item #3 to section3, and so on.  
//
// ANY changes to this structure requires changes to the jQuery.
// 
// Modification of the jQuery is required if you use more sections than 9
// or fewer sections than 9.  If you use exactly 9 sections, this program 
// is ready to go and no modifications are necessary.  

$(document).ready(function() {
	
$( "#Checkbox1" ).click(function() {
	if($(this).prop("checked") == true){
            $('.section1').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section1').css('display','none');
	}
});


$( "#Checkbox2" ).click(function() {
	
	if($(this).prop("checked") == true){
            $('.section2').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section2').css('display','none');
	}
});

$( "#Checkbox3" ).click(function() {
	
	if($(this).prop("checked") == true){
            $('.section3').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section3').css('display','none');
	}
});

$( "#Checkbox4" ).click(function() {
	if($(this).prop("checked") == true){
            $('.section4').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section4').css('display','none');
	}
});

$( "#Checkbox5" ).click(function() {
	if($(this).prop("checked") == true){
            $('.section5').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section5').css('display','none');
	}

});

$( "#Checkbox6" ).click(function() {
	
	if($(this).prop("checked") == true){
            $('.section6').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section6').css('display','none');
	}
});

$( "#Checkbox7" ).click(function() {
	
	if($(this).prop("checked") == true){
            $('.section7').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section7').css('display','none');
	}
});

$( "#Checkbox8" ).click(function() {
	
	if($(this).prop("checked") == true){
            $('.section8').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section8').css('display','none');
	}

});

$( "#Checkbox9" ).click(function() {
	if($(this).prop("checked") == true){
            $('.section9').css('display','block');
            }
    else if($(this).prop("checked") == false){
                
	       $('.section9').css('display','none');
	}

});
});

