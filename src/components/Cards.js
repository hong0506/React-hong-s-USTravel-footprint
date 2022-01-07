import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out Hong's footprint!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore Grand Canyon National Park in Arizona"
              label="Adventure"
              path="/sign-up"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through Yosemite National Park in California"
              label="Luxury"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Get around Hollywood in Los Angeles"
              label="Mystery"
              path="/sign-up"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Drive through the beautiful High Way One in California"
              label="Adventure"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Enjoy the sunset in Santa Cruz in California"
              label="Mystery"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpg"
              text="Explore Lassen Volcanic National Park in California"
              label="Adventure"
              path="/sign-up"
            />
            <CardItem
              src="images/img-11.jpg"
              text="Enjoy Las Vegas night view in Nevada"
              label="Luxury"
              path="/sign-up"
            />
            <CardItem
              src="images/img-12.jpg"
              text="Get around Sacramento Capitol in California"
              label="Mystery"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-13.jpg"
              text="Explore Half Dome in Yosemite in California"
              label="Mystery"
              path="/sign-up"
            />
            <CardItem
              src="images/img-14.jpg"
              text="Travel through Chicago city in Illinois"
              label="Adventure"
              path="/sign-up"
            />
            <CardItem
              src="images/img-15.jpg"
              text="Enjoy the sunset near my home in California"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
