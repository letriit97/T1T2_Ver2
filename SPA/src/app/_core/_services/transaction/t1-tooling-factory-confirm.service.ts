import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DATA_MD_ORDER } from '@models/transaction/t1-tooling-factory-confirm/data-md-order';
import { DATA_MD_ORDER_DETAIL } from '@models/transaction/t1-tooling-factory-confirm/data-md-order-detail';
import { SUPPLIER } from '@models/transaction/t1-tooling-factory-confirm/supplier';
import { TOOL } from '@models/transaction/t1-tooling-factory-confirm/tool';
import { T1ToolingFactoryConfirmParams } from '@params/transaction/t1-tooling-factory-confirm-params';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { OperationResult } from '@utilities/operation-result';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { KeyValueUtility } from '@utilities/key-value-utility';

@Injectable({
  providedIn: 'root'
})
export class T1ToolingFactoryConfirmService {
  apiUrl = environment.apiUrl;
  //get tOrder_ID for Edit
  tOrder_ID = new BehaviorSubject<any>(null);
  currentTOrder_ID = this.tOrder_ID.asObservable();

  constructor(private http: HttpClient) { }
  getToolNo() {
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T1ToolingFactoryConfirm/GetToolNo`,);
  }
  getToolName(tool_No: string) {
    let params = new HttpParams().appendAll({ tool_No });
    return this.http.get<TOOL>(`${this.apiUrl}T1ToolingFactoryConfirm/GetToolName`, {params});
  }
  getToolClass(tool_No: string) {
    let params = new HttpParams().appendAll({ tool_No });
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T1ToolingFactoryConfirm/GetToolClass`, {params});
  }
  getSupplierNO() {
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T1ToolingFactoryConfirm/GetSupplierNO`, {});
  }
  getSupplierNOEdit(category_ID: string) {
    let params = new HttpParams().appendAll({ category_ID });
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T1ToolingFactoryConfirm/GetSupplierNOEdit`, {params});
  }
  getSupplierName(crateSupplierID: string) {
    let params = new HttpParams().appendAll({ crateSupplierID });
    return this.http.get<SUPPLIER>(`${this.apiUrl}T1ToolingFactoryConfirm/GetSupplierName`, {params});
  }
  getData(paramsSearch: T1ToolingFactoryConfirmParams, pagination: Pagination) {
    let paramsTmp = {...paramsSearch, ...pagination};
    let params = new HttpParams().appendAll(paramsTmp);
    return this.http.get<PaginationResult<DATA_MD_ORDER>>(`${this.apiUrl}T1ToolingFactoryConfirm/GetData`, {params});
  }
  changeTOrder_ID(params: any) {
    this.tOrder_ID.next(params);
  }
  getDetail(tOrder_ID: string) {
    let params = new HttpParams().appendAll({tOrder_ID});
    return this.http.get<DATA_MD_ORDER_DETAIL>(`${this.apiUrl}T1ToolingFactoryConfirm/GetDetail`, {params});
  }
  update(dataUpdate: DATA_MD_ORDER_DETAIL) {
    return this.http.put<OperationResult>(`${this.apiUrl}T1ToolingFactoryConfirm/Update`, dataUpdate);
  }
}
