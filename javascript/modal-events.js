/**
 * Function to hide the (animal) modals by either pressing outside of the in
 * focus window or pressing the close button
 * **/
$( document ).ready(function() {
	$('.modal').mousedown(function(e) {
		var clicked = $(e.target); 
		if (clicked.is('.modal-content') || clicked.parents().is('.modal-content')) {
			return;  
		} else {  
			$('.modal').hide();
		}
	}); 
}); 