import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StatusCRUD } from '@models/basic-setting/permission-setting/status-CRUD';
import { KeyValueUtility } from '@utilities/key-value-utility';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getListDomains() {
    return this.http.get(this.apiUrl + "Common/list-domains");
  }
  getStatusCRUDMenu(menuName: string) {
    let params = new HttpParams().set('menuName', menuName);
    return this.http.get<StatusCRUD>(this.apiUrl + 'Common/getStatusCRUDMenu', {params});
  }
  getToolNos() 
  {
    return this.http.get<KeyValueUtility[]>(this.apiUrl + 'Common/getToolNos');
  }
}
