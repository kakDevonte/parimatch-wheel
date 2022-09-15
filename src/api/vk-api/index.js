import bridge from '@vkontakte/vk-bridge';

export const vkAPI = {
  appInit() {
    bridge.send('VKWebAppInit', {});
  },
  getUserInfo() {
    return bridge.send('VKWebAppGetUserInfo');
  },
};
