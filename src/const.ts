import data from './data.json';

export const DEFAULT_SEARCH_PARAMS = { tab: '0' };
export type USERDATA = (typeof data.data)[0];
export type USERSDATA = USERDATA[];

export enum userTypes {
  'income',
  'outcome',
  'loan',
  'investment',
}

export const usersData: USERSDATA = data.data;

export const userTypesA = Object.keys(userTypes).filter((v) =>
  isNaN(Number(v))
) as (keyof typeof userTypes)[];

export const sortData = (filter: string | number | null) =>
  usersData.filter((e) => e.type === userTypesA[Number(filter)]);

export const infoDataLength = [
  {
    type: 'income',
    length: sortData(0).length,
  },
  {
    type: 'outcome',
    length: sortData(1).length,
  },
  {
    type: 'loan',
    length: sortData(2).length,
  },
  {
    type: 'investment',
    length: sortData(3).length,
  },
];
