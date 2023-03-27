import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RolesContants {
  navRoles: NavRole[] = [
    {
      seq: '1.',
      name: 'Auth.Roles.Menu_Maintain',
      unique: 'Maintain',
      url: '/basic-setting',
      icon: 'fa fa-cogs',
      roles: [
        {
          seq: '1.0.1',
          name: 'Auth.Roles.Menu_PermissionSetting',
          unique: 'PermissionSetting',
          url: '/basic-setting/permission-setting',
        },
        {
          seq: '1.1.1',
          name: 'Auth.Roles.Menu_T2SupplierSetting',
          unique: 'T2SupplierSetting',
          url: '/basic-setting/t2-supplier-setting',
        },
        {
          seq: '1.1.2',
          name: 'Auth.Roles.Menu_T2SupplierContactSetting',
          unique: 'T2SupplierContactSetting',
          url: '/basic-setting/t2-supplier-contact-setting',
        },
        {
          seq: '1.1.3',
          name: 'Auth.Roles.Menu_ParameterSetting',
          unique: 'SystemParameterProfile',
          url: '/basic-setting/order-manual-close',
        },
        {
          seq: '1.1.4',
          name: 'Auth.Roles.Menu_T2SupplierUOFUserSetting',
          unique: 'T2SupplierUOFUserSetting',
          url: '/basic-setting/t2-supplier-uof-user-setting',
        },
        {
          seq: '1.1.5',
          name: 'Auth.Roles.Menu_T2SupplierFeedbackSetting',
          unique: 'T2SupplierFeedbackSetting',
          url: '/basic-setting/t2-supplier-feedback-setting',
        },
        {
          seq: '1.1.6',
          name: 'Auth.Roles.Menu_MailSetting',
          unique: 'TestC',
          url: '/basic-setting/mail-setting',
        },
        {
          seq: '1.2.1',
          name: 'Auth.Roles.Menu_T1ToolingSetting',
          unique: 'T1ToolingSetting',
          url: '/basic-setting/t1-tooling-setting',
        },
        {
          seq: '1.2.2',
          name: 'Auth.Roles.Menu_ToolingFamiliy',
          unique: 'T1ToolingRelationship',
          url: '/basic-setting/tooling-family',
        },
        {
          seq: '1.2.3',
          name: 'Auth.Roles.Menu_T1ToolingStockOwnership',
          unique: 'T1ToolingStockOwnership',
          url: '/basic-setting/tooling-stock-ownership',
        },
      ],
    },
    {
      seq: '2.',
      name: 'Auth.Roles.Menu_Transaction',
      unique: 'Transaction',
      url: '/transaction',
      icon: 'fa fa-balance-scale',
      roles: [
        {
          seq: '2.1.1',
          name: 'Auth.Roles.Menu_T1ToolingApply',
          unique: 'T1ToolingApply',
          url: '/transaction/t1-tooling-apply',
        },
        {
          seq: '2.1.2',
          name: 'Auth.Roles.Menu_T1ToolingApplyConfirm',
          unique: 'T1ToolingApplyConfirm',
          url: '/transaction/t1-tooling-apply-confirm',
        },
        {
          seq: '2.1.3',
          name: 'Auth.Roles.Menu_T1ToolingFactoryConfirm',
          unique: 'T1ToolingFactoryConfirm',
          url: '/transaction/t1-tooling-factory-confirm',
        },
        {
          seq: '2.1.4',
          name: 'Auth.Roles.Menu_T1ToolingApplyDelivery',
          unique: 'T1ToolingApplyDelivery',
          url: '/transaction/t1-tooling-apply-delivery',
        },
        {
          seq: '2.2.1',
          name: 'Auth.Roles.Menu_T1ToolingReceiptConfirm',
          unique: 'T1ToolingReceiptConfirm',
          url: '/transaction/t1-tooling-receipt-confirm',
        },
        {
          seq: '2.2.2',
          name: 'Auth.Roles.Menu_T1ToolingInPlantTransfer',
          unique: 'T1ToolingInPlantTransfer',
          url: '/transaction/t1-tooling-in-plant-transfer',
        },
        {
          seq: '2.3.1',
          name: 'Auth.Roles.Menu_CustToolingSetting',
          unique: 'STATIC',
          url: '/transaction/cust-tooling-setting',
        },
        {
          seq: '2.3.1',
          name: 'Auth.Roles.Menu_T2ToolingSetting',
          unique: 'T2ToolingSetting',
          url: '/transaction/t2-tooling-setting',
        },
        {
          seq: '2.3.2',
          name: 'Auth.Roles.Menu_T2DeliveryDate',
          unique: 'T2DeliveryDate',
          url: '/transaction/t2-delivery-date',
        },
        {
          seq: '2.3.3',
          name: 'Auth.Roles.Menu_T1DeliveryDate',
          unique: 'T1DeliveryDate',
          url: '/transaction/t1-delivery-date',
        },
        {
          seq: '2.3.4',
          name: 'Auth.Roles.Menu_OrderClose',
          unique: 'OrderClose',
          url: '/transaction/order-close',
        },
        {
          seq: '2.3.5',
          name: 'Auth.Roles.Menu_T2ProductionMaintenance',
          unique: 'T2ProductionMaintenance',
          url: '/transaction/t2-production-maintenance',
        },
        {
          seq: '2.3.6',
          name: 'Auth.Roles.Menu_T2B3_1',
          unique: 'STATIC',
          url: '/transaction/t2-delivery',
        },
        {
          seq: '2.4.1',
          name: 'Auth.Roles.Menu_WMSWriteBack',
          unique: 'STATIC',
          url: '/transaction/wms-write-back',
        },
      ],
    },
    {
      seq: '3.',
      name: 'Auth.Roles.Menu_Kanban',
      unique: 'Kanban',
      url: '/kanban',
      icon: 'fa fa-desktop',
    },
    {
      seq: '4.',
      name: 'Auth.Roles.Menu_Report',
      unique: 'Report',
      url: '/report',
      icon: 'fa fa-newspaper-o',
      roles: [
        { 
          seq: '4.1.1',
          name: 'Auth.Roles.Menu_ToolingManagementReport',
          unique: 'STATIC',
          url: '/report/tooling-management-report',
        },
        {
          seq: '4.1.2',
          name: 'Auth.Roles.Menu_T1T2SalesReport',
          unique: 'T1T2SalesReport',
          url: '/report/t1-t2-sales-report',
        },
        {
          seq: '4.1.3',
          name: 'Auth.Roles.Menu_T2ProductionReport',
          unique: 'T2ProductionReport',
          url: '/report/t2-production-report',
        },
      ],
    },
    {
      seq: '5.',
      name: 'Auth.Roles.Menu_Query',
      unique: 'Query',
      url: '/query',
      icon: 'fa fa-search',
      roles: [
        {
          seq: '5.1.1',
          name: 'Auth.Roles.Menu_T1ToolingStock',
          unique: 'T1ToolingStock',
          url: '/query/t1-tooling-stock',
        },
        {
          seq: '5.1.2',
          name: 'Auth.Roles.Menu_T1T2Contrast',
          unique: 'STATIC',
          url: '/query/t1-t2-contrast',
        },
      ],
    },
  ];
}

interface NavRole {
  seq?: string;
  name?: string;
  unique?: string;
  url?: string;
  roles?: NavRole[];
  icon?: string;
}
