import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ data, siteSettings }) {
  const footerContent = data?.footer?.[0] || {};
  const settings = siteSettings || {};
  const naam = settings.naam || 'Gourmet Chocolaterie';
  const adres = settings.adres || 'Kerkstraat 12, 1011 AB Amsterdam';
  const telefoon = settings.telefoon || '+31 (0)20 123 4567';
  const email = settings.email || 'info@gourmetchocolaterie.nl';
  const opening_uren = settings.opening_uren || 'Ma - Za: 09:00 - 18:00';
  const facebook = settings.facebook || 'https://facebook.com/gourmetchocolaterie';

  return (
    <footer className="bg-gradient-to-b from-[#3A261D] to-[#20130B] text-[#E8DCC4] pt-20 pb-10 relative overflow-hidden border-t border-[#4A3222]">
      {/* Decorative subtle glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A45]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C49A45]/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
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
              {telefoon && (
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#4A3222]/50 flex items-center justify-center group-hover:bg-[#C49A45]/20 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-[#C49A45] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href={`tel:${telefoon.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                    <span data-dock-type="text" data-dock-bind="_site_settings.0.telefoon">{telefoon}</span>
                  </a>
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
              {opening_uren && (
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#4A3222]/50 flex items-center justify-center group-hover:bg-[#C49A45]/20 transition-colors shrink-0">
                    <svg className="w-5 h-5 text-[#C49A45] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="group-hover:text-white transition-colors">
                    <span data-dock-type="text" data-dock-bind="_site_settings.0.opening_uren">{opening_uren}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Legal */}
          <div className="pt-2 md:pt-0">
            <h4 className="text-[#C49A45] font-serif font-bold mb-6 uppercase tracking-[0.15em] text-sm">Juridisch</h4>
            <ul className="space-y-3 text-sm font-light mb-8">
              <li><Link to="/privacy" className="opacity-80 hover:opacity-100 hover:text-white transition-all flex items-center gap-2"><span className="w-1 h-1 bg-[#C49A45] rounded-full"></span>Privacybeleid</Link></li>
              <li><Link to="/voorwaarden" className="opacity-80 hover:opacity-100 hover:text-white transition-all flex items-center gap-2"><span className="w-1 h-1 bg-[#C49A45] rounded-full"></span>Algemene Voorwaarden</Link></li>
              <li><Link to="/cookies" className="opacity-80 hover:opacity-100 hover:text-white transition-all flex items-center gap-2"><span className="w-1 h-1 bg-[#C49A45] rounded-full"></span>Cookiebeleid</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="pt-2 md:pt-0">
            {facebook && (
              <>
                <h4 className="text-[#C49A45] font-serif font-bold mb-6 uppercase tracking-[0.15em] text-sm">Volg ons</h4>
                <div className="flex gap-4">
                  <a href={facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#4A3222]/50 flex items-center justify-center hover:bg-[#C49A45]/20 hover:scale-110 transition-all text-[#C49A45]" aria-label="Facebook">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Copyright Full Width */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-[#4A3222]/50 pt-8 mt-4 md:mt-0">
          <p className="text-sm font-light opacity-60 hover:opacity-100 transition-opacity mb-4 md:mb-0">
            <span data-dock-type="text" data-dock-bind="footer.0.copy_tekst">{footerContent.copy_tekst || `© ${new Date().getFullYear()} ${naam}. Alle rechten voorbehouden.`}</span>
          </p>
          <div className="flex items-center gap-2 text-[#C49A45]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span className="font-serif italic text-sm">Crafted with passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
