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