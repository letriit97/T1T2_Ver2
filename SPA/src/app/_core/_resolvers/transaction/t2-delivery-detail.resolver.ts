import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { T2DeliveryDetail } from '@models/transaction/t2-delivery/t2-delivery-detail';
import { T2DeliveryParam } from '@params/transaction/t2-delivery.param';
import { T2DeliveryService } from '@services/transaction/t2-delivery.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class T2DeliveryDetailResolver implements Resolve<T2DeliveryDetail> {
  constructor(private t2DeliveryService: T2DeliveryService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<T2DeliveryDetail> | Promise<T2DeliveryDetail> | T2DeliveryDetail {
    const param: T2DeliveryParam = <T2DeliveryParam>{
      batch: route.queryParams['batch'],
      pur_NO: route.queryParams['pur_NO'],
      po: route.queryParams['po'],
    }
    return this.t2DeliveryService.getDeliveryList(param);
  }
}