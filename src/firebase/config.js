import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDdIpAfjHbvhANPJ0D9nbfbzWL-o4kuWh8',
  authDomain: 'mashipa-ecommerce.firebaseapp.com',
  projectId: 'mashipa-ecommerce',
  storageBucket: 'mashipa-ecommerce.appspot.com',
  messagingSenderId: '918006541757',
  appId: '1:918006541757:web:4268659684d63130a676d4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default async () => app;
