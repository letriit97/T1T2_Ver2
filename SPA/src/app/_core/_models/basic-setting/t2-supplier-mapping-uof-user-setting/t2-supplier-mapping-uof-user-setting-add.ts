import { TB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR } from "./tb-ssb-t2-supplier-group-map-vendor";

export interface T2SupplierUOFUserSettingAdd extends TB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR {
  supplier_Group_Name: string;
  supplierNOList: string[];
  factoryCodeList: string[];
  enableTimeList: string[];
  statusList: string[];
  uofUserList: string[];
  edit: boolean;
  oldBU: string;
  oldSupplierGroup: string;
}
