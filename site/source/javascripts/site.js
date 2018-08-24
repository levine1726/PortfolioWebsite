/**
* Load external libraries
*/

//= require jquery
//= require jquery-validation/dist/jquery.validate.min.js
//= require materialize-css/dist/js/materialize

//sitewide javascript
(function (){
	$(document).ready(function () {
		//Automatically initalize all Materialize JS components
		M.AutoInit();

		//Register event listener for the contact submit and cancel buttons
		$('#submit').click(function(){
			//bind submit button to form
			$('#email-form').submit();
		});

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
		    errorElement: 'div',
		    submitHandler: function (form) {
		    	//Use jQuery Form Plugin to post by ajax, and directly alert the user of 
		    	//their email success
		    	$(form).ajaxSubmit({
		    		success: function () {
		    			//close modal and clear form
		    			$(form).find('input, textarea').val("");
		    			var modal = M.Modal.getInstance(document.getElementById('contact-form'));
		    			modal.close();
		    			alert('Your email was successfully sent');
		    		},
		    		error: function () {
		    			//close modal
		    			alert('Something went wrong. Please try again later or email me directly.');
		    		}
		    	});
		    } 
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
}());

