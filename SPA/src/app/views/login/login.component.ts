import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountryConstants, CountryLangConstants } from '@constants/lang.constants';
import { LocalStorageConstants } from '@constants/local-storage.constants';
import { T2Suppliers } from '@models/auth/t2-suppliers';
import { AuthService } from '@services/auth/auth.service';
import { UserForLoginParam } from '@params/auth/user-for-login.param';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { NgSnotifyService } from '@services/ng-snotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  param: UserForLoginParam = <UserForLoginParam>{
    rememberMe: false
  };
  domains: KeyValueUtility[] = [];
  lang: string = localStorage.getItem(LocalStorageConstants.LANG);
  country: string = localStorage.getItem(LocalStorageConstants.COUNTRY);
  suppliers: T2Suppliers = <T2Suppliers>{
    isDisabled: true
  };
  countries: KeyValueUtility[] = [
    { key: CountryConstants.CN, value: CountryConstants.CN },
    { key: CountryConstants.EN, value: CountryConstants.EN },
    { key: CountryConstants.ID, value: CountryConstants.ID },
    { key: CountryConstants.VI, value: CountryConstants.VI },
  ]

  constructor(
    private authService: AuthService,
    private translateService: TranslateService,
    private snotifyService: NgSnotifyService,
    private spinnerService: NgxSpinnerService,
    private router: Router) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }

    this.getListDomains();
  }

  countryChanged() {
    this.lang = CountryLangConstants[this.country];
    this.translateService.use(this.country);
    localStorage.setItem(LocalStorageConstants.LANG, this.lang);
    localStorage.setItem(LocalStorageConstants.COUNTRY, this.country);
  }

  login() {
    this.spinnerService.show();
    this.authService.login(this.param).subscribe({
      next: (res) => {
        if(res) {
          this.snotifyService.success(
            this.translateService.instant('System.Message.LogIn'),
            this.translateService.instant('System.Caption.Success'));
          this.router.navigate(['/']);
        } else {
          this.snotifyService.error(
            this.translateService.instant('Auth.Error_T2'),
            this.translateService.instant('System.Caption.Error'));
        }
        
      },
      error: () => {
        this.snotifyService.error(
          this.translateService.instant('System.Message.LogInFailed'),
          this.translateService.instant('System.Caption.Error'));
      },
      complete: () => {
        this.spinnerService.hide();
        this.router.navigate(['/']);
      }
    });
  }

  getListDomains() {
    this.authService.getListDomains().subscribe({
      next: (res) => {
        this.domains = res;
        this.domains.forEach(item => item.key = item.value);
        this.domains.push({ key: 'Admin', value: this.translateService.instant('Auth.Admin') });
      }
    });
  }

  getSuppliers() {
    this.authService.getSuppliers(this.param.doman).subscribe({
      next: (res) => {
        this.suppliers = res;
        this.param.supplier_ID = res.suppliers[0]?.key ?? null;
      }
    });
  }
}
