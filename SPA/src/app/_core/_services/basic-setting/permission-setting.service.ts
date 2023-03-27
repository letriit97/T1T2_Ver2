import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserInfoDto } from '@models/basic-setting/permission-setting/user-info-dto';
import { RoleDto, RolesUserDto } from '@models/basic-setting/permission-setting/role-dto';
import { OperationResult } from '@utilities/operation-result';
import { RoleMenuDto } from '@models/basic-setting/permission-setting/role-menu-dto';

@Injectable({
  providedIn: 'root'
})
export class PermissionSettingService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  

  getUses() {
    return this.http.get<UserInfoDto[]>(this.apiUrl + 'PermissionSetting/getUsers');
  }
  getRoles() {
    return this.http.get<RoleDto[]>(this.apiUrl + 'PermissionSetting/getRoles');
  }
  getRoleOfUser(userName: string) {
    let params = new HttpParams().set('userName', userName);
    return this.http.get<RoleDto[]>(this.apiUrl + 'PermissionSetting/getRolesOfUser', {params});
  }
  updateRoleOfUser(param: RolesUserDto) {
    return this.http.post(this.apiUrl + 'PermissionSetting/updateRoleOfUser', param);
  }
  addRole(roleName: string) {
    return this.http.post<OperationResult>(this.apiUrl + 'PermissionSetting/createNewRole', null, {params: {roleName}});
  }
  deleteRole(roleName: string) {
    return this.http.put(this.apiUrl + 'PermissionSetting/deleteRole', null, {params : {roleName}});
  }

  // ----------------------------Setting Function------------------------------------//

  getMenus() {
    return this.http.get<RoleMenuDto[]>(this.apiUrl + 'PermissionSetting/getMenus');
  }
  getMenuOfRole(roleName: string) {
    let params = new HttpParams().set("roleName",roleName);
    return this.http.get<RoleMenuDto[]>(this.apiUrl + 'PermissionSetting/getMenuOfRole', {params});
  }
  updateMenuOfRole(data: RoleMenuDto[]) {
    return this.http.post<OperationResult>(this.apiUrl + 'PermissionSetting/updateMenuOfRole', data);
  }
  addMenu(funcName: string, funController: string) {
    return this.http.post<OperationResult>(this.apiUrl + 'PermissionSetting/addMenu', null, {params: {funcName: funcName,funController: funController}});
  }
}
