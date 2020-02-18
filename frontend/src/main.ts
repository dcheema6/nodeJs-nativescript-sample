import { enableProdMode } from '@angular/core';
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
