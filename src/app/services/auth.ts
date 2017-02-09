import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreHelper } from './store-helper';
import { Store } from '../store';
import { ApiService } from './api';
import 'rxjs/Rx';


@Injectable()
export class AuthService implements CanActivate {

  JWT_KEY: string  = 'keeper_token';
  JWT: string = '';

  constructor(
    private router: Router,
    private store: Store,
    private storeHelper: StoreHelper,
  ) {
    const token = window.localStorage.getItem(this.JWT)

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
}
