<?php
/**
 * Registry of editable page text for the /admin content editor.
 *
 * Each field has a human label, a type (text | multiline), and the default
 * (the original site copy). The public pages call cc('key') / cc_lines('key')
 * to print the saved value, falling back to the default below. To make more
 * text editable later, add a field here and reference its key from the page.
 *
 * type "multiline": newlines entered by the editor become <br> on the page
 * (used for the stacked hero headlines).
 */
return [

    'home' => [
        'label'  => 'Home page',
        'fields' => [
            'home.hero.heading' => [
                'label'   => 'Hero heading',
                'type'    => 'text',
                'default' => 'Deepening coach impact',
            ],
            'home.hero.subhead' => [
                'label'   => 'Hero sub-heading',
                'type'    => 'text',
                'default' => 'Through one-on-one mentoring, consulting, and seminars',
            ],
            'home.quote.text' => [
                'label'   => 'Feature quote',
                'type'    => 'multiline',
                'help'    => 'The C.S. Lewis quote in the middle of the page.',
                'default' => "To become holy is rather like joining a secret society.\nTo put it at the very lowest, it must be great fun.",
            ],
        ],
    ],

    'about' => [
        'label'  => 'About page',
        'fields' => [
            'about.hero.heading' => [
                'label'   => 'Hero heading',
                'type'    => 'multiline',
                'help'    => 'Each line break starts a new line on the page.',
                'default' => "Game day\nis a\ncall to worship",
            ],
            'about.hero.subhead' => [
                'label'   => 'Hero sub-heading',
                'type'    => 'text',
                'default' => 'John has helped over 500 athletes celebrate over 25 years',
            ],
            'about.founder.heading' => [
                'label'   => 'Founder section heading',
                'type'    => 'text',
                'default' => 'John Levis, Founder',
            ],
            'about.founder.subhead' => [
                'label'   => 'Founder section sub-heading',
                'type'    => 'text',
                'default' => 'helping coaches understand the pursuit of excellence on the field or court as their daily act of worship',
            ],
        ],
    ],

    'work' => [
        'label'  => 'Work page',
        'fields' => [
            'work.hero.heading' => [
                'label'   => 'Hero heading',
                'type'    => 'multiline',
                'help'    => 'Each line break starts a new line on the page.',
                'default' => "It's how\nyou\nplay the game",
            ],
            'work.hero.subhead' => [
                'label'   => 'Hero sub-heading',
                'type'    => 'text',
                'default' => 'And winning and losing do matter',
            ],
            'work.seminars.heading' => [
                'label'   => 'Seminars section heading',
                'type'    => 'text',
                'default' => 'Professional Development Seminars and Workshops',
            ],
            'work.seminars.subhead' => [
                'label'   => 'Seminars section sub-heading',
                'type'    => 'text',
                'default' => 'exploring the orthodoxy of sport and how we pursue god’s high calling to coach.',
            ],
            'work.consulting.heading' => [
                'label'   => 'Mentoring/consulting section heading',
                'type'    => 'text',
                'default' => 'One-on-One Mentoring and Small Group Consulting',
            ],
            'work.consulting.subhead' => [
                'label'   => 'Mentoring/consulting section sub-heading',
                'type'    => 'text',
                'default' => 'Pursuing excellence',
            ],
        ],
    ],

    'contact' => [
        'label'  => 'Contact page',
        'fields' => [
            'contact.hero.heading' => [
                'label'   => 'Hero heading',
                'type'    => 'text',
                'default' => "Let's start a conversation",
            ],
            'contact.hero.subhead' => [
                'label'   => 'Hero sub-heading',
                'type'    => 'text',
                'default' => "The pursuit of God's calling in coaching",
            ],
            'contact.connect.heading' => [
                'label'   => '“Let’s Connect” heading',
                'type'    => 'text',
                'default' => 'Let’s Connect',
            ],
            'contact.connect.quote' => [
                'label'   => 'Scripture quote',
                'type'    => 'text',
                'default' => '“As iron sharpens iron, so one person sharpens another.”',
            ],
            'contact.connect.cite' => [
                'label'   => 'Scripture reference',
                'type'    => 'text',
                'default' => 'Proverbs 27:1',
            ],
            'contact.phone' => [
                'label'   => 'Phone number',
                'type'    => 'text',
                'help'    => 'Shown on the contact page and used for the tap-to-call link.',
                'default' => '484.574.1444',
            ],
            'contact.contactjohn.heading' => [
                'label'   => '“Contact John” section heading',
                'type'    => 'text',
                'default' => 'Contact John',
            ],
        ],
    ],

    'shared' => [
        'label'  => 'Footer (all pages)',
        'fields' => [
            'shared.footer.tagline' => [
                'label'   => 'Footer tagline',
                'type'    => 'text',
                'help'    => 'Appears in the navy footer on every page.',
                'default' => 'Glorifying God and Experiencing Joy Through Sports',
            ],
        ],
    ],

];
