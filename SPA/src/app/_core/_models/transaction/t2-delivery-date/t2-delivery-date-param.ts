export interface T2DeliveryDateParam {
    supplierId: string;
    supplierNo: string;
    category: string;
    langId: string;
    startTime: string | null;
    endTime: string | null;
    dateType: string;
    pO: string;
}

export interface T2DeliveryHeaderExport {
    lCName: string;
    eNName: string;
    cNName: string;
}

export interface T2DeliveryFileExport {
    tOrder_ID: string;
    file: File;
}
