import { TB_SSB_T2_MD_ORDER } from "@models/common/t2/tb-ssb-t2-md-order";

export interface T1ToolingApplyDelivery extends TB_SSB_T2_MD_ORDER {
  pay_Supplier_No: string;
  pay_Supplier_LCName: string;
  pay_Supplier_ENName: string;
  pay_Supplier_CNName: string;
  req_Supplier_No: string;
  req_Supplier_LCName: string;
  req_Supplier_ENName: string;
  req_Supplier_CNName: string;
  stock_Supplier_No: string;
  stock_Supplier_LCName: string;
  stock_Supplier_ENName: string;
  stock_Supplier_CNName: string;
  admin_Supplier_No: string;
  admin_Supplier_LCName: string;
  admin_Supplier_ENName: string;
  admin_Supplier_CNName: string;
  tool_Qty: number | null;
  tool_Pairs: number | null;
}