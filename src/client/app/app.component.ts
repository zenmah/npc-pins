import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { PinsService } from './pins/pins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'npc-pins';

  constructor(public auth: AuthService, private pins: PinsService) {
    auth.handleAuthentication();
  }

}
