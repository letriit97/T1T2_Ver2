import { TB_SSB_T2_SUPPLIER_GROUP_MAP_UOF } from "./tb-ssb-t2-supplier-group-map-uof";
import { TB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR } from "./tb-ssb-t2-supplier-group-map-vendor";

export interface TB_SSB_T2_SUPPLIER_GROUP {
  bu: string;
  supplier_Group: string;
  supplier_Group_Name: string;
  created_By: string;
  create_Time: string | null;
  updated_By: string;
  update_Time: string | null;
  tB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR: TB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR[];
  tB_SSB_T2_SUPPLIER_GROUP_MAP_UOF: TB_SSB_T2_SUPPLIER_GROUP_MAP_UOF[];
}
