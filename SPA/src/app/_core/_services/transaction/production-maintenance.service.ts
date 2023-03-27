import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { PaginationParam, PaginationResult } from '@utilities/pagination-utility';
import { OperationResult } from '@utilities/operation-result';
import { ProductionMaintenance } from '@models/transaction/ProductionMaintenance/productionMaintenance';
import { ProductionMaintenanceHeaderExport, ProductionMaintenanceParams } from '@params/transaction/production-maintenance-params';
import { ProductionMaintenanceAddDetail } from '@models/transaction/ProductionMaintenance/ProductionMaintenanceAddDetail';
import { TB_SSB_T2_ORDER } from '@models/common/t2/tb-ssb-t2-order';
import { TB_SSB_T2_SUPPLIER } from '@models/common/t2/tb-ssb-t2-supplier';

@Injectable({
  providedIn: 'root'
})
export class ProductionMaintenanceService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(pagination: PaginationParam, paramSearch: ProductionMaintenanceParams): Observable<PaginationResult<TB_SSB_T2_ORDER>> {
    let params = new HttpParams().appendAll({ ...pagination, ...paramSearch })
    return this.http.get<PaginationResult<TB_SSB_T2_ORDER>>(this.apiUrl + 'ProductionMaintenance/GetAll', {params});
  }

  getProductions(batch: string, po: string, pur_NO: string): Observable<ProductionMaintenance> {
    let params = new HttpParams().appendAll({ batch, po, pur_NO });
    return this.http.get<ProductionMaintenance>(this.apiUrl + 'ProductionMaintenance/GetProductions', { params});
  }

  getProductionMaintenanceDetail(batch: string, po: string, pur_NO: string): Observable<OperationResult> {
    let params = new HttpParams().appendAll({ batch, po, pur_NO });
    return this.http.get<OperationResult>(this.apiUrl + 'ProductionMaintenance/GetProductMainDetail', { params});
  }

  getSuppliers(category: string, supplier_no: string): Observable<TB_SSB_T2_SUPPLIER[]> {
    let params = new HttpParams().appendAll({category, supplier_no})
    return this.http.get<TB_SSB_T2_SUPPLIER[]>(this.apiUrl + 'ProductionMaintenance/GetSuppliers', {params});
  }

  getFeedBackType(batch: string, po: string, pur_NO: string): Observable<any> {
    let params = new HttpParams().appendAll({ batch, po, pur_NO });
    return this.http.get<any>(this.apiUrl + 'ProductionMaintenance/GetFeedBackType', { params});
  }

  addProduction( data: ProductionMaintenanceAddDetail): Observable<OperationResult> {
    return this.http.post<OperationResult>(this.apiUrl + 'ProductionMaintenance/CreateProduction', data );
  }
  
  deleteProduction(id: string): Observable<OperationResult> {
    let params = new HttpParams().append('id', id);
    return this.http.delete<OperationResult>(this.apiUrl + 'ProductionMaintenance/DeleteProduction', { params });
  }

  exportExcel(paramSearch: ProductionMaintenanceParams, headerExport: ProductionMaintenanceHeaderExport) {
    let params = new HttpParams().appendAll({ ...paramSearch, ...headerExport });
    return this.http.post(this.apiUrl + 'ProductionMaintenance/ExportReport', {}, { responseType: 'blob', params });
  }

  exportProductionExcel(paramSearch: ProductionMaintenanceParams, headerExport: ProductionMaintenanceHeaderExport) {
    let params = new HttpParams().appendAll({ ...paramSearch, ...headerExport });
    return this.http.post(this.apiUrl + 'ProductionMaintenance/ExportProductionReport', {}, { responseType: 'blob', params });
  }
}
