export interface HistoryDataDto {
    sizes: string[];
    stocks: SizeModel[];
    stocks_Pairs: SizeModel[];
    applys: SizeModel[];
    applys_Pairs: SizeModel[];
    deliverys: DateSizeModel[];
    releases: DateSizeModel[];
    receives: DateSizeModel[];
}

export interface SizeModel {
    date: string | null;
    type_ID: string;
    type_NO: string;
    size: string;
    class_Type: string;
    pairs: number | null;
    mould_ID: string;
    moulds: number;
}

export interface ClassTypeSize {
    class_Type: string;
    sizes: SizeModel[];
}

export interface DateSizeModel {
    date: string | null;
    classTypeSizes: ClassTypeSize[];
}