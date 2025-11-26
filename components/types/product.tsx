import { CountryType, CarBrandsType } from "@/components/types/index";

export interface ProductCategoryType {
    title: string,
    slug: string,
    image: string,
}

export interface ProductType {
    id: string,
    country: CountryType,
    brand: CarBrandsType,
    title: string,
    slug?: string,
    main_image?: string,
    price: number,
    category: ProductCategoryType,
}

export interface ProductFeature {
    key: string,
    value: string,
}

export interface ProductDetailType {
    id: string,
    country: CountryType,
    brand: CarBrandsType,
    title: string,
    slug?: string,
    technical_code?: string,
    commercial_code?: string,
    main_image?: string,
    price: number,
    discount_percent?: number,
    short_description?: string,
    time_added?: string,
    is_available?: boolean,
    category: ProductCategoryType,
    images: {
        image: string,
    }[],
    product_features: ProductFeature[],
    similar_products : ProductType[],
}

export interface ProductCategoryResponseType {
    products: ProductType[],
    count: number,
    countries: CountryType[],
    brands: CarBrandsType[],
}