import { product } from './product';
export class Cart {
    _id: number
    date: Date
    TotalQty: number
    products: product[]
}