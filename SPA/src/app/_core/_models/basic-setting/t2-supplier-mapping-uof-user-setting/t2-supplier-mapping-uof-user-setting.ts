export interface T2SupplierMappingUOFUserSettingDto {
  bu: string;
  supplier_Group: string;
  supplier_Group_Name: string;
  uoF_Account: string;
  updated_By: string;
  update_Time: string | null;
  created_By: string;
  create_Time: string | null;
  t2_Supplier_No_CN: string;
  t2_Supplier_No_LC: string;
  t2_Supplier_No_EN: string;
  date_By_Lang: string;
  t2_Supplier_No_Split_CN: string[];
  t2_Supplier_No_Split_LC: string[];
  t2_Supplier_No_Split_EN: string[];
  uoF_Account_Split: string[];
}
