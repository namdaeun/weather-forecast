import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const element = document.getElementById('root');

if (!element) {
	throw new Error('Root element not found.');
}

const root = createRoot(element);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
