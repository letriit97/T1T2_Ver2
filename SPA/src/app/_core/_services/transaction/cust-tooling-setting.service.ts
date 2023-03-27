import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import { CustToolingSettingParam } from '@params/transaction/cust-tooling-settings/custToolingSettingParam';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TB_SSB_T1PPA_Data } from '@models/transaction/cust-tooling-settings/TB_SSB_T1PPA_Data';
import { OperationResult } from '@utilities/operation-result';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { TB_SSB_T2_SUPPLIER_Dropdown } from '@models/common/t2/tb-ssb-t2-supplier';
import { TB_SSB_T1PPA } from '@models/common/t2/tb-ssb-t1ppa';

@Injectable({
  providedIn: 'root'
})
export class CustToolingSettingService {

  host = environment.apiUrl;
  controller = 'custtoolingsetting';
  constructor(private _http: HttpClient) { }

  search(param: Pagination, filter: CustToolingSettingParam): Observable<PaginationResult<TB_SSB_T1PPA_Data>> {
    let params = new HttpParams().appendAll({ ...param, ...filter });
    return this._http.get<PaginationResult<TB_SSB_T1PPA_Data>>(`${this.host}${this.controller}/search`, { params });
  }

  add(param: TB_SSB_T1PPA): Observable<OperationResult> {
    return this._http.post<OperationResult>(`${this.host}${this.controller}/add`, param);
  }

  update(param: TB_SSB_T1PPA): Observable<OperationResult> {
    return this._http.put<OperationResult>(`${this.host}${this.controller}/update`, param);
  }

  delete(param: TB_SSB_T1PPA): Observable<OperationResult> {
    let params = new HttpParams().appendAll({ ...param });
    return this._http.delete<OperationResult>(`${this.host}${this.controller}/delete`, { params });
  }

  getArt(): Observable<KeyValueUtility[]> {
    return this._http.get<KeyValueUtility[]>(`${this.host}${this.controller}/art`)
  }

  detail(toolNo: string, toolClass: string, adminSupplierId: string): Observable<OperationResult> {
    let params = new HttpParams().set('toolNo', toolNo).set('toolClass', toolClass).set('adminSupplierId', adminSupplierId);
    return this._http.get<OperationResult>(`${this.host}${this.controller}/detail`, { params })
  }

  getItem(param: CustToolingSettingParam): Observable<TB_SSB_T1PPA> {
    let params = new HttpParams().appendAll({ ...param });
    return this._http.get<TB_SSB_T1PPA>(`${this.host}${this.controller}/get-item`, { params })
  }

  getModelName(art: string): Observable<KeyValueUtility> {
    let params = new HttpParams().set('art', art);
    return this._http.get<KeyValueUtility>(`${this.host}${this.controller}/model-name-by-art`, { params })
  }

  getSuppliers(adminCategory: string): Observable<TB_SSB_T2_SUPPLIER_Dropdown[]> {
    let params = new HttpParams().set('adminCategory', adminCategory);
    return this._http.get<TB_SSB_T2_SUPPLIER_Dropdown[]>(`${this.host}${this.controller}/supplier`, { params })
  }

  getToolNo(): Observable<KeyValueUtility[]> {
    return this._http.get<KeyValueUtility[]>(`${this.host}${this.controller}/tool-no`)
  }
  getToolClass(toolNo: string): Observable<KeyValueUtility[]> {
    let params = new HttpParams().set('toolNo', toolNo);
    return this._http.get<KeyValueUtility[]>(`${this.host}${this.controller}/tool-class`, { params })
  }

}
