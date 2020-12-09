import {Injectable} from '@angular/core';
import {of, throwError} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users = [
    {
      username: 'john',
      password: '5532'
    },
    {
      username: 'tammy',
      password: '3451'
    }
  ];

  constructor() {
  }

  authenticate(username: string, password: string) {
    username = username.toLowerCase();
    const user = this.users.find(u => u.username == username);
    if (user && user.password === password) {
      return of({
        username: user.username,
        loggedIn: true
      });
    }
    return throwError('Invalid username or password').pipe(delay(500));
  }
}
