export const API_URL = 'http://localhost:5000';
export const environment = {
  production: true,
  auth0: {
    url: 'capstone-agency.eu', // the auth0 domain prefix
    audience: 'http://localhost:5000', // the audience set for the auth0 app
    clientId: 'cS4oMOvh2bJBdM1i4owjsJVoTqOHHd7C', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application. 
  }
};
