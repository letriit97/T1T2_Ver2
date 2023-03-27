import { TB_SSB_T2_MD_ORDER } from '../../common/t2/tb-ssb-t2-md-order';
import { T1ToolingApplyDeliveryMould } from './t1-tooling-apply-delivery-mould';
import { T1ToolingApplyDeliveryToolDetail } from './t1-tooling-apply-delivery-tool-detail';

export interface T1ToolingApplyDeliveryEdit extends TB_SSB_T2_MD_ORDER {
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
  request_Date: string;
  moulds: T1ToolingApplyDeliveryMould[];
  toolDetails: T1ToolingApplyDeliveryToolDetail[];
  totalMouldPpr: number;
  toolSizeSummary: ToolSizeSummary[];
  file: File;
}

export interface ToolSizeSummary {
  size: string;
  qty: number;
}