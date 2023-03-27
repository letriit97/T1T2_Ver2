export interface TB_SSB_T2_MD_ORDER {
  tOrder_ID: string;
  tOrder_NO: string;
  create_Category: string;
  create_Supplier_ID: string;
  req_Category: string;
  req_Supplier_ID: string;
  req_Category_2: string;
  req_Supplier_ID_2: string;
  pur_NO: string;
  tool_No: string;
  tool_Class: string;
  manuf_Supplier_ID: string;
  pay_Category: string;
  pay_Supplier_ID: string;
  admin_Category: string;
  admin_Supplier_ID: string;
  reason: string;
  technician: string;
  exp_Stock_Supplier_ID: string;
  create_Time: string | null;
  created_By: string;
  update_Time: string | null;
  updated_By: string;
  station: string;
}