import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';

@Injectable({providedIn: 'root'})
export class T2SupplierContactSettingGuard implements CanLoad {
    constructor(private router: Router) { }

    canLoad() {
        let currenRoleUser = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS)) as string[];
        if(currenRoleUser?.includes('T2SupplierContactSetting')) {
        return true;
        } 
        else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    }
}