import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageConstants } from '@constants/local-storage.constants';

@Injectable({
  providedIn: 'root'
})
export class T1ToolingStockOwnershipGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentRolesUser = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS)) as string[];
    if (currentRolesUser?.includes('T1ToolingStockOwnership')) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
