import axios from "axios";

// Define the API URLs
const listUrl = "https://ucaqshyej9.execute-api.us-east-1.amazonaws.com/stage1/ListAllProducts";
const addProduct = "https://pguzcrvz49.execute-api.us-east-1.amazonaws.com/stage1/AddProduct";
const updateUrl = "https://byhlefrhb1.execute-api.us-east-1.amazonaws.com/dev2/updateProduct";
const deleteUrl = "https://7y00gzd4o7.execute-api.us-east-1.amazonaws.com/dev1/DeleteProductById";
const getProductById = "https://z9ucy9c79g.execute-api.us-east-1.amazonaws.com/dev/products";

class ProductService {

  // Get all products
  getProducts() {
    return axios.get(listUrl);
  }

  // Insert a new product
  insertProduct(product) {
    return axios.post(addProduct, product, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Get product by ID with validation for productId
  getProductsById(productId) {
    if (!productId) {
      return Promise.reject(new Error('Product ID is required'));
    }
    return axios.get(`${getProductById}?productId=${productId}`);
  }

  // Update product details
  updateProduct(productId, product) {
    if (!productId) {
      return Promise.reject(new Error('Product ID is required for updating'));
    }
    return axios.put(updateUrl, product, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Delete product by ID
  deleteProductById(productId) {
    if (!productId) {
      return Promise.reject(new Error('Product ID is required for deletion'));
    }
    return axios.delete(`${deleteUrl}?productId=${productId}`);
  }
}

export default new ProductService();
