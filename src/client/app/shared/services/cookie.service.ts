import { REQUEST } from '@nguniversal/express-engine/tokens';
import { PlatformService } from './platform.service';
import { Injectable, Injector } from '@angular/core';
import { set, get, remove, CookieAttributes } from 'js-cookie';

export interface ICookieService {
  getAll(): any;
  get(name: string): any;
  set(name: string, value: any, options?: CookieAttributes): void;
  remove(name: string, options?: CookieAttributes): void;
}

@Injectable()
export class CookieService implements ICookieService {
  constructor(private platformService: PlatformService, private injector: Injector) {}

  public set(name: string, value: any, options?: CookieAttributes): void {
    if (this.platformService.isBrowser) {
      set(name, value, options);
    }
  }

  public remove(name: string, options: CookieAttributes): void {
    if (this.platformService.isBrowser) {
      remove(name, options);
    } else {
      // TODO: server side cookie handling
    }
  }

  public get(name: string): any {
    if (this.platformService.isBrowser) {
      return get(name);
    } else {
      const req = this.injector.get(REQUEST);
      if (req) return req.cookies[name];
    }
  }

  public getAll(): any {
    if (this.platformService.isBrowser) {
      return get();
    } else {
      const req = this.injector.get(REQUEST);
      if (req) return req.cookies;
    }
  }
}
