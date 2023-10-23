document.getElementById('calculateButton').addEventListener('click', function() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for both subtotal and tip percentage.");
    } else {
        const tipAmount = (subtotal * tipPercentage) / 100;
        const totalAmount = subtotal + tipAmount;
        document.getElementById('totalAmount').textContent = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
    }
});
