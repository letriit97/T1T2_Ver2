import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './_core/_guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'T2 System'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'basic-setting',
        loadChildren: () => import('./views/basic-setting/basic-setting.module')
          .then(m => m.BasicSettingModule),
      },
      {
        path: 'transaction',
        loadChildren: () => import('./views/transaction/transaction.module')
          .then(m => m.TransactionModule)
      },
      {
        path: 'kanban',
        loadChildren: () => import('./views/kanban/kanban.module')
          .then(m => m.KanbanModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./views/report/report.module')
          .then(m => m.ReportModule)
      },
      {
        path: 'query',
        loadChildren: () => import('./views/query/query.module')
          .then(m => m.QueryModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
