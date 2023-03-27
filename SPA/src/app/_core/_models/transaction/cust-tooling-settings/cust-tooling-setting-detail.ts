// import { TB_SSB_T2PPA } from "./TB_SSB_T2PPA";

export interface CustToolingSettingDetail{

    mouldDetails: MouldDetail[];
}


export interface MouldDetail {
    stockSupplier_ENName: string;
    stockSupplier_CNName: string;
    stockSupplier_LCName: string;
    totalMoulds: number;
    totalPairs: number;
    sizeDetails: SizeDetail[];
}

export interface SizeDetail {
    size: string;
    moulds: number;
    paris: number;
}
