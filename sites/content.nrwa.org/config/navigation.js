const topics = {
  primary: [
    { href: '/utility-operations', label: 'Utility Operations' },
    { href: '/legislation', label: 'Legislation' },
    { href: '/technology', label: 'Technology' },
  ],
  expanded: [],
  secondary: [],
};

const resources = [
  { href: '/magazine', label: 'Magazine' },
  { href: '/videos', label: 'Videos' },
  { href: '/resource-guide', label: 'Resource Guide' },
  { href: 'https://careers.nrwa.org', label: 'Career Center', target: '_blank' },
  // { href: '/white-papers', label: 'White Papers' },
];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://nrwa.org/annual_events/', label: 'Events', target: '_blank' },
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
  { href: '/page/subscribe', label: 'Subscribe' },
];

const mobileMenu = {
  primary: topics.primary,
  secondary: [
    ...resources,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
  resources: [...resources],
};

module.exports = {
  primary: {
    items: [],
  },
  secondary: {
    items: [
      ...topics.primary,
      { href: '/resource-guide', label: 'Resource Guide' },
      { href: 'https://careers.nrwa.org', label: 'Career Center', target: '_blank' },
      { href: 'https://waterproconference.org', label: 'WaterPro Conference', target: '_blank' },
    ],
  },
  tertiary: {
    items: [],
  },
  desktopMenu,
  mobileMenu,
  footer: {
    items: [
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
    ],
  },
};
