import type { PostCategoryItem } from "~/model/categories/endpoints";

interface BasePostItem {
    id?: number,
    title: string,
    description: string,
    dateCreated?: string,
    photoCover: string,
    content: string,
}

export interface PostListItem extends BasePostItem {
    category: PostCategoryItem,
}

export interface PostFormItem extends BasePostItem {
    categoryId?: number,
}