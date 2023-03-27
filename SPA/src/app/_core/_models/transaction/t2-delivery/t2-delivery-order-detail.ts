import { TB_SSB_T2_ORDER_DETAIL } from "@models/common/t2/tb-ssb-t2-order-detail";

export interface T2DeliveryOrderDetail extends TB_SSB_T2_ORDER_DETAIL {
  delivered_Qty: number;
  remain_Qty: number;
  current_Delivery_Qty: number;
  current_Remain_Qty: number;
}