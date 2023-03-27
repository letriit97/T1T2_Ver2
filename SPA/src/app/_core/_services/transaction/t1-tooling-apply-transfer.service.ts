import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { T1ToolingApplyData } from '@models/transaction/t1-tooling-apply/t1ToolingApplyData';
import { FunctionUtility } from '@utilities/function-utility';

@Injectable({
  providedIn: 'root'
})
export class T1ToolingApplyTransferService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private functionUtility: FunctionUtility
  ) { }

  create(data: T1ToolingApplyData) {
    let formData = this.functionUtility.toFormData(data)
    return this.http.post<boolean>(this.apiUrl + "T1ToolingApplyTransfer/Create", formData);
  }

  getData(supplierID: string, type: string) {
    return this.http.get<T1ToolingApplyData>(this.apiUrl + "T1ToolingApplyTransfer/GetData", { params: { supplierID, type } });
  }
}
