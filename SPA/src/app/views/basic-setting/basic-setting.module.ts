import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSettingRoutingModule } from './basic-setting-routing.module';
import { SupplierFeedbackMaintainGuard } from '@guards/basic-setting/supplier-feedback-maintain.guard';
import { OrderManualCloseGuard } from '@guards/basic-setting/order-manual-close.guard';
import { MailSettingGuard } from '@guards/basic-setting/mail-setting.guard';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BasicSettingRoutingModule,
    TranslateModule,
  ],
  providers: [
    SupplierFeedbackMaintainGuard,
    OrderManualCloseGuard,
    MailSettingGuard
  ]
})
export class BasicSettingModule { }
