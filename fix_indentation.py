#!/usr/bin/env python3
"""
Improved HTML Indentation Script
This script properly indents HTML files based on tag nesting.
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
    
    for i, line in enumerate(lines):
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
        
        # Handle HTML comments
        if stripped_line.startswith('<!--') and stripped_line.endswith('-->'):
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            continue
        
        # Handle DOCTYPE
        if stripped_line.startswith('<!DOCTYPE'):
            indented_lines.append(stripped_line)
            continue
        
        # Handle opening and closing tags
        opening_tags = re.findall(r'<([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*)?>', stripped_line)
        closing_tags = re.findall(r'</([a-zA-Z][a-zA-Z0-9]*)>', stripped_line)
        self_closing_tags = re.findall(r'<([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*)?\s*/>', stripped_line)
        
        # Check for void elements (self-closing by nature)
        void_elements = {
            'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
            'link', 'meta', 'param', 'source', 'track', 'wbr'
        }
        
        # Determine if this line has opening tags that should increase indent
        has_opening = bool(opening_tags) and not bool(self_closing_tags)
        has_closing = bool(closing_tags)
        
        # Add current line with proper indentation
        indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
        
        # Adjust indent level for next line
        if has_opening and not has_closing:
            # Opening tag without closing tag on same line
            # Check if any of the opening tags are void elements
            should_increase = True
            for tag in opening_tags:
                if tag.lower() in void_elements:
                    should_increase = False
                    break
            if should_increase:
                indent_level += 1
        elif has_closing and not has_opening:
            # Closing tag without opening tag on same line
            indent_level = max(0, indent_level - 1)
        elif has_opening and has_closing:
            # Both opening and closing tags on same line - no indent change
            pass
        else:
            # Check for void elements that shouldn't increase indent
            for tag in opening_tags:
                if tag.lower() not in void_elements:
                    indent_level += 1
                    break
    
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
