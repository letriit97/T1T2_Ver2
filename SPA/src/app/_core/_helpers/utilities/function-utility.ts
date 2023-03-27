import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Pagination } from "./pagination-utility";
import { NgSnotifyService } from "../../_services/ng-snotify.service";
import { NgxSpinnerService } from "ngx-spinner";
import { RowItem, SizeAndPair } from "@models/transaction/t1-tooling-apply/t1ToolingApply_Add_ViewModel";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, enGbLocale, idLocale, viLocale, zhCnLocale } from "ngx-bootstrap/chronos";
@Injectable({
  providedIn: "root",
})
export class FunctionUtility {
  /**
   *Hàm tiện ích
   */

  constructor(
    private http: HttpClient,
    private snotify: NgSnotifyService,
    private spinnerService: NgxSpinnerService
  ) { }

  /**
   *Trả ra ngày hiện tại, chỉ lấy năm tháng ngày: yyyy/MM/dd
   */
  getToDay() {
    const toDay =
      new Date().getFullYear().toString() +
      "/" +
      (new Date().getMonth() + 1).toString() +
      "/" +
      new Date().getDate().toString();
    return toDay;
  }

  /**
   *Trả ra ngày với tham số truyền vào là ngày muốn format, chỉ lấy năm tháng ngày: yyyy/MM/dd
   */
  getDateFormat(date: Date) {
    return (
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "/" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
    );
  }

