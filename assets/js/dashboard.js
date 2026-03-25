/**
 * Dashboard Shell
 * - Mobile sidebar open/close
 * - Single-page tab routing via ?tab=...
 * - Lazy Chart.js init (admin dashboard)
 */

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('admin-menu-toggle');
    const closeSidebar = document.getElementById('close-sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }

    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
        });
    }

    const pageTitle = document.getElementById('dashboard-page-title');
    const panels = Array.from(document.querySelectorAll('[data-dashboard-panel]'));
    const links = Array.from(document.querySelectorAll('[data-dashboard-link]'));

    if (panels.length === 0 || links.length === 0) return;

    const normalizeTab = (tab) => (tab || 'dashboard').toLowerCase().trim();

    const getTabFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        return normalizeTab(params.get('tab')) || 'dashboard';
    };

    const setLinkState = (link, isActive) => {
        const active = link.getAttribute('data-class-active');
        const inactive = link.getAttribute('data-class-inactive');
        if (active && inactive) link.className = isActive ? active : inactive;
        if (isActive) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    };

    const maybeInitAdminChart = () => {
        const canvas = document.getElementById('revenueChart');
        if (!canvas) return;
        if (canvas.dataset.chartInit === '1') return;
        if (typeof Chart === 'undefined') return;

        canvas.dataset.chartInit = '1';
        // eslint-disable-next-line no-new
        new Chart(canvas, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 19000, 15000, 22000, 18000, 24000],
                    borderColor: '#6F4E37',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    };

    const applyTab = (tab, { pushState = false } = {}) => {
        const nextTab = normalizeTab(tab);
        const knownTabs = new Set(panels.map(p => normalizeTab(p.getAttribute('data-dashboard-panel'))));
        const safeTab = knownTabs.has(nextTab) ? nextTab : 'dashboard';

        panels.forEach(panel => {
            const panelTab = normalizeTab(panel.getAttribute('data-dashboard-panel'));
            panel.classList.toggle('hidden', panelTab !== safeTab);
        });

        links.forEach(link => {
            setLinkState(link, normalizeTab(link.getAttribute('data-tab')) === safeTab);
        });

        if (pageTitle) {
            const activeLink = links.find(l => normalizeTab(l.getAttribute('data-tab')) === safeTab);
            const title = activeLink?.getAttribute('data-title');
            if (title) pageTitle.textContent = title;
        }

        if (pushState) {
            const url = new URL(window.location.href);
            url.searchParams.set('tab', safeTab);
            window.history.pushState({ tab: safeTab }, '', url.toString());
        }

        if (safeTab === 'dashboard') maybeInitAdminChart();
    };

    // Intercept sidebar link clicks (avoid reload, keep deep links working)
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const tab = link.getAttribute('data-tab');
            if (!tab) return;
            e.preventDefault();
            applyTab(tab, { pushState: true });
        });
    });

    window.addEventListener('popstate', () => applyTab(getTabFromUrl()));

    applyTab(getTabFromUrl());
});

