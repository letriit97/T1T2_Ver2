import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';

@Injectable({
  providedIn: 'root'
})
export class T2SupplierUofuserSettingGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad() {
    let currentRolesUser = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS)) as string[];
    if (currentRolesUser.includes('T2DeliveryDate')) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
