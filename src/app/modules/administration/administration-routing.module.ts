import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { ListCompaniesComponent } from './pages/list-companies/list-companies.component';
import { ChangePasswordModalComponent } from './pages/list-users/change-password-modal/change-password-modal.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { UsersModalComponent } from './pages/list-users/users-modal/users-modal.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'list-users',
        component: ListUsersComponent,

      },
      {
        path: 'list-companies',
        component: ListCompaniesComponent,
      },
      {
        path: 'user-modal',
        component: UsersModalComponent,
      },
      {
        path: 'password-modal:id',
        component: ChangePasswordModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
