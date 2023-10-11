import {getItemValue as getItemValueFn} from "../utils";

export type SortType = 'asc' | 'desc'

export type FilterComparison = '=' | '!=' | '>' | '>=' | '<' | '<=' | 'between' | 'in';

export type Item = Record<string, any>

export type FilterOption = {
  field: string
  comparison: 'between'
  criteria: [number, number]
} | {
  field: string
  comparison: '=' | '!='
  criteria: number | string
} | {
  field: string
  comparison: '>' | '>=' | '<' | '<='
  criteria: number
} | {
  field: number | string
  comparison: 'in'
  criteria: number[] | string[]
}| {
  field: string
  comparison: (value: any, criteria: string) => boolean
  criteria: string
}

export type Header = {
  text: string
  value: string
  sortable?: boolean
  fixed?: boolean
  width?: number
}

export type ServerOptions = {
  page: number
  rowsPerPage: number
  sortBy?: string | string[]
  sortType?: SortType | SortType[]
}

export type ClickRowArgument = Item & {
  isSelected?: boolean
  indexInCurrentPage?: number
}

export type UpdateSortArgument = {
  sortType: SortType
  sortBy: string
}

export type SortFunction = (a: Item, b: Item, sortBy: string, sortDesc: boolean, getItemValue: typeof getItemValueFn, defaultSortFunction: (a: Item, b: Item) => number) => number;
export type MultiSortFunction = (sortByArr: string[], sortDescArr: boolean[], itemsToSort: Item[], index: number) => Item[];

export type HeaderItemClassNameFunction = (header: Header, columnNumber: number) => string
export type BodyRowClassNameFunction = (item: Item, rowNumber: number) => string
export type BodyItemClassNameFunction = (column: string, rowNumber: number) => string

export type TextDirection = 'center' | 'left' | 'right'