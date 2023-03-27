export interface T2ToolingStatusMaintainAdd {
    createSupplierName_LC: string;
    createSupplierName_CN: string;
    createSupplierName_EN: string;
    req_SupplierName_LC: string;
    req_SupplierName_CN: string;
    req_SupplierName_EN: string;
    tool_No: string;
    tool_Class: string;
    mouldsIDArray: string[];
    tOrder_ID: string;
    tOrder_NO: string;
    mould_ID: string;
    mould_No: string;
    create_Category: string;
    create_Supplier_ID: string;
    req_Category: string;
    req_Supplier_ID: string;
    reason: string;
    staus: string;
    pre_Staus: string;
    isclose: string;
    create_Time: string | null;
}
