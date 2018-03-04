// function plus() {
// 	var value1 = document.getElementById('input1').value;
// 	var value2 = document.getElementById('input2').value;
// 	var value3 = parseInt(value1) + parseInt(value2);
// 	document.getElementById('output').innerHTML = value3;
// }
// function minus() {
// 	var value1 = document.getElementById('input1').value;
// 	var value2 = document.getElementById('input2').value;
// 	var value3 = parseInt(value1) - parseInt(value2);
// 	document.getElementById('output').innerHTML = value3;
// }
function number(num) {
	document.getElementById('input1').value += num;
}
function calculate() {
	var value1 = document.getElementById('input1').value;
	document.getElementById('output').innerHTML = eval(value1);
}