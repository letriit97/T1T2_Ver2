import { KeyValueUtility } from '@utilities/key-value-utility';

export interface T1ToolingApply_Add_ViewModel
 {
    tOrder_ID: string;
    createCategory: string;
    createSupplierName: string;
    createSupplierID: string;
    createSupplierNO: string;
    reason: string;
    req_Category: string;
    pay_Category: string;
    pur_NO: string;
    create_Time: Date | null;
    create_Time_Format: string;
    supplierList: KeyValueUtility[];
    supplierOrtherList: KeyValueUtility[];
    mouldSupplierList: KeyValueUtility[];
}

export interface RowItem {
    mouldID: string;
    mouldNo: string;
    stockSupplierNO: string;
    id: number;
    requestDate: string | Date;
    totalPPR: number;
    sizeAndPairs: SizeAndPair[];
}

export interface SizeAndPair {
    mouldID: string;
    sort: number;
    size: string;
    qty: string;
    toolClass: string;
    isChange: boolean;
}