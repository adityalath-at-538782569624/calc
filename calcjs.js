/**
 * 
 * @param {number} a operand1
 * @param {number} b operand2
 * @returns {number} after performing arithmatic operation 
 */
function calculate(a,b)
{
	//Performing the selected arithmatic operation
	if(document.getElementById("arithm").value == "+")
		return parseInt(a)+parseInt(b);
	else if(document.getElementById("arithm").value == "-")
		return a-b;
	else if(document.getElementById("arithm").value == "*")
		return a*b;
	else if(document.getElementById("arithm").value == "/")
		return a/b;
}