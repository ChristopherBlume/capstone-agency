export const API_URL = 'https://cap-agent-backend.herokuapp.com/';
export const environment = {
  production: true,
  auth0: {
    url: 'capstone-agency.eu', // the auth0 domain prefix
    audience: 'http://localhost:5000', // the audience set for the auth0 app
    clientId: 'cS4oMOvh2bJBdM1i4owjsJVoTqOHHd7C', // the client id generated for the auth0 app
    callbackURL: 'https://cap-agent-frontend.herokuapp.com/home', // the base url of the running ionic application. 
  }
};
