const topics = {
  primary: [
    { href: '/utility-operations', label: 'Utility Operations' },
    { href: '/legislation', label: 'Legislation' },
    { href: '/technology', label: 'Technology' },
    { href: '/resource-guide', label: 'Resource Guide' },
    { href: '/more-articles', label: 'More Articles' },
  ],
  expanded: [],
  secondary: [
    { href: 'https://nrwa.org/', label: 'NRWA.org' },
    { href: 'https://wateruniversity.org/', label: 'Water University' },
    { href: 'https://careers.nrwa.org/', label: 'Career Center' },
    { href: 'https://members.nrwa.org/Shared_Content/Sign_In.aspx', label: 'Member Portal' },
    { href: 'https://www.waterproconference.org/', label: 'WaterPro Conference' },
  ],
};

const resources = [
  { href: '/magazine', label: 'Magazine' },
  { href: '/videos', label: 'Videos' },
  { href: 'https://careers.nrwa.org', label: 'Career Center', target: '_blank' },
  { href: '/white-papers', label: 'White Papers' },
];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.secondary,
  ],
  secondary: [
    ...resources,
  ],
};

const desktopMenu = {
  about: [
    ...utilities,
    { href: 'https://nrwa.org/annual_events/', label: 'Events' },
    { href: '/page/subscribe', label: 'Subscribe' },
    { href: '/page/privacy-policy', label: 'Privacy Policy' },
  ],
  sections: [
    { href: '/utility-operations', label: 'Utility Operations' },
    { href: '/legislation', label: 'Legislation' },
    { href: '/technology', label: 'Technology' },
  ],
  toolbox: [
    { href: '/resource-guide', label: 'Resource Guide' },
    { href: 'https://theassociationpartner.com/nrwa/', label: 'Digital Retargeting Opportunities', target: '_blank' },
    { href: 'http://nrwa.org/non-discrimination-policy/', label: 'Non-Discrimination Policy', target: '_blank' },
    { href: 'https://members.nrwa.org/Public/Members/NRWA-Store/iCore/Store/StoreLayouts/Store_Home.aspx', label: 'NRWA Online Store', target: '_blank' },
    { href: '/more-articles', label: 'More Articles' },
  ],
  resources: [
    ...resources,
  ],
};

module.exports = {
  primary: {
    items: [
      ...topics.secondary,
    ],
  },
  secondary: {
    items: [
      ...topics.primary,
      // { href: '/resource-guide', label: 'Resource Guide' },
      // { href: 'https://careers.nrwa.org', label: 'Career Center', target: '_blank' },
      // { href: 'https://waterproconference.org', label: 'WaterPro Conference', target: '_blank' },
    ],
  },
  tertiary: {
    items: [],
  },
  desktopMenu,
  mobileMenu,
  footer: {
    topics: [
      { href: '/utility-operations', label: 'Utility Operations' },
      { href: '/legislation', label: 'Legislation' },
      { href: '/technology', label: 'Technology' },
    ],
    toolbox: [
      { href: '/resource-guide', label: 'Resource Guide' },
      { href: 'https://careers.nrwa.org/', label: 'Career Center' },
      { href: 'https://theassociationpartner.com/nrwa/', label: 'Digital Retargeting Opportunities', target: '_blank' },
      { href: 'http://nrwa.org/non-discrimination-policy/', label: 'Non-Discrimination Policy', target: '_blank' },
      { href: 'https://members.nrwa.org/Public/Members/NRWA-Store/iCore/Store/StoreLayouts/Store_Home.aspx', label: 'NRWA Online Store', target: '_blank' },
      { href: '/page/contact-us', label: 'Contact Us' },
    ],
    subscribe: [
      { href: '/page/subscribe', label: 'Sign up to receive weekly updates from NRWA' },
      { href: '/page/subscribe', label: 'Sign up for Rural Water Magazine' },
    ],
    items: [
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
