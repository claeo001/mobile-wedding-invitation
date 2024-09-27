import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyDUjehsuXt68q42vQD7R8FPcWEXl64owpE",
    authDomain: "mobile-invitation-3c709.firebaseapp.com",
    databaseURL: "https://mobile-invitation-3c709-default-rtdb.firebaseio.com",
    projectId: "mobile-invitation-3c709",
    storageBucket: "mobile-invitation-3c709.appspot.com",
    messagingSenderId: "297674949769",
    appId: "1:297674949769:web:a2a27d41eda77154f0f258"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
