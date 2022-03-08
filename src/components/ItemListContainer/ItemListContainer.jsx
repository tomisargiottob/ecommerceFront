import './ItemListContainer.css';
import { Container, Row } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';


function ItemListContainer ({ welcome }) {
  
	return (
		<Container className="item-list-container">
			<Row>
				<div className="welcome-message">
          <h1>
            { welcome }  
          </h1>
				</div>
			</Row>
			<Row>
				<ItemList/>
			</Row>
		</Container>
	)
}

export default ItemListContainer