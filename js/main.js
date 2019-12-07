$(document).ready(function() {
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(function() {
            var btn = $("#feedback-form #submit-button");
            btn.click(function(){
                grecaptcha.execute('6LdohcYUAAAAABaPYg8Tl3-JEIh38zSSYGM0haOs', {action: 'feedback_form'}).then(function(token) {
                    $("#feedback-form #captcha-token").val(token);
                    $("#feedback-form").submit();
                });
            });
        });
    }
});
