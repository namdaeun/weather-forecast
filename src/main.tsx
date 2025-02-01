import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './style/globalStyle.ts';
import { theme } from './style/theme.ts';

const element = document.getElementById('root');

if (!element) {
	throw new Error('Root element not found.');
}

const root = createRoot(element);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Global styles={GlobalStyle} />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
