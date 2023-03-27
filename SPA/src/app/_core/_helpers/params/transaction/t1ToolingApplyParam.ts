export interface T1ToolingApplyParam {
  supplier: string;
  demandFactory: string;
  applyDate: string;
  mouldCategory: string;
  pur_NO: string;
  requestDate: string;
  toolNo: string;
  toolType: string;
  reason: string;
  supplierNo: string;
}

export interface T1ToolingApplyDetailParam {
  tOrder_ID: string;
  supplierID: string;
  fromPage: string;
  isApply: boolean;

}