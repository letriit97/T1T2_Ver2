import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ToolingManagementReportRoutingModule } from './tooling-management-report-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToolingManagementReportRoutingModule,
    TranslateModule
  ]
})
export class ToolingManagementReportModule { }
