/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import { React } from 'react';
import { Col } from 'react-bootstrap';
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
import ShopItem from '../components/ShopItem/ShopItem';

class Client {
  async getProductsHeroku(category) {
    let url = 'https://ecommercesargiotto.herokuapp.com/api/products';
    if (category) {
      url += `?category=${category}`;
    }
    const products = await fetch(url);
    const parsedProducts = await products.json();
    // eslint-disable-next-line max-len
    const listItems = parsedProducts.map((product) => (<Col className="shop-item" xs={12} md={6} lg={4} xl={3} key={product.id}><ShopItem product={product} /></Col>));
    return listItems;
  }

  async getProductByIdHeroku(id) {
    const product = await fetch(`https://ecommercesargiotto.herokuapp.com/api/products/${id}`);
    const parsedProduct = await product.json();
    return parsedProduct;
  }

  async getCategoryProductsHeroku(category) {
    const products = await fetch(`https://ecommercesargiotto.herokuapp.com/api/products/${category}`);
    const parsedProducts = await products.json();
    return parsedProducts;
  }

  async getProductsFirebase(filter) {
    try {
      this.db = getFirestore();
      const queryCollection = collection(this.db, 'products');
      let queryFilter = queryCollection;
      if (filter.category && filter.maxPrice) {
        queryFilter = query(
          queryCollection,
          where('price', '<=', Number(filter.maxPrice)),
          where('price', '>=', Number(filter.minPrice)),
          where('category', '==', filter.category),
        );
      } else if (filter.category) {
        queryFilter = query(
          queryCollection,
          where('category', '==', filter.category),
        );
      } else if (filter.maxPrice) {
        queryFilter = query(
          queryCollection,
          where('price', '<=', Number(filter.maxPrice)),
          where('price', '>=', Number(filter.minPrice)),
        );
      }
      const prodCollection = await getDocs(queryFilter);
      let highestPrice = 0;
      let lowestPrice;
      const products = prodCollection.docs.map(
        (product) => ({ id: product.id, ...product.data() }),
      );
      const listItems = products.map((product) => {
        if (product.price > highestPrice) {
          highestPrice = product.price;
        }
        if (!lowestPrice || lowestPrice > product.price) {
          lowestPrice = product.price;
        }
        return (<Col className="shop-item" xs={12} md={6} lg={4} xl={3} key={product.id}><ShopItem product={product} /></Col>);
      });
      return { listItems, highestPrice, lowestPrice };
    } catch (err) {
      return err.message;
    }
  }

  async getProductByIdFirebase(id) {
    try {
      this.db = getFirestore();
      const queryDoc = doc(this.db, 'products', id);
      const product = await getDoc(queryDoc);
      return { id: product.id, ...product.data() };
    } catch (err) {
      return err.message;
    }
  }

  async updateProductFirebase(id, product) {
    try {
      this.db = getFirestore();
      const queryUpdate = doc(this.db, 'products', id);
      updateDoc(queryUpdate, product);
      return id;
    } catch (err) {
      return err.message;
    }
  }

  async createOrderFirebase(order) {
    try {
      this.db = getFirestore();
      const queryCollection = collection(this.db, 'orders');
      const { id } = await addDoc(queryCollection, order);
      return id;
    } catch (err) {
      return err.message;
    }
  }
}

export default new Client();
