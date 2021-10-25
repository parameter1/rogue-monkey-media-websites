import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import Search from '@parameter1/base-cms-marko-web-search/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';
import NativeX from '@parameter1/base-cms-marko-web-native-x/browser';

const AutoScroll = () => import(/* webpackChunkName: "global-auto-scroll" */ './auto-scroll.vue');
const BlockLoader = () => import(/* webpackChunkName: "global-block-loader" */ './block-loader.vue');
const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');
const MenuToggleButton = () => import(/* webpackChunkName: "global-menu-toggle-button" */ './menu-toggle-button.vue');

const WufooForm = () => import(/* webpackChunkName: "global-wufoo-form" */ './wufoo-form.vue');
const CommentToggleButton = () => import(/* webpackChunkName: "global-comment-toggle-button" */ './comment-toggle-button.vue');
const IdentityXAuthenticate = () => import(/* webpackChunkName: "global-identity-x-authenticate" */ './identity-x/authenticate.vue');
const IdentityXCommentStream = () => import(/* webpackChunkName: "global-identity-x-comment-stream" */ './identity-x/comments/stream.vue');

export default (Browser) => {
  GTM(Browser);
  GAM(Browser);
  Search(Browser);
  SocialSharing(Browser);
  NativeX(Browser);
  Inquiry(Browser);
  IdentityX(Browser, {
    CustomAuthenticateComponent: IdentityXAuthenticate,
    CustomCommentStreamComponent: IdentityXCommentStream,
  });
  Browser.register('GlobalImageSlider', ImageSlider);
  Browser.register('GlobalAutoScroll', AutoScroll);
  Browser.register('GlobalBlockLoader', BlockLoader);
  Browser.register('GlobalMenuToggleButton', MenuToggleButton);
  Browser.register('GlobalCommentToggleButton', CommentToggleButton);
  Browser.register('WufooForm', WufooForm);
};
