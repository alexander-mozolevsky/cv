import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

export const init = () => {
  console.log("Init firebase");
  console.log(import.meta.env.VITE_measurementId);
  const app = initializeApp(firebaseConfig);
  return app;
};

export const ANALYTICS_KEYS = {
  VISIT_MAIN_PAGE: "VISIT_MAIN_PAGE",
};
