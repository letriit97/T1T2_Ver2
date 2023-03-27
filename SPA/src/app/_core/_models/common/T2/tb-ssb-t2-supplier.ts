import { TB_SSB_T2_SUPPLIER_DELIVERY_FEEDBACK_SET } from "./tb-ssb-t2-supplier-delivery-feedback-set";
import { TB_SSB_T2_SUPPLIER_PRODUCT_FEEDBACK_SET } from "./tb-ssb-t2-supplier-product-feedback-set";

export interface TB_SSB_T2_SUPPLIER {
  factory_Code: string;
  supplier_ID: string;
  supplier_NO: string;
  supplier_CNName: string;
  supplier_ENName: string;
  supplier_LCName: string;
  updated_By: string;
  update_Time: string | Date;
  created_By: string;
  create_Time: string | Date;
  status: string;
  category: string;
  mail: string;
  sSB_Mail: string;
  enabled_Time: string | Date;
  productFeedback?: string | null;
  deliveryFeedback?: string | null;
  productFeedbackSet?: TB_SSB_T2_SUPPLIER_PRODUCT_FEEDBACK_SET;
  deliveryFeedbackSet?: TB_SSB_T2_SUPPLIER_DELIVERY_FEEDBACK_SET;
  
}

export interface TB_SSB_T2_SUPPLIER_Dropdown {
  supplier_ID: string;
  supplier_No: string;
  supplier_CNName: string;
  supplier_ENName: string;
  supplier_LCName: string;
}