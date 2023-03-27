import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { TOOL } from '../../_models/transaction/t2-tooling-receipt-confirm/tool-confirm';
import { SUPPLIER } from '../../_models/transaction/t2-tooling-receipt-confirm/supplier-confirm';
import { MOULD } from '../../_models/transaction/t2-tooling-receipt-confirm/mould-confirm';
import { T2ToolingReceiptConfirmParams } from '@params/transaction/t2-tooling-receipt-confirm-params';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { OperationResult } from '@utilities/operation-result';

@Injectable({
  providedIn: 'root'
})
export class T2ToolingReceiptConfirmService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getToolNo() {
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T2ToolingReceiptConfirm/GetToolNo`,);
  }
  getToolName(tool_No: string) {
    let params = new HttpParams().appendAll({ tool_No });
    return this.http.get<TOOL>(`${this.apiUrl}T2ToolingReceiptConfirm/GetToolName`, {params});
  }
  getToolClass(tool_No: string) {
    let params = new HttpParams().appendAll({ tool_No });
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T2ToolingReceiptConfirm/GetToolClass`, {params});
  }
  getSupplierNO() {
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T2ToolingReceiptConfirm/GetSupplierNO`, {});
  }
  getSupplierName(crateSupplierID: string) {
    let params = new HttpParams().appendAll({ crateSupplierID });
    return this.http.get<SUPPLIER>(`${this.apiUrl}T2ToolingReceiptConfirm/GetSupplierName`, {params});
  }
  getData(paramsSearch: T2ToolingReceiptConfirmParams, pagination: Pagination) {
    let paramsTmp = {...paramsSearch, ...pagination};
    let params = new HttpParams().appendAll(paramsTmp);
    return this.http.get<PaginationResult<MOULD>>(`${this.apiUrl}T2ToolingReceiptConfirm/GetData`, {params});
  }
  update(dataUpdate: MOULD[]) {
    return this.http.put<OperationResult>(`${this.apiUrl}T2ToolingReceiptConfirm/Update`, dataUpdate);
  }
}
