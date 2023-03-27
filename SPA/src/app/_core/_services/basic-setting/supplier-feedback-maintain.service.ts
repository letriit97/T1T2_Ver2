import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../src/environments/environment';
import { OperationResult } from '../../_helpers/utilities/operation-result';
import { SupplierFeedbackParams } from '../../_helpers/params/basic-setting/supplier-feedback-params';
import { PaginationParam } from '../../_helpers/utilities/pagination-utility';
import { TB_SSB_T2_SUPPLIER } from '@models/common/t2/tb-ssb-t2-supplier';


@Injectable({
  providedIn: 'root'
})
export class SupplierFeedbackMaintainService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAll(pagination: PaginationParam, paramSearch: SupplierFeedbackParams):  Observable<any> {
    let params = new HttpParams().appendAll({ ...pagination, ...paramSearch });
    return this.http.get<any>(this.apiUrl + 'SupplierFeedbackMaintain/GetAll', { params });
  }

  update(model: TB_SSB_T2_SUPPLIER): Observable<OperationResult> {
    return this.http.put<OperationResult>(this.apiUrl + 'SupplierFeedbackMaintain/Update', model);
  }
}
