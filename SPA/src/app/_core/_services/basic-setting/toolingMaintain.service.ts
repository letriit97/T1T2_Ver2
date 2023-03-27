import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  PaginationParam,
  PaginationResult,
} from '../../_helpers/utilities/pagination-utility';
import { ToolingMaintainParams } from '../../_helpers/params/basic-setting/toolingMaintainParams';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { NSP_Get_T2_Tool_DataResultDto } from '@models/common/t2/nSP_Get_T2_Tool_DataResultDto';
@Injectable({
  providedIn: 'root',
})
export class ToolingMaintainService {
  baseURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllToolingMaintains(
    pagination: PaginationParam,
    search: ToolingMaintainParams
  ) {
    let tool_No = search.tool_No == null ? '' : search.tool_No;
    let tool_Type =
      search.tool_Type == null || search.tool_Type == 'All'
        ? ''
        : search.tool_Type;
    let params = new HttpParams()
      .set('PageNumber', pagination.pageNumber)
      .set('PageSize', pagination.pageSize)
      .set('Tool_No', tool_No)
      .set('Tool_Type', tool_Type)
      .set('Sort', search.sort);
    return this.http.get<PaginationResult<NSP_Get_T2_Tool_DataResultDto>>(
      this.baseURL + 'T1ToolingMaintain/GetToolingMaintains',
      { params }
    );
  }

  getToolType(tool_No: string) {
    let params = new HttpParams()
    .set('Tool_No', tool_No)
    return this.http.get<KeyValueUtility[]>(
      this.baseURL + 'T1ToolingMaintain/GetToolTypes',{params}
    );
  }
}
