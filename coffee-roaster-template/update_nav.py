import os
import re

directory = r'c:\Users\Eswar\Desktop\html templates\Coffee Roasters Template\coffee-roaster-template\pages'

categories_btn_pattern = re.compile(r'<button class="text-sm font-medium hover:text-primary transition flex items-center gap-1 py-8">Categories <i data-lucide="chevron-down" class="w-4 h-4"></i></button>')
categories_btn_replacement = r'<a href="categories.html" class="text-sm font-medium hover:text-primary transition flex items-center gap-1 py-8">Categories <i data-lucide="chevron-down" class="w-4 h-4"></i></a>'

deals_pattern = re.compile(r'href="shop.html\?deals=true"')
deals_replacement = r'href="deals.html"'

mobile_categories_pattern = re.compile(r'<div class="font-bold text-gray-400 uppercase tracking-wider text-\[10px\] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Categories</div>\s*<a href="shop.html\?category=capsules"')
mobile_categories_replacement = r'<div class="font-bold text-gray-400 uppercase tracking-wider text-[10px] pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">Categories</div><a href="categories.html" class="text-sm font-medium hover:text-primary pl-2 py-1">View All Categories</a><a href="shop.html?category=capsules"'

footer_links_pattern = re.compile(r'<li><a href="shop.html\?category=capsules" class="hover:text-primary transition-colors">Espresso Capsules</a></li>\s*<li><a href="shop.html\?category=single-origin" class="hover:text-primary transition-colors">Single Origin</a></li>')
footer_links_replacement = r'<li><a href="categories.html" class="hover:text-primary transition-colors">Categories</a></li><li><a href="deals.html" class="hover:text-primary transition-colors">Weekly Deals</a></li>'

for filename in os.listdir(directory):
    if filename.endswith(".html") and filename not in ["categories.html", "deals.html"]:
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = categories_btn_pattern.sub(categories_btn_replacement, content)
        new_content = deals_pattern.sub(deals_replacement, new_content)
        new_content = mobile_categories_pattern.sub(mobile_categories_replacement, new_content)
        new_content = footer_links_pattern.sub(footer_links_replacement, new_content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
