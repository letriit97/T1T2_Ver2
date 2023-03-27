import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   component: ToolingManagementReportMainComponent,
  //   data: {
  //     title: '4.1.1 Tooling Management Report'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolingManagementReportRoutingModule { }
