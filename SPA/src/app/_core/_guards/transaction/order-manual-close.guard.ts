import { LocalStorageConstants } from '../../_constants/local-storage.constants';
import { CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderManualCloseGuard implements CanLoad {
  roles: string[] = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS));
  permission: string[] = this.roles.filter((v, i, a) => a.indexOf(v) === i)
  constructor() { }

  canLoad() {
    return this.permission.includes('OrderClose');
  }
}
