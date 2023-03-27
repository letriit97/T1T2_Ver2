export interface T2SupplierMappingUOFUserSettingDetailDto {
  id: string;
  bu: string;
  supplier_Group: string;
  supplier_Group_Name: string;
  uofUserList: string[];
  underDatas: UnderData[];
}

export interface UnderData {
  id: string;
  factory_Code: string;
  supplier_NO: string;
  supplierNOList: string;
  factoryCodeList: string;
  enableTimeList: string;
  statusList: string;
  status: boolean;
}
