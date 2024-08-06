import { getAuth,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";



const email = document.querySelector("#email")
const form = document.querySelector("#form")
const password = document.querySelector("#password")

form.addEventListener("submit" , (event)=>{
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      
      // ..
    });
})


