import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return(
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="firsth">ПК</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Сервер</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Сеть</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Сайт</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">ИТ решения</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="firsth">
                  <img src="https://images.izi.ua/4068925" className="w-25 p-3"/>
                  <p>
                    Создание нового рабочего места: подключение оборудования, установка и настройка ПО (Операционные системы, пакет офисных приложений (Microsoft Office, OpenOffice), архиваторы, почтовые клиенты, браузеры).
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://servergid.ru/wp-content/uploads/2019/03/terminalnij-server-768x384.jpg" className="w-25 p-3"/>
                  <p>
                    Создание нового рабочего места: подключение оборудования, установка и настройка ПО (Операционные системы, пакет офисных приложений (Microsoft Office, OpenOffice), архиваторы, почтовые клиенты, браузеры).
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://2hpc.ru/wp-content/uploads/2016/04/top_post_home_lan.jpg" className="w-25 p-3"/>
                  <p>
                    Создание нового рабочего места: подключение оборудования, установка и настройка ПО (Операционные системы, пакет офисных приложений (Microsoft Office, OpenOffice), архиваторы, почтовые клиенты, браузеры).
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://my-master.net.ua/wp-content/uploads/2018/08/sozdanie-krasivyh-sajtov.png" className="w-25 p-3"/>
                  <p>
                    Создание нового рабочего места: подключение оборудования, установка и настройка ПО (Операционные системы, пакет офисных приложений (Microsoft Office, OpenOffice), архиваторы, почтовые клиенты, браузеры).
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://lh3.googleusercontent.com/proxy/AYrCOTcOqu8DhAaelJIA6u3pHAGZhUASU2eMqOc-Q0RTAQS5bxQSlIdg5UWW-aTW_WGB0C_mVVd64gW_TRTsKsmFIkTHrDMHkgLnKTw" className="w-25 p-3"/>
                  <p>
                    Создание нового рабочего места: подключение оборудования, установка и настройка ПО (Операционные системы, пакет офисных приложений (Microsoft Office, OpenOffice), архиваторы, почтовые клиенты, браузеры).
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
