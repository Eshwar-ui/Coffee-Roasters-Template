/**
 * ESPRESSO ELITE - MAIN JAVASCRIPT
 * Handles global interactions like themes, navigation, and validation.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * 1. ICON INITIALIZATION
     * Renders all elements with data-lucide attribute as SVG icons.
     */
    const initIcons = () => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };
    initIcons();

    /**
     * 2. SCROLL ANIMATIONS (AOS)
     * Initializes the "Animate On Scroll" library for reveal effects.
     */
    const initAOS = () => {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 50,
                easing: 'ease-in-out'
            });
        }
    };
    initAOS();

    /**
     * 3. MOBILE NAVIGATION (DRAWER)
     * Handles the sliding drawer menu and background overlay.
     */
    const initMobileMenu = () => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenuClose = document.getElementById('mobile-menu-close');

        // Many pages (auth, dashboards) don't include the global drawer markup.
        // Avoid throwing so theme/RTL logic can still initialize.
        if (!mobileMenu) return;

        const toggleMenu = (isOpen) => {
            if (isOpen) {
                // Open drawer
                if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('hidden');
                // Force a reflow to ensure the transition works
                if (mobileMenuOverlay) mobileMenuOverlay.offsetHeight;
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
                document.body.classList.add('overflow-hidden');
            } else {
                // Close drawer
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                if (mobileMenuOverlay) mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
                document.body.classList.remove('overflow-hidden');
                
                // Hide overlay after transition
                setTimeout(() => {
                    if (!mobileMenu.classList.contains('translate-x-0')) {
                        if (mobileMenuOverlay) mobileMenuOverlay.classList.add('hidden');
                    }
                }, 300);
            }
        };

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
        }

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => toggleMenu(false));
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', () => toggleMenu(false));
        }

        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
    };
    initMobileMenu();

    /**
     * 3.5 ACTIVE NAVIGATION STATE
     * Highlights the current primary navigation item based on the page URL.
     */
    const initActiveNav = () => {
        const currentPath = window.location.pathname.replace(/\\/g, '/');
        const fileName = currentPath.split('/').pop() || 'index.html';
        const keyByFile = {
            'index.html': 'home',
            'index-2.html': 'home',
            'shop.html': 'shop',
            'product-single.html': 'shop',
            'cart.html': 'shop',
            'checkout.html': 'shop',
            'subscriptions.html': 'shop',
            'subscription-plans.html': 'shop',
            'categories.html': 'categories',
            'deals.html': 'deals',
            'blog.html': 'blog',
            'blog-single.html': 'blog',
            'dashboard-user.html': 'account',
            'dashboard-admin.html': 'account',
            'services.html': 'home'
        };
        const activeKey = keyByFile[fileName];
        if (!activeKey) return;

        const activeClasses = ['text-primary', 'dark:text-accent', 'font-bold', 'bg-primary/10', 'dark:bg-accent/20', 'rounded-full', 'px-3', 'py-1.5', 'shadow-sm'];
        const navLinks = document.querySelectorAll('[data-nav-key]');

        navLinks.forEach((link) => {
            const isDesktop = link.closest('.lg\\:flex');
            link.classList.remove(...activeClasses);
            link.removeAttribute('aria-current');

            if (link.dataset.navKey === activeKey) {
                link.classList.remove('text-sm');
                if (isDesktop) link.classList.remove('py-8');
                link.classList.add(...activeClasses);
                if (link.matches('a')) {
                    link.setAttribute('aria-current', 'page');
                }
            } else {
                link.classList.add('text-sm');
                if (isDesktop) link.classList.add('py-8');
            }
        });
    };
    initActiveNav();

    /**
     * 4. THEME MANAGEMENT (DARK/LIGHT MODE)
     * Logic for toggling, applying, and persisting the color theme.
     */
    const darkModeToggle = document.getElementById('dark-mode-toggle') || document.getElementById('dark-mode-toggle-mobile-auth');
    const darkModeMobileToggle = document.getElementById('dark-mode-mobile-toggle');

    /**
     * Applies dark theme classes and updates local storage.
     */
    const enableDarkMode = () => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        // If the page already provides a dual-icon button (sun/moon with dark:hidden),
        // keep its markup and just toggle the global theme class.
        if (darkModeToggle && !darkModeToggle.querySelector('.dark\\:hidden') && !darkModeToggle.querySelector('.dark\\:block')) {
            darkModeToggle.innerHTML = '<i data-lucide="sun"></i>';
            initIcons();
        }
        if (darkModeMobileToggle) darkModeMobileToggle.innerHTML = '<i data-lucide="sun" class="mr-2"></i> Light Mode';
        initIcons();
    };

    /**
     * Removes dark theme classes and updates local storage.
     */
    const disableDarkMode = () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (darkModeToggle && !darkModeToggle.querySelector('.dark\\:hidden') && !darkModeToggle.querySelector('.dark\\:block')) {
            darkModeToggle.innerHTML = '<i data-lucide="moon"></i>';
            initIcons();
        }
        if (darkModeMobileToggle) darkModeMobileToggle.innerHTML = '<i data-lucide="moon" class="mr-2"></i> Dark Mode';
        initIcons();
    };

    /**
     * Toggles between dark and light themes.
     */
    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };

    // Initialize theme based on preference or system settings
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = localStorage.getItem('theme');

    if (localTheme === 'dark' || (!localTheme && systemDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    if (darkModeToggle) darkModeToggle.addEventListener('click', toggleTheme);
    if (darkModeMobileToggle) darkModeMobileToggle.addEventListener('click', toggleTheme);

    /**
     * 5. RTL (RIGHT-TO-LEFT) SUPPORT
     * Switches document direction for multilingual support.
     */
    const rtlToggle = document.getElementById('rtl-toggle') || document.getElementById('rtl-toggle-mobile-auth');
    const rtlMobileToggle = document.getElementById('rtl-mobile-toggle');
    
    /**
     * Sets the document direction and persists it.
     * @param {boolean} isRTL - True for Right-to-Left, False for Left-to-Right.
     */
    const setRTL = (isRTL) => {
        if (isRTL) {
            document.documentElement.setAttribute('dir', 'rtl');
            localStorage.setItem('dir', 'rtl');
            if (rtlToggle) rtlToggle.innerText = 'LTR';
            if (rtlMobileToggle) rtlMobileToggle.innerText = 'LTR';
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            localStorage.setItem('dir', 'ltr');
            if (rtlToggle) rtlToggle.innerText = 'RTL';
            if (rtlMobileToggle) rtlMobileToggle.innerText = 'RTL';
        }
    };

    if (localStorage.getItem('dir') === 'rtl') {
        setRTL(true);
    } else {
        setRTL(false); // Ensure button text is initialized correctly
    }

    const toggleRTL = () => {
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        setRTL(!isRTL);
    };

    if (rtlToggle) rtlToggle.addEventListener('click', toggleRTL);
    if (rtlMobileToggle) rtlMobileToggle.addEventListener('click', toggleRTL);

    /**
     * 6. DROPDOWN INTERACTIONS
     * Handles hover and click behavior for nested menus.
     */
    const dropdowns = document.querySelectorAll('.group');
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        const trigger = dropdown.querySelector('button, a');
        
        if(menu && trigger) {
             trigger.addEventListener('click', (e) => {
                 if (window.innerWidth < 1024 && e.target.tagName !== 'A') {
                     e.preventDefault();
                     menu.classList.toggle('hidden');
                 }
             });
        }
    });

    /**
     * 7. CLIENT-SIDE FORM VALIDATION
     * Ensures required fields are filled before submission.
     */
    const initValidation = () => {
        const contactForm = document.querySelector('form[action*="formspree"]');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                const inputs = contactForm.querySelectorAll('input, textarea, select');
                let isValid = true;

                inputs.forEach(input => {
                    if (input.hasAttribute('required') && !input.value.trim()) {
                        isValid = false;
                        input.classList.add('border-red-500', 'shake');
                        setTimeout(() => input.classList.remove('shake'), 500);
                        
                        let tooltip = input.parentNode.querySelector('.error-tooltip');
                        if (!tooltip) {
                            tooltip = document.createElement('span');
                            tooltip.className = 'error-tooltip text-red-500 text-[10px] font-bold mt-1 block';
                            tooltip.textContent = 'This field is required';
                            input.parentNode.appendChild(tooltip);
                        }
                    } else {
                        input.classList.remove('border-red-500');
                        const tooltip = input.parentNode.querySelector('.error-tooltip');
                        if (tooltip) tooltip.remove();
                    }
                });

                if (!isValid) e.preventDefault();
            });
        }
    };
    initValidation();

    /**
     * 8. SKELETON LOADER SIMULATION
     * Replaces content with skeleton placeholders during initial "load".
     */
    const simulateLoading = () => {
        const skeletonTargets = document.querySelectorAll('.skeleton-load-target');
        if (skeletonTargets.length > 0) {
            skeletonTargets.forEach(target => {
                target.classList.add('hidden');
                const skeleton = document.createElement('div');
                skeleton.className = 'skeleton-placeholder space-y-4';
                skeleton.innerHTML = `
                    <div class="skeleton skeleton-img"></div>
                    <div class="skeleton skeleton-title"></div>
                    <div class="skeleton skeleton-text"></div>
                `;
                target.parentNode.insertBefore(skeleton, target);

                setTimeout(() => {
                    skeleton.remove();
                    target.classList.remove('hidden');
                }, 1500);
            });
        }
    };
    simulateLoading();
});
