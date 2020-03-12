import('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
import('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: "75066325138"
});
const messaging = firebase.messaging();