import { Injector } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { CookieService } from './shared/services/cookie.service';
import { Component, Inject } from '@angular/core';
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
}
