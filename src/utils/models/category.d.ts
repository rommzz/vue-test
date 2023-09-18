export interface Category {
    id?:              number;
    is_seeder?:       number;
    name?:            string;
    parent_category?: string;
    icon?:            null | string;
    banner?:          null | string;
    created_at?:      Date;
    updated_at?:      Date;
}