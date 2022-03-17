import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
   
  { path: '', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
