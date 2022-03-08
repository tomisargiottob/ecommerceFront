import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ItemCount.css';
import { useState } from 'react';


function ItemCount({ stock, initial=1, name }) {
  let [ammount, setAmmount] = useState(initial)

  const changeAmmount = (value) => {
    const changedAmmount = parseInt(value.nativeEvent?.data);
    if (changedAmmount >= 0){
      if (changedAmmount > stock) {
        setAmmount(stock)
      } else {
        setAmmount(changedAmmount)
      }
    }
  }
	const onAdd = () => {
    if (ammount + 1 <= stock){
      setAmmount(ammount +1)
    }
	}
	const remove = () => {
    if (ammount -1 >= 0 ){
      setAmmount(ammount -1)
    }
	}
  const addToCart = () => {
    const item = `${name} + ${ammount > 1 ? 's' : ''}`
    console.log(item);
    console.log(`Se agregarian ${ammount} ${item} al carro`)
  }
	return (
		<Container className='item-count-container'>
			<Row className='item-count'>
				<Col xs={3}>
					<button className='change-ammount' onClick={ remove }>
						<FontAwesomeIcon icon="fa-solid fa-minus"/>
					</button>
				</Col>
				<Col xs={6}>
					<input className='ammount' type="text" value={ ammount } onChange= { changeAmmount }/>
				</Col>
				<Col xs={3}>
					<button className='change-ammount' onClick={ onAdd }>
						<FontAwesomeIcon icon="fa-solid fa-plus" />
					</button>
				</Col>
			</Row>
      <Row>
        <Col>
          <button className='add-to-cart' onClick={ addToCart }>Agregar al carrito</button>
        </Col>
      </Row>
		</Container>
	)
}

export default ItemCount