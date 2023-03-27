import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { HttpClient } from '@angular/common/http';
import { ModSelectList } from '@models/transaction/t1-tooling-apply/modSelectList';
import { RowItem } from '@models/transaction/t1-tooling-apply/t1ToolingApply_Add_ViewModel';

@Injectable({
  providedIn: 'root'
})
export class T1ToolingApplyCommonService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAllToolNo() {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + "T1ToolingApplyCommon/GetAllToolNo");
  }

  getAllToolType(tool_No: string) {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + "T1ToolingApplyCommon/GetAllToolType", { params: { tool_No } });
  }

  getAllSize(toolNo: string, toolType: string) {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + "T1ToolingApplyCommon/GetAllSize", { params: { toolNo, toolType } });
  }

  getModList(toolNo: string, toolClass: string, supplierID: string) {
    return this.http.get<ModSelectList[]>(this.apiUrl + "T1ToolingApplyCommon/GetModList", { params: { toolNo, toolClass, supplierID } });
  }

  getExistingMods(modSelected: string[]) {
    return this.http.post<RowItem[]>(this.apiUrl + "T1ToolingApplyCommon/GetExistingMods", modSelected);
  }
}
