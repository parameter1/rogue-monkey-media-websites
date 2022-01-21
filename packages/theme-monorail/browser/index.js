import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import Search from '@parameter1/base-cms-marko-web-search/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';
import NativeX from '@parameter1/base-cms-marko-web-native-x/browser';

const ThemeBlockLoader = () => import(/* webpackChunkName: "theme-block-loader" */ './block-loader.vue');
const ThemeMenuToggleButton = () => import(/* webpackChunkName: "theme-menu-toggle-button" */ './menu-toggle-button.vue');
const ThemeWufooForm = () => import(/* webpackChunkName: "theme-wufoo-form" */ './wufoo-form.vue');
const ThemeCommentToggleButton = () => import(/* webpackChunkName: "theme-comment-toggle-button" */ './comment-toggle-button.vue');

export default (Browser) => {
  GTM(Browser);
  GAM(Browser);
  Search(Browser);
  SocialSharing(Browser);
  NativeX(Browser);
  Inquiry(Browser);
  IdentityX(Browser);
  Browser.register('ThemeBlockLoader', ThemeBlockLoader);
  Browser.register('ThemeMenuToggleButton', ThemeMenuToggleButton);
  Browser.register('ThemeCommentToggleButton', ThemeCommentToggleButton);
  Browser.register('WufooForm', ThemeWufooForm);
};
