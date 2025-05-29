import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { AuthService } from '@auth0/auth0-angular';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes)
  ]
};

// Provide solution for Auth0 issue
const provideMockServiceForSSRConfig: ApplicationConfig = {
  providers: [{
    provide: AuthService,
    useValue: {},
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig, provideMockServiceForSSRConfig);
