import './CartWidget.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid'

function CartWidget () {
	return (
		<Button className="cart-widget">
			Carrito
			<FontAwesomeIcon icon={faCartArrowDown} />
		</Button>
	)
}

export default CartWidget