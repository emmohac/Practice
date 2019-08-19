var result = $("#result");
var loading = $("#loading");

$("#loan-form").on("submit", e => {
	e.preventDefault();
	const amount = $("#amount").val();
	const interest = $("#interest").val();
	const year = $("#years").val();

	if (amount == "" || interest == "" || year == "") {
		$(
			`<div class='alert alert-danger'>Please enter valid numbers</div>`
		).insertBefore(".heading");
		setTimeout(() => {
			$(".alert").remove();
		}, 2000);
	} else {
		loading.css("display", "block");
		setTimeout(() => {
			let principal = parseFloat(amount);
			let calculatedInterest = parseFloat(interest) / 100 / 12;
			let calculatedPayment = parseInt(year) * 12;

			let answer = Math.pow(1 + calculatedInterest, calculatedPayment);
			let monthly =
				(principal * answer * calculatedInterest) / (answer - 1);
			if (isFinite(monthly)) {
				let totalPayment = parseFloat(monthly * calculatedPayment);
				$("#monthly-payment").val(monthly.toFixed(2));
				$("#total-payment").val(totalPayment.toFixed(2));
				$("#total-interest").val((totalPayment - principal).toFixed(2));

				loading.css("display", "none");
				result.css("display", "block");
			}
		}, 1000);
	}
});
