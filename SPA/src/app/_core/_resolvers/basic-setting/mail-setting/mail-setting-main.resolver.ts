import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TB_SSB_T2_Setting_Mail_Group } from '@models/common/T2/tb-ssb-t2-setting-mail-group';
import { MailSettingParam } from '@params/basic-setting/mail-setting-param';
import { MailSettingService } from '@services/basic-setting/mail-setting.service';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MailSettingMainResolver implements Resolve<PaginationResult<TB_SSB_T2_Setting_Mail_Group>> {
  param: MailSettingParam = <MailSettingParam>{};
  pagination: Pagination = <Pagination>{
    pageNumber: 1,
    pageSize: 10
  };

  constructor(private mailSettingService: MailSettingService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PaginationResult<TB_SSB_T2_Setting_Mail_Group>> | Promise<PaginationResult<TB_SSB_T2_Setting_Mail_Group>> | PaginationResult<TB_SSB_T2_Setting_Mail_Group> {
    return this.mailSettingService.getMailGroups(this.pagination, this.param);
  }
}