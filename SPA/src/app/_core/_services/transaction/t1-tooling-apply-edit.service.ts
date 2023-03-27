import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { T1ToolingApplyEditData } from '@models/transaction/t1-tooling-apply/t1ToolingApplyEditData';
import { T1ToolingApplyData } from '@models/transaction/t1-tooling-apply/t1ToolingApplyData';
import { FunctionUtility } from '@utilities/function-utility';
import { T1ToolingApplyDetailParam } from '@params/transaction/t1ToolingApplyParam';

@Injectable({
  providedIn: 'root'
})
export class T1ToolingApplyEditService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private functionUtility: FunctionUtility
  ) { }

  getDataDetail(param: T1ToolingApplyDetailParam) {
    let params = this.functionUtility.ToParams(param);
    return this.http.get<T1ToolingApplyEditData>(this.apiUrl + "T1ToolingApplyEdit/GetDataDetail", { params });
  }

  updateApply(data: T1ToolingApplyData) {
    let formData = this.functionUtility.toFormData(data);
    return this.http.put<boolean>(this.apiUrl + "T1ToolingApplyEdit/UpdateApply", formData);
  }

  updateCustVersion(data: T1ToolingApplyData) {
    let formData = this.functionUtility.toFormData(data);
    return this.http.put<boolean>(this.apiUrl + "T1ToolingApplyEdit/UpdateCustVersion", formData);
  }

  updateTransfer(data: T1ToolingApplyData) {
    let formData = this.functionUtility.toFormData(data);
    return this.http.put<boolean>(this.apiUrl + "T1ToolingApplyEdit/UpdateTransfer", formData);
  }
}
