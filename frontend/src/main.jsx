import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { ThemeProvider } from './components/aodesu/te.jsx';
const styleConfig = [
  { style: "aodesu", themes: ["dark", "light"]},
];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider styleConfig={styleConfig} isRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
