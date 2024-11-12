const baseConfig = {
  name: 'NRWA Daily & Weekly Recap e-Newsletters',
  description: 'Rogue Monkey Media offers a wide assortment of creative advertising options to reach the rural water and wastewater market.',
};

module.exports = {
  signupFooter: {
    ...baseConfig,
  },
  modal: {
    ...baseConfig,
    enabled: false,
    cookieValueToMatch: 1,
  },
};
