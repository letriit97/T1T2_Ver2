import { TB_SSB_T2_ORDER } from "@models/common/t2/tb-ssb-t2-order";

export interface T2Delivery extends TB_SSB_T2_ORDER {
  status_boolean: boolean;
  total_Production_Qty: number | null;
  total_Delivery_Qty: number | null;
  tool_Size_Deficit: number | null;
  delivery_IDs: string;
  feedback: string;
}