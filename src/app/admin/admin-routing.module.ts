import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SitesComponent } from './sites/sites.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'sites', component: SitesComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
