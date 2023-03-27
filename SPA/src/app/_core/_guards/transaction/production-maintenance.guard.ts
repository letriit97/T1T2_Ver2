import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';

@Injectable({ providedIn: 'root' })
export class ProductionMaintenanceGuard implements CanLoad {
  permission: string[] = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS));

  constructor(private router: Router) { }

  canLoad(): boolean {
    if (this.permission?.includes("T2ProductionMaintenance")) {
      return true;
    }
    else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}