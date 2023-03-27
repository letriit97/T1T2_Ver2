import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolingStockGuard } from '@guards/query/tooling-stock.guard';

const routes: Routes = [
  // {
  //   path: 't1-tooling-stock',
  //   canLoad: [ToolingStockGuard],
  //   loadChildren: () => import('./tooling-stock/tooling-stock.module').then(m => m.ToolingStockModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
