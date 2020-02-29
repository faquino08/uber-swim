import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./jumbo.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import teaswJ2 from "../../images/teachingswiming (5).jpg";
import teaswJ1 from "../../images/teachingswiming (38).jpg";
import teaswJ3 from "../../images/teachingswiming (71).jpg";

const Jumb = () => (
  <Carousel fade="true">
    <Carousel.Item>
      <img className="d-block w-100" src={teaswJ1} alt="First slide" />

      <Carousel.Caption className="caption1">
        <h3>Lorem Ipsum</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={teaswJ2} alt="Third slide" />

      <Carousel.Caption className="caption2">
        <h3>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={teaswJ3} alt="Third slide" />

      <Carousel.Caption className="caption3">
        <h3>Lorem Ipsum</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Jumb;