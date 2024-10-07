import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),
//We are building a provider. Version 2.2.0 of package doesn't provide one.
{
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          //Remove the .apps.googleusercontent.com from the client id
          //MAKE SURE TO HIDE IT FROM GITHUB
          "1009337204891-r1cqpb1p0m9a9cosmb22fkg5gt7u79qn"
        ),
      },
    ],
    onError: (err) => {
      debugger;
      console.error(err);
    },
  } as SocialAuthServiceConfig,
}]


};
