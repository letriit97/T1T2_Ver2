import { TB_SSB_T2_MOULD } from "@models/common/t2/tb-ssb-t2-mould";
import { TB_SSB_T2_MOULD_SIZE } from '@models/common/t2/tb-ssb-t2-mould-size';

export interface T1ToolingApplyDeliveryMould extends TB_SSB_T2_MOULD {
  stock_Supplier_NO: string;
  first_Exp_Delivery_Date: string | null;
  first_Exp_Release_Date: string | null;
  mouldSizes: TB_SSB_T2_MOULD_SIZE[];
  totalPpr: number;
  isDeliChecked: boolean;
  isFileChecked: boolean;
  isFileDisabled: boolean;
}