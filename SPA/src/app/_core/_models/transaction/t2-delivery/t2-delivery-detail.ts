import { TB_SSB_T2_DELIVERY } from "@models/common/t2/tb-ssb-t2-delivery";
import { TB_SSB_T2_ORDER } from "@models/common/t2/tb-ssb-t2-order";
import { T2DeliveryOrderDetail } from '@models/transaction/t2-delivery/t2-delivery-order-detail';

export interface T2DeliveryDetail {
  list_TB_SSB_T2_DELIVERY: TB_SSB_T2_DELIVERY[];
  list_TB_SSB_T2_ORDER_DETAIL: T2DeliveryOrderDetail[];
  tB_SSB_T2_ORDER: TB_SSB_T2_ORDER;
  tB_SSB_T2_DELIVERY: TB_SSB_T2_DELIVERY;
  po: string;
  batch: string;
  pur_NO: string;
  feedback: string;
  delivered_Qty: number;
}