import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { PinsService } from './pins/pins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public auth: AuthService, private pins: PinsService) {
    auth.handleAuthentication();
  }

}
