import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { AuthStateModel, Login, Logout } from './../../state/auth-state-model';
import { AuthState } from './../../state/auth-state';
import { Action, Actions, Selector, StateContext, Store } from '@ngxs/store';
import { State } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { versions } from 'process';
import { state } from '@angular/animations';

@Component({
  selector: 'app-login-ngxs',
  templateUrl: './login-ngxs.component.html',
  styleUrls: ['./login-ngxs.component.css']
})
export class LoginNgxsComponent{
  username: string;
  password: string;
  
  // !Replace with store observables!
  loggedIn$: Observable<boolean>;
  username$: Observable<string>;
  @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
    return !!versions;
  }

  // !Replace with store observables!

  constructor(private store: Store){
    this.loggedIn$ = this.store.select(state => state.auth.loggedIn);
    this.username$ = this.store.select(state => state.auth.username);
  }

  doLogin() {
    this.store.dispatch(new Login({username: this.username, password: this.password}))
  }

  logout() {
    this.store.dispatch(new Logout)
  }
}
