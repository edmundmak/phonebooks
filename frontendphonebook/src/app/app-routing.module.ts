import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [ {path: 'login',
loadChildren: () => import('./login/login.module')
    .then(m => m.LoginModule),
pathMatch: 'full',
},

{path: 'home',
loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule),
pathMatch: 'full',
},
{ path: '', redirectTo: '/login', pathMatch: 'full' },

{path: 'addbook',
loadChildren: () => import('./addbook/add-book.module')
    .then(m => m.AddBookModule),
pathMatch: 'full',
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
