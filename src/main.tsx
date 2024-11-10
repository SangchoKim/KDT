import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from './redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* // 스토어 제공 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
