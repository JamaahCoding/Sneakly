import api from './api'

export default class ProductService {
    static async getProducts() {
        try {
            const response = await api.get('/products')
            return response.data
        } catch (error) {
            console.error('Error fetching products:', error)
            throw error
        }
    }

    static async getProductById(id) {
        try {
            const response = await api.get(`/products/${id}`)
            return response.data
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error)
            throw error
        }
    }
}
