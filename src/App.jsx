import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import CartOverlay from './components/CartOverlay';
import { CartProvider } from './components/CartContext';

const Layout = ({ data, children }) => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-500">
      <Header primaryTable={data.basisgegevens} siteSettings={data['site_settings']} />
      <main className="pt-20">{children}</main>
      <Footer primaryTable={data.basisgegevens} />
      <CartOverlay />
    </div>
  );
};

const App = ({ data }) => {
  // Pas globale thema instellingen toe
  useMemo(() => {
    const settings = Array.isArray(data.site_settings) ? (data.site_settings[0] || {}) : (data.site_settings || {});
    const root = document.documentElement;
    
    // Theme Switch
    if (settings.theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    // Mappings
    const mappings = {
        light_primary_color: '--color-primary',
        light_heading_color: '--color-heading',
        light_accent_color: '--color-accent',
        light_button_color: '--color-button-bg',
        light_card_color: '--color-card-bg',
        light_header_color: '--color-header-bg',
        light_bg_color: '--color-background',
        light_text_color: '--color-text',
        dark_primary_color: '--color-primary',
        dark_heading_color: '--color-heading',
        dark_accent_color: '--color-accent',
        dark_button_color: '--color-button-bg',
        dark_card_color: '--color-card-bg',
        dark_header_color: '--color-header-bg',
        dark_bg_color: '--color-background',
        dark_text_color: '--color-text',
        global_radius: '--radius-custom',
        global_shadow: '--shadow-main'
    };

    const isDark = root.classList.contains('dark');
    const prefix = isDark ? 'dark_' : 'light_';

    Object.keys(settings).forEach(key => {
        if (key.startsWith(prefix) || key.startsWith('global_')) {
            const varName = mappings[key];
            if (varName) {
                let val = settings[key];
                if (key === 'global_shadow') {
                    if (val === 'soft') val = '0 4px 20px -2px rgba(0, 0, 0, 0.05)';
                    else if (val === 'strong') val = '0 20px 50px -5px rgba(0, 0, 0, 0.15)';
                    else if (val === 'none') val = 'none';
                }
                root.style.setProperty(varName, val);
            }
        }
    });
  }, [data.site_settings]);

  return (
    <CartProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout data={data}><Section data={data} /></Layout>} />
          <Route path="/checkout" element={<Layout data={data}><Checkout /></Layout>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;