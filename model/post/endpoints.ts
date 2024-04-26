import type { PostCategoryItem } from "~/model/categories/endpoints";

export interface PostItem {
    id: number,
    title: string,
    description: string,
    dateCreated: string,
    category: PostCategoryItem,
    // author: string,
    photoCover: string,
    content: string,
}