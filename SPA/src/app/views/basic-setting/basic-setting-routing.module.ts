import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'permission-setting',
  //   canLoad: [PermissingSettingGuard],
  //   loadChildren: () => import('./permissing-setting/permissing-setting.module')
  //     .then((m) => m.PermissingSettingModule),
  // },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicSettingRoutingModule { }
