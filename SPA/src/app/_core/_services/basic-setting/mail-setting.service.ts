import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { environment } from '@env/environment';
import { OperationResult } from '@utilities/operation-result';
import { TB_SSB_T2_Setting_Mail_Group } from '@models/common/T2/tb-ssb-t2-setting-mail-group';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { MailSettingParam } from '@params/basic-setting/mail-setting-param';

@Injectable({ providedIn: 'root' })
export class MailSettingService {
  constructor(private http: HttpClient) { }

  getMailGroups(pagination: Pagination, param: MailSettingParam): Observable<PaginationResult<TB_SSB_T2_Setting_Mail_Group>> {
    let _param: MailSettingParam = { ...param };
    _param.factory_ID = _param.factory_ID ?? '';
    _param.email_Group_No = _param.email_Group_No ?? '';
    let params: HttpParams = new HttpParams().appendAll({ ...pagination, ..._param });
    return this.http.get<PaginationResult<TB_SSB_T2_Setting_Mail_Group>>(`${environment.apiUrl}MailSetting/All`, { params });
  }

  getMailGroup(param: MailSettingParam): Observable<TB_SSB_T2_Setting_Mail_Group> {
    let params: HttpParams = new HttpParams().appendAll({ ...param });
    return this.http.get<TB_SSB_T2_Setting_Mail_Group>(`${environment.apiUrl}MailSetting`, { params });
  }

  getFactories(forMainPage: boolean = false): Observable<KeyValueUtility[]> {
    let params: HttpParams = new HttpParams().appendAll({ forMainPage });
    return this.http.get<KeyValueUtility[]>(`${environment.apiUrl}MailSetting/Factories`, { params });
  }

  getEmailGroups(factory_ID: string): Observable<KeyValueUtility[]> {
    let params: HttpParams = new HttpParams().appendAll({ factory_ID: factory_ID ?? '' });
    return this.http.get<KeyValueUtility[]>(`${environment.apiUrl}MailSetting/EmailGroups`, { params });
  }

  addMailGroup(mailGroup: TB_SSB_T2_Setting_Mail_Group): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${environment.apiUrl}MailSetting`, mailGroup);
  }

  editMailGroup(mailGroup: TB_SSB_T2_Setting_Mail_Group): Observable<OperationResult> {
    return this.http.put<OperationResult>(`${environment.apiUrl}MailSetting`, mailGroup);
  }

  deleteMailGroup(mailGroup: TB_SSB_T2_Setting_Mail_Group): Observable<OperationResult> {
    return this.http.delete<OperationResult>(`${environment.apiUrl}MailSetting`, { body: mailGroup });
  }
}