import { TB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR } from './tb-ssb-t2-supplier-group-map-vendor';

export interface TB_SSB_T2_SUPPLIER {
  factory_Code: string;
  supplier_ID: string;
  supplier_NO: string;
  supplier_CNName: string;
  supplier_ENName: string;
  supplier_LCName: string;
  updated_By: string;
  update_Time: string | null;
  created_By: string;
  create_Time: string | null;
  status: string;
  category: string;
  mail: string;
  sSB_Mail: string;
  t1_Other: string;
  enabled_Time: string | null;
  tB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR: TB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR[];
  supplier_Name: string;
}
