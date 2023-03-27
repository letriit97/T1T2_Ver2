import { TB_SSB_T1PPA } from "@models/common/t2/tb-ssb-t1ppa";
import { AdminSupplierAllLang } from "./supplier-no-multi-lang-dropdown";

export interface TB_SSB_T1PPA_Dto extends TB_SSB_T1PPA {
  t2MouldCount: number;
  t2MouldPairs: number;
  t2ProPerDay: number;
  adminSupplier: AdminSupplierAllLang;
  stockSupplierCN: string;
  stockSupplierEN: string;
  stockSupplierLC: string;
}