  getUTCDate(d?: Date) {
    let date = d ? d : new Date();
    return new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      )
    );
  }

  /**
   * Convert input date to date without time
   * @param date
   * @returns Date
   */
  returnDayNotTime(date: Date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
  }

  returnDayNotTimeOfString(date: string) {
    var a = new Date(date.substr(0, 4) + '/' + date.substr(5, 2) + '/' + date.substr(8, 2));

    return new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0));
  }

  /**
   * Nhập vào kiểu chuỗi hoặc số dạng 123456789 sẽ trả về 123,456,789
   */
  // convertNumber(amount) {
  //   return String(amount).replace(
  //     /(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,
  //     "$1,"
  //   );
  // }

  /**
   * Check 1 string có phải empty hoặc null hoặc undefined ko.
   */
  checkEmpty(str: any) {
    return !str || /^\s*$/.test(str);
  }

  /**
   * Kiểm tra số lượng phần ở trang hiện tại, nếu bằng 1 thì cho pageNumber lùi 1 trang
   * @param pagination
   */
  calculatePagination(pagination: Pagination) {
    // Kiểm tra trang hiện tại phải là trang cuối không và trang hiện tại không phải là trang 1
    if (
      pagination.pageNumber === pagination.totalPage &&
      pagination.pageNumber !== 1
    ) {
      // Lấy ra số lượng phần tử hiện tại của trang
      let currentItemQty =
        pagination.totalCount -
        (pagination.pageNumber - 1) * pagination.pageSize;

      // Nếu bằng 1 thì lùi 1 trang
      if (currentItemQty === 1) {
        pagination.pageNumber--;
      }
    }
  }

  /**
   * Thêm hoặc xóa class tác động vào id element trên DOM
   * * @param id
   * * @param className
   * * @param type => Value bằng true thì add class. Value bằng false thì xóa class
   */
  // changeDomClassList(id: string, className: string, type: boolean) {
  //   type
  //     ? document.getElementById(id).classList.add(className)
  //     : document.getElementById(id).classList.remove(className);
  // }

  /**
   * Append property HttpParams
   * * @param formValue
   */
  ToParams(formValue: any) {
    let params = new HttpParams();
    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      params = params.append(key, value);
    }
    return params;
  }

  /**
   * Append property HttpParams
   * * @param value role_unique
   */
  convertUrlMenu(str: string): string {
    if (str.trim() === 'ams.SPCSettingByDevice') {
      return '/spcsetting';
    }
    let strName = str.split('.')[1];
    let indexUppercase: number[] = [];
    let result: string[] = [];
    strName.split('').forEach((item, i) => {
      if (item.toUpperCase() === item) {
        indexUppercase.push(i);
      }
    });

    for (let i = 0; i <= indexUppercase.length - 1; i++) {
      let item = strName.slice(indexUppercase[i], indexUppercase[i + 1]);
      result.push(item);
    }

    return `/${result.join('-').toLowerCase()}`;

  }

  /**
  * Append property HttpParams
  * * @param str str
  * * Viết Hoa chữ cái đầu tiên trong chuỗi
  */
  toUpperCaseFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getTime(date: Date): string {
    const hours = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours();
    const minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  dateNotTimeSecond(date: Date) {
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:00`;
  }

  exportExcel(result: Blob, fileName: string) {
    if (result.size == 0) {
      this.spinnerService.hide();
      return this.snotify.warning('No Data', "Warning")
    }
    if (result.type !== 'application/xlsx') {
      this.spinnerService.hide();
      return this.snotify.error(result.type.toString(), "Error");
    }
    const blob = new Blob([result]);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fileName}.xlsx`);
    document.body.appendChild(link);
    link.click();
  }

  download(result: Blob, fileName: string) {
    const blob = new Blob([result]);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
  }

  addRowT1ToolingApply(rowId: number) {
    let row: RowItem = <RowItem>{
      mouldID: '',
      mouldNo: '',
      stockSupplierNO: '',
      id: rowId,
      sizeAndPairs: [],
      totalPPR: 0,
      requestDate: new Date()
    };
    for (let i = 1; i <= 10; i++) {
      let sizePair: SizeAndPair = <SizeAndPair>{
        sort: i,
        qty: 'All',
        size: 'All',
        isChange: true
      };
      row.sizeAndPairs.push(sizePair);
    }
    return row;
  }

  getListSizeAndSumPair(data: RowItem[]) {
    let sizePair: SizeAndPair[] = [];
    // get list size & pair
    data.map(x => { sizePair.push(...x.sizeAndPairs) });
    // get list distinct size != 'All'
    let sizes = Array.from(new Set(sizePair.filter(x => x.size != 'All').map(x => x.size)));

    let listSizeAndQty: SizeAndPair[] = [];
    sizes.forEach(x => {
      // get list size & pair equal size
      let listSizeAndPair = sizePair.filter(a => a.size == x && a.qty != 'All');
      let sumQty: number = 0;
      // calculator sum pair equal size
      listSizeAndPair.forEach(s => {
        let qty = parseFloat(s.qty);
        sumQty += qty;
      });
      listSizeAndQty.push({ qty: sumQty.toString(), size: x } as SizeAndPair);
    });
    return listSizeAndQty;
  }

  calculatorTotalPair(dataRow: RowItem[]) {
    let totalPair = 0;
    let totalData = dataRow.filter(x => x.totalPPR > 0);
    totalData.forEach(x => {
      totalPair += x.totalPPR;
    });
    return totalPair;
  }

  calculatorToolPair(listSizeAndQty: SizeAndPair[]) {
    let toolPair = 0;
    listSizeAndQty.forEach(x => {
      toolPair += parseFloat(x.qty);
    });
    return toolPair;
  }

  setDatepickerLanguage(localeService: BsLocaleService, country: string) {
    let dateLangs = {
      VI: viLocale,
      EN: enGbLocale,
      CN: zhCnLocale,
      ID: idLocale
    }
    defineLocale('lang', dateLangs[country]);
    localeService.use('lang');
  }

  toFormData(obj: any, form?: FormData, namespace?: string) {
    let fd = form || new FormData();
    let formKey: string;
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        // namespaced key property
        if (!isNaN(property as any)) {
          // obj is an array
          formKey = namespace ? `${namespace}[${property}]` : property;
        } else {
          // obj is an object
          formKey = namespace ? `${namespace}.${property}` : property;
        }
        if (obj[property] instanceof Date) {
          // the property is a date, so convert it to a string
          fd.append(formKey, obj[property].toISOString());
        } else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          // the property is an object or an array, but not a File, use recursivity
          this.toFormData(obj[property], fd, formKey);
        } else {
          // the property is a string, number or a File object
          fd.append(formKey, obj[property]);
        }
      }
    }
    return fd;
  }
}
