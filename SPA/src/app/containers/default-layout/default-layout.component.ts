import { Component, OnDestroy, OnInit } from '@angular/core';
import { INavData } from '@coreui/angular';
import { LocalStorageConstants } from '@constants/local-storage.constants';
import { TranslateService } from '@ngx-translate/core';
import { Nav } from "../../_nav";
import { CountryConstants, CountryLangConstants, LangConstants } from '@constants/lang.constants';
import { Subscription } from 'rxjs';
import { AuthService } from '@services/auth/auth.service';
import { NgSnotifyService } from '@services/ng-snotify.service';
import { ApplicationUser } from '@models/auth/application-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  public sidebarMinimized = false;
  public navItems: INavData[];
  user: ApplicationUser = JSON.parse(localStorage.getItem(LocalStorageConstants.USER));
  area: string = localStorage.getItem(LocalStorageConstants.AREA) == 'T' ? '(Test Area)' : '';
  title: string = `${localStorage.getItem(LocalStorageConstants.CATEGORY)}/(${localStorage.getItem(LocalStorageConstants.SUPPLIER_NO)})`;
  lang: string = localStorage.getItem(LocalStorageConstants.LANG);
  country: string = localStorage.getItem(LocalStorageConstants.COUNTRY);
  langConstants: typeof LangConstants = LangConstants;
  countryConstants: typeof CountryConstants = CountryConstants;
  langChangedSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private navItem: Nav,
    private authService: AuthService,
    private snotifyService: NgSnotifyService) { }

  async ngOnInit() {
    this.navItems = await this.navItem.getNav();
    this.langChangedSubscription = this.translate.onLangChange.subscribe(async res => {
      this.lang = CountryLangConstants[res.lang];
      this.navItems = await this.navItem.getNav();
    });
  }

  switchLang(country: string, lang: string) {
    this.translate.use(country);
    localStorage.setItem(LocalStorageConstants.LANG, lang);
    localStorage.setItem(LocalStorageConstants.COUNTRY, country);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.authService.logout();
    this.snotifyService.success(
      this.translate.instant('System.Message.Logout'),
      this.translate.instant('System.Caption.Success'));
  }

  ngOnDestroy(): void {
    this.langChangedSubscription.unsubscribe();
  }
}
