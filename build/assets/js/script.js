
/* wrap everything in an anonymous function to contain the variables */
;(function($){


function getCreditCardType(accountNumber)
	{
		var type;
		
		//Amex
		if (accountNumber.substring(0,2) == 34 || accountNumber.substring(0,2) == 37) {
			type = "amex";
		}
			else
				
		//Visa
		if (accountNumber.substring(0,1) == 4) {
			type = "visa";
		}
		
			else
				
		//Mastercard
		if (accountNumber.substring(0,2) >=50 && accountNumber.substring(0,2) <=55) {
			type = "mastercard";
		}
		
			else
				
		//Discover
		if ( accountNumber.substring(0,4) ==6011 || accountNumber.substring(0,2) ==65 || (accountNumber.substring(0,3) >=644 && accountNumber.substring(0,3) <=649) || (accountNumber.substring(0,6) >=622126  && accountNumber.substring(0,6) <=622925 )){
			type = "discover";
		}
			
		return type;
}

function switchCard (selectCard) {
	
	if (selectCard) {

		switch (selectCard) {
				
				case "amex":
				$("#americanexpress-button").prop("checked", true);
				$("#cvv").hide();
				$("#cvv-amex").show();
				break;

				case "visa":
				$("#visa-button").prop("checked", true);
				$("#cvv-amex").hide();
				$("#cvv").show();
				break;

				case "mastercard":
				$("#mastercard-button").prop("checked", true);
				$("#cvv-amex").hide();
				$("#cvv").show();
				break;

				case "discover":
				$("#discover-button").prop("checked", true);
				$("#cvv-amex").hide();
				$("#cvv").show();
				break;
					
		};
	}
}

$ ("#card-number") .on ("keyup blur", function(){
	
	var cardNumber = $("#card-number").val();
	var selectCard = getCreditCardType (cardNumber);
	switchCard (selectCard);
	
});

(function () {

	Modernizr.load ([
		{
		test: Modernizr.input.required,
		nope: ['assets/js/lib/jquery.validate.min.js', 'assets/js/jqueryValidation.js']
		}
	]);

})();


}(jQuery));
