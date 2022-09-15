import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import { App } from './App';
import { WheelContextProvider } from './contexts/wheel-context';
import './index.css';

bridge.send('VKWebAppInit');

ReactDOM.render(
  <WheelContextProvider>
    <App />
  </WheelContextProvider>,
  document.getElementById('root')
);
