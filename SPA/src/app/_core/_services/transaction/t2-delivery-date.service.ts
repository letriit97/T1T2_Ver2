import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { Observable } from 'rxjs';
import { OperationResult } from '@utilities/operation-result';
import { T2DeliveryDateParam } from '@models/transaction/t2-delivery-date/t2-delivery-date-param';
import { T2DeliveryDateRole } from '@models/transaction/t2-delivery-date/t2-delivery-date-role';
import { TB_SSB_T2_ORDER } from '@models/common/t2/tb-ssb-t2-order';

@Injectable({
  providedIn: 'root'
})
export class T2DeliveryDateService {
  host = environment.apiUrl;
  controller = 'T2DeliveryDate';
  constructor(private _http: HttpClient) { }

  search(param: Pagination, filter: T2DeliveryDateParam): Observable<PaginationResult<TB_SSB_T2_ORDER>> {
    let params = new HttpParams().appendAll({ ...param, ...filter });
    return this._http.get<PaginationResult<TB_SSB_T2_ORDER>>(`${this.host}${this.controller}/search`, { params });
  }

  getRoles(): Observable<T2DeliveryDateRole> {
    return this._http.get<T2DeliveryDateRole>(`${this.host}${this.controller}/role`)
  }

  getItem(po: string, purNo: string, batch: string): Observable<TB_SSB_T2_ORDER> {
    let params = new HttpParams()
                                .set('po', po)
                                .set('purNo', purNo)
                                .set('batch', batch);
    return this._http.get<TB_SSB_T2_ORDER>(`${this.host}${this.controller}/item`, { params })
  }

  update(param: TB_SSB_T2_ORDER): Observable<OperationResult> {
    return this._http.put<OperationResult>(`${this.host}${this.controller}/update`, param);
  }


  confirmUpdateData(param: TB_SSB_T2_ORDER[]): Observable<OperationResult> {
    return this._http.put<OperationResult>(`${this.host}${this.controller}/update-confirm`, param);
  }

  // export
  export(param: T2DeliveryDateParam) {
    return this._http.post(`${this.host}${this.controller}/export`, param, { responseType: 'blob' });
  }

  // upload
  uploadExcel(file: FormData): Observable<OperationResult> {
    return this._http.post<OperationResult>(`${this.host}${this.controller}/import`, file)
  }
}
