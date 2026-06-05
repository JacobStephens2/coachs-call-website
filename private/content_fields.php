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

    'about_bio' => [
        'label'  => 'About — John’s background',
        'fields' => [
            'about.bio.christ' => [
                'label'   => 'Christ Follower',
                'type'    => 'multiline',
                'help'    => 'Format: years | role | description (the first two parts show in bold).',
                'default' => '42+ years | Christ Follower | Becoming a Christian at a young age has been, is and will be the most important decision in John’s life. It is the relationship that also provides the lens by which we can see everything.',
            ],
            'about.bio.family' => [
                'label'   => 'Husband and Father',
                'type'    => 'multiline',
                'default' => '25+ years | Husband and Father | John and his wife Kristen live in Newtown Square, Pennsylvania and have three children. Alison is a senior at Wheaton College, Cole is beginning his freshman year at Gordon College, and Matthew is entering 9th grade and is super excited to spend the next four years alone with his parents.',
            ],
            'about.bio.coach' => [
                'label'   => 'Coach',
                'type'    => 'multiline',
                'default' => '25+ years | Coach | John has coached all levels and ages of athletes from youth through college. He resurrected the Eastern University Men’s Lacrosse program 2006 after helping coach the Marple Newtown Boys Lacrosse team to the state semifinals and the last two years has coached the boys soccer team at Delaware County Christian School to the District Finals for the second and third time in school history.',
            ],
            'about.bio.athlete' => [
                'label'   => 'Competitive Athlete',
                'type'    => 'multiline',
                'default' => '10 years | Competitive Athlete | Growing up John played competitive soccer, tennis, basketball, baseball, football and lacrosse. As a college athlete, John played basketball and lacrosse at Wheaton College.',
            ],
            'about.bio.younglife' => [
                'label'   => 'Young Life Staff',
                'type'    => 'multiline',
                'default' => '22+ years | Young Life Staff | John started a Young Life ministry at Marple Newtown High School that had a regular attendance of 150 students for the weekly outreach event, Club. John also spent three years teaching the Leadership Training Course in partnership with the scholarship program at Eastern University.',
            ],
            'about.bio.corporate' => [
                'label'   => 'Corporate World',
                'type'    => 'multiline',
                'default' => '9 years | Corporate World | John has spent his time in the corporate world working in the areas of marketing, sales and project management. The transferrable nature of the skills in athletics has been instrumental in John’s corporate success.',
            ],
            'about.bio.admin' => [
                'label'   => 'College Administrator',
                'type'    => 'multiline',
                'default' => '7 years | College Administrator | John served as an Assistant Director of Admissions and the Director of Advancement for the Templeton Honors College at Eastern University. His time was spent in recruiting, marketing, and fundraising as the Honors College went through branding, doubled its size, founded an institute, and built a global recruiting presence.',
            ],
            'about.edu.degree1' => [
                'label'   => 'Education — degree 1',
                'type'    => 'text',
                'default' => 'Master’s in Business Administration',
            ],
            'about.edu.school1' => [
                'label'   => 'Education — school 1',
                'type'    => 'text',
                'default' => 'Eastern University (2007)',
            ],
            'about.edu.degree2' => [
                'label'   => 'Education — degree 2',
                'type'    => 'text',
                'default' => 'B.S. in Health and Physical Education',
            ],
            'about.edu.school2' => [
                'label'   => 'Education — school 2',
                'type'    => 'text',
                'default' => 'Wheaton College (1996)',
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
