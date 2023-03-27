import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { Observable } from 'rxjs';
import { T2ToolingSettingDetailViewModel } from '../../../_models/transaction/t2-tooling-setting/t2-tooling-setting-detail-view-model.model';
import { T2ToolingPPASettingParam } from '../../../_helpers/params/transaction/t2-tooling-setting/t2-tooling-setting.param';
import { OperationResult } from '../../../_helpers/utilities/operation-result';
import { TB_SSB_T2PPA_Dto } from '@models/transaction/t2-tooling-setting/tb-ssb-t2ppa-dto.model';
import { SupplierNoMultiLangDropdown } from '../../../_models/transaction/t2-tooling-setting/supplier-no-multi-lang-dropdown';
import {
  PaginationParam,
  PaginationResult,
} from '../../../_helpers/utilities/pagination-utility';
@Injectable({
  providedIn: 'root',
})
export class T2ToolingSettingService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getToolNo(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(
      `${this.apiUrl}ToolingPPASetting/GetToolNo`
    );
  }

  getToolClass(toolno: string): Observable<KeyValueUtility[]> {
    let params = new HttpParams().set('toolno', toolno);
    return this.http.get<KeyValueUtility[]>(
      `${this.apiUrl}ToolingPPASetting/GetToolClass`,
      { params }
    );
  }

  getSupplierNo(
    admin_category: string
  ): Observable<SupplierNoMultiLangDropdown[]> {
    let params = new HttpParams().set('admin_category', admin_category);
    return this.http.get<SupplierNoMultiLangDropdown[]>(
      `${this.apiUrl}ToolingPPASetting/GetSuppliersNo`,
      {
        params,
      }
    );
  }

  getT2PPAs(
    pagination: PaginationParam,
    param: T2ToolingPPASettingParam,
    lang: string
  ): Observable<PaginationResult<TB_SSB_T2PPA_Dto>> {
    let params = new HttpParams().appendAll({ ...pagination, ...param, lang });
    return this.http.get<PaginationResult<TB_SSB_T2PPA_Dto>>(
      `${this.apiUrl}ToolingPPASetting/GetPPAs`,
      { params }
    );
  }

  getPPAsDetail(
    param: T2ToolingPPASettingParam,
    lang: string
  ): Observable<T2ToolingSettingDetailViewModel> {
    let params = new HttpParams()
      .set('ddl_Tool_No', param.ddl_Tool_No)
      .set('ddl_Tool_Class', param.ddl_Tool_Class)
      .set('lang', lang);
    return this.http.get<T2ToolingSettingDetailViewModel>(
      `${this.apiUrl}ToolingPPASetting/GetPPAsDetail`,
      { params }
    );
  }

  deletePPA(model: TB_SSB_T2PPA_Dto): Observable<OperationResult> {
    let params = new HttpParams()
      .set('tool_No', model.tool_No)
      .set('tool_Class', model.tool_Class)
      .set('art', model.art)
      .set('model_Name', model.model_Name);
    return this.http.delete<OperationResult>(
      `${this.apiUrl}ToolingPPASetting/DeleteT2PPA`,
      { params }
    );
  }

  updatePPA(model: TB_SSB_T2PPA_Dto): Observable<OperationResult> {
    return this.http.put<OperationResult>(
      `${this.apiUrl}ToolingPPASetting/UpdateT2PPA`,
      model
    );
  }

  addPPA(model: TB_SSB_T2PPA_Dto): Observable<OperationResult> {
    return this.http.post<OperationResult>(
      `${this.apiUrl}ToolingPPASetting/AddPPA`,
      model
    );
  }

  getArt(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(
      `${this.apiUrl}ToolingPPASetting/GetArt`
    );
  }

  getModelName(art: string): Observable<KeyValueUtility[]> {
    let params = new HttpParams().set('art', art);
    return this.http.get<KeyValueUtility[]>(
      `${this.apiUrl}ToolingPPASetting/GetModelName`,
      { params }
    );
  }

  getAdminCategory(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(
      `${this.apiUrl}ToolingPPASetting/GetAdminCategory`
    );
  }

  getT2PPAToUpdate(
    param: T2ToolingPPASettingParam
  ): Observable<TB_SSB_T2PPA_Dto> {
    let params = new HttpParams().appendAll({ ...param });
    return this.http.get<TB_SSB_T2PPA_Dto>(
      `${this.apiUrl}ToolingPPASetting/GetT2PPAToUpdate`,
      { params }
    );
  }
}
