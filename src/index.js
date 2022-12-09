import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@routes/App';

const createElement = document.getElementById('app');

const root = createRoot(createElement);

root.render(<App />);
