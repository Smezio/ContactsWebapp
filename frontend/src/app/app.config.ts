import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: environment.auth.redirectUri,
        audience: environment.auth.audience,
        scope: 'openid profile email offline_access read:contacts delete:contacts write:contacts',
      },
      httpInterceptor: {
        allowedList: [{
          uri: environment.auth.audience+'/*',
          tokenOptions: {
            authorizationParams: {
              audience: environment.auth.audience,
              scope: 'openid profile email offline_access read:contacts delete:contacts write:contacts',
            }
          }
        }]
      }
    }),
  ]
};
