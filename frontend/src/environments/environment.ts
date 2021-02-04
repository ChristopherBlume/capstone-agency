// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const API_URL = 'http://localhost:5000';

export const environment = {
  production: false,
  auth0: {
    url: 'capstone-agency.eu', // the auth0 domain prefix
    audience: 'http://localhost:5000', // the audience set for the auth0 app
    clientId: 'cS4oMOvh2bJBdM1i4owjsJVoTqOHHd7C', // the client id generated for the auth0 app
    callbackURL: 'https://cap-agent-backend.herokuapp.com/', // the base url of the running ionic application. 
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
