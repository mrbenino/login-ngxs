import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Action, Actions, Selector, State, StateContext } from '@ngxs/store';
import { AuthStateModel, Login, Logout } from './auth-state-model';
import { LoginNgxsComponent } from '../components/login-ngxs/login-ngxs.component';
import { AuthenticationService } from '../services/authentication.service';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';


@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        loggedIn: false,
        username: null
    }
})
@Injectable()
export class AuthState {
    @Selector()
        static isAuthenticated(state: AuthStateModel): boolean {
        return !!state.loggedIn;
    }    

    constructor(private AuthService: AuthenticationService){}

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login){
        console.log(action);
        return this.AuthService.authenticate( action.payload.username, action.payload.password).pipe(
            tap(result => {
                console.log(result);
                ctx.patchState({
                    loggedIn:  result.loggedIn,
                    username:  result.username
                })
                console.log(ctx.getState());
            })
        )
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
        const state = ctx.getState();
        ctx.setState({
            loggedIn: false,
            username: null
        });
        console.log(ctx.getState());
    }


}
