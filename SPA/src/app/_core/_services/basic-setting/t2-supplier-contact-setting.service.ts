import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { TB_SSB_T2_SUPPLIER_ACCOUNT } from '@models/common/t2/tb-ssb-t2-supplier-account';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { OperationResult } from '@utilities/operation-result';
import { PaginationParam, PaginationResult } from '@utilities/pagination-utility';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class T2SupplierContactSettingService {
  apiUrl = environment.apiUrl;
  editUserSource = new BehaviorSubject<TB_SSB_T2_SUPPLIER_ACCOUNT>(<TB_SSB_T2_SUPPLIER_ACCOUNT>{});
  constructor(private http: HttpClient) { }

  getAll(pagination: PaginationParam, supplier_NO: string, supplier_Name: string, lang: string){
    let params = new HttpParams().appendAll({...pagination, supplier_NO, supplier_Name, lang})
    return this.http.get<PaginationResult<TB_SSB_T2_SUPPLIER_ACCOUNT>>(`${this.apiUrl}T2SupplierContactSetting/All`, {params});
  }
  getSupplierName( supplier_ID: string)
  { 
    let params = new HttpParams().appendAll({supplier_ID});
    return this.http.get<any>(this.apiUrl + 'T2SupplierContactSetting/getSupplierName', { params });
  }
  getConnecItem( ParentId : number )
  { 
    let params = new HttpParams().appendAll({ParentId});
    return this.http.get<any>(this.apiUrl + 'T2SupplierContactSetting/getConnectItem', { params });
  }
  getSupplierNo() {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + 'T2SupplierContactSetting/getSupplierNo');
  }
  getConnectType()
  { 
   
    return this.http.get<any>(this.apiUrl + 'T2SupplierContactSetting/getConnectType');
  }

  add(model : TB_SSB_T2_SUPPLIER_ACCOUNT){
    return this.http.post<OperationResult>(`${this.apiUrl}T2SupplierContactSetting/Add`, model);
  }
  edit(model: TB_SSB_T2_SUPPLIER_ACCOUNT){
    return this.http.put<OperationResult>(`${this.apiUrl}T2SupplierContactSetting/Edit`, model);
  }
  delete(account_id: number){
    return this.http.delete<OperationResult>(`${this.apiUrl}T2SupplierContactSetting/Delete?account_id=${account_id}`);
  }
}
