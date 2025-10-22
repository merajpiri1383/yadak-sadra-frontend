import { CountryType,CarBrandsType } from "@/components/types/index";

export interface ProductCategoryType {
    title : string,
    slug : string,
    image : string,
}

export interface ProductType {
    id : string,
    country : CountryType,
    brand : CarBrandsType,
    title : string,
    slug ?: string,
    technical_code ?: string,
    commercial_code ?: string,
    main_image ?: string,
    price : number,
    discount_percent ?: number,
    short_description ?: string,
    description ?: string,
    time_added ?: string,
    is_available ?: boolean,
    category : ProductCategoryType,
}

export interface ProductCategoryResponseType {
    products : ProductType[],
    count : number,
    countries : CountryType[],
    brands : CarBrandsType[],
}