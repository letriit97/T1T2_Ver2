import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToolingStockParam } from '@models/query/tooling-stock/tooling-stock-param';
import { ToolingStockExportExcelParam, ToolingStockSearchDto } from '@models/query/tooling-stock/tooling-stock-search-dto';
import { HistoryDataDto } from '@models/query/tooling-stock/history-data-dto';
import { PaginationParam, PaginationResult } from '@utilities/pagination-utility';
import { BehaviorSubject } from 'rxjs';
import { KeyValueUtility } from '@utilities/key-value-utility';
@Injectable({
  providedIn: 'root'
})
export class T1ToolingStockService {
  apiUrl = environment.apiUrl;
  toolingStockModelSource = new BehaviorSubject<ToolingStockSearchDto>(null);
  constructor(private http: HttpClient) { }
  getSuppierByCategory(category: string) {
    let params = new HttpParams().set('category', category);
    return this.http.get<KeyValueUtility[]>(this.apiUrl + 'T1ToolingStock/getSuppierByCategory',  {params});
  }

  search(pagination: PaginationParam, model: ToolingStockParam) {
    let params = new HttpParams().appendAll({...pagination});
    return this.http.post<PaginationResult<ToolingStockSearchDto>>(this.apiUrl + 'T1ToolingStock/search', model, {params});
  }

  getHistoryData(model: ToolingStockSearchDto) {
    return this.http.post<HistoryDataDto>(this.apiUrl + 'T1ToolingStock/getHistoryData', model);
  }

  exportExcel(paramSearch: ToolingStockExportExcelParam) {
    return this.http.post(`${this.apiUrl}T1ToolingStock/exportExcel`, paramSearch, {responseType: 'blob' });
  }
}
