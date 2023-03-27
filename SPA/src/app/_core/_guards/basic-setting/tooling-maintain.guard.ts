import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';
@Injectable({
  providedIn: 'root',
})
export class ToolingMaintainGuard implements CanLoad {
  permission: string[] = JSON.parse(
    localStorage.getItem(LocalStorageConstants.PERMISSIONS)
  );

  constructor(private router:Router) {}

  canLoad() {
    if (this.permission.includes('T1ToolingSetting')) {
      return true;
    }
    else{
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
