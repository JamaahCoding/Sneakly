<template>
  <div class="products-container">
    <h1>Our Products</h1>
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductController from '../controllers/ProductController'

export default {
  name: 'Products',
  data() {
    return {
      products: []
    }
  },
  async created() {
    try {
      this.products = await ProductController.getAllProducts()
    } catch (error) {
      console.error('Failed to load products:', error)
    }
  }
}
</script>

<style scoped>
.products-container {
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 8px;
}

.product-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
