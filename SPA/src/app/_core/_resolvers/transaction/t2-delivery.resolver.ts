import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { T2Delivery } from '@models/transaction/t2-delivery/t2-delivery';
import { T2DeliveryParam } from '@params/transaction/t2-delivery.param';
import { T2DeliveryService } from '@services/transaction/t2-delivery.service';
import { Pagination, PaginationResult } from '@utilities/pagination-utility';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class T2DeliveryResolver implements Resolve<PaginationResult<T2Delivery>> {
  param: T2DeliveryParam = <T2DeliveryParam>{};
  pagination: Pagination = <Pagination>{
    pageNumber: 1,
    pageSize: 10,
  };

  constructor(private t2DeliveryService: T2DeliveryService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PaginationResult<T2Delivery>> | Promise<PaginationResult<T2Delivery>> | PaginationResult<T2Delivery> {
    return this.t2DeliveryService.search(this.param, this.pagination);
  }
}