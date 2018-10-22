//Register serviceworker
export default function registerServiceWorker() {
  if(!navigator.serviceWorker) return;

  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log('Error' + error);
  });
}

