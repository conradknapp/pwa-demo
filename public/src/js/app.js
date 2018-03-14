if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("sw registered"));
}
