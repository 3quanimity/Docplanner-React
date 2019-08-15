import React from "react";
import MainCard from "./MainCard";
import { Container, Row } from "react-bootstrap";

export default function MainCards() {
  const mainCards = [
    {
      title: "For patients",
      description:
        "Find a doctor, book a visit and solve any health-related doubt",
      img: "https://www.docplanner.com/img/screen-marketplace@2x.png",
      select: true,
      color: "#00ccb1"
    },
    {
      title: "For doctors",
      description: "Save time managing visits and cut no-shows by half",
      img: "https://www.docplanner.com/img/screen-saas@2x.png",
      color: "#3d83df"
    }
  ];
  return (
    <Container className="cards">
      <Row>
        {mainCards.map(el => (
          <MainCard el={el} />
        ))}
      </Row>
    </Container>
  );
}
