

$(document).ready(function() {



$('ul.tabs li a').click(function (){ //when you click on an link run the function
	var tab_id = $(this).attr('data-tab'); //add the data-tab attribute of the link that was clicked to a var

	$('ul.tabs li a').removeClass('active'); 
	$('.content-box').removeClass('active');

	$(this).addClass('active'); //to the link clicked add the active class for styling the tab
	$('[data-content=' + tab_id + ']').addClass('active'); //[data-content=data-tab] match the corresponding data numbers and add class to display corresponding content
	// $('[data-content=' + $(this).data('tab') + ']').addClass('active');
})


   	
})



