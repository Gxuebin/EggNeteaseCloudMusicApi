export interface iPageParams {
  page?: number;
  pageSize?: number;
}

export interface iDjId {
  djId: string;
}

export interface iDjHoursProgram {
  pageSize?: number;
}

export interface iGetDjProgramList extends iPageParams {
  djId: string;
  asc: boolean;
}

export interface iGetCategoryHotDjs extends iPageParams {
  categoryId: string;
}

export interface iGetTypeRecDjs {
  typeId: string;
}

export interface iPostDjSub {
  djId: string;
  actionType: 'sub' | 'unsub';
}

export interface iGetDjToplist extends iPageParams {
  type: 0 | 1;
}
