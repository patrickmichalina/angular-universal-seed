import { CookieService } from './shared/services/cookie.service';
import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(cookieSer: CookieService) {
    cookieSer.set('asd', {thing:1});
    console.log(cookieSer.get('asd'));
  }
}
