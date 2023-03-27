import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { T1T1ToolingApplyDataUpload, T1ToolingApplyData } from '@models/transaction/t1-tooling-apply/t1ToolingApplyData';
import { FunctionUtility } from '@utilities/function-utility';
import { OperationResult } from '@utilities/operation-result';
@Injectable({
  providedIn: 'root'
})
export class T1ToolingApplyApplyService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private functionUtility: FunctionUtility
  ) { }

  getData(supplierID: string, type: string) {
    return this.http.get<T1ToolingApplyData>(this.apiUrl + "T1ToolingApplyApply/GetData", { params: { supplierID, type } });
  }

  create(data: T1ToolingApplyData) {
    let formData = this.functionUtility.toFormData(data);
    return this.http.post<boolean>(this.apiUrl + "T1ToolingApplyApply/Create", formData);
  }

  uploadDataExcel(data: T1T1ToolingApplyDataUpload, file: File) {
    let formData = this.functionUtility.toFormData(data);
    formData.append('file', file);
    return this.http.post<OperationResult>(this.apiUrl + "T1ToolingApplyApply/UploadDataExcel", formData);
  }

  downLoadExcelSample() {
    return this.http.get(`${this.apiUrl}T1ToolingApplyApply/DownLoadExcelSample`, { responseType: 'blob' });
  }
}
