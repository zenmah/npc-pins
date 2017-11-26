import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatListModule, MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NpcService } from './npcs/npc.service';
import { NpcsComponent } from './npcs/npcs.component';
import { PinsComponent } from './pins/pins.component';
import { NpcComponent } from './npcs/npc.component';



@NgModule({
  declarations: [
    AppComponent,
    NpcsComponent,
    PinsComponent,
    NpcComponent
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
    HttpClientModule
  ],
  providers: [NpcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
