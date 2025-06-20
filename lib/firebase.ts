import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCQLyBpVd4_brblp168KZxmqpy2TYghi_w",
  authDomain: "b4b-app-463412.firebaseapp.com",
  projectId: "b4b-app-463412",
  storageBucket: "b4b-app-463412.appspot.com",
  messagingSenderId: "400599370111",
  appId: "1:400599370111:web:8e360f0a4f54e1a12e2f3a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
