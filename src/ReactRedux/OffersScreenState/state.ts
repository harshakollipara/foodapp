export interface IOffersState {
  isLoading: boolean;
  errorMsg: string;
  offersData: any[];
}

export function defaultOffersState(): IOffersState {
  return {
    isLoading: false,
    errorMsg: 'Data not loading.ERROR!!',
    offersData: [],
  };
}
