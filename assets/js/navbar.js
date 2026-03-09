(function() {
    // Determine base paths depending on whether the current page is in the /pages/ directory or root
    const isPagesDir = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
    const basePath = isPagesDir ? '../' : '';

    document.write(`
    <nav class="fixed w-full z-50 bg-white/90 dark:bg-[#161616]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <!-- Logo -->
                <a href="${basePath}index.html" class="flex items-center gap-2">
                    <i data-lucide="coffee" class="text-primary h-8 w-8"></i>
                    <span class="font-heading font-bold text-2xl tracking-tight hidden sm:block">Espresso Elite</span>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex items-center gap-6">
                    
                    <!-- Home -->
                    <div class="relative group">
                        <button class="text-sm font-medium hover:text-primary transition flex items-center gap-1 py-8">Home <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${basePath}index.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Home 1 (Capsules)</a>
                            <a href="${basePath}pages/index-2.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Home 2 (Story)</a>
                        </div>
                    </div>

                    <!-- Shop -->
                    <div class="relative group">
                        <button class="text-sm font-medium hover:text-primary transition flex items-center gap-1 py-8">Shop <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${basePath}pages/shop.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Shop Grid</a>
                            <a href="${basePath}pages/product-single.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Product Details</a>
                            <a href="${basePath}pages/cart.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Cart</a>
                            <a href="${basePath}pages/checkout.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Checkout</a>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="relative group">
                        <a href="${basePath}pages/categories.html" class="text-sm font-medium hover:text-primary transition flex items-center gap-1 py-8">Categories <i data-lucide="chevron-down" class="w-4 h-4"></i></a>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${basePath}pages/shop.html?category=capsules" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Coffee Capsules</a>
                            <a href="${basePath}pages/shop.html?category=beans" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Whole Beans</a>
                            <a href="${basePath}pages/shop.html?category=equipment" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Brewing Equipment</a>
                        </div>
                    </div>

                    <!-- Deals -->
                    <a href="${basePath}pages/deals.html" class="text-sm font-medium hover:text-primary transition py-8 flex items-center gap-1">Deals <span class="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Sale</span></a>

                    <!-- Blog -->
                    <div class="relative group">
                        <button class="text-sm font-medium hover:text-primary transition flex items-center gap-1 py-8">Blog <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 left-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${basePath}pages/blog.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Journal Grid</a>
                            <a href="${basePath}pages/blog-single.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Single Post</a>
                        </div>
                    </div>

                    <!-- Account -->
                    <div class="relative group">
                        <button class="text-sm font-medium hover:text-primary transition flex items-center gap-1 py-8">Account <i data-lucide="chevron-down" class="w-4 h-4"></i></button>
                        <div class="absolute top-20 right-0 w-48 bg-white dark:bg-[#2A2A2A] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col pt-2 pb-2">
                            <a href="${basePath}pages/dashboard-user.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">User Dashboard</a>
                            <a href="${basePath}pages/dashboard-admin.html" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Admin Dashboard</a>
                            <div class="border-t border-gray-100 dark:border-gray-800 my-1"></div>
                            <a href="${basePath}pages/dashboard-user.html?tab=orders" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">Track Order</a>
                            <a href="${basePath}pages/dashboard-user.html?tab=wishlist" class="px-4 py-2 text-sm hover:text-primary hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">My Wishlist</a>
                        </div>
                    </div>

                </div>

                <!-- Action Icons -->
                <div class="flex items-center gap-2">
                    <button id="rtl-toggle" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition relative block" title="Toggle RTL" aria-label="Toggle RTL text direction">
                        <i data-lucide="languages" class="w-5 h-5"></i>
                    </button>
                    <button id="dark-mode-toggle" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition relative block" aria-label="Toggle dark mode">
                        <i data-lucide="moon" class="w-5 h-5"></i>
                    </button>
                    <!-- Wishlist Icon -->
                    <a href="${basePath}pages/dashboard-user.html?tab=wishlist" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition relative hidden sm:block" aria-label="Wishlist">
                        <i data-lucide="heart" class="w-5 h-5"></i>
                    </a>
                    <a href="${basePath}pages/cart.html" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition relative block" aria-label="Shopping cart">
                        <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                        <span class="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
                    </a>
                    <button id="mobile-menu-btn" class="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition lg:hidden" aria-label="Open mobile menu">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Placeholder -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white dark:bg-[#161616] border-t border-gray-200 dark:border-gray-800 p-4 absolute w-full transition-all duration-300 shadow-xl overflow-y-auto max-h-[80vh]">
             <div class="flex flex-col gap-2 pb-6">
                  <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Home</div>
                  <a href="${basePath}index.html" class="text-sm font-medium hover:text-primary pl-2 py-1">Home 1 (Capsules)</a>
                  <a href="${basePath}pages/index-2.html" class="text-sm font-medium hover:text-primary pl-2 py-1">Home 2 (Story)</a>
                  
                  <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Shop</div>
                  <a href="${basePath}pages/shop.html" class="text-sm font-medium hover:text-primary pl-2 py-1">Shop Grid</a>
                  <a href="${basePath}pages/product-single.html" class="text-sm font-medium hover:text-primary pl-2 py-1">Product Details</a>
                  
                  <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Categories</div>
                  <a href="${basePath}pages/categories.html" class="text-sm font-medium hover:text-primary pl-2 py-1">View All Categories</a>
                  <a href="${basePath}pages/shop.html?category=capsules" class="text-sm font-medium hover:text-primary pl-2 py-1">Coffee Capsules</a>
                  <a href="${basePath}pages/shop.html?category=beans" class="text-sm font-medium hover:text-primary pl-2 py-1">Whole Beans</a>
                  
                  <a href="${basePath}pages/deals.html" class="font-bold text-primary tracking-wider text-[12px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800 uppercase flex items-center gap-2">Deals <span class="bg-red-500 text-white px-1.5 py-0.5 rounded">Sale</span></a>
                  
                  <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Blog</div>
                  <a href="${basePath}pages/blog.html" class="text-sm font-medium hover:text-primary pl-2 py-1">Journal Grid</a>
                  <a href="${basePath}pages/blog-single.html" class="text-sm font-medium hover:text-primary pl-2 py-1">Single Post</a>
                  
                  <div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Account</div>
                  <a href="${basePath}pages/dashboard-user.html" class="text-sm font-medium hover:text-primary pl-2 py-1">User Dashboard</a>
                  <a href="${basePath}pages/dashboard-admin.html" class="text-sm font-medium hover:text-primary pl-2 py-1">Admin Dashboard</a>
                  <a href="${basePath}pages/dashboard-user.html?tab=orders" class="text-sm font-medium hover:text-primary pl-2 py-1">Track Order</a>
                  
                  <div class="grid grid-cols-2 gap-4 mt-6">
                      <button id="dark-mode-mobile-toggle" class="flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-medium">
                          <i data-lucide="moon" class="w-4 h-4"></i> Dark Mode
                      </button>
                      <button id="rtl-mobile-toggle" class="flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-medium">
                          <i data-lucide="languages" class="w-4 h-4"></i> RTL/LTR
                      </button>
                  </div>
             </div>
        </div>
    </nav>
    `);
})();
