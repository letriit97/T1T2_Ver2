export interface ToolingManagementReportParams {
    reportType: string;
    toolNo: string | null;
    toolType: string | null;
    manageFactory: string | null;
    applicationStatus: string | null;
    lang: string;
    category: string;
}

export interface ToolingManagementReportHeader {
    order_No: string;
    application_Date: string;
    tool_No: string;
    tool_Name: string;
    tool_Type: string;
    admin_Supplier: string;
    mould_Category: string;
    reason: string;
    total_Num: string;
    total_PPR: string;
    total_Mold_Qty: string;
    status: string;
    stock_Supplier: string;
    applying: string;
    confirming: string;
    delivery: string;
    release_Notice: string;
    prod_Received: string;
}