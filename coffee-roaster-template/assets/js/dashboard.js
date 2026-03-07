/**
 * Dashboard & Admin UI Interaction
 * Handles sidebar toggles, chart initialization placeholders, user dashboard actions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Admin Sidebar Toggle
    const adminMenuToggle = document.getElementById('admin-menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (adminMenuToggle && sidebar) {
        adminMenuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
            sidebar.classList.toggle('absolute');
            sidebar.classList.toggle('z-50');
            sidebar.classList.toggle('h-full');
        });
    }

    // Chart.js placeholder initialization logic
    const ctx = document.getElementById('revenueChart');
    if(ctx && typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 19000, 15000, 22000, 18000, 24000],
                    borderColor: '#6F4E37',
                    tension: 0.4
                }]
            }
        });
    }
    // User Dashboard Tab Logic
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        if (!tabId) return;
        
        // Update Links
        tabLinks.forEach(link => {
            if (link.dataset.tab === tabId) {
                link.classList.add('bg-primary/10', 'text-primary');
                link.classList.remove('text-gray-600', 'dark:text-gray-400');
            } else {
                link.classList.remove('bg-primary/10', 'text-primary');
                link.classList.add('text-gray-600', 'dark:text-gray-400');
            }
        });

        // Update Content
        tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const tabId = link.dataset.tab;
            switchTab(tabId);
        });
    });

    // Check URL for specific tab or hash
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    const hash = window.location.hash.replace('#', '');
    
    if (tabParam) switchTab(tabParam);
    else if (hash) switchTab(hash);
});
