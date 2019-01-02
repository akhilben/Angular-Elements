import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
   declarations: [
      AppComponent,
      WeatherComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
//    bootstrap: [
//       AppComponent
//    ],
   entryComponents: [WeatherComponent]
})
export class AppModule {

        constructor(private injector: Injector) {
                const el = createCustomElement(WeatherComponent, { injector: this.injector });
                customElements.define('weather-element', el);
         }

        ngDoBootstrap() {
              }
}
