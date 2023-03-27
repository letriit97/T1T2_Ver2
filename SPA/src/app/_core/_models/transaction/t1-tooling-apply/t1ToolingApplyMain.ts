import { TB_SSB_T2_MD_ORDER } from '@models/common/t2/tb-ssb-t2-md-order';

export interface T1ToolingApplyMain extends TB_SSB_T2_MD_ORDER {
    reasonCN: string;
    file_ID: string;
    file_Name: string;
    file_211_T1_Apply: string;
    file_211_T1_Apply_Name: string;
    file_211_T1_Transfer: string;
    file_211_T1_Transfer_Name: string;
}