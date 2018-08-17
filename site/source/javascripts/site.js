// This is where it all goes :)
//= require jquery
//= require jquery-validation/dist/jquery.validate.min.js
//= require materialize-css/dist/js/materialize


(function (){
	$(document).ready(function () {
		//Automatically initalize all Materialize JS components
		M.AutoInit();

		//Register event listener for the contact submit and cancel buttons
		$('#submit').click(submit);

		//setup contact form validation using the jQuery Validation plugin
		 $("#email-form").validate({
	        rules: {
	            name: {
	                required: true,
	            },
	            email: {
	                required: true,
	                email:true
	            },
				subject: {
					required: true
					
				},
				message: {
	                required: true
	            }
		     },
		     errorElement : 'div'
		 });

		//Bind event to modal to close open tooltips on a click
		$('.modal').click(function () {
			$(".tooltipped").each(function () {
				var tooltipElt =  M.Tooltip.getInstance(this);
				if (tooltipElt != undefined) {
					tooltipElt.destroy();
				}
			});
		});
	});

	
	/**
	* Event function to register to the submit button of our contact form.
	*/
	function submit(event) {
		$('#email-form').submit();
	}

}());

