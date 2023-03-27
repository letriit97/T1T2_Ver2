import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { T1ToolingApplyDeliveryEdit } from '@models/transaction/t1-tooling-apply-delivery/t1-tooling-apply-delivery-edit';
import { T1ToolingApplyDeliveryService } from '@services/transaction/t1-tooling-apply-delivery.service';

@Injectable({ providedIn: 'root' })
export class T1ToolingApplyDeliveryEditResolver implements Resolve<T1ToolingApplyDeliveryEdit> {
  constructor(private t1ToolingApplyDeliveryService: T1ToolingApplyDeliveryService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<T1ToolingApplyDeliveryEdit> | Promise<T1ToolingApplyDeliveryEdit> | T1ToolingApplyDeliveryEdit {
    const tOrder_ID = route.params['tOrder_ID'];
    return this.t1ToolingApplyDeliveryService.getMDOrder(tOrder_ID);
  }
}