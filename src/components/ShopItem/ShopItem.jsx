import './ShopItem.css';
import { Container, Row } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';


function ShopItem ({product}) {
	return (
		<Container className="shop-item-container">
      <Row>
			  <h3>
          { product.name }
        </h3>
      </Row>
      <Row>
        <img src={ product.image } alt="" srcSet="" />
      </Row>
      <Row>
        <ItemCount initial={ product.initial } stock={ product.stock } name={ product.name } />
      </Row>
		</Container>
	)
}

export default ShopItem