import axios from 'axios'

const BaseUrl = 'http://localhost:3001/'

class ApiService {
  fetchProducts () {
    return axios.get(BaseUrl + 'products')
  }

  fetchProductById (productId) {
    return axios.get(BaseUrl + 'product/' + productId)
  }

  deleteProduct (productId) {
    return axios.delete(BaseUrl + 'product/' + productId)
  }

  addProduct (product) {
    return axios.post(BaseUrl + 'product', product)
  }

  editProduct (product) {
    return axios.put(BaseUrl + 'product/' + product.id, product)
  }
}

export default new ApiService()
