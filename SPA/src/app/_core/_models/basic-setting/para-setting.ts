export interface ParaSetting {
    id: number;
    paraCategory: string;
    paraCode: string;
    paraCNName: string;
    paraENName: string;
    paraLCName: string;
    paraValue: string;
    parentId: number | null;
    isEnable: boolean;
    isDelete: boolean;
    updated_By: string;
    update_Time: string | null;
    created_By: string;
    create_Time: string | null;
    childs: ParaSetting[];
}