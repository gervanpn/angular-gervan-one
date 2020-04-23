import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

{
  path: 'men',
  component: MenComponent
},
{
  path: 'women',
  component: WomenComponent
},
{
  path: 'kids',
  component: KidsComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  redirectTo: '/men',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/men',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
