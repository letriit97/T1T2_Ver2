import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TB_SSB_T2_Setting_Mail_Group } from '@models/common/T2/tb-ssb-t2-setting-mail-group';
import { MailSettingParam } from '@params/basic-setting/mail-setting-param';
import { MailSettingService } from '@services/basic-setting/mail-setting.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MailSettingEditResolver implements Resolve<TB_SSB_T2_Setting_Mail_Group> {
  constructor(private mailSettingService: MailSettingService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<TB_SSB_T2_Setting_Mail_Group> | Promise<TB_SSB_T2_Setting_Mail_Group> | TB_SSB_T2_Setting_Mail_Group {
    const param: MailSettingParam = {
      factory_ID: route.params['factory_ID'],
      email_Group_No: route.params['email_Group_No']
    };

    return this.mailSettingService.getMailGroup(param)
  }
}