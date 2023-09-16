import { category } from '@/utils/models/category';
import api from '../index';
import url from '../urls';
import { log } from 'console';

class CategoryServices {
    public async getCategories(): Promise<category[]> {
        try {
            const response = await api.get<category[]>(url.category);
            console.log(response.data);
            
            return response.data ?? [];
        } catch (error) {
            console.log(error);
            
            throw error;
        }
    }
}

export default new CategoryServices();
