// lib/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 Dodane do obsługi Firestore

// Konfiguracja Firebase (Twoje dane)
const firebaseConfig = {
  apiKey: "AIzaSyCzoUoJ3warfW2xADkrrHmZawai7G3MZ18",
  authDomain: "stalink-859e6.firebaseapp.com",
  projectId: "stalink-859e6",
  storageBucket: "stalink-859e6.appspot.com", // 🔥 Poprawione na poprawny URL
  messagingSenderId: "427720223354",
  appId: "1:427720223354:web:b644e514f5f39940b6e9c3",
  measurementId: "G-Z0SVKR5R9W",
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // 🔥 Eksport Firestore
