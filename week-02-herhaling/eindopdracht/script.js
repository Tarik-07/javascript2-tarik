let result = document.getElementById('result');

// Stap 1: Schrijf calculateTotal(bedrag, korting)
function calculateTotal(amount, discount) {
  return amount - (amount * discount / 100);
}

// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
document.getElementById('discount-form').addEventListener('submit', (event) => {
event.preventDefault();

   const amount = document.getElementById('amount').value;
   const discount = document.getElementById('discount').value;

// Stap 3: Toon een foutmelding als het bedrag of de korting leeg is
if (amount === '' || discount === '') {
   result.textContent = 'Vul zowel het bedrag als de korting in.';
   return;
   }

   const amountNumber = parseFloat(amount);
   const discountNumber = parseFloat(discount);

   result.textContent = calculateTotal(amountNumber, discountNumber).toFixed(2);
});