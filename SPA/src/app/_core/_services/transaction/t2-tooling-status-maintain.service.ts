import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { PaginationParam, PaginationResult } from '@utilities/pagination-utility';
import { T2ToolingStatusMaintainParam } from '@params/transaction/t2ToolingStatusMaintainParam';
import { T2ToolingStatusMaintainView } from '@models/transaction/t2-tooling-status-maintain/t2ToolingStatusMaintainView';
import { T2ToolingStatusMaintainAdd } from '@models/transaction/t2-tooling-status-maintain/t2ToolingStatusMaintainAdd';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { OperationResult } from '@utilities/operation-result';
import { Supplier } from '@models/transaction/t2-tooling-status-maintain/supplier';

@Injectable({
  providedIn: 'root'
})
export class T2ToolingStatusMaintainService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getSearchData(pagination: PaginationParam, param: T2ToolingStatusMaintainParam) {
    let _param = { ...param };
    this.setEmpty(_param);
    let params = new HttpParams().appendAll({ ...pagination, ..._param });
    return this.http.get<PaginationResult<T2ToolingStatusMaintainView>>(this.apiUrl + "T2ToolingStatusMaintain/GetSearchData", { params: params });
  }

  getAllToolNo() {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + "T2ToolingStatusMaintain/GetAllToolNo");
  }

  getToolType(tool_No: string) {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + "T2ToolingStatusMaintain/GetAllToolType", { params: { tool_No } });
  }

  create(model: T2ToolingStatusMaintainAdd) {
    return this.http.post<OperationResult>(this.apiUrl + "T2ToolingStatusMaintain/Create", model);
  }

  getDetail(supplier_Id: string, torder_Id: string) {
    let params = new HttpParams().appendAll({ supplier_Id, torder_Id });
    return this.http.get<T2ToolingStatusMaintainAdd>(this.apiUrl + "T2ToolingStatusMaintain/GetDetail", { params: params });
  }

  delete(orderID: string) {
    let params = new HttpParams().appendAll({ orderID });
    return this.http.delete<OperationResult>(this.apiUrl + "T2ToolingStatusMaintain/Delete", { params: params });
  }

  lock(model: T2ToolingStatusMaintainView) {
    return this.http.put<OperationResult>(this.apiUrl + "T2ToolingStatusMaintain/Lock", model);
  }

  getMouldAndToolDetail(TOrder_ID: string) {
    let params = new HttpParams().appendAll({ TOrder_ID });
    return this.http.get<OperationResult>(this.apiUrl + "T2ToolingStatusMaintain/GetMouldAndToolDetail", { params: params });
  }

  getModList(param: T2ToolingStatusMaintainParam) {
    let params = new HttpParams().appendAll({ ...param });
    return this.http.get<OperationResult>(this.apiUrl + "T2ToolingStatusMaintain/GetModList", { params: params });
  }

  getAddData(supplier_ID: string) {
    let params = new HttpParams().appendAll({ supplier_ID });
    return this.http.get<T2ToolingStatusMaintainAdd>(this.apiUrl + "T2ToolingStatusMaintain/GetAddData", { params: params });
  }

  getSupplierByCategory(category: string) {
    let params = new HttpParams().appendAll({ category });
    return this.http.get<Supplier[]>(this.apiUrl + "T2ToolingStatusMaintain/GetSupplierByCategory", { params: params });
  }

  getExistingMods(selected: string[]) {
    let params = new HttpParams().appendAll({ selected });
    return this.http.get<OperationResult>(this.apiUrl + "T2ToolingStatusMaintain/GetExistingMods", { params: params });
  }

  setEmpty(data: any) {
    for (let [key, value] of Object.entries(data)) {
      if (value === undefined || value === null) {
        data[key] = "";
      }
    }
  }
}