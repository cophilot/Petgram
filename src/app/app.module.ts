import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { ProposalsComponent } from './proposals/proposals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetCardComponent,
    ProposalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
