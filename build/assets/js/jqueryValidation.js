(function($) {

    var validateOptions = {},
        validateMessages = {};

    // Define vadiation elements
    validateOptions = {
        portfolio_title: "required",
        portfolio_address: "required",
        name: "required",
        email: {
            required: true,
            email: true
        },

        password: {
            required: true
            // minlength: 5
        },

        card_number: {
            required: true,
            digits: true,
            minlength: 13,
            maxlength: 16
        },

        security_code: {
            required: true,
            minlength: 3,
            maxlength: 4,
            digits: true
        },

        expiration_month: {
            min: 1
        },

        expiration_year: {
            min: 1
        }
    };


    // Specify validation error messages
    validateMessages = {
        portfolio_title: "Please enter a portfolio title",
        portfolio_address: "Please enter a portfolio address",
        name: "Please enter your name",
        
        email: "Please enter a valid email address",
        
        password: {
            required: "Please provide a password"
        },

        card_number: "Please enter a valid credit card number",

        security_code: "Please enter the 3 or 4 digits security code on your credit card",

        expiration_month: "Please select your credit card's expiration month",

        expiration_year: "Please select your credit card's expiration year"
    };

    $(document).ready( function () {
        $(".whoo-form").validate({rules: validateOptions, messages: validateMessages, highlight:errorAria});
    });


    function errorAria (element, errorClass) {

            $(".error").attr("aria-atomic", true).attr("aria-live", "polite");

        }

    
})(jQuery);

