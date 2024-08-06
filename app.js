import {  getAuth, signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";



const email = document.querySelector("#email")
const form = document.querySelector("#form")
const password = document.querySelector("#password")
const google = document.querySelector("#google")

form.addEventListener("submit" , (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      window.location="home.html"
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
})

const provider = new GoogleAuthProvider();

google.addEventListener("click", () => {
  console.log("google login");

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location = "home.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
    
  


