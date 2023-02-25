import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('@modules/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
    data: { breadcrumb: 'Module.Administration' },
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
    data: { breadcrumb: 'Module.Home' },
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
