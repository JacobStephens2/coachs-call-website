#!/usr/bin/env python3
"""
BeautifulSoup HTML Indentation Script
This script properly indents HTML files using BeautifulSoup for accurate parsing.
"""

import re
import sys
from bs4 import BeautifulSoup

def indent_html_file(input_file, output_file):
    """
    Read HTML file and add proper indentation using BeautifulSoup.
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract PHP code blocks to preserve them
    php_blocks = []
    php_pattern = r'<\?php.*?\?>'
    
    def replace_php(match):
        placeholder = f"__PHP_BLOCK_{len(php_blocks)}__"
        php_blocks.append(match.group(0))
        return placeholder
    
    # Replace PHP blocks with placeholders
    content_without_php = re.sub(php_pattern, replace_php, content, flags=re.DOTALL)
    
    # Parse HTML with BeautifulSoup
    soup = BeautifulSoup(content_without_php, 'html.parser')
    
    # Pretty print the HTML
    pretty_html = soup.prettify()
    
    # Restore PHP blocks
    for i, php_block in enumerate(php_blocks):
        pretty_html = pretty_html.replace(f"__PHP_BLOCK_{i}__", php_block)
    
    # Write the indented content
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(pretty_html)
    
    print(f"HTML indentation completed. Output written to {output_file}")

if __name__ == "__main__":
    input_file = "/var/www/coachscall.org/index.php"
    output_file = "/var/www/coachscall.org/index_indented.php"
    
    try:
        indent_html_file(input_file, output_file)
        print("Successfully indented the HTML file!")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
