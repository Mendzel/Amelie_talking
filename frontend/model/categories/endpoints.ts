import client from "~/model/api/client";

export interface PostCategoryItem {
    id: number,
    name: string,
    color: string,
    textColor: string,
}

const service = {
    async getCategories(): Promise<PostCategoryItem[]> {
        const { data } = await client.get('/categories');
        return data;
    },
};


export default service;