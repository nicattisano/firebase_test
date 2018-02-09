import * as firebase from 'firebase';
{/* <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script> */}
{/* Initialize Firebase */}

   var devConfig = {
    apiKey: "AIzaSyAxNdanmuLqWKbMO6s-Qel9U7SxSxQFN18",
    authDomain: "my-dev-metrics-project.firebaseapp.com",
    databaseURL: "https://my-dev-metrics-project.firebaseio.com",
    projectId: "my-dev-metrics-project",
    storageBucket: "",
    messagingSenderId: "61219764415"
  };

  const prodConfig = {
    apiKey: "AIzaSyA_tAF3CiDDbKRqCDJX2gJPftcDYgoRs9Y",
    authDomain: "my-metrics-project.firebaseapp.com",
    databaseURL: "https://my-metrics-project.firebaseio.com",
    projectId: "my-metrics-project",
    storageBucket: "my-metrics-project.appspot.com",
    messagingSenderId: "965045967621"
  };

  const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    const auth = firebase.auth();

    export {
      auth,
    };
