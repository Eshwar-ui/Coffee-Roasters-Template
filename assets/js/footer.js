(function() {
    // Determine base paths depending on whether the current page is in the /pages/ directory or root
    const isPagesDir = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
    const basePath = isPagesDir ? '../' : '';
    const pagesPath = isPagesDir ? '' : 'pages/';

    document.write(`
    <footer class="bg-white dark:bg-[#161616] pt-24 pb-12 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Brand Info -->
                <div class="lg:col-span-1">
                    <a href="${basePath}index.html" class="flex items-center gap-2 mb-6">
                        <i data-lucide="coffee" class="text-primary w-8 h-8"></i>
                        <span class="font-heading font-bold text-2xl tracking-tight">Espresso Elite</span>
                    </a>
                    <p class="text-gray-500 text-sm leading-relaxed mb-6">
                        Ethically sourced, precision roasted specialty coffee. Delivering the perfect cup directly to your door.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" aria-label="Twitter"><i data-lucide="twitter" class="w-5 h-5"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><i data-lucide="facebook" class="w-5 h-5"></i></a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-bold mb-6 uppercase tracking-wider text-sm text-gray-900 dark:text-white">Shop</h4>
                    <ul class="space-y-4 text-sm text-gray-500">
                        <li><a href="${pagesPath}shop.html" class="hover:text-primary transition-colors">All Coffee</a></li>
                        <li><a href="${pagesPath}categories.html" class="hover:text-primary transition-colors">Categories</a></li>
                        <li><a href="${pagesPath}deals.html" class="hover:text-primary transition-colors">Weekly Deals</a></li>
                        <li><a href="${pagesPath}shop.html?category=equipment" class="hover:text-primary transition-colors">Brewing Equipment</a></li>
                        <li><a href="${pagesPath}subscriptions.html" class="hover:text-primary transition-colors">Coffee Club</a></li>
                    </ul>
                </div>

                <!-- Keep Discovering -->
                <div>
                    <h4 class="font-bold mb-6 uppercase tracking-wider text-sm text-gray-900 dark:text-white">Discover</h4>
                    <ul class="space-y-4 text-sm text-gray-500">
                        <li><a href="${pagesPath}about.html" class="hover:text-primary transition-colors">Our Story</a></li>
                        <li><a href="${pagesPath}blog.html" class="hover:text-primary transition-colors">The Roaster's Journal</a></li>
                        <li><a href="${pagesPath}contact.html" class="hover:text-primary transition-colors">Contact Us</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Wholesale Partners</a></li>
                        <li><a href="${pagesPath}dashboard-user.html" class="hover:text-primary transition-colors">My Account</a></li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div>
                    <h4 class="font-bold mb-6 uppercase tracking-wider text-sm text-gray-900 dark:text-white">Stay Awake</h4>
                    <p class="text-sm text-gray-500 mx-0 mb-4">Subscribe for early access to limited micro-lots and brew guides.</p>
                    <form class="flex gap-2 relative">
                        <input type="email" placeholder="Email address" class="w-full bg-[#F5F3EF] dark:bg-[#2A2A2A] border border-gray-300 dark:border-gray-700 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-colors">
                        <button class="absolute right-2 top-1.5 bottom-1.5 px-3 bg-primary text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
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
    `);
})();
