import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationEnd,
  NavigationStart,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { cilUser } from '@coreui/icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { JwtHelperService } from '@auth0/angular-jwt';
import '@utilities/extension-methods';
import { TranslateService } from '@ngx-translate/core';
import { CountryConstants, LangConstants } from '@constants/lang.constants';
import { LocalStorageConstants } from '@constants/local-storage.constants';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `
    <router-outlet></router-outlet>
    <ngx-spinner bdColor="rgba(0, 0, 0, 0.8)" size="medium" color="#fff" type="ball-scale-multiple" [fullScreen]="true"></ngx-spinner>
    <ng-snotify></ng-snotify>`,
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  lang: string = localStorage.getItem(LocalStorageConstants.LANG);
  country: string = localStorage.getItem(LocalStorageConstants.COUNTRY);
  
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService,) {
    // iconSet singleton
    iconSet.icons = { cilUser };
  }

  ngOnInit() {
    this.translate.addLangs([CountryConstants.CN, CountryConstants.EN, CountryConstants.ID, CountryConstants.VI]);
    this.lang = this.lang ?? LangConstants.CN;
    this.country = this.country ?? CountryConstants.CN;
    this.translate.setDefaultLang(this.country);
    this.translate.use(this.country);
    localStorage.setItem(LocalStorageConstants.LANG, this.lang);
    localStorage.setItem(LocalStorageConstants.COUNTRY, this.country);

    this.router.events.subscribe((evt) => {
      this.navigationInterceptor(evt);
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      this.spinnerService.show();
    }

    if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
      this.spinnerService.hide();
    }
  }
}
