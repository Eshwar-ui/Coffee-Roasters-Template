/**
 * Shop JS
 * Product filtering, sorting, grid/list view toggle, quantity updates.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Quantity increment/decrement
    const quantityContainers = document.querySelectorAll('.quantity-selector');
    quantityContainers.forEach(container => {
        const minus = container.querySelector('.btn-minus');
        const plus = container.querySelector('.btn-plus');
        const input = container.querySelector('input');

        if(minus && plus && input) {
            minus.addEventListener('click', () => {
                let val = parseInt(input.value);
                if(val > 1) input.value = val - 1;
            });
            plus.addEventListener('click', () => {
                let val = parseInt(input.value);
                input.value = val + 1;
            });
        }
    });
    // Product Filtering Mock Logic
    const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const productCards = document.querySelectorAll('.product-card');

    function applyFilters() {
        const activeFilters = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.nextElementSibling.textContent.trim().toLowerCase());

        productCards.forEach(card => {
            if (activeFilters.length === 0) {
                card.classList.remove('hidden');
                return;
            }

            const cardText = card.textContent.toLowerCase();
            const matches = activeFilters.some(filter => {
                // Remove the count like "(8)" from filter text for better matching
                const cleanFilter = filter.split(' (')[0];
                return cardText.includes(cleanFilter);
            });

            if (matches) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    filterCheckboxes.forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });

    // Clear All Filters
    const clearBtn = document.querySelector('button.text-primary.hover\\:underline');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            filterCheckboxes.forEach(cb => cb.checked = false);
            applyFilters();
        });
    }
});
