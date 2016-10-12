var toggle = 0 ;

var main = function(){

	$('input[type="button"]').click(function(event) {
		/* Act on the event */
		if (!$(this).hasClass('active')) {
			$('input[type="button"], .active').removeClass('active');
			$(this).toggleClass('active');;
			toggle = (toggle+1)%2;
			changeBodyText();
		}
	});
	$('#data').on('input',function(e){
		changeBodyText();
    });
}

function changeBodyText(){
		var val = 0;
		if (!toggle) {
			val = "You have a potential to generate "
			data = $("#data").val()/8.5;
			val += +data.toFixed(2);
			val += " kWh Energy!"
		}else{
			val = "You must have rooftop area equal to "
			data = $("#data").val() * 8.5;
			val += +data.toFixed(2);
			val += " m&#178; for generating this much power!";
		}
		$('.output').html(val);
}
$(document).ready(main);
