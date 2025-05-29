import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAuth0({
      domain: 'ricsme.eu.auth0.com',
      clientId: 'MhSsleJHNIXHOf32gpsYVwSacaJp97k7',
      authorizationParams: {
        redirect_uri: environment.redirectUri // NON FUNZIONA!
      }
    }),
  ]
};
