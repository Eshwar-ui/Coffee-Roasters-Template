/**
 * ESPRESSO ELITE - REUSABLE COMPONENTS
 * Dynamically injects the global navbar (with mobile drawer) and footer.
 * Usage:
 *   Root pages  → renderNavbar('./');  renderFooter('./');
 *   Sub-pages   → renderNavbar('../'); renderFooter('../');
 *
 * Pages that include this file must have:
 *   <div id="global-nav"></div>   (where the header should appear)
 *   <div id="global-footer"></div> (where the footer should appear)
 *
 * Load this script BEFORE lucide, AOS, and main.js so that
 * the DOM elements exist when those libs initialise.
 */

/* ───────────────────────── NAVBAR ───────────────────────── */
window.renderNavbar = function (basePath) {
  const el = document.getElementById('global-nav');
  if (!el) return;

  // Helper – prefix links correctly
  const p = (path) => basePath + path;

  el.innerHTML = `
    <!-- MOBILE MENU DRAWER -->
    <!-- Backdrop Overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] hidden opacity-0 transition-opacity duration-300 lg:hidden" aria-hidden="true"></div>

    <!-- Drawer Content -->
    <div id="mobile-menu" class="fixed top-0 right-0 h-screen w-[300px] bg-white dark:bg-[#161616] z-[110] transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden shadow-2xl flex flex-col overflow-hidden text-gray-900 dark:text-white">
        <!-- Drawer Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161616]">
            <div class="flex items-center gap-2">
                <i data-lucide="coffee" class="text-primary h-6 w-6"></i>
                <span class="font-heading font-bold text-xl tracking-tight">Espresso Elite</span>
            </div>
            <button id="mobile-menu-close" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition" aria-label="Close menu">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>

        <!-- Scrollable Navigation Area -->
        <div class="flex-1 overflow-y-auto p-6 bg-white dark:bg-[#161616]">
            <div class="flex flex-col gap-2 pb-6">
                <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Home</div>
                <a href="${p('index.html')}" class="text-sm font-bold text-primary dark:text-accent pl-2 py-1">Home 1 (Capsules)</a>
                <a href="${p('pages/index-2.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Home 2 (Story)</a>

                <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Shop</div>
                <a href="${p('pages/shop.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Shop Grid</a>
                <a href="${p('pages/product-single.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Product Details</a>

                <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Categories</div>
                <a href="${p('pages/categories.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-1 py-1 flex items-center gap-2"><i data-lucide="layout-grid" class="w-4 h-4"></i> View All</a>
                <a href="${p('pages/shop.html')}?category=capsules" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Coffee Capsules</a>
                <a href="${p('pages/shop.html')}?category=beans" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Whole Beans</a>

                <a href="${p('pages/deals.html')}" class="font-bold text-primary dark:text-accent tracking-wider text-[12px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800 uppercase flex items-center gap-2">Deals <span class="bg-red-500 text-white px-1.5 py-0.5 rounded text-[10px]">Sale</span></a>

                <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Blog</div>
                <a href="${p('pages/blog.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Journal Grid</a>
                <a href="${p('pages/blog-single.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Single Post</a>

                <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Account</div>
                <a href="${p('pages/login.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Login</a>
                <a href="${p('pages/signup.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Create Account</a>
                <a href="${p('pages/dashboard-user.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">User Dashboard</a>
                <a href="${p('pages/dashboard-admin.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Admin Dashboard</a>
                <a href="${p('pages/dashboard-user.html')}?tab=orders" class="text-sm font-medium hover:text-primary dark:hover:text-accent pl-2 py-1">Track Order</a>

                <div class="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button id="dark-mode-mobile-toggle" class="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-colors hover:bg-primary/5">
                        <i data-lucide="moon" class="w-5 h-5"></i>
                        Dark Mode
                    </button>
                    <button id="rtl-mobile-toggle" class="flex flex-col items-center justify-center gap-2 p-4 bg-primary text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-opacity hover:opacity-90 shadow-lg">
                        <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                        RTL / LTR
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer for Drawer -->
        <div class="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-gray-800">
            <p class="text-[10px] text-gray-400 text-center uppercase tracking-widest">&copy; 2026 Espresso Elite</p>
        </div>
    </div>

    <!-- NAVIGATION HEADER -->
    <nav class="fixed w-full z-50 bg-white/90 dark:bg-[#161616]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <!-- Logo -->
                <a href="${p('index.html')}" class="flex items-center gap-2">
                    <i data-lucide="coffee" class="text-primary h-8 w-8"></i>
                    <span class="font-heading font-bold text-2xl tracking-tight">Espresso Elite</span>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex items-center gap-6">

                    <!-- Home -->
                    <div class="relative group">
                        <button class="text-sm font-bold text-primary dark:text-accent transition flex items-center gap-1 py-8">Home <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${p('index.html')}" class="px-4 py-2 text-sm text-primary dark:text-accent font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Home 1 (Capsules)</a>
                            <a href="${p('pages/index-2.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Home 2 (Story)</a>
                        </div>
                    </div>

                    <!-- Shop -->
                    <div class="relative group">
                        <button class="text-sm font-medium hover:text-primary dark:hover:text-accent transition flex items-center gap-1 py-8">Shop <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${p('pages/shop.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Shop Grid</a>
                            <a href="${p('pages/product-single.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Product Details</a>
                            <a href="${p('pages/cart.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Cart</a>
                            <a href="${p('pages/checkout.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Checkout</a>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="relative group">
                        <a href="${p('pages/categories.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent transition flex items-center gap-1 py-8">Categories <i data-lucide="chevron-down" class="w-4 h-4"></i></a>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${p('pages/shop.html')}?category=capsules" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Coffee Capsules</a>
                            <a href="${p('pages/shop.html')}?category=beans" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Whole Beans</a>
                            <a href="${p('pages/shop.html')}?category=equipment" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Brewing Equipment</a>
                        </div>
                    </div>

                    <!-- Deals -->
                    <a href="${p('pages/deals.html')}" class="text-sm font-medium hover:text-primary dark:hover:text-accent transition py-8 flex items-center gap-1">Deals <span class="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Sale</span></a>

                    <!-- Blog -->
                    <div class="relative group">
                        <button class="text-sm font-medium hover:text-primary dark:hover:text-accent transition flex items-center gap-1 py-8">Blog <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${p('pages/blog.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Journal Grid</a>
                            <a href="${p('pages/blog-single.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Single Post</a>
                        </div>
                    </div>

                    <!-- Account -->
                    <div class="relative group">
                        <button class="text-sm font-medium hover:text-primary dark:hover:text-accent transition flex items-center gap-1 py-8">Account <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 right-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${p('pages/login.html')}" class="px-4 py-2 text-sm font-bold text-primary dark:text-accent hover:bg-primary/5 transition-colors">Sign In</a>
                            <a href="${p('pages/signup.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Create Account</a>
                            <div class="border-t border-gray-100 dark:border-gray-800 my-1"></div>
                            <a href="${p('pages/dashboard-user.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">User Dashboard</a>
                            <a href="${p('pages/dashboard-admin.html')}" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Admin Dashboard</a>
                            <div class="border-t border-gray-100 dark:border-gray-800 my-1"></div>
                            <a href="${p('pages/dashboard-user.html')}?tab=orders" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Track Order</a>
                            <a href="${p('pages/dashboard-user.html')}?tab=wishlist" class="px-4 py-2 text-sm hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">My Wishlist</a>
                        </div>
                    </div>

                </div>

                <!-- Action Icons -->
                <div class="flex items-center gap-2">
                    <button id="rtl-toggle" class="hidden lg:block px-3 py-2 bg-primary text-white rounded-lg text-[10px] font-bold transition-all hover:bg-gray-900 dark:hover:bg-primary/80 uppercase tracking-widest shadow-sm hover:shadow-md" title="Toggle RTL" aria-label="Toggle RTL text direction">
                        RTL
                    </button>
                    <button id="dark-mode-toggle" class="hidden lg:block p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition relative" aria-label="Toggle dark mode">
                        <i data-lucide="moon" class="w-5 h-5"></i>
                    </button>
                    <!-- Wishlist Icon -->
                    <a href="${p('pages/dashboard-user.html')}?tab=wishlist" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition relative hidden sm:block" aria-label="Wishlist">
                        <i data-lucide="heart" class="w-5 h-5"></i>
                    </a>
                    <a href="${p('pages/cart.html')}" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition relative block" aria-label="Shopping cart">
                        <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                        <span class="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
                    </a>
                    <button id="mobile-menu-btn" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition lg:hidden" aria-label="Open mobile menu">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  `;

  // Re-render icons inside injected markup
  if (typeof lucide !== 'undefined') lucide.createIcons();
};


