import { Category } from './caterogy';
export class product {
    _id?: number
    oldPrice?: number
    recentPrice?: number
    availableproducts?: number
    inMarket?: number
    name?: string
    image?: string
    description?: string
    isDeleted?: number
    commands?: any[]
    category?: Category
    carts?: any[]
}