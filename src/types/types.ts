export interface Response {
  page: number;
  pageSize: number;
  totalRecords: number;
  pageCount: number;
  data: Community[];
}

export interface Community {
  id: number;
  name: string;
  description: string;
  languages: string;
  images: string[] | null;
  indigenousReservations: null;
}
