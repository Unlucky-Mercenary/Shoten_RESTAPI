import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberPageComponent} from './member-page/member-page.component'


const routes: Routes = [
  { path: 'detail/:name', component: MemberPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
