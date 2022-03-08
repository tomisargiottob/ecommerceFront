import './ItemList.css';
import { Container, Row, Col } from 'react-bootstrap';
import ShopItem from '../ShopItem/ShopItem';
import { useState, useEffect } from 'react';


function ItemList () {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    new Promise((resolve,reject)=> {
      setTimeout(() => {
        resolve([
          {id:1, stock:15, initial:1, name: 'Buso', image: 'https://mycestampadoscolombia.com/wp-content/uploads/2021/06/buso-hongo-768x768.png'},
          {id:2, stock:3, initial:1, name: 'Remera'},
          {id:3, stock:1, initial:1, name: 'Pantalon'},
          {id:4, stock:2, initial:1, name: 'Campera'}
        ]) 
      },5000);
    }).then((items) => {
      const listItems = items.map((product) =>
        <Col key={product.id}><ShopItem product={ product }/></Col>
      );
      setProducts(listItems)
    }).catch((err) => {
      console.log(err);
    })
  },[]);

  
	return (
		<Container className="item-list">
			<Row>
        { products }
			</Row>
		</Container>
	)
}

export default ItemList