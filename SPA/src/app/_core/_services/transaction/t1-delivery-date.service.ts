import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { T1DeliveryExportParam, T1DeliveryParamSearch } from '@params/transaction/t1DeliveryParamSearch';
import { Pagination } from '@utilities/pagination-utility';
import { TB_SSB_T2_ORDER } from '@models/common/t2/tb-ssb-t2-order';
import { environment } from '@env/environment';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { OperationResult } from '@utilities/operation-result';
import { Observable } from 'rxjs';
import { TB_SSB_T2_VIEW_ORDER } from '@models/transaction/tB_SSB_T2_VIEW_ORDER';

@Injectable({
  providedIn: 'root'
})
export class T1DeliveryDateService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getSupplierNO(category: string): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}T1DeliveryDate/GetSupplierNO/${category}`);
  }

  getT1Delivery(paramSearch: T1DeliveryParamSearch, pagination: Pagination): Observable<TB_SSB_T2_VIEW_ORDER> {
    let params = new HttpParams()
      .set('Category', paramSearch.category.toString())
      .set('Kind', paramSearch.kind ?? "")
      .set('Pur_NO', paramSearch.pur_NO.toString() ?? "")
      .set('SupplierId', paramSearch.supplierId.toString() ?? "")
      .set('SupplierNo', paramSearch.supplierNo.toString() ?? "")
      .set('Supplier_NO', paramSearch.supplier_NO ?? "")
      .set('T2Mtl_No', paramSearch.t2Mtl_No.toString() ?? '')
      .set('T1Mtl_No', paramSearch.t1Mtl_No.toString() ?? '')
      .set('pageNumber', pagination.pageNumber.toString())
      .set('pageSize', pagination.pageSize.toString());
    return this.http.get<TB_SSB_T2_VIEW_ORDER>(`${this.apiUrl}T1DeliveryDate/GetT1Delivery`, { params });
  }

  createPost(formData: TB_SSB_T2_ORDER[]): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.apiUrl}T1DeliveryDate/CreatePost`, formData);
  }

  uploadExcel(file: FormData): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.apiUrl}T1DeliveryDate/UploadExcel`, file)
  }

  exportExcel(paramSearch: T1DeliveryExportParam, pagination: Pagination) {
    return this.http.post(`${this.apiUrl}T1DeliveryDate/ExportExcel`, paramSearch, { responseType: 'blob' });
  }

}
