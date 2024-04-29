import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCdH+LrVSn2rSq4...",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  projectId: "recipe-app-5b731",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
