import { TB_SSB_T2_MOULD } from "@models/common/t2/tb-ssb-t2-mould";
import { TB_SSB_T2_MOULD_SIZE } from "@models/common/t2/tb-ssb-t2-mould-size";

export interface MouldViewModel extends TB_SSB_T2_MOULD {
    stock_Supplier_NO: string;
    check: boolean;
    mould_size: TB_SSB_T2_MOULD_SIZE[];
    total : number;
}