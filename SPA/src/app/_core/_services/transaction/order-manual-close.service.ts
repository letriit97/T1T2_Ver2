import { Pagination, PaginationResult } from './../../_helpers/utilities/pagination-utility';
import { OrderManualClose } from './../../_models/transaction/order-manual-close/order-manual-close';
import { OperationResult } from './../../_helpers/utilities/operation-result';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { OrderManualCloseParam } from '../../_helpers/params/transaction/order-manual-close-param';
import { KeyValueUtility } from '@utilities/key-value-utility';

@Injectable({
  providedIn: 'root'
})
export class OrderManualCloseService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getOrders(search: OrderManualCloseParam, pagination: Pagination) {
    let params = new HttpParams().appendAll({ ...search, ...pagination });
    return this.http.get<PaginationResult<OrderManualClose>>(`${this.apiUrl}OrderManualClose/GetOrders`, { params });
  }

  getSupplierNO() {
    return this.http.get<KeyValueUtility[]>(`${this.apiUrl}OrderManualClose/GetSupplierNO`);
  }

  updateOrder(orders: OrderManualClose[]) {
    return this.http.put<OperationResult>(`${this.apiUrl}OrderManualClose/UpdateOrder`, orders);
  }

}
