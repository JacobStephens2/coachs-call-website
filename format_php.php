<?php
/**
 * Simple PHP HTML Formatter
 * Improves indentation and readability of index.php
 */

// Read the original file
$content = file_get_contents('index.php');

// Function to improve indentation
function improveIndentation($content) {
    $lines = explode("\n", $content);
    $formatted_lines = [];
    $indent_level = 0;
    $in_php = false;
    
    foreach ($lines as $line) {
        $trimmed = trim($line);
        
        // Skip empty lines
        if (empty($trimmed)) {
            $formatted_lines[] = '';
            continue;
        }
        
        // Check if we're entering or leaving PHP
        if (strpos($trimmed, '<?php') === 0) {
            $in_php = true;
            $formatted_lines[] = str_repeat('    ', $indent_level) . $trimmed;
            continue;
        }
        
        if (strpos($trimmed, '?>') === 0) {
            $in_php = false;
            $formatted_lines[] = str_repeat('    ', $indent_level) . $trimmed;
            continue;
        }
        
        // Handle HTML tags
        if (!$in_php) {
            // Check for closing tags that should reduce indent
            if (preg_match('/^<\/([a-zA-Z][a-zA-Z0-9]*)/', $trimmed)) {
                $indent_level = max(0, $indent_level - 1);
            }
            
            $formatted_lines[] = str_repeat('    ', $indent_level) . $trimmed;
            
            // Check for opening tags that should increase indent
            if (preg_match('/^<([a-zA-Z][a-zA-Z0-9]*)(?!\/>)/', $trimmed) && 
                !preg_match('/^<(br|hr|img|input|meta|link|script|style)/', $trimmed)) {
                $indent_level++;
            }
        } else {
            // PHP code - maintain current indent
            $formatted_lines[] = str_repeat('    ', $indent_level) . $trimmed;
        }
    }
    
    return implode("\n", $formatted_lines);
}

// Format the content
$formatted_content = improveIndentation($content);

// Write the formatted content back to the file
file_put_contents('index.php', $formatted_content);

echo "Formatting completed!\n";
?>
