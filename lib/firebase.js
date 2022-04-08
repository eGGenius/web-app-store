// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDnMTGfRBzkn6n-wmTVTQokf2Ygxy7Oz9o",
      authDomain: "webappstore-4c0a1.firebaseapp.com",
      projectId: "webappstore-4c0a1",
      storageBucket: "webappstore-4c0a1.appspot.com",
      messagingSenderId: "272890245544",
      appId: "1:272890245544:web:d74c4c414f69c03c9cad9d",
      measurementId: "G-CL1EKG60G4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);