import React from "react";
import CityCard from "./CityCard";
import { Container } from "react-bootstrap";

export default function CityCards() {
  const cityCards = [
    {
      title: "Warsaw",
      img: "https://www.docplanner.com/images/warsaw.png"
    },
    {
      title: "Barcelona",
      img: "https://www.docplanner.com/images/barcelona.png"
    },
    {
      title: "Istanbul",
      img: "https://www.docplanner.com/images/istanbul.png"
    },
    {
      title: "Rome",
      img: "https://www.docplanner.com/images/rome.png"
    },
    {
      title: "Mexico City",
      img: "https://www.docplanner.com/images/mexico-city.png"
    },
    {
      title: "Curbitia",
      img: "https://www.docplanner.com/images/curitiba.png"
    }
  ];
  return (
    <Container className="capitals-thumbnails">
      {cityCards.map(el => (
        <CityCard img={el.img} title={el.title} />
      ))}
    </Container>
  );
}
