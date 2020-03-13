import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./jumbo.module.css"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"

const Jumb = () => (
  <Carousel fade="true">
    <Carousel.Item className={`${styles.hero1}`}>
      <Carousel.Caption className={`${styles.caption1} mb-0`}>
        <h3>Lorem Ipsum</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={`${styles.hero2}`}>
      <Carousel.Caption className={`${styles.caption2} mb-0`}>
        <h3>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={`${styles.hero3}`}>
      <Carousel.Caption className={`${styles.caption3} mb-0`}>
        <h3>Lorem Ipsum</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default Jumb;