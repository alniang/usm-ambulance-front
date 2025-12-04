// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Configuration Firebase
  firebase : {
    projectId: "usm-ambulances", 
    appId: "1:598488537284:web:5fce1e1d27bbf1a84a9191", 
    storageBucket: "usm-ambulances.firebasestorage.app", 
    apiKey: "AIzaSyDCkvGcKHcytzFtskRCtOKWNw9PtWen4Bk", 
    authDomain: "usm-ambulances.firebaseapp.com", 
    messagingSenderId: "598488537284"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
