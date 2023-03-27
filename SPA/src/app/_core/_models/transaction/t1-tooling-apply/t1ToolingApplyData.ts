import { RowItem, T1ToolingApply_Add_ViewModel } from './t1ToolingApply_Add_ViewModel';

export interface T1ToolingApplyData extends T1ToolingApply_Add_ViewModel {
    createSupplierNameEN: string;
    createSupplierNameCN: string;
    createSupplierNameLC: string;
    req_Category_2: string;
    toolNo: string;
    toolClass: string;
    manuf_Supplier_ID: string;
    manufSupplierName: string;
    req_Supplier_ID: string;
    req_Supplier_ID_2: string;
    type: string;
    file_ID: string;
    mouldDetailList: RowItem[];
    fileUpload: File;
    file_Name: string;
}

export interface T1T1ToolingApplyDataUpload {
    reason: string;
    createSupplierNO: string;
    pur_NO: string;
    toolNo: string;
    toolClass: string;
    manuf_Supplier_ID: string;
    pay_Category: string;
    req_Category: string;
    req_Supplier_ID: string;
    createCategory: string;
    type: string;
    fileUpload: File;
}