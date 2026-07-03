import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ data, siteSettings }) {
  const footerContent = data?.footer?.[0] || {};
  const settings = siteSettings || {};
  const { naam, adres, telefoon, email } = settings;

  return (
    <footer className="bg-gradient-to-b from-[#3A261D] to-[#20130B] text-[#E8DCC4] pt-20 pb-10 relative overflow-hidden border-t border-[#4A3222]">
      {/* Decorative subtle glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A45]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C49A45]/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E3C5] to-[#C49A45] tracking-tight">{naam}</h3>
            
            <div className="space-y-4 text-sm font-light">
              {adres && (
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#4A3222]/50 flex items-center justify-center group-hover:bg-[#C49A45]/20 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-[#C49A45] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="mt-2 group-hover:text-white transition-colors">
                      <span data-dock-type="text" data-dock-bind="_site_settings.0.adres">{adres}</span>
                  </div>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#4A3222]/50 flex items-center justify-center group-hover:bg-[#C49A45]/20 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-[#C49A45] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                    <span data-dock-type="text" data-dock-bind="_site_settings.0.contact_email">{email}</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Legal */}
          {/* Legal */}
          <div className="pt-2 md:pt-0">
            <h4 className="text-[#C49A45] font-serif font-bold mb-6 uppercase tracking-[0.15em] text-sm">Juridisch</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/privacy" className="opacity-80 hover:opacity-100 hover:text-white transition-all flex items-center gap-2"><span className="w-1 h-1 bg-[#C49A45] rounded-full"></span>Privacybeleid</Link></li>
              <li><Link to="/voorwaarden" className="opacity-80 hover:opacity-100 hover:text-white transition-all flex items-center gap-2"><span className="w-1 h-1 bg-[#C49A45] rounded-full"></span>Algemene Voorwaarden</Link></li>
              <li><Link to="/cookies" className="opacity-80 hover:opacity-100 hover:text-white transition-all flex items-center gap-2"><span className="w-1 h-1 bg-[#C49A45] rounded-full"></span>Cookiebeleid</Link></li>
            </ul>
          </div>

          {/* Copyright */}
          {/* Copyright */}
          <div className="flex flex-col md:items-end justify-end border-t border-[#4A3222]/50 md:border-none pt-8 md:pt-0 mt-4 md:mt-0">
             <div className="flex items-center gap-2 text-[#C49A45] mb-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span className="font-serif italic text-sm">Crafted with passion</span>
             </div>
             <p className="text-sm font-light opacity-60 hover:opacity-100 transition-opacity">
                <span data-dock-type="text" data-dock-bind="footer.0.copy_tekst">{footerContent.copy_tekst || `© ${new Date().getFullYear()} ${naam}. Alle rechten voorbehouden.`}</span>
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
