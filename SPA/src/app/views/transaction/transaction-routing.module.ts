import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 't1-tooling-apply',
  //   canLoad: [T1ToolingApplyGuard],
  //   loadChildren: () => import('./t1-tooling-apply/t1-tooling-apply.module')
  //     .then(m => m.T1ToolingApplyModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule { }
