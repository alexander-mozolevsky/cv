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
  const app = initializeApp(firebaseConfig);

  return app;
};

export const ANALYTICS_KEYS = {
  VISIT_MAIN_PAGE: "VISIT_MAIN_PAGE",
  DOWNLOAD_TOP_BUTTON: "DOWNLOAD_TOP_BUTTON",
  CONTACT_ME_TOP_BUTTON: "CONTACT_ME_TOP_BUTTON",
  DOWNLOAD_BOTTOM_BUTTON: "DOWNLOAD_BOTTOM_BUTTON",
  CONTACT_ME_BOTTOM_BUTTON: "CONTACT_ME_BOTTOM_BUTTON",
  PRESS_LINKEDIN: "PRESS_LINKEDIN",
  PRESS_PHONE: "PRESS_PHONE",
  PRESS_EMAIL: "PRESS_EMAIL",
};
