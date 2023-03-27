import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { T2DeliveryParam } from '@params/transaction/t2-delivery.param';
import { environment } from '@env/environment';
import { T2Delivery } from '../../_models/transaction/t2-delivery/t2-delivery';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { Observable } from 'rxjs';
import { T2DeliveryDetail } from '@models/transaction/t2-delivery/t2-delivery-detail';
import { OperationResult } from '@utilities/operation-result';

@Injectable({ providedIn: 'root' })
export class T2DeliveryService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  search(param: T2DeliveryParam, pagination: Pagination): Observable<PaginationResult<T2Delivery>> {
    let params = new HttpParams().appendAll({ ...this.getValidatedParam(param), ...pagination });
    return this.http.get<PaginationResult<T2Delivery>>(this.apiUrl + 'T2Delivery/Search', { params });
  }

  getSupplierNoes(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + 'T2Delivery/SupplierNoes');
  }

  getFeedbackType(param: T2DeliveryParam): Observable<string> {
    let params = new HttpParams().appendAll({ ...param });
    return this.http.get<string>(this.apiUrl + 'T2Delivery/FeedbackType', { params });
  }

  getDeliveryList(param: T2DeliveryParam): Observable<T2DeliveryDetail> {
    let params = new HttpParams().appendAll({ ...param });
    return this.http.get<T2DeliveryDetail>(this.apiUrl + 'T2Delivery/DeliveryList', { params });
  }

  addDeliveryByAll(model: T2DeliveryDetail): Observable<OperationResult> {
    return this.http.post<OperationResult>(this.apiUrl + 'T2Delivery/AddDeliveryByAll', model);
  }

  addDeliveryBySize(model: T2DeliveryDetail): Observable<OperationResult> {
    return this.http.post<OperationResult>(this.apiUrl + 'T2Delivery/AddDeliveryBySize', model);
  }

  deleteDelivery(delivery_ID: string): Observable<OperationResult> {
    var params = new HttpParams().appendAll({ delivery_ID });
    return this.http.delete<OperationResult>(this.apiUrl + 'T2Delivery/Delivery', { params });
  }

  exportReport(param: T2DeliveryParam): Observable<Blob> {
    let params = new HttpParams().appendAll({ ...this.getValidatedParam(param) });
    return this.http.get(this.apiUrl + 'T2Delivery/ExportReport', { responseType: 'blob', params });
  }

  exportDetailReport(param: T2DeliveryParam): Observable<Blob> {
    let params = new HttpParams().appendAll({ ...this.getValidatedParam(param) });
    return this.http.get(this.apiUrl + 'T2Delivery/ExportDetailReport', { responseType: 'blob', params });
  }

  getValidatedParam(param: T2DeliveryParam): T2DeliveryParam {
    let _param = { ...param };
    _param.from_Date = _param.from_Date ? _param.from_Date.toDate().toStringDate() : '';
    _param.to_Date = _param.to_Date ? _param.to_Date.toDate().toStringDate() : '';
    _param.supplier_NO = _param.supplier_NO ?? '';
    return _param;
  }
}