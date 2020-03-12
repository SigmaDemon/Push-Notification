export default function register(config) {

  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {

    window.addEventListener("load", () => {
      const swURL = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. It checks whether a service worker exists or not.
        checkValidServiceWorker(swURL, config);

        // Add some additional logging to localhost, pointing developers to the 
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(registration => {
          // firebase.messaging().useServiceWorker(registration);
          console.log(
            "This dashboard application served cache-first by a service " +
            "worker."
          );
        });
      } else {
        // If it is not localhost, then just register the service worker
        registerValidSW(swURL, config);
      }
    });
  }
}