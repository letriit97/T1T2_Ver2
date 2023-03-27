import { TB_SSB_T2_TOOL } from '@models/common/t2/tb-ssb-t2-tool';
import { KeyValueUtility } from '@utilities/key-value-utility';
import { TB_SSB_T2_TOOL_FAMILY } from './tb-ssb-t2-tool-family';

export interface TB_SSB_T2_TOOL_FAMILY_DETAIL {
  Id: string;
  group_ID: string;
  tool_No: string;
  tool_Class: string;
  updated_By: string;
  update_Time: string;
  tB_SSB_T2_TOOL_FAMILY: TB_SSB_T2_TOOL_FAMILY;
  tB_SSB_T2_TOOL: TB_SSB_T2_TOOL;
  toolValue: string;
  flag: number;
  isUpdate: boolean;
  listToolType?: KeyValueUtility[];
  isDisableAdd: boolean;
}
