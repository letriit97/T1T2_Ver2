import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { LocalStorageConstants } from '@constants/local-storage.constants';

@Injectable({ providedIn: 'root' })
export class MailSettingGuard implements CanLoad {
  permission: string[] = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS));
  constructor(private router: Router) { }

  canLoad(route: Route) {
    if (this.permission?.includes("TestC")) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}