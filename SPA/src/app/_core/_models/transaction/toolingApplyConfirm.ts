import { ToolingApplyConfirmMould } from './tooling-apply-confirm-mould';
import { T1ToolingApplyConfirmToolDetail } from "@models/transaction/T1ToolingApplyConfirmToolDetail";
import { TB_SSB_T2_MD_ORDER } from '@models/common/t2/tb-ssb-t2-md-order';
import { TB_SSB_T2_MOULD } from '@models/common/t2/tb-ssb-t2-mould';
import { TB_SSB_T2_TOOL_DETAIL } from '@models/common/t2/tb-ssb-t2-tool-detail';
export interface ToolingApplyConfirm extends TB_SSB_T2_MD_ORDER {
  createSupplierNO_CNName: string;
  createSupplierNO_LCName: string;
  createSupplierNO_ENName: string;
  stock_Supplier_CNName: string;
  stock_Supplier_LCName: string;
  stock_Supplier_ENName: string;
  manufSupplierNO: string;
  manufSupplier_CNName: string;
  manufSupplier_LCName: string;
  manufSupplier_ENName: string;
  req_Supplier_CNName: string;
  req_Supplier_LCName: string;
  req_Supplier_ENName: string;
  tool_Name: string;
  adminSupplierNO: string;
  // request_Date: string;
  tB_SSB_T2_MOULD: TB_SSB_T2_MOULD[];
  tB_SSB_T2_TOOL_DETAIL: TB_SSB_T2_TOOL_DETAIL[];
  moulds: ToolingApplyConfirmMould[];
  toolDetails: T1ToolingApplyConfirmToolDetail[];
  totalMouldPpr: number;
  toolSizeSummary: ToolSizeSummary[];
}
export interface ToolSizeSummary {
  size: string;
  qty: number;
}