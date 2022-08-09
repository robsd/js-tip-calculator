bill = document.getElementById('bill');
percentage = document.getElementById('percentage');
people = document.getElementById('people');
each = document.getElementById('each');
tip = document.getElementById('tip');
total = document.getElementById('total');

function calculate() {
	amount = bill.value * percentage.value / 100;
	
	tip.value = amount;
	each.value = amount / people.value;
	total.value = parseFloat(amount) + parseFloat(bill.value);
}