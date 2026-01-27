import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import CartOverlay from './components/CartOverlay';
import { CartProvider } from './components/CartContext';

const Layout = ({ data, children }) => {
  const primaryTable = Object.keys(data)[0];
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-500">
      <Header primaryTable={data[primaryTable]} tableName={primaryTable} siteSettings={data['site_settings']} />
      <main>{children}</main>
      <Footer primaryTable={data[primaryTable]} />
      <CartOverlay />
    </div>
  );
};

const App = ({ data }) => {
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