import { TB_SSB_T2_ORDER_DETAIL } from "@models/common/t2/tb-ssb-t2-order-detail";
import { TB_SSB_T2_ORDER } from "@models/common/t2/tb-ssb-t2-order";
import { TB_SSB_T2_PRODUCTION } from "@models/common/t2/tb-ssb-t2-production";

export interface ProductionMaintenanceAddDetail {
    tB_SSB_T2_PRODUCTION: TB_SSB_T2_PRODUCTION;
    tB_SSB_T2_ORDER_DETAIL_Dto: TB_SSB_T2_ORDER_DETAILDto[];
    tB_SSB_T2_ORDER: TB_SSB_T2_ORDER;
    remainingQty: number | null;
    operation_T2Production_Qty: number;
    t2RemainingQty: number;
}

export interface TB_SSB_T2_ORDER_DETAILDto extends TB_SSB_T2_ORDER_DETAIL {
    remainingQty: number;
    operation_T2Production_Qty: number; 
    t2RemainingQty: number;
}