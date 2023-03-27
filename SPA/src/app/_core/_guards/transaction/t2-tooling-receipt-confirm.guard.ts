import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class T2ToolingReceiptConfirmGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentRolesUser = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS)) as string[];
    if (currentRolesUser?.includes('T1ToolingReceiptConfirm')) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
