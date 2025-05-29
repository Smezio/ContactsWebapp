export const environment = {
    apiUrl : 'https://contactswebapp-api.onrender.com/api',

    // Auth0 service
    auth: {
        domain : 'ricsme.eu.auth0.com',
        clientId : 'A9wEDaqS93KMvYoSGRLJKdVE0xtIv2AI',
        audience: 'https://contactswebapp-api.onrender.com/api',
        
        redirectUri : 'https://contacts-webapp-angular.vercel.app/dashboard',
        returnTo : 'https://contacts-webapp-angular.vercel.app/'
    }
};
