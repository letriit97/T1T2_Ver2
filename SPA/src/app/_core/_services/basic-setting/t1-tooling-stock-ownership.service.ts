import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SUPPLIER } from '../../_models/basic-setting/t1-tooling-stock-ownership/supplier';
import { T1ToolingStockOwnershipParams } from '../../_helpers/params/basic-setting/t1-tooling-stock-ownership';
import { Pagination, PaginationResult } from '../../_helpers/utilities/pagination-utility';
import { MD_ORDER } from '../../_models/basic-setting/t1-tooling-stock-ownership/md_order';
import { MOULD } from '../../_models/basic-setting/t1-tooling-stock-ownership/mould';
import { TOOL } from '../../_models/basic-setting/t1-tooling-stock-ownership/tool';
import { OperationResult } from '../../_helpers/utilities/operation-result';

@Injectable({
  providedIn: 'root'
})
export class T1ToolingStockOwnershipService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getToolNo() {
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T1ToolingStockOwnership/GetToolNo`,);
  }
  getSupplierNO(admin_category: string, lang: string) {
    let params = new HttpParams().appendAll({ admin_category, lang });
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T1ToolingStockOwnership/GetSupplierNO`, {params});
  }
  getToolName(tool_No: string) {
    let params = new HttpParams().appendAll({ tool_No });
    return this.http.get<TOOL>(`${this.apiUrl}T1ToolingStockOwnership/GetToolName`, {params});
  }
  GetSupplierName(crateSupplierID: string) {
    let params = new HttpParams().appendAll({ crateSupplierID });
    return this.http.get<SUPPLIER>(`${this.apiUrl}T1ToolingStockOwnership/GetSupplierName`, {params});
  }
  getData(paramsSearch: T1ToolingStockOwnershipParams, pagination: Pagination) {
    let paramsTmp = {...paramsSearch, ...pagination};
    let params = new HttpParams().appendAll(paramsTmp);
    return this.http.get<PaginationResult<MD_ORDER>>(`${this.apiUrl}T1ToolingStockOwnership/GetData`, {params});
  }
  getDetail(TOrder_ID: string) {
    let params = new HttpParams().appendAll({ TOrder_ID });
    return this.http.get<MOULD[]>(`${this.apiUrl}T1ToolingStockOwnership/GetDetail`, {params});
  }
  updateMould(listMould: MOULD[]) {
    return this.http.put<OperationResult>(`${this.apiUrl}T1ToolingStockOwnership/UpdateMould`, listMould);
  }
}
