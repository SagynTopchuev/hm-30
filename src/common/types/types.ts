/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
interface IRowsTable {
  _id: string
  title: string
  description: string
  price: number
  [key: string]: number | string
}

interface IColumnTable {
  header: string
  key: string
  index?: boolean
  fontStyle?: string
  fontWeight?: number
  color?: string
  number?: boolean
  render?: (meal: IRowsTable) => JSX.Element
}

interface IMeals {
  // id: string
  // title: string
  // description: string
  // price: number

  _id: string
  description: string
  price: number
  title: string
  createdAt?: string
  updatedAt?: string
  __v?: number
}

enum USER_ROLE {
  'ADMIN',
  'USER',
  'GUEST',
}
