#!/usr/bin/env python3
"""
Advanced HTML Indentation Script
This script properly indents HTML files by parsing the structure more carefully.
"""

import re
import sys

def indent_html_file(input_file, output_file):
    """
    Read HTML file and add proper indentation based on tag nesting.
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split content into lines
    lines = content.split('\n')
    indented_lines = []
    indent_level = 0
    indent_size = 2  # 2 spaces per indent level
    
    # Track if we're inside PHP tags
    in_php = False
    
    for line in lines:
        original_line = line
        stripped_line = line.strip()
        
        # Skip empty lines but preserve them
        if not stripped_line:
            indented_lines.append('')
            continue
        
        # Handle PHP tags
        if '<?php' in stripped_line:
            in_php = True
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            continue
        elif '?>' in stripped_line:
            in_php = False
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            continue
        elif in_php:
            # Keep PHP code at current indent level
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            continue
        
        # Handle DOCTYPE
        if stripped_line.startswith('<!DOCTYPE'):
            indented_lines.append(stripped_line)
            continue
        
        # Handle HTML comments
        if stripped_line.startswith('<!--') and stripped_line.endswith('-->'):
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            continue
        
        # Find all HTML tags in this line
        tags = re.findall(r'<[^>]+>', stripped_line)
        
        # Count opening and closing tags
        opening_count = 0
        closing_count = 0
        self_closing_count = 0
        
        for tag in tags:
            tag_lower = tag.lower()
            # Check for self-closing tags
            if tag_lower.endswith('/>') or tag_lower.startswith('<!') or tag_lower.startswith('<?'):
                self_closing_count += 1
            elif tag_lower.startswith('</'):
                closing_count += 1
            else:
                opening_count += 1
        
        # Add current line with proper indentation
        indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
        
        # Adjust indent level for next line
        if opening_count > closing_count:
            # More opening tags than closing tags - increase indent
            indent_level += (opening_count - closing_count)
        elif closing_count > opening_count:
            # More closing tags than opening tags - decrease indent
            indent_level = max(0, indent_level - (closing_count - opening_count))
    
    # Write the indented content
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(indented_lines))
    
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
