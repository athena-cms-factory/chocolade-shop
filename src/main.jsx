import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './modern.css';
import './dock-connector.js';

async function init() {
  const data = {};
  // Dummy data loading logic for local development
  try {
    
    const isDev = import.meta.env.DEV;
    const loadJson = async (name) => {
        try {
            const base = import.meta.env.BASE_URL || '/';
            const url = `${base}src/data/${name.toLowerCase()}.json?t=${Date.now()}`;
            const res = await fetch(url);
            if (!res.ok) return null;
            return await res.json();
        } catch (e) { return null; }
    };

    let totalRows = 0;
    // Systeembestanden
    data['section_order'] = await loadJson('section_order') || [];
    data['layout_settings'] = await loadJson('layout_settings') || {};
    data['site_settings'] = await loadJson('site_settings') || {};
    data['section_settings'] = await loadJson('section_settings') || [];
    data['display_config'] = await loadJson('display_config') || { sections: {} };
    
    // Data-secties dynamisch laden op basis van section_order
    for (const sectionName of data['section_order']) {
        const sectionData = await loadJson(sectionName);
        if (sectionData) {
            // Altijd zorgen dat de data een array is, cruciaal voor "add item"
            if (Array.isArray(sectionData)) {
                data[sectionName] = sectionData;
                totalRows += sectionData.length;
            } else {
                data[sectionName] = [sectionData]; 
                totalRows += 1;
            }
        } else {
            data[sectionName] = []; 
        }
    }

    if (isDev && totalRows === 0 && data['section_order'].length > 0) {
        const banner = document.createElement('div');
        banner.style.cssText = "position:fixed;top:0;left:0;right:0;background:#f59e0b;color:white;text-align:center;padding:8px;font-size:12px;z-index:9999;font-weight:bold;box-shadow:0 2px 4px rgba(0,0,0,0.1);";
        banner.innerHTML = "⚠️ GEEN DATA GEVONDEN! Gebruik Optie [8] TSV to Sites in het Dashboard of koppel een Google Sheet.";
        document.body.appendChild(banner);
        document.body.style.paddingTop = "40px";
    }

    if (window.athenaScan) {
        window.athenaScan(data);
    }
    
  } catch (e) {
    console.error("Data laad fout:", e);
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  );
}

init();
