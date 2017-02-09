import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreHelper } from './store-helper';
import { Store } from '../store';
import { ApiService } from './api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class AuthService implements CanActivate {

  JWT_KEY: string  = 'keeper_token';
  JWT: string = '';

  constructor(
    private router: Router,
    private store: Store,
    private storeHelper: StoreHelper,
    private api: ApiService,
  ) {
    const token = window.localStorage.getItem(this.JWT)

    if (token) {
      this.setJwt(token);
    }
  }

  setJwt(jwt: string) {
    // set the authorization header
    this.api.setHeaders({Authorization: `Bearer ${jwt}`});
    window.localStorage.setItem(this.JWT_KEY, jwt);
  }

  isAuthorized(): boolean {
    return Boolean(this.JWT);
  }

  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  // Redirect to auth if user can not authenticate
  onCanActivate(canActivate: boolean) {
    if (!canActivate) {
      this.router.navigate(['','auth']);
    }
  }

  authenticate(path, credentials): Observable<any> {
    return this.api.post(`/${path}`, credentials)
    .do((res: any) => this.setJwt(res.token))
    .do((res: any) => this.storeHelper.update('user', res.data))
    .map((res: any) => res.data);
  }
}
