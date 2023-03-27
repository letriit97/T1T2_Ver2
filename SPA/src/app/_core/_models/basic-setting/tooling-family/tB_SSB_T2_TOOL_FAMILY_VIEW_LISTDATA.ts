import { PaginationResult } from '../../../_helpers/utilities/pagination-utility';
import { TB_SSB_T2_TOOL_FAMILY_DETAIL } from '../../common/t2/tb-ssb-t2-tool-family-detail';
export interface TB_SSB_T2_TOOL_FAMILY_VIEW_LISTDATA {
  list_TB_SSB_T2_TOOL_FAMILY_DETAIL: PaginationResult<TB_SSB_T2_TOOL_FAMILY_DETAIL>;
  field_Tooling_Family: string;
  art: string;
}

export interface TB_SSB_T2_TOOL_FAMILY_DETAIL_DTO {
  group_ID: string;
  tooling_Family: string;
  model_Name: string;
  tool_No: string;
  tool_Class: string;
  tool_Class_Name: string;
  refStyle: string;
  style_Name: string;
  updated_By: string;
  update_Time: string;
}
