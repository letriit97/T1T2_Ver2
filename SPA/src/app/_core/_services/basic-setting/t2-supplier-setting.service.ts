import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OperationResult } from '@utilities/operation-result';
import { environment } from '@env/environment';
import { PaginationParam, PaginationResult } from '@utilities/pagination-utility';
import { TB_SSB_T2_SUPPLIER } from '@models/common/t2/tb-ssb-t2-supplier';



@Injectable({
  providedIn: 'root'
})
export class T2SupplierSettingService {
  apiUrl = environment.apiUrl;
  editUserSource = new BehaviorSubject<TB_SSB_T2_SUPPLIER>(<TB_SSB_T2_SUPPLIER>{});
  constructor(private http: HttpClient) { }

  getAll(pagination: PaginationParam, supplier_NO: string, supplier_Name: string, status: string, version: string){
    let params = new HttpParams().appendAll({...pagination, supplier_NO, supplier_Name, status, version})
    return this.http.get<PaginationResult<TB_SSB_T2_SUPPLIER>>(`${this.apiUrl}T2SupplierSetting/All`, {params});
  }
  
  changStatus(supplier_ID : string){
      
      return this.http.get<OperationResult>(`${this.apiUrl}T2SupplierSetting/changStatus?Supplier_ID=${supplier_ID}` );
  }
  add(model : TB_SSB_T2_SUPPLIER){
    return this.http.post<boolean>(`${this.apiUrl}T2SupplierSetting/Add`, model);
  }
  edit(model: TB_SSB_T2_SUPPLIER){
    return this.http.put<boolean>(`${this.apiUrl}T2SupplierSetting/Edit`, model);
  }
 
}