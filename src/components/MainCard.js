import React from "react";
import CountrySelector from "./CountrySelector";
import { Container, Row, Col } from "react-bootstrap";

export default function MainCard(props) {
  return (
    <div class="card" id="patients" style={{ backgroundColor: props.el.color }}>
      <h2>{props.el.title}</h2>
      <p>{props.el.description}</p>
      <Row>
        {props.el.select && <CountrySelector />}

        <img src={props.el.img} alt="" />
      </Row>
    </div>
  );
}
