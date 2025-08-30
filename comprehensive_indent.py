#!/usr/bin/env python3
"""
Comprehensive HTML Indentation Script
This script properly indents HTML files by parsing the structure and adding consistent indentation.
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
        
        # Check if we're entering or leaving PHP tags
        if '<?php' in stripped_line:
            in_php = True
        elif '?>' in stripped_line:
            in_php = False
        
        # If we're inside PHP tags, preserve the line as is
        if in_php:
            indented_lines.append(original_line)
            continue
        
        # Handle HTML comments
        if stripped_line.startswith('<!--') and stripped_line.endswith('-->'):
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            continue
        
        # Handle opening HTML comments
        if stripped_line.startswith('<!--'):
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            indent_level += 1
            continue
        
        # Handle closing HTML comments
        if stripped_line.endswith('-->'):
            indent_level = max(0, indent_level - 1)
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            continue
        
        # Handle HTML tags
        if stripped_line.startswith('<'):
            # Check if it's a closing tag
            if stripped_line.startswith('</'):
                # Decrease indent level before adding the closing tag
                indent_level = max(0, indent_level - 1)
                indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            # Check if it's a self-closing tag
            elif stripped_line.endswith('/>') or stripped_line.endswith('>') and any(tag in stripped_line for tag in ['<img', '<br', '<hr', '<input', '<meta', '<link', '<!DOCTYPE']):
                indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
            # Check if it's an opening tag
            elif stripped_line.endswith('>'):
                indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
                # Increase indent level after adding the opening tag
                indent_level += 1
            else:
                # Multi-line tag, just add it as is
                indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
        else:
            # Non-HTML content, preserve as is
            indented_lines.append(' ' * (indent_level * indent_size) + stripped_line)
    
    # Write the indented content
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(indented_lines))

if __name__ == "__main__":
    try:
        indent_html_file('index.php', 'index_indented.php')
        print("HTML indentation completed successfully!")
        print("Output saved to: index_indented.php")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
