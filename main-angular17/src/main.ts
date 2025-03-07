import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import microApp from '@micro-zoe/micro-app'

microApp.start({
  excludeAssetFilter (assetUrl) {
    return assetUrl.includes('styles.css')
  }
})
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
