import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateentryComponent } from './createentry/createentry.component';

import { GetPhoneBookComponent } from './get-phone-book/get-phone-book.component';

const routes: Routes = [
  { path: 'phonebooks', component: GetPhoneBookComponent },
  { path: '', redirectTo: '/phonebooks', pathMatch: 'full' },
  { path: 'createentry', component: CreateentryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
