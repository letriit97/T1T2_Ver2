import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToolingManagementReportHeader, ToolingManagementReportParams } from '@params/report/tooling-management-report-params';
import { TB_SSB_T2_SUPPLIER } from '@models/common/t2/tb-ssb-t2-supplier';
@Injectable({
  providedIn: 'root'
})
export class ToolingManagementReportService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getToolNo(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'ToolingManagementReport/GetToolNo');
  }

  getToolClass(toolNo: string): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'ToolingManagementReport/GetToolClass', { params: { toolNo } });
  }

  getManageFactory(): Observable<TB_SSB_T2_SUPPLIER[]> {
    return this.http.get<TB_SSB_T2_SUPPLIER[]>(this.apiUrl + 'ToolingManagementReport/GetManageFactory');
  }

  getApplicationStatus(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'ToolingManagementReport/GetApplicationStatus');
  }

  exportExcel(exportParams: ToolingManagementReportParams, headerExport: ToolingManagementReportHeader) {
    let params = new HttpParams().appendAll({ ...exportParams, ...headerExport });
    return this.http.post(this.apiUrl + 'ToolingManagementReport/ExportExcel', {}, { responseType: 'blob', params });
  }
}
