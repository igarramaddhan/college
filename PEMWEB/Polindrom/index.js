function check() {
	var value1 = document.getElementById('input1').value;
	var isPalindrome = value1 == value1.split('').reverse().join('');
	var message = isPalindrome ? "Kata tersebut palindrome" : "Kata tersebut bukan palindrome";
	document.getElementById('output').innerHTML = message;
}