import type { PostCategoryItem } from "~/model/categories/endpoints";
import client from "~/model/api/client";

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

const service = {
    async getPosts(): Promise<PostListItem[]> {
        const { data } = await client.get('/posts');
        return data;
    },
    async getPost(id: number): Promise<PostListItem> {
        const response = await client.get(`/posts/${id}`);
        return response.data;
    },
    async createPost(data: PostFormItem): Promise<PostListItem> {
        const response = await client.post('/posts', data);
        return response.data;
    },
    async updatePost(id: number, data: PostFormItem): Promise<PostListItem> {
        const response = await client.put(`/posts/${id}`, data);
        return response.data;
    },
    async deletePost(id: number): Promise<void> {
        await client.delete(`/posts/${id}`);
    },
    async getMostRecentPost(): Promise<PostListItem> {
        const response = await client.get('/posts/most_recent');
        return response.data;
    },
};


export default service;