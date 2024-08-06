import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getAuth} from"https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"


const firebaseConfig = {
  // apiKey: "AIzaSyBdkc5uoPUApxHVWOw3lrFkwlD7Y9D4es8",
  // authDomain: "todo-app-7b560.firebaseapp.com",
  // projectId: "todo-app-7b560",
  // storageBucket: "todo-app-7b560.appspot.com",
  // messagingSenderId: "262769813393",
  // appId: "1:262769813393:web:0fb429d5964678dbb21c30",
  // measurementId: "G-BLM8KC7EM0"

  apiKey: "AIzaSyCmxMQ8n4gGbzD2cvyf-DyjvzTxRvJTLko",
  authDomain: "authenticayion-and-singup.firebaseapp.com",
  projectId: "authenticayion-and-singup",
  storageBucket: "authenticayion-and-singup.appspot.com",
  messagingSenderId: "30400596809",
  appId: "1:30400596809:web:dddf162a38df8f136fe898",
  measurementId: "G-86TM43EQZ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