/* ───────────────────────── FOOTER ───────────────────────── */
window.renderFooter = function (basePath) {
  const el = document.getElementById('global-footer');
  if (!el) return;

  const p = (path) => basePath + path;

  el.innerHTML = `
    <footer class="bg-white dark:bg-[#161616] pt-24 pb-12 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div class="px-4 sm:px-12 lg:px-24">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Brand Info -->
                <div class="lg:col-span-1">
                    <a href="${p('index.html')}" class="flex items-center gap-2 mb-6">
                        <i data-lucide="coffee" class="text-primary w-8 h-8"></i>
                        <span class="font-heading font-bold text-2xl tracking-tight">Espresso Elite</span>
                    </a>
                    <p class="text-gray-500 text-sm leading-relaxed mb-6">
                        Ethically sourced, precision roasted specialty coffee. Delivering the perfect cup directly to your door.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-bold mb-6 uppercase tracking-wider text-sm text-gray-900 dark:text-white">Shop</h4>
                    <ul class="space-y-4 text-sm text-gray-500">
                        <li><a href="${p('pages/shop.html')}" class="hover:text-primary transition-colors">All Coffee</a></li>
                        <li><a href="${p('pages/categories.html')}" class="hover:text-primary transition-colors">Categories</a></li>
                        <li><a href="${p('pages/deals.html')}" class="hover:text-primary transition-colors">Weekly Deals</a></li>
                        <li><a href="${p('pages/shop.html')}?category=equipment" class="hover:text-primary transition-colors">Brewing Equipment</a></li>
                        <li><a href="${p('pages/subscriptions.html')}" class="hover:text-primary transition-colors">Coffee Club</a></li>
                    </ul>
                </div>

                <!-- Keep Discovering -->
                <div>
                    <h4 class="font-bold mb-6 uppercase tracking-wider text-sm text-gray-900 dark:text-white">Discover</h4>
                    <ul class="space-y-4 text-sm text-gray-500">
                        <li><a href="${p('pages/about.html')}" class="hover:text-primary transition-colors">Our Story</a></li>
                        <li><a href="${p('pages/blog.html')}" class="hover:text-primary transition-colors">The Roaster's Journal</a></li>
                        <li><a href="${p('pages/contact.html')}" class="hover:text-primary transition-colors">Contact Us</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Wholesale Partners</a></li>
                        <li><a href="${p('pages/dashboard-user.html')}" class="hover:text-primary transition-colors">My Account</a></li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div>
                    <h4 class="font-bold mb-6 uppercase tracking-wider text-sm text-gray-900 dark:text-white">Stay Awake</h4>
                    <p class="text-sm text-gray-500 mx-0 mb-4">Subscribe for early access to limited micro-lots and brew guides.</p>
                    <form class="flex gap-2 relative">
                        <input type="email" placeholder="Email address" class="w-full bg-[#F5F3EF] dark:bg-[#2A2A2A] border border-gray-300 dark:border-gray-700 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-colors">
                        <button type="button" class="absolute right-2 top-1.5 bottom-1.5 px-3 bg-primary text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
                            <i data-lucide="arrow-right" class="w-4 h-4 rtl:rotate-180"></i>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom Note -->
            <div class="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <p>&copy; 2026 Espresso Elite. All rights reserved.</p>
                <div class="flex gap-4">
                    <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-primary transition-colors">Refund Policy</a>
                </div>
            </div>
        </div>
    </footer>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
};
