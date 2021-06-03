import { Product } from "./product";

export class Category {
    id!: number;
    name!: string;
    price!: number;
    img!: string;
    products!: Product[];
}

