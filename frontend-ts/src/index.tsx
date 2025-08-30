import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './utils/i18n';
import { MapProvider } from './pages/components/MapProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapProvider>
      <App />
    {/* <ApiTeste/> */}
    </MapProvider>
  </React.StrictMode>
);
