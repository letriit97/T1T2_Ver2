import { TB_SSB_T2_SUPPLIER_GROUP } from "./tb-ssb-t2-supplier-group";
import { TB_SSB_T2_SUPPLIER } from "./tb-ssb-t2-supplier";

export interface TB_SSB_T2_SUPPLIER_GROUP_MAP_VENDOR {
  bu: string;
  supplier_Group: string;
  factory_Code: string;
  supplier_NO: string;
  supplier_ID: string;
  created_By: string;
  create_Time: string | null;
  updated_By: string;
  update_Time: string | null;
  tB_SSB_T2_SUPPLIER_GROUP: TB_SSB_T2_SUPPLIER_GROUP[];
  tB_SSB_T2_SUPPLIER: TB_SSB_T2_SUPPLIER[];
}
