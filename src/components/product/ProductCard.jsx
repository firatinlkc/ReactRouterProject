import React from "react";
import { Link } from "react-router-dom";
import style from "./product.module.css";
import { Card, } from 'react-bootstrap'

function ProductCard(props) {
  return (
    <div>
      <Card className={style.card} style={{ width: "18rem" }}>
        <Card.Img 
          className={style.cardImg}
          variant="top"
          src={props.imgsrc} />
        <Card.Body>
          <Card.Title >
            {props.title}
          </Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>          
            <Link
              to={`/tools/${props.id}`}
              className="btn btn-success d-block mx-auto"
              id="readmore"
            >
              Read More
            </Link>         
        </Card.Body>
      </Card>     
    </div>
  );
}

export default ProductCard;
