import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alert: AlertifyService) {}
  canActivate(): boolean  {
    if (this.authService.loggedIn()){
      return true;
    }
    this.alert.error('You cannot get to this route');
    this.router.navigate(['/home']);
    return false;
  }
}
