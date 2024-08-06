import {  onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";
onAuthStateChanged(auth, (user) => {
    if (user) {
     const uid = user.uid
      console.log(uid);
      
      // ...
    } else {
      window.location="home.html"
    }
  });

// const img = document.querySelector("#img")
// img.addEventListener("click" , ()=>{
//   const storage = getStorage();

//   // Create a reference to 'mountains.jpg'
//   const mountainsRef = ref(storage, 'mountains.jpg');
  
//   // Create a reference to 'images/mountains.jpg'
//   const mountainImagesRef = ref(storage, 'images/mountains.jpg');
  
//   // While the file names are the same, the references point to different files
//   mountainsRef.name === mountainImagesRef.name;           // true
//   mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
// })
 const logout = document.querySelector("#logout")
 logout.addEventListener("click",()=>{

signOut(auth).then(() => {
  window.location="index.html"
  
}).catch((error) => {
  console.log(error);
  
});
 })