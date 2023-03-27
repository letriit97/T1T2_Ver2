import { Injectable } from '@angular/core';
import { INavData } from '@coreui/angular';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageConstants } from './_core/_constants/local-storage.constants';
import { RolesContants } from './_core/_constants/roles.constants';
import { firstValueFrom } from 'rxjs';
import { ApplicationUser } from '../app/_core/_models/auth/application-user';
@Injectable({ providedIn: 'root' })
export class Nav {
  roles: string[] = JSON.parse(localStorage.getItem(LocalStorageConstants.PERMISSIONS)) || [];
  navItems: INavData[] = [];
  user: ApplicationUser = JSON.parse(localStorage.getItem(LocalStorageConstants.USER));

  constructor(
    private translateService: TranslateService,
    private rolesConstants: RolesContants) { }

  async getNav(): Promise<INavData[]> {
    this.navItems = [];
    let navData: string[] = this.roles;

    for (const item of this.rolesConstants.navRoles) {
      let nav: INavData = {
        name: `${item.seq} ${await firstValueFrom(this.translateService.get(item.name))}`,
        url: item.url,
        icon: item.icon,
        children: []
      };

      if (item.roles && item.roles.length > 0) {
        for (const childItem of item.roles) {
          if (
            (childItem.unique.includes('STATIC')) ||
            (navData.includes(childItem.unique)) ||
            (childItem.unique === 'PermissionSetting' && this.user?.userName === 'admin')) {
            let childNav: INavData = {
              name: `${childItem.seq} ${await firstValueFrom(this.translateService.get(childItem.name))}`,
              url: childItem.url
            };

            nav.children.push(childNav);
          }
        }
      }
     
      this.navItems.push(nav);
    }
    return this.navItems;
  }
}
