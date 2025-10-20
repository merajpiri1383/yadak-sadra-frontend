
export interface CountryType {
    name: string,
    slug: string,
    flag: string,
}

export interface CarBrandsType {
    is_own: boolean,
    logo: string,
    name: string,
    slug: string,
    country?: CountryType,
}

interface SliderBoxType {
    image_url: string,
    title: string,
    link: string,
}


export interface SliderType {
    boxes: SliderBoxType[],
    images: { image_url: string }[],
    is_active : boolean
}

export interface IndexResponse {
    car_brands: CarBrandsType[],
    brand_countries: CountryType[],
    yadak_sadra_brands: CarBrandsType[],
    slider : SliderType,
}