import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PointProvider } from './PointContext';

// Define a function to dynamically load the Google Maps JavaScript API
const loadGoogleMapsScript = () => {
  const scriptContent = `
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
      key: "${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}", // Replace with your actual API key
      v: "weekly",
      // Add other parameters as needed
    });
  `;
  const script = document.createElement('script');
  script.innerHTML = scriptContent;
  document.head.appendChild(script);
};

// Load the Google Maps script before rendering the React app
loadGoogleMapsScript();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Ensure this is the only call to createRoot
root.render(
  <React.StrictMode>
    <PointProvider>
      <App />
    </PointProvider>
  </React.StrictMode>
);

reportWebVitals();