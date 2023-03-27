import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';

@Injectable({
  providedIn: 'root',
})
export class ToolingApplyConfirmGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad() {
    let permission: string[] = JSON.parse(
      localStorage.getItem(LocalStorageConstants.PERMISSIONS)
    );
    if (permission.includes('T1ToolingApplyConfirm')) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
