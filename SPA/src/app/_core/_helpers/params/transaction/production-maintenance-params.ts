export interface ProductionMaintenanceParams {
    pO: string;
    t1RequestDateStartTime: Date | any;
    t1RequestDateEndTime: Date | any;
    supplier_Code: string;
    production_Return: string;
    factory_Code: string;
    kind: string;
    function: string;
    supplier_No: string;
    category: string;
}
export interface ProductionMaintenanceHeaderExport {
    label_T1_Request_Date: string;
    label_Kind: string;
    label_Kind1: string;
    label_Kind4: string;
    label_PO: string;
    label_Batch: string;
    label_Pur_NO: string;
    label_Lean: string;
    label_Model_Name: string;
    label_Model_NO: string;
    label_Art: string;
    label_Customer_Name: string;
    label_Return_Type: string;
    label_T1Mtl_No: string;
    label_PartName: string;
    label_T1Mtl_Name: string;
    label_Batch_Qty: string;
    label_Total_Production_Qty: string;
    label_Production_Id: string;
}

