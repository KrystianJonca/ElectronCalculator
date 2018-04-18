let display = document.getElementById("display");

function show(val) {
	display.innerText = val;
}
function math(val) {
	if (display.innerText == "Error" || display.innerText == "NaN") {
		show("");
	} 
	if (display.innerText.length < 10) display.innerText += val;
}
function equals() {
	display.innerText = display.innerText.replace("x", "*");
	display.innerText = display.innerText.replace("÷", "/");
	try {
		show(eval(display.innerText))
	}
	catch (e) {
		show('Error')
	}
}
