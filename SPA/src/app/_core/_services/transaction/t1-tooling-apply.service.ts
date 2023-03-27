import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { T1ToolingApplyMain } from '@models/transaction/t1-tooling-apply/t1ToolingApplyMain';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { T1ToolingApplyParam } from '@params/transaction/t1ToolingApplyParam';
import { OperationResult } from '@utilities/operation-result';
import { PaginationParam, PaginationResult } from '@utilities/pagination-utility';

@Injectable({
  providedIn: 'root'
})
export class T1ToolingApplyService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getDataPaginations(pagination: PaginationParam, param: T1ToolingApplyParam) {
    let params = new HttpParams().appendAll({ ...pagination, ...param });
    return this.http.get<PaginationResult<T1ToolingApplyMain>>(this.apiUrl + "T1ToolingApply/GetDataPaginations", { params: params });
  }

  getAllSupplierNo() {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + "T1ToolingApply/GetAllSupplierNo");
  }

  lock(tOrder_ID: string) {
    return this.http.put<OperationResult>(this.apiUrl + "T1ToolingApply/Lock", null, { params: { tOrder_ID } });
  }

  delete(tOrder_ID: string) {
    return this.http.delete<boolean>(this.apiUrl + "T1ToolingApply/Delete", { params: { tOrder_ID } });
  }


  /**
   * Tải xuống file đã upload,
   * @param {string} tOrder_ID : Mã đơn hàng
   * @param {string} fromPage : dowloadfile của loại nào: T1Lo, Transfer, Apply , Delivery
   */
  downloadFile(tOrder_ID: string, fromPage: string) {
    return this.http.post(this.apiUrl + "T1ToolingApply/DownloadFile", {}, { params: { tOrder_ID, fromPage }, responseType: 'blob' });
  }
}
