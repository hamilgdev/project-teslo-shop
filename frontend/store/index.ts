import { IProduct } from '@/types/ui.types'
import { atom } from 'jotai'

export interface UIAtom {
  toggleDrawerMenu: boolean
}

export interface ProductAtom {
  products: IProduct[],
  total: number
}

export const cartAtom = atom<ProductAtom>({
  products: [],
  total: 0
})

export const uiAtom = atom<UIAtom>({
  toggleDrawerMenu: false
})
