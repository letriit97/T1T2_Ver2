import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T2ToolingStatusMaintainGuard } from '@guards/transaction/t2-tooling-status-maintain.guard';
import { TransactionRoutingModule } from './transaction-routing.module';
import { T1ToolingApplyDeliveryGuard } from '@guards/transaction/t1-tooling-apply-delivery.guard';
import { ProductionMaintenanceGuard } from '@guards/transaction/production-maintenance.guard';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    T1ToolingApplyDeliveryGuard,
    T2ToolingStatusMaintainGuard,
    ProductionMaintenanceGuard,
  ],
})
export class TransactionModule { }
