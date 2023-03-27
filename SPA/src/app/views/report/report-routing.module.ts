import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tooling-management-report',
    loadChildren: () => import('./tooling-management-report/tooling-management-report.module')
      .then(m => m.ToolingManagementReportModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
