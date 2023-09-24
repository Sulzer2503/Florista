export interface Product {
    id: number;
    name: string;
    description: string;
    article: string;
    pictureUrl: string;
    price: number;
    category?: string;
    quantityInStock?: number;
    color?: string;
}