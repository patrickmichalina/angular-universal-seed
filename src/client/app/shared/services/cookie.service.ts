import { PlatformService } from './platform.service';
import { Injectable } from '@angular/core';
import { set, get, remove, CookieAttributes } from 'js-cookie';

export interface ICookieService {
  getAll(): any;
  get(name: string): any;
  set(name: string, value: any, options?: CookieAttributes): void;
  remove(name: string, options?: CookieAttributes): void;
}

@Injectable()
export class CookieService implements ICookieService {
  constructor(private platformService: PlatformService) {}

  public set(name: string, value: any, options?: CookieAttributes): void {
    if (this.platformService.isBrowser) {
      set(name, value, options);
    } else {
      // TODO: server side cookie handling
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
      // TODO: server side cookie handling
    }
  }

  public getAll(): any {
    if (this.platformService.isBrowser) {
      return get();
    } else {
      // TODO: server side cookie handling
    }
  }
}
