import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';
// impo

@Injectable({
  providedIn: 'root'
})
export class T2ToolingSettingGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad() {
    let currentRolesUser = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS)) as string[];
    if (currentRolesUser?.includes('T2ToolingSetting')) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}

