import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { jwtInterceptor } from '../jwt.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(withFetch(), withInterceptors([jwtInterceptor]))
  ]
};
