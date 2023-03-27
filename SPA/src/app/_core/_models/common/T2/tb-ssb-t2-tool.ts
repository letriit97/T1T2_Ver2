export interface TB_SSB_T2_TOOL {
  Id?: string;
  tool_No: string;
  tool_Name: string;
  tool_Class: string;
  tool_Class_Name: string;
  factory_Code: string;
  stock_Factory_Code: string;
  size_Class: string;
  make_Code: string;
  remark: string;
  totalQty: number;
  tool_Supplier_NO: string;
  cust_Supplier_NO: string;
  cust_Supplier_Name: string;
  refStyle: string;
  fB: string;
  fB_Name: string;
  b_Type: string;
  b_Type_Name: string;
  create_Time: string | null;
  created_By: string;
  update_Time: string | null;
  updated_By: string;
  art: string;
  modelName: string;
  size_From?: string | number;
  size_End?: string | number;
}