import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import {MatButtonModule, MatCardModule, MatToolbarModule, MatListModule, MatTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NpcService } from './npcs/npc.service';
import { NpcsComponent } from './npcs/npcs.component';
import { PinsComponent } from './pins/pins.component';
import { NpcComponent } from './npcs/npc.component';
import { CallbackComponent } from './auth/callback.component';
import { AuthService } from './auth/auth.service';



const appRoutes: Routes = [
  { path: 'npcs', component: NpcsComponent },
  { path: 'home',      component: NpcsComponent },
  { path: '**', component: NpcsComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    NpcsComponent,
    PinsComponent,
    NpcComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [NpcService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
