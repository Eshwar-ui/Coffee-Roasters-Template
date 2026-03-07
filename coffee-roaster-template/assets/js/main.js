/**
 * Coffee Roaster Template
 * Main JS initialization and shared functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Initialize AOS Animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-in-out'
        });
    }

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 4. Dark Mode setup
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeMobileToggle = document.getElementById('dark-mode-mobile-toggle');

    const enableDarkMode = () => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i data-lucide="sun"></i>';
        if (darkModeMobileToggle) darkModeMobileToggle.innerHTML = '<i data-lucide="sun" class="mr-2"></i> Light Mode';
        lucide.createIcons();
    };

    const disableDarkMode = () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i data-lucide="moon"></i>';
        if (darkModeMobileToggle) darkModeMobileToggle.innerHTML = '<i data-lucide="moon" class="mr-2"></i> Dark Mode';
        lucide.createIcons();
    };

    // System preference fallback
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = localStorage.getItem('theme');

    if (localTheme === 'dark' || (!localTheme && systemDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };

    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleTheme);
    if (darkModeMobileToggle) darkModeMobileToggle.addEventListener('click', toggleTheme);

    // 5. RTL Setup
    const rtlToggle = document.getElementById('rtl-toggle');
    const rtlMobileToggle = document.getElementById('rtl-mobile-toggle');
    
    const setRTL = (isRTL) => {
        if (isRTL) {
            document.documentElement.setAttribute('dir', 'rtl');
            localStorage.setItem('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            localStorage.setItem('dir', 'ltr');
        }
    };

    if (localStorage.getItem('dir') === 'rtl') {
        setRTL(true);
    }

    const toggleRTL = () => {
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        setRTL(!isRTL);
    };

    if (rtlToggle) rtlToggle.addEventListener('click', toggleRTL);
    if (rtlMobileToggle) rtlMobileToggle.addEventListener('click', toggleRTL);

    // 6. Navbar Dropdowns Setup
    const dropdowns = document.querySelectorAll('.group');
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        const trigger = dropdown.querySelector('button, a');
        
        if(menu && trigger) {
             // For mobile specifically, allow click to toggle
             trigger.addEventListener('click', (e) => {
                 if (window.innerWidth < 1024 && e.target.tagName !== 'A') {
                     e.preventDefault();
                     menu.classList.toggle('hidden');
                 }
             });
        }
    });
});
