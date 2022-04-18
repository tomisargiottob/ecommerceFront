import { React, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ItemFilter.css';
import RangeSlider from 'react-bootstrap-range-slider';

function ItemFilter({ maxPrice, minPrice, applyFilter }) {
  const [filter, setFilter] = useState({ maxPrice: 0, minPrice: 0 });
  const filterData = (value) => {
    const aux = {};
    aux[value.target.name] = value.target.value;
    if (aux.maxPrice && (Number(filter.minPrice) > Number(aux.maxPrice))) {
      aux.minPrice = aux.maxPrice;
    }
    if (aux.minPrice && (Number(aux.minPrice) > Number(filter.maxPrice))) {
      aux.maxPrice = aux.minPrice;
    }
    setFilter({ ...filter, ...aux });
  };
  const submitFilter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    applyFilter(filter);
  };

  return (
    <Container className="filter-container">
      <Row>
        <h3>
          Filtros
        </h3>
      </Row>
      <Row className="filter-options">
        <Col>
          <Form onChange={filterData} onSubmit={submitFilter}>
            <Form.Group as={Row}>
              <Col>
                <Form.Label>
                  Precio mínimo
                </Form.Label>
                <RangeSlider
                  min={minPrice}
                  value={filter.minPrice || minPrice}
                  max={maxPrice}
                  name="minPrice"
                  tooltip="off"
                />
              </Col>
              <Col xs={{ span: 6, offset: 3 }}>
                <Form.Control name="minPrice" value={filter.minPrice || minPrice} onChange={filterData} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col>
                <Form.Label>
                  Precio máximo
                </Form.Label>
                <RangeSlider
                  min={minPrice}
                  value={filter.maxPrice || maxPrice}
                  max={maxPrice}
                  name="maxPrice"
                  tooltip="off"
                />
              </Col>
              <Col xs={{ span: 6, offset: 3 }}>
                <Form.Control name="maxPrice" value={filter.maxPrice || maxPrice} onChange={filterData} />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit" className="filter-submit">
              Aplicar Filtros
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

ItemFilter.propTypes = {
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default ItemFilter;
