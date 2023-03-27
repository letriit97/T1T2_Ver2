export interface T2ToolingSettingDetailViewModel {
  mouldDetails: MouldDetail[];
}

export interface MouldDetail {
  stockSupplier: string;
  totalMoulds: number;
  totalPairs: number;
  sizeDetails: SizeDetail[];
}

export interface SizeDetail {
  size: string;
  moulds: number;
  paris: number;
}
