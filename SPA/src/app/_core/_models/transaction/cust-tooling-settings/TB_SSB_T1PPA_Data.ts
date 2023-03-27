import { TB_SSB_T1PPA } from "../../common/t2/tb-ssb-t1ppa";

export interface TB_SSB_T1PPA_Data extends TB_SSB_T1PPA {
    t1MouldCount: number;
    t2MouldCount: number;
    t1MouldPairs: number;
    t2MouldPairs: number;
    t1ProPerDay: number;
    t2ProPerDay: number;

    t2PPA: string;

    adminSupplier_CN: string;
    adminSupplier_LC: string;
    adminSupplier_EN: string;

    stockSupplier_CN: string;
    stockSupplier_LC: string;
    stockSupplier_EN: string;
}
