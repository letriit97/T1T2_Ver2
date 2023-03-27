import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { T1ToolingRelationship_Edit_ViewModel } from "@models/basic-setting/tooling-family/t1ToolingRelationship_Edit_ViewModel";
import { TB_SSB_T2_TOOL_FAMILY_VIEW_DETAIL } from "@models/basic-setting/tooling-family/tB_SSB_T2_TOOL_FAMILY_VIEW_DETAILDto";
import { TB_SSB_T2_TOOL_FAMILY_DETAIL_DTO } from "@models/basic-setting/tooling-family/tB_SSB_T2_TOOL_FAMILY_VIEW_LISTDATA";
import { TB_SSB_T2_TOOL } from "@models/common/t2/tb-ssb-t2-tool";
import { TB_SSB_T2_TOOL_FAMILY_DETAIL } from "@models/common/t2/tb-ssb-t2-tool-family-detail";
import { ToolingFamilyParams } from "@params/basic-setting/toolingFamilyParams";
import { KeyValueUtility } from '@utilities/key-value-utility';
import { OperationResult } from "@utilities/operation-result";
import { Pagination, PaginationResult } from "@utilities/pagination-utility";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ToolingFamilyService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  search(param: ToolingFamilyParams, pagination: Pagination) {
    let params: HttpParams = new HttpParams().appendAll({ ...pagination });
    params = param.model_Name ? params.append('Model_Name', param.model_Name) : params;
    params = param.field_Tooling_Family ? params.append('Field_Tooling_Family', param.field_Tooling_Family) : params;
    return this.http.get<PaginationResult<TB_SSB_T2_TOOL_FAMILY_DETAIL_DTO>>(this.baseUrl + 'ToolingFamily/Search', { params });
  }

  getToolNo(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(this.baseUrl + 'ToolingFamily/GetToolingNo');
  }
  getOutsoleToolNo(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(this.baseUrl + 'ToolingFamily/GetOutsoleToolingNo');
  }
  getStyleNo(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(this.baseUrl + 'ToolingFamily/GetStyleNo');
  }
  getToolItem(tool_no: string): Observable<TB_SSB_T2_TOOL> {
    const params = new HttpParams().append('tool_no', tool_no);
    return this.http.get<TB_SSB_T2_TOOL>(this.baseUrl + 'ToolingFamily/GetToolItem/', { params });
  }

  getToolFamilyDetail(group_id: string): Observable<TB_SSB_T2_TOOL_FAMILY_VIEW_DETAIL> {
    const params = new HttpParams().append('group_id', group_id);
    return this.http.get<TB_SSB_T2_TOOL_FAMILY_VIEW_DETAIL>(this.baseUrl + 'ToolingFamily/GetToolFamilyDetail/', { params });
  }

  edit(data: TB_SSB_T2_TOOL_FAMILY_DETAIL): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'ToolingFamily/Edit', data);
  }

  createPost(body: T1ToolingRelationship_Edit_ViewModel): Observable<OperationResult> {
    return this.http.post<OperationResult>(this.baseUrl + 'ToolingFamily/CreatePost', body);
  }

  getToolType(tool_no: string) {
    let params = new HttpParams().set('tool_no', tool_no);
    return this.http.get<KeyValueUtility[]>(this.baseUrl + "ToolingFamily/GetToolType", { params });
  }

  getModelNo(tool_no: string, tool_type: string) {
    let params = new HttpParams().set("tool_no", tool_no).set('tool_type', tool_type);
    return this.http.get<TB_SSB_T2_TOOL>(this.baseUrl + "ToolingFamily/GetModelNo", { params })
  }

  getToolName(tool_no: string, tool_type: string) {
    let params = new HttpParams().set("tool_no", tool_no).set("tool_Type", tool_type);
    return this.http.get<TB_SSB_T2_TOOL>(this.baseUrl + "ToolingFamily/GetToolName", { params });
  }
  getStyleName(style_no: string) {
    let params = new HttpParams().set("style_no", style_no);
    return this.http.get<KeyValueUtility>(this.baseUrl + "ToolingFamily/GetStyleName", { params });
  }
  getToolTypeUpdate(tool_no: string) {
    let params = new HttpParams().set("tool_no", tool_no);
    return this.http.get<KeyValueUtility[]>(this.baseUrl + "ToolingFamily/GetToolTypeUpdate", { params });
  }


}
