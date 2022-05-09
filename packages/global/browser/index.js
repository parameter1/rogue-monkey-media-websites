import ThemeMonorail from '@parameter1/base-cms-marko-web-theme-monorail/browser';

const AutoScroll = () => import(/* webpackChunkName: "global-auto-scroll" */ './auto-scroll.vue');
const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  ThemeMonorail(Browser, { enableOmedaIdentityX: false });

  Browser.register('GlobalImageSlider', ImageSlider);
  Browser.register('GlobalAutoScroll', AutoScroll);
};
