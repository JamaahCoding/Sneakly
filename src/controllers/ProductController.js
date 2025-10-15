import ProductService from '../services/ProductService'
import Product from '../models/Product'

export default class ProductController {
    static async getAllProducts() {
        try {
            const products = await ProductService.getProducts()
            return products.map(product => new Product(
                product.id,
                product.name,
                product.price,
                product.description,
                product.image
            ))
        } catch (error) {
            throw new Error('Failed to fetch products')
        }
    }

    static async getProduct(id) {
        try {
            const product = await ProductService.getProductById(id)
            return new Product(
                product.id,
                product.name,
                product.price,
                product.description,
                product.image
            )
        } catch (error) {
            throw new Error(`Failed to fetch product ${id}`)
        }
    }
}
