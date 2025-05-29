export const environment = {
    apiUrl : 'http://localhost:8080/api',

    // Auth0 service
    auth: {
        domain : 'ricsme.eu.auth0.com',
        clientId : 'A9wEDaqS93KMvYoSGRLJKdVE0xtIv2AI',
        audience: 'http://localhost:8080/api',

        redirectUri : 'http://localhost:4200/dashboard',
        returnTo : 'http://localhost:4200'
    }
    
};
