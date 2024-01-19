import React from "react";
import { Container } from "react-bootstrap";
import productImg from "../assets/images/product.svg";
import Buttons from "./Button";
import Card from "react-bootstrap/Card";
import "../styles/Product.css";
import { FcDocument } from "react-icons/fc";

type ProductCardProps ={
  title:string
  text:string
  onClick:Function 
  }

function ProductCard(props:ProductCardProps) {
  return (
    <Container>
      <Card className="mycard shadow-lg p-4 mb-5 rounded">
        {/* <Card.Img
          variant="top"
          // src={props.productImg}
          src={img}
          style={{ height: "50px", width: "55px", alignSelf: "center" }}
        /> */}
        <Card.Header className="border border-0">
          <FcDocument size={"40px"} />
        </Card.Header>
        <Card.Title>{props.title} </Card.Title>
        <Card.Text>{props.text} </Card.Text>
        <center>
          <Buttons
            style={{ alignItems: "center" }}
            onClick={props.onClick}
            height="35px"
            width="105px"
            color="blue"
            name="Read More"
          />
        </center>
      </Card>
    </Container>
  );
}

export default ProductCard;
