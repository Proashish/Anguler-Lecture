import { Routes } from '@angular/router';

import { Login } from './login/login';
import { HomeComp } from './home-comp/home-comp';
import { AboutComp } from './about-comp/about-comp';
import { ContactComp } from './contact-comp/contact-comp';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './dashboard/setting/setting';

import { ProductComp } from './product-comp/product-comp';

export const routes: Routes = [

  // { path: '', component: HomeComp },
  // { path: 'about', component: AboutComp },
  // { path: 'contact', component: ContactComp },
  // { path: 'login', component: Login },

  // {
  //   path: 'dashboard',
  //   component: Dashboard,
  //   children: [
  //     { path: '', redirectTo: 'profile', pathMatch: 'full' },
  //     { path: 'profile', component: Profile },
  //     { path: 'setting', component: Setting },
  //   ]
  // },

  { path: 'product/:id', component: ProductComp }

];