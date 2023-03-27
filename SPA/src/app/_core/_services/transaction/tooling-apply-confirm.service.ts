import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToolingApplyConfirmParams } from '@params/transaction/toolingApplyConfirmParams';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { ToolingApplyConfirm } from '@models/transaction/toolingApplyConfirm';
import { BehaviorSubject } from 'rxjs';
import { OperationResult } from '@utilities/operation-result';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { FunctionUtility } from '@utilities/function-utility';
import { TB_SSB_T2_MD_ORDER } from '@models/common/t2/tb-ssb-t2-md-order';
@Injectable({
  providedIn: 'root',
})
export class ToolingApplyConfirmService {
  baseURL = environment.apiUrl;
  toolingApplyConfirmSource = new BehaviorSubject<ToolingApplyConfirm>(
    <ToolingApplyConfirm>{}
  );
  currentToolingApplyConfirmSource =
    this.toolingApplyConfirmSource.asObservable();

  constructor(
    private http: HttpClient,
    private functionUtily: FunctionUtility
  ) { }

  detailToolingApplyConfirm(item: ToolingApplyConfirm) {
    this.toolingApplyConfirmSource.next(item);
  }

  getToolNo() {
    return this.http.get<KeyValueUtility[]>(
      this.baseURL + 'ToolingApplyConfirm/GetToolNo'
    );
  }
  getToolType(tool_NO: string) {
    let tool_No = tool_NO == null ? '' : tool_NO?.trim();
    let params = new HttpParams().set('toolNo', tool_No);
    return this.http.get<KeyValueUtility[]>(
      this.baseURL + 'ToolingApplyConfirm/GetToolClass',
      {
        params,
      }
    );
  }
  getToolName(tool_NO: string, tool_Class: string) {
    let tool_No = tool_NO == null ? '' : tool_NO?.trim();
    let toolClass =
      tool_Class == null || tool_Class == '' ? '' : tool_Class?.trim();
    let params = new HttpParams()
      .set('tool_no', tool_No)
      .set('tool_class', toolClass);
    return this.http.get<any>(
      this.baseURL + 'ToolingApplyConfirm/GetToolName',
      {
        params,
      }
    );
  }

  getSupplierNo() {
    return this.http.get<KeyValueUtility[]>(
      this.baseURL + 'ToolingApplyConfirm/GetSupplierNo'
    );
  }

  getSupplierName(supplierId: string) {
    let supplierID = supplierId == null ? '' : supplierId?.trim();
    let params = new HttpParams().set('Supplier_ID', supplierID);
    return this.http.get<any>(
      this.baseURL + 'ToolingApplyConfirm/GetSupplierName',
      { params }
    );
  }

  getAllToolingMaintains(
    search: ToolingApplyConfirmParams,
    pagination: Pagination
  ) {
    let tool_No = search.tool_NO == null ? '' : search.tool_NO;
    let Tool_Class =
      search.tool_Class == null || search.tool_Class == ''
        ? ''
        : search.tool_Class;
    let Supplier_NO =
      search.supplier_NO == null || search.supplier_NO == 'All'
        ? ''
        : search.supplier_NO;
    let params = new HttpParams()
      .set('Tool_No', tool_No.trim())
      .set('Tool_Class', Tool_Class.trim())
      .set('Supplier_NO', Supplier_NO.trim())
      .set('PageNumber', pagination.pageNumber)
      .set('PageSize', pagination.pageSize);
    return this.http.get<PaginationResult<ToolingApplyConfirm>>(
      this.baseURL + 'ToolingApplyConfirm/GetAllToolingApllyConfirm',
      { params }
    );
  }
  delete(tOrder_ID: TB_SSB_T2_MD_ORDER) {
    return this.http.post<boolean>(
      this.baseURL + 'ToolingApplyConfirm/Delete',
      tOrder_ID
    );
  }

  loadDetailTable(TOrder_ID: string) {
    let tOrderID = TOrder_ID == null || '' || undefined ? '' : TOrder_ID;
    let params = new HttpParams().set('TOrder_ID', tOrderID?.trim());
    return this.http.get<ToolingApplyConfirm>(
      this.baseURL + 'ToolingApplyConfirm/GetDetailTable',
      { params }
    );
  }
  update(item: ToolingApplyConfirm) {
    item.moulds.forEach((mod) => {
      mod.exp_Delivery_Date = this.functionUtily.returnDayNotTime(
        mod.exp_Delivery_Date.toDate()
      );
      mod.exp_Release_Date = this.functionUtily.returnDayNotTime(
        mod.exp_Release_Date.toDate()
      );
    });
    return this.http.post<OperationResult>(
      this.baseURL + 'ToolingApplyConfirm/Update',
      item
    );
  }
  exportExcelAll(search: ToolingApplyConfirmParams, pagination: Pagination) {
    let tool_No = search.tool_NO == null ? '' : search.tool_NO;
    let tool_Type =
      search.tool_Type == null || search.tool_Type == ''
        ? ''
        : search.tool_Type;
    let Supplier_NO =
      search.supplier_NO == null || search.supplier_NO == 'All'
        ? ''
        : search.supplier_NO;
    let languages =
      search.languages == null
        ? 'en'
        : search.languages;

    let params = new HttpParams()
      .set('Tool_No', tool_No)
      .set('Tool_Type', tool_Type)
      .set('Supplier_NO', Supplier_NO)
      .set('languages', languages)
      .set('PageNumber', pagination.pageNumber)
      .set('PageSize', pagination.pageSize);

    return this.http.get(this.baseURL + 'ToolingApplyConfirm/ExportExcel', {
      params,
      responseType: 'blob',
    });
  }

  sendMail(tOrder_ID: string) {
    return this.http.get<OperationResult>(this.baseURL + 'ToolingApplyConfirm/SendMail', { params: { tOrder_ID } });
  }
}
