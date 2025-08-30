#!/usr/bin/env python3
"""
HTML Parser Indentation Script
This script uses the built-in HTML parser to properly indent HTML files.
"""

import re
import sys
from html.parser import HTMLParser

class IndentHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.indent_level = 0
        self.indent_size = 2
        self.output_lines = []
        self.current_line = ""
        self.in_php = False
        
    def handle_starttag(self, tag, attrs):
        # Check if we're entering PHP
        if tag == '?php':
            self.in_php = True
            self.output_lines.append('<?php')
            return
            
        # Skip indentation for self-closing tags
        if tag in ['img', 'br', 'hr', 'input', 'meta', 'link']:
            indent = ' ' * (self.indent_level * self.indent_size)
            attr_str = ' '.join([f'{k}="{v}"' for k, v in attrs])
            self.output_lines.append(f'{indent}<{tag} {attr_str}>')
            return
            
        # Regular opening tag
        indent = ' ' * (self.indent_level * self.indent_size)
        attr_str = ' '.join([f'{k}="{v}"' for k, v in attrs])
        self.output_lines.append(f'{indent}<{tag} {attr_str}>')
        self.indent_level += 1
        
    def handle_endtag(self, tag):
        # Check if we're leaving PHP
        if tag == '?':
            self.in_php = False
            self.output_lines.append('?>')
            return
            
        # Decrease indent before closing tag
        self.indent_level = max(0, self.indent_level - 1)
        indent = ' ' * (self.indent_level * self.indent_size)
        self.output_lines.append(f'{indent}</{tag}>')
        
    def handle_data(self, data):
        if self.in_php:
            # Preserve PHP content as is
            self.output_lines.append(data)
        else:
            # Handle regular text content
            if data.strip():
                indent = ' ' * (self.indent_level * self.indent_size)
                self.output_lines.append(f'{indent}{data}')
                
    def handle_comment(self, data):
        indent = ' ' * (self.indent_level * self.indent_size)
        self.output_lines.append(f'{indent}<!--{data}-->')

def indent_html_file(input_file, output_file):
    """
    Read HTML file and add proper indentation using HTML parser.
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract PHP blocks to preserve them
    php_blocks = []
    php_pattern = r'<\?php.*?\?>'
    
    def replace_php(match):
        placeholder = f"__PHP_BLOCK_{len(php_blocks)}__"
        php_blocks.append(match.group(0))
        return placeholder
    
    # Replace PHP blocks with placeholders
    content_without_php = re.sub(php_pattern, replace_php, content, flags=re.DOTALL)
    
    # Parse HTML
    parser = IndentHTMLParser()
    try:
        parser.feed(content_without_php)
    except Exception as e:
        print(f"Warning: HTML parsing error: {e}")
        # Fall back to simple indentation
        return simple_indent_file(input_file, output_file)
    
    # Restore PHP blocks
    result = '\n'.join(parser.output_lines)
    for i, php_block in enumerate(php_blocks):
        result = result.replace(f"__PHP_BLOCK_{i}__", php_block)
    
    # Write the indented content
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(result)

def simple_indent_file(input_file, output_file):
    """
    Simple indentation fallback method.
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    indented_lines = []
    indent_level = 0
    indent_size = 2
    
    for line in lines:
        stripped = line.strip()
        
        if not stripped:
            indented_lines.append('')
            continue
            
        # Handle PHP tags
        if '<?php' in stripped:
            indented_lines.append(line.rstrip())
            continue
        if '?>' in stripped:
            indented_lines.append(line.rstrip())
            continue
            
        # Handle HTML tags
        if stripped.startswith('</'):
            indent_level = max(0, indent_level - 1)
        elif stripped.startswith('<') and not stripped.startswith('<!') and not stripped.endswith('/>'):
            pass  # Will increase indent after this line
        elif stripped.startswith('<!DOCTYPE'):
            pass  # Don't indent DOCTYPE
            
        indent = ' ' * (indent_level * indent_size)
        indented_lines.append(indent + stripped)
        
        if stripped.startswith('<') and not stripped.startswith('</') and not stripped.startswith('<!') and not stripped.endswith('/>'):
            indent_level += 1
    
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
