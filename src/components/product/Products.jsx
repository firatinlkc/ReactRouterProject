import React from "react";
import datas from "../../data/datas.json";
import ProductCard from "./ProductCard";
import {Container} from 'react-bootstrap';
import Search from '../Search/Search';

function Products(props) {

  const cardItems = datas.results
    .filter(item => item.isActive)
    .map((item) => (
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={item.id}>
        <ProductCard
          id={item.id}
          description={item.description}
          title={item.title}
          imgsrc={item.imgsrc}
          longDescription={item.longDescription}
        />
      </div>
    ));
  return (
    <div id="backg" className="mt-5 py-5">
      <Search />
      <Container>
      <div id="carditems" data-aos="zoom-in" className="row">
        {cardItems}
      </div>
      </Container>
    </div>
  );
}

export default Products;
