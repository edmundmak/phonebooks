import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { appReducers } from './store/reducers/app.reducers';
import { PhonebookEffects } from './store/effects/phonebook.effects';
import { PhoneBookService } from './services/phonebook.service';
import { environment } from 'src/environments/environment';
import { GetPhoneBookComponent } from './get-phone-book/get-phone-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';

import { CreateentryComponent } from './createentry/createentry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    GetPhoneBookComponent,
    CreateentryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PhonebookEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [PhoneBookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
