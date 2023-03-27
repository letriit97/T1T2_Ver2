import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { OperationResult } from '@utilities/operation-result';
import { ParaSetting } from '@models/basic-setting/para-setting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderManualCloseService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAll(): Observable<ParaSetting[]> {
    return this.http.get<ParaSetting[]>(this.apiUrl + 'ParameterSetting/GetAll');
  }

  add(model: ParaSetting): Observable<OperationResult> {
    return this.http.post<OperationResult>(this.apiUrl + 'ParameterSetting/Add', model);
  }

  update(model: ParaSetting): Observable<OperationResult> {
    return this.http.put<OperationResult>(this.apiUrl + 'ParameterSetting/Update', model);
  }

  delete(id: number): Observable<OperationResult> {
    let params = new HttpParams().append('id', id);
    return this.http.delete<OperationResult>(this.apiUrl + 'ParameterSetting/Delete', { params });
  }
}
