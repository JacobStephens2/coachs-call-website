<?php
/**
 * Editable-content bootstrap.
 *
 * Loads the field registry (defaults) and any saved overrides
 * (private/content.json, written by the /admin editor), and exposes small
 * helpers the public pages use to print text:
 *
 *   cc('key')        - print escaped text (headings, paragraphs, attributes)
 *   cc_lines('key')  - print escaped text with newlines turned into <br>
 *   cc_value('key')  - return the raw string (no escaping/printing)
 *
 * Every field falls back to its registered default, so pages render correctly
 * even if content.json is missing or a key is unset.
 */
if (!defined('CC_CONTENT_LOADED')) {
    define('CC_CONTENT_LOADED', true);

    $GLOBALS['CC_FIELDS'] = require __DIR__ . '/content_fields.php';

    $GLOBALS['CC_OVERRIDES'] = [];
    $ccFile = __DIR__ . '/data/content.json';
    if (is_readable($ccFile)) {
        $decoded = json_decode((string) file_get_contents($ccFile), true);
        if (is_array($decoded)) {
            $GLOBALS['CC_OVERRIDES'] = $decoded;
        }
    }

    /** Look up a field's definition across all groups. */
    function cc_field_meta(string $key): ?array
    {
        foreach ($GLOBALS['CC_FIELDS'] as $group) {
            if (isset($group['fields'][$key])) {
                return $group['fields'][$key];
            }
        }
        return null;
    }

    /** Raw saved value if set and non-empty, otherwise the registered default. */
    function cc_value(string $key): string
    {
        if (array_key_exists($key, $GLOBALS['CC_OVERRIDES'])) {
            $v = $GLOBALS['CC_OVERRIDES'][$key];
            if (is_string($v) && $v !== '') {
                return $v;
            }
        }
        $meta = cc_field_meta($key);
        return isset($meta['default']) ? (string) $meta['default'] : '';
    }

    /** Print escaped text (safe in element text and attribute contexts). */
    function cc(string $key): void
    {
        echo htmlspecialchars(cc_value($key), ENT_QUOTES, 'UTF-8');
    }

    /** Print escaped text with newlines converted to <br>. */
    function cc_lines(string $key): void
    {
        echo nl2br(htmlspecialchars(cc_value($key), ENT_QUOTES, 'UTF-8'), false);
    }
}
