import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NpcService } from './npcs/npc.service';
import { NpcsComponent } from './npcs/npcs.component';
import { NpcComponent } from './npcs/npc.component';

import { CallbackComponent } from './auth/callback.component';
import { AuthService } from './auth/auth.service';

import { PinsService } from './pins/pins.service';
import { PinsComponent } from './pins/pins.component';
import { PinComponent } from './pins/pin.component';
import { CreateNpcFromPinComponent } from './pins/create-npc-from-pin/create-npc-from-pin.component';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatChipsModule
];

const appRoutes: Routes = [
  { path: 'npcs', component: NpcsComponent },
  { path: 'pins', component: PinsComponent },
  { path: '**', component: NpcsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NpcsComponent,
    PinsComponent,
    NpcComponent,
    CallbackComponent,
    PinComponent,
    CreateNpcFromPinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ...MATERIAL_COMPONENTS,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [NpcService, AuthService, PinsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
