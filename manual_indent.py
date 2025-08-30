#!/usr/bin/env python3
"""
Manual HTML Indentation Script
This script manually adds indentation to HTML elements.
"""

import re
import sys

def indent_html_file(input_file, output_file):
    """
    Read HTML file and manually add indentation to HTML elements.
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
        
        # Handle opening HTML tags
        if re.match(r'^<[a-zA-Z][^>]*>$', stripped_line) and not stripped_line.startswith('</'):
            # Opening tag
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            indent_level += 1
        elif re.match(r'^</[a-zA-Z][^>]*>$', stripped_line):
            # Closing tag
            indent_level = max(0, indent_level - 1)
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
        elif re.match(r'^<[a-zA-Z][^>]*/>$', stripped_line):
            # Self-closing tag
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
        else:
            # Other content
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
    
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
