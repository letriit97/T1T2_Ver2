import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { LocalStorageConstants } from '@constants/local-storage.constants';
import { environment } from '@env/environment';
import { Observable, tap } from 'rxjs';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { T2Suppliers } from '@models/auth/t2-suppliers';
import { UserForLoginParam } from '@params/auth/user-for-login.param';
import { UserForLogged } from '@models/auth/user-for-logged';
import { ApplicationUser } from '@models/auth/application-user';
import { CountryConstants, LangConstants } from '@constants/lang.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'Auth/';
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  getListDomains(): Observable<KeyValueUtility[]> {
    return this.http.get<KeyValueUtility[]>(this.baseUrl + "list-domains");
  }

  getSuppliers(domain: string) {
    return this.http.get<T2Suppliers>(this.baseUrl + "Suppliers", { params: { domain } });
  }

  login(model: UserForLoginParam) {
    return this.http.post<UserForLogged>(this.baseUrl + 'Login', model).pipe(
      tap(res => {
        debugger
        if (res) {
          localStorage.setItem(LocalStorageConstants.TOKEN, res.token);
          localStorage.setItem(LocalStorageConstants.USER, JSON.stringify(res.user));
          localStorage.setItem(LocalStorageConstants.ROLES, JSON.stringify(res.roles));
          localStorage.setItem(LocalStorageConstants.SUPPLIER_NO, res.supplier_no);
          localStorage.setItem(LocalStorageConstants.CATEGORY, res.category);
          localStorage.setItem(LocalStorageConstants.SUPPLIER_ID, res.supplier_id);
          localStorage.setItem(LocalStorageConstants.AREA, res.area);
          localStorage.setItem(LocalStorageConstants.PERMISSIONS, JSON.stringify(res.userPermissions));
        }
      })
    );
  }

  logout() {
    const lang: string = localStorage.getItem(LocalStorageConstants.LANG);
    const country: string = localStorage.getItem(LocalStorageConstants.COUNTRY);
    localStorage.clear();
    localStorage.setItem(LocalStorageConstants.LANG, lang ?? LangConstants.CN);
    localStorage.setItem(LocalStorageConstants.COUNTRY, country ?? CountryConstants.CN);
    window.location.href = '/#/login';
    window.location.reload();
  }

  loggedIn() {
    const token: string = localStorage.getItem(LocalStorageConstants.TOKEN);
    const user: ApplicationUser = JSON.parse(localStorage.getItem(LocalStorageConstants.USER));
    const roles: string[] = JSON.parse(localStorage.getItem(LocalStorageConstants.ROLES));
    return !(!user || !roles) || !this.jwtHelper.isTokenExpired(token);
  }
}
