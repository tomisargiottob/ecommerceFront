import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import client from '../../helpers/client';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getProductByIdHeroku(id).then((productFetched) => {
      setProduct(productFetched);
      setLoading(false);
    });
  }, [id]);

  if (!loading) {
    return (
      <Container>
        <ItemDetail product={product} />
      </Container>
    );
  }
  return (
    <Container>Loading...</Container>
  );
}

export default ItemDetailContainer;
