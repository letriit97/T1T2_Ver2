import { MOULD_SIZE } from './mould_size';
export interface MOULD {
    mould_ID: string;
    tOrder_ID: string;
    mould_No: string;
    tool_No: string;
    tool_Class: string;
    manuf_Supplier_ID: string;
    pay_Category: string;
    pay_Supplier_ID: string;
    admin_Category: string;
    admin_Supplier_ID: string;
    stock_Category: string;
    stock_Supplier_ID: string;
    technician: string;
    staus: string;
    request_Date: string | null;
    exp_Delivery_Date: string | null;
    exp_Release_Date: string | null;
    delivery_Date: string | null;
    release_Date: string | null;
    receive_Date: string | null;
    pRE_Mould_ID: string;
    create_Time: string;
    created_By: string;
    update_Time: string;
    updated_By: string;
    tDelivery_NO: string;
    tRelease_NO: string;
    tReceive_NO: string;
    station: string;
    file_ID: string;
    listSize: MOULD_SIZE[];
    totalPPR: number;
}