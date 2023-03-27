import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { TB_SSB_T2_SUPPLIER } from '@models/common/t2/tb-ssb-t2-supplier';
import { TB_SSB_T2_TOOL } from '@models/common/t2/tb-ssb-t2-tool';
import { T1ToolingApplyDeliveryParam } from '@params/transaction/t1-tooling-apply-delivery.param';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { T1ToolingApplyDelivery } from '@models/transaction/t1-tooling-apply-delivery/t1-tooling-apply-delivery';
import { T1ToolingApplyDeliveryEdit } from '@models/transaction/t1-tooling-apply-delivery/t1-tooling-apply-delivery-edit';
import { OperationResult } from '@utilities/operation-result';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { FunctionUtility } from '@utilities/function-utility';


@Injectable({ providedIn: 'root' })
export class T1ToolingApplyDeliveryService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private functionUtility: FunctionUtility) { }

  search(param: T1ToolingApplyDeliveryParam, pagination: Pagination): Observable<PaginationResult<T1ToolingApplyDelivery>> {
    let _param = { ...param };
    _param.start_Time = _param.start_Time ? _param.start_Time.toDate().toStringDate() : '';
    _param.end_Time = _param.end_Time ? _param.end_Time.toDate().toStringDate() : '';
    _param.pay_Category = _param.pay_Category ? _param.pay_Category : '';
    _param.supplier_NO = _param.supplier_NO ? _param.supplier_NO : '';
    _param.tool_No = _param.tool_No ? _param.tool_No : '';
    _param.tool_Class = _param.tool_Class ? _param.tool_Class : '';

    let params = new HttpParams().appendAll({ ..._param, ...pagination });
    return this.http.get<PaginationResult<T1ToolingApplyDelivery>>(this.apiUrl + 'T1ToolingApplyDelivery/Search', { params });
  }

  getSuppliers() {
    return this.http.get<TB_SSB_T2_SUPPLIER[]>(this.apiUrl + 'T1ToolingApplyDelivery/Suppliers');
  }

  getTools() {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + 'T1ToolingApplyDelivery/Tools');
  }

  getToolClasses(tool_No: string) {
    return this.http.get<TB_SSB_T2_TOOL[]>(this.apiUrl + 'T1ToolingApplyDelivery/ToolClasses', { params: { tool_No } });
  }

  getMDOrder(tOrder_ID: string) {
    return this.http.get<T1ToolingApplyDeliveryEdit>(this.apiUrl + 'T1ToolingApplyDelivery/MDOrder', { params: { tOrder_ID } });
  }

  updateMDOrder(model: T1ToolingApplyDeliveryEdit) {
    let _model = { ...model };
    _model.moulds.forEach(mod => mod.release_Date = mod.release_Date!= null && mod.release_Date != undefined ? mod?.release_Date?.toUTCDate()?.toJSON() : null);

    let formData = this.functionUtility.toFormData(_model);
    return this.http.post<OperationResult>(this.apiUrl + 'T1ToolingApplyDelivery/UpdateMDOrder', formData);
  }
}