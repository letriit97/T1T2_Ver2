import { TB_SSB_T2_SUPPLIERListDto } from '@models/basic-setting/t2-supplier-mapping-uof-user-setting/tb-ssb-t2-supplier-list';
import { TB_SSB_T2_SUPPLIER_UOF_ACCOUNTDto } from '../../_models/basic-setting/t2-supplier-mapping-uof-user-setting/tb-ssb-t2-supplier-uof-account';
import { OperationResult } from './../../_helpers/utilities/operation-result';
import { environment } from '../../../../environments/environment';
import { PaginationParam, PaginationResult } from './../../_helpers/utilities/pagination-utility';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { T2SupplierMappingUOFUserSettingParam } from '../../_helpers/params/basic-setting/t2-supplier-mapping-uof-user-setting/t2-supplier-mapping-uof-user-setting-param';
import { T2SupplierMappingUOFUserSettingDto } from '../../_models/basic-setting/t2-supplier-mapping-uof-user-setting/t2-supplier-mapping-uof-user-setting';
import { FactoryListSetting } from '../../_models/common/factory-list-setting';
import { T2SupplierMappingUOFUserSettingDetailDto } from '../../_models/basic-setting/t2-supplier-mapping-uof-user-setting/t2-supplier-mapping-uof-user-setting-detail';
import { T2SupplierUOFUserSettingAdd } from '../../_models/basic-setting/t2-supplier-mapping-uof-user-setting/t2-supplier-mapping-uof-user-setting-add';
import { T2SupplierMappingUOFUserSettingDetailParam } from '../../_helpers/params/basic-setting/t2-supplier-mapping-uof-user-setting/t2-supplier-mapping-uof-user-setting-detail-param'
@Injectable({
  providedIn: 'root'
})
export class T2SupplierMappingUofUserSettingService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getData(pagination: PaginationParam, paramsSearch: T2SupplierMappingUOFUserSettingParam, lang: string) {
    let paramsTmp = {...paramsSearch, ...pagination, lang};
    let params = new HttpParams().appendAll(paramsTmp);
    return this.http.get<PaginationResult<T2SupplierMappingUOFUserSettingDto>>(`${this.apiUrl}T2SupplierMappingUOFUserSetting/GetData`, {params});
  }

  getFactory() {
    return this.http.get<FactoryListSetting[]>(`${this.apiUrl}T2SupplierMappingUOFUserSetting/FactoryList`);
  }

  getCustomerNo() {
    return this.http.get<TB_SSB_T2_SUPPLIERListDto[]>(`${this.apiUrl}T2SupplierMappingUOFUserSetting/GetCustomerNo`);
  }

  addData(model: T2SupplierUOFUserSettingAdd): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.apiUrl}T2SupplierMappingUOFUserSetting/Add`, model);
  }

  updateData(model: T2SupplierUOFUserSettingAdd): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.apiUrl}T2SupplierMappingUOFUserSetting/Update`, model);
  }

  getDetail(bu: string, supplier_Group: string, supplier_Group_Name: string) {
    let paramTmp = {bu, supplier_Group, supplier_Group_Name};
    let params = new HttpParams().appendAll(paramTmp);
    return this.http.get<T2SupplierMappingUOFUserSettingDetailDto>(`${this.apiUrl}T2SupplierMappingUOFUserSetting/Details`, {params});
  }

  getUserList() {
    return this.http.get<TB_SSB_T2_SUPPLIER_UOF_ACCOUNTDto[]>(`${this.apiUrl}T2SupplierMappingUOFUserSetting/UserList`);
  }
}
