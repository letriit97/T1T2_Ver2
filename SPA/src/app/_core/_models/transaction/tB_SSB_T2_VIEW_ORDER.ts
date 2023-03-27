import { TB_SSB_T2_ORDER } from "@models/common/t2/tb-ssb-t2-order";
import { PaginationResult } from "../../_helpers/utilities/pagination-utility";

export interface TB_SSB_T2_VIEW_ORDER {
    tB_SSB_T2_ORDER: PaginationResult<TB_SSB_T2_ORDER>;
    // T1資材
    t1Material: boolean;
    // T1採購員
    t1Purchase: boolean;
    // T1資材主管
    t1MaterialManager: boolean;
}