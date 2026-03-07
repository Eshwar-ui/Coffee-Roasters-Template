/**
 * Subscription Plan JS
 * Handles form wizards, frequency toggles, slider inputs.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Frequency Toggle logic
    const frequencyRadios = document.querySelectorAll('input[name="frequency"]');
    const priceDisplay = document.getElementById('plan-price');
    const basePrice = 36.00;

    frequencyRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if(priceDisplay) {
                // If every 2 weeks, price per week is the same, but monthly spend changes
                // Simple placeholder logic
                const freq = e.target.value;
                if(freq === '2weeks') {
                    priceDisplay.textContent = `$${(basePrice * 2).toFixed(2)}/mo`;
                } else {
                    priceDisplay.textContent = `$${basePrice.toFixed(2)}/mo`;
                }
            }
        });
    });
});
