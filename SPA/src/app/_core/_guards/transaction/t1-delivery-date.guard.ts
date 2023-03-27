import { LocalStorageConstants } from './../../_constants/local-storage.constants';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class T1DeliveryDateGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad() {
    let currentRolesUser = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS)) as string[];
    if (currentRolesUser.includes('T1DeliveryDate')) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
