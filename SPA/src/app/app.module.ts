import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {
  IconModule,
  IconSetModule,
  IconSetService,
} from '@coreui/icons-angular';

import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';


export function tokenGetter() {
  return localStorage.getItem(LocalStorageConstants.TOKEN);
}

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AuthGuard } from './_core/_guards/auth/auth.guard';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalStorageConstants } from './_core/_constants/local-storage.constants';
import { NgSelectModule } from '@ng-select/ng-select';

import { GlobalHttpInterceptor } from '@utilities/global-http-interceptor';
import { ModalService } from '@services/modal.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { environment } from '@env/environment';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.allowedDomains,
        disallowedRoutes: environment.disallowedRoutes,
      },
    }),
    NgxSpinnerModule,
    SnotifyModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgSelectModule,
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginComponent,
    DashboardComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true,
    },
    AuthGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    ModalService,
    IconSetService,
    SnotifyService,
    ModalService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    ModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
