import React from "react";
import { useParams, Link } from "react-router-dom";
import datas from "../../data/datas.json";
import { Container, Navbar, Nav } from "react-bootstrap";
import style from './product.module.css'

function ProductDetail(props) {
  const params = useParams();
  const { dataID } = params;

  const data = datas.results
    .filter((item) => item.id === Number(dataID))
    .map((item) => (
      <Container>
        <div key={item.id}>
          <h1 className="text-center pt-2">{item.title}</h1>
          <img id={style.detailImg} className="d-block mx-auto" src={item.detailimg} alt="gg" />
          <p className="text-center pt-2 mt-5">{item.longDescription}</p>
        </div>
      </Container>
    ));

  return (
    <div id="detailback">
      <Navbar className="mt-5" collapseOnSelect expand="lg" bg="success" variant="dark">       
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className={style.linkEdit} to="/">Home Page</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.linkEdit} to="/tools">Frontend Tools</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {data}
    </div>
  );
}

export default ProductDetail;
