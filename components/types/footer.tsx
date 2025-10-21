
export interface LicenseType {
    image: string,
    url: string,
}

export interface LinkType {
    title: string,
    url: string,
}

export interface GroupLinkType {
    title: string,
    links: LinkType[],
}

export interface FooterType {
    instagram_page?: string,
    telegram_channel?: string,
    whatsapp_support?: string,
    phone?: string,
    email?: string,
    address?: string,
    description?: string,
    licenses: LicenseType[],
    group_links: GroupLinkType[],
}