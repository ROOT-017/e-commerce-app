/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_FIREBASE_API_KEY: string;
    readonly VITE_APP_FIREBASE_DOMAIN: string;
    readonly VITE_APP_FIREBASE_PROJECT_ID: string;
    readonly VITE_APP_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_APP_FIREBASE_SENDER_ID: string;
    readonly VITE_APP_FIREBASE_APP_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  