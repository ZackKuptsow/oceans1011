parent.postMessage(window.location.toString(), "*");
var originalAlert = window.alert;
window.alert = function(s) {
	parent.postMessage("success", "*");
	setTimeout(function() {
		originalAlert("0c34n{h3r3s_3n_m1L_ull_n33d_17_4_th3_n3x7_1}");
	}, 50);
};

const chipIds = [
	"whiteChips",
	"redChips",
	"greenChips",
	"blueChips",
	"blackChips"
];

const chipValues = {
	whiteChips: 5,
	redChips: 10,
	greenChips: 20,
	blueChips: 50,
	blackChips: 100
};

$("input").change(function() {
	let sum = 0;
	chipIds.forEach(function(chip) {
		sum += $(`#${chip}`).val() * chipValues[chip];
	});
	$("#total")[0].innerHTML = sum;
});
