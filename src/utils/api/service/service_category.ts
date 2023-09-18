import { Category } from '@/utils/models/category';
import api from '../index';
import url from '../urls';
import { log } from 'console';
import { ResponseV1 } from '../response';

class CategoryServices {
    public async getCategories(): Promise<Category[]> {
        try {
            const response = await api.get<ResponseV1<Category[]>>(url.category);
            console.log(response.data);
            
            return response.data.data ?? [];
        } catch (error) {
            console.log(error);
            
            throw error;
        }
    }
    public async addCategories(category: Category): Promise<Category> {
        try {
            const response = await api.post<ResponseV1<Category>>(url.category, category);
            
            return response.data.data ?? category;
        } catch (error) {
            console.log(error);
            
            throw error;
        }
    }
}

export default new CategoryServices();
