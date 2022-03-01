import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import ShopItem from '../ShopItem/ShopItem';


function ItemListContainer () {
	return (
		<Container className="item-list-container">
			<Row>
				<Col><ShopItem/></Col>
				<Col><ShopItem/></Col>
				<Col><ShopItem/></Col>
				<Col><ShopItem/></Col>
			</Row>
		</Container>
	)
}

export default ItemListContainer