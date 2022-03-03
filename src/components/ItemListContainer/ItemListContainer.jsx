import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import ShopItem from '../ShopItem/ShopItem';


function ItemListContainer (props) {
	const { welcome }= props
	return (
		<Container className="item-list-container">
			<Row>
				<div className="welcome-message">
					{ welcome }
				</div>
				</Row>
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