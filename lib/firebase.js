import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnMTGfRBzkn6n-wmTVTQokf2Ygxy7Oz9o",
  authDomain: "webappstore-4c0a1.firebaseapp.com",
  projectId: "webappstore-4c0a1",
  storageBucket: "webappstore-4c0a1.appspot.com",
  messagingSenderId: "272890245544",
  appId: "1:272890245544:web:d74c4c414f69c03c9cad9d",
  measurementId: "G-CL1EKG60G4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
 export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
