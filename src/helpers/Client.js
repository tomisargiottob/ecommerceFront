/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import { React } from 'react';
import { Col } from 'react-bootstrap';
import ShopItem from '../components/ShopItem/ShopItem';

class Client {
  async getProductsHeroku(category) {
    let url = 'https://ecommercesargiotto.herokuapp.com/api/products';
    if (category) {
      url += `?category=${category}`;
    }
    const products = await fetch(url);
    const parsedProducts = await products.json();
    console.log('desde el backend', parsedProducts);
    // eslint-disable-next-line max-len
    const listItems = parsedProducts.map((product) => (<Col className="shop-item" xs={12} md={6} lg={4} xl={3} key={product.id}><ShopItem product={product} /></Col>));
    return listItems;
  }

  async getProductByIdHeroku(id) {
    const product = await fetch(`https://ecommercesargiotto.herokuapp.com/api/products/${id}`);
    const parsedProduct = await product.json();
    console.log('por id', parsedProduct);
    return parsedProduct;
  }

  async getCategoryProductsHeroku(category) {
    const products = await fetch(`https://ecommercesargiotto.herokuapp.com/api/products/${category}`);
    const parsedProducts = await products.json();
    console.log('por categoría', parsedProducts);
    return parsedProducts;
  }
}

export default new Client();
