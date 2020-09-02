import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel';
import { Container, CardDeck, Card, Button } from "react-bootstrap";


export default class Home extends Component {
  render() {
    return(
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Наша команда</h2>
          <CardDeck className="m-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <Card.Body>
                <Card.Title>Разработчики</Card.Title>
                <Card.Text>This HTML file is a template. If you open it directly in the browser, you will see an empty page. This HTML file is a template. If you open it directly in the browser, you will see an empty page.</Card.Text>
                <Card.Text><small class="text-muted">Last updated 3 mins ago</small></Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183157/pexels-photo-3183157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Разработчики</Card.Title>
                <Card.Text>This HTML file is a template. If you open it directly in the browser, you will see an empty page. This HTML file is a template. If you open it directly in the browser, you will see an empty page.</Card.Text>
                <Card.Text><small class="text-muted">Last updated 3 mins ago</small></Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Разработчики</Card.Title>
                <Card.Text>This HTML file is a template. If you open it directly in the browser, you will see an empty page. This HTML file is a template. If you open it directly in the browser, you will see an empty page.</Card.Text>
                <Card.Text><small class="text-muted">Last updated 3 mins ago</small></Card.Text>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    )
  }
}
