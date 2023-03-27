export interface TB_SSB_T2_ORDER_DETAIL {
  po: string;
  pur_NO: string;
  batch: string;
  size: string;
  tool_Size: string;
  batch_Qty: number;
  t2Delivery_Qty: number;
  t1Receive_Qty: number;
  t2Production_Qty: number;
  updated_By: string;
  update_Time: string | null;
}