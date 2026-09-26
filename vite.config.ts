import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins:[
    react(),
    VitePWA({
      registerType:"autoUpdate",
      includeAssets:["icon.svg"],
      manifest:{
        name:"Order-Up",
        short_name:"Order-Up",
        description:"Restaurant ordering PWA",
        theme_color:"#e8ecef",
        background_color:"#e8ecef",
        display:"standalone",
        start_url:"/",
        icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml",purpose:"any maskable"}]
      }
    })
  ]
});
