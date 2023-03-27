import { TB_SSB_T2_ORDER } from "@models/common/t2/tb-ssb-t2-order";
import { TB_SSB_T2_PRODUCTION } from "@models/common/t2/tb-ssb-t2-production";


export interface ProductionMaintenance {
    list_TB_SSB_T2_PRODUCTION: TB_SSB_T2_PRODUCTION[];
    tB_SSB_T2_ORDER: TB_SSB_T2_ORDER;
    po: string;
    pur_NO: string;
    batch: string;
}