$( "#login-form" ).submit(function(e) {
	e.preventDefault();

	var formData = $(this).serialize();
	$.post("", formData, function() {
		alert("success");
	})
	.fail(function() {
		alert("error");
	})
});