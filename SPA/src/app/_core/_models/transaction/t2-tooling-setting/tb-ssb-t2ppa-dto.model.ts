import { TB_SSB_T1PPA_Dto } from './tb-ssb-t1ppa-dto.model';
import { TB_SSB_T2PPA } from '@models/common/t2/tb-ssb-t2ppa';

export interface TB_SSB_T2PPA_Dto extends TB_SSB_T2PPA {
  t2MouldCount: number;
  t2MouldPairs: number;
  t2ProPerDay: number;
  // adminSupplier: string;
  // stockSupplier: string;
  currentUser: string;
  list_TB_SSB_T1PPA_Dtos: TB_SSB_T1PPA_Dto[];
}
