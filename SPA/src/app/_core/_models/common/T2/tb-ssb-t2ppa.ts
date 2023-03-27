import { TB_SSB_T1PPA } from './tb-ssb-t1ppa';

export interface TB_SSB_T2PPA {
    tool_No: string;
    tool_Class: string;
    art: string;
    model_Name: string;
    t2PPA: string;
    tool_Name: string;
    tool_Class_Name: string;
    art_Name: string;
    updated_By: string;
    updated_Time: string | null;
    memo: string;
    tB_SSB_T1PPA?: TB_SSB_T1PPA[];
    admin_Category?: string;
    admin_Supplier_ID?: string;
    custPPA?: string;
}
