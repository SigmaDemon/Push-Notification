import * as firebase from "firebase";

export const initializeFirebase = () => {
    const config = {
    };
    firebase.initializeApp(config);
}

export const askForPermissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log("token :", token);
        localStorage.setItem("notification=token", token);

        return token;
      } catch (error) {
          console.
          error(error);
      }
};