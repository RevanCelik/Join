import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyC_-zaoQvnu5nk5lCGnUYyXkTDGxsA63_M",
  authDomain: "projectjoin-m45t3r.firebaseapp.com",
  databaseURL: "https://projectjoin-m45t3r-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projectjoin-m45t3r",
  storageBucket: "projectjoin-m45t3r.firebasestorage.app",
  messagingSenderId: "46388519134",
  appId: "1:46388519134:web:eaa58b16aa42f8e515224f",
  measurementId: "G-CFBVLNQKFH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const BASE_URL = `${firebaseConfig.databaseURL}/`;
