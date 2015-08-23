// Toggle mobile menu
jQuery(document).ready(function($){
	var menu = $("nav ul");
	
	$("#mobile-menu").on("click", function(){
		$("nav ul").slideToggle();
	});
	
	// Make nav appear if screen is resized after mobile menu is closed
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 959 && menu.is(":hidden")) {
			menu.removeAttr('style');
		} 
	}); 

});