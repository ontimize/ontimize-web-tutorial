import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { APP_CONFIG, ONTIMIZE_PROVIDERS, O_INPUTS_OPTIONS, OntimizeWebModule } from 'ontimize-web-ngx';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';

// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [
  // { provide: O_INPUTS_OPTIONS, useValue: { iconColor: 'accent' } }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OntimizeWebModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }
