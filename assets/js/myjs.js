$(document).ready(function() {
	$('.tabs .tabslink a').click(function() {
		var attrvalue = $(this).attr('href');
		$(attrvalue).show('slow').siblings().hide();
		event.preventDefault();	
		$(this).parent().addClass('active').siblings().removeClass('active');
	});	
});