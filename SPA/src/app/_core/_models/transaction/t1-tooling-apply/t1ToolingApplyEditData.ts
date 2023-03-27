import { T1ToolingApplyData } from '@models/transaction/t1-tooling-apply/t1ToolingApplyData';
import { KeyValueUtility } from '@utilities/key-value-utility';

export interface T1ToolingApplyEditData {
    data: T1ToolingApplyData;
    supplierList: KeyValueUtility[];
    supplierOrtherList: KeyValueUtility[];
    mouldSupplierList: KeyValueUtility[];
    listAllSize: KeyValueUtility[];
    listToolNo: KeyValueUtility[];
    listToolType: KeyValueUtility[];
}