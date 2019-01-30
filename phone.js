
$(document).ready(function() { // do this when the document is loaded
	$("#tab-1").show(); // show the element with ID "element"
	$("#tab-2").hide(); // hide the element with ID "otherElement"
	$("#tab-3").hide(); // hide the element with ID "otherElement"

$("#button-1").click(function() { // when "button_id" is clicked
	$("#tab-1").show(); // show element
	$("#tab-2").hide();	// hide other element
	$("#tab-3").hide();	// hide other element
	//document.getElementById("button-1").style.color = "blue";
});


	$("#button-2").click(function() { // when "button_id" is clicked
	$("#tab-2").show(); // show element
	$("#tab-1").hide();	// hide other element
	$("#tab-3").hide();	// hide other element
});


	$("#button-3").click(function() { // when "button_id" is clicked
	$("#tab-3").show(); // show element
	$("#tab-1").hide();	// hide other element
	$("#tab-2").hide();	// hide other element
});



});




function changeColor(evt) {
  var i, tabcontent, tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}









