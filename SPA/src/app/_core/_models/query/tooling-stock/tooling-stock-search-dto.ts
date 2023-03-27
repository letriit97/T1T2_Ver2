export interface ToolingStockSearchDto {
    tOrder_ID: string;
    tOrder_NO: string;
    tool_No: string;
    pay_Category: string;
    pay_Supplier_CNName: string;
    pay_Supplier_LCName: string;
    pay_Supplier_ENName: string;
    pay_Supplier_No: string;
    admin_Supplier_CNName: string;
    admin_Supplier_LCName: string;
    admin_Supplier_ENName: string;
    admin_Supplier_No: string;
    admin_Supplier_ID: string;
    tool_Class: string;
    tool_Class_Name: string;
    totalCountQty: number;
    totalPairsQty: number | null;
    request_Date: string | null;
}
export interface ToolingStockExportExcelParam extends ToolingStockSearchDto {
    label_StockQty: string;
    label_ApplyQty: string;
    label_Num: string;
    label_Delivery: string;
    label_Release: string;
    label_Receive: string;
    column_OrderNo: string;
    column_Category: string;
    column_ToolType: string;
    column_ToolNo: string;
    column_ToolQty: string;
    column_ToolPairsQty: string;
    column_ToolSize: string;
}