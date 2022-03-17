/* eslint-disable class-methods-use-this */
import { React } from 'react';
import { Col } from 'react-bootstrap';
import ShopItem from '../components/ShopItem/ShopItem';

class Client {
  getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '15bef59f-b857-4162-a22d-64c459fdefee', stock: 15, initial: 1, name: 'Buso', thumbnail: 'https://mycestampadoscolombia.com/wp-content/uploads/2021/06/buso-hongo-768x768.png',
          },
          {
            id: '15bef59f-b857-4162-a22d-64c459fdefef', stock: 3, initial: 1, name: 'Remera',
          },
          {
            id: '15bef59f-b857-4162-a22d-64c459fdefeg', stock: 1, initial: 1, name: 'Pantalon',
          },
          {
            id: '15bef59f-b857-4162-a22d-64c459fdefeh', stock: 2, initial: 1, name: 'Campera',
          },
        ]);
      }, 5000);
    }).then((items) => {
      // eslint-disable-next-line max-len
      const listItems = items.map((product) => (<Col className="shop-item" xs={12} md={6} lg={4} xl={3} key={product.id}><ShopItem product={product} /></Col>));
      return listItems;
    }).catch((err) => {
      console.log(err);
    });
  }

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
