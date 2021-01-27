import React from "react";
import style from "./home.module.css";
import { Carousel, Container, Col, Row } from "react-bootstrap";

function About(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src="https://picsum.photos/id/236/1550/600"/>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="https://picsum.photos/id/238/1550/600"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/id/235/1550/600"/>
        </Carousel.Item>
      </Carousel>
      <Container className="mt-5 border border-2 rounded">
        <Row className="py-4 px-3">
          <Col sm={4}>
            <h3><i class="fab fa-html5"></i> HTML</h3>
            <p>Hiper Metin İşaretleme Dili web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. Dilin son sürümü HTML5'tir. HTML, bir programlama dili olarak tanımlanamaz. Zira HTML kodlarıyla kendi başına çalışan bir program yazılamaz.</p>
          </Col>
          <Col sm={4}>
            <h3><i class="fab fa-react"></i> React</h3>
            <p>React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu web uygulama çatısı. Facebook önderliğinde bir geliştirici grubu tarafından geliştirilmekte olan React, Model-View-Controller prensibine uygun olarak oluşturulmuştur.</p>
          </Col>
          <Col sm={4}>
            <h3><i class="fab fa-js-square"></i> Javascript</h3>
            <p>JavaScript, yaygın olarak web tarayıcılarında kullanılmakta olan dinamik bir programlama dilidir. JavaScript ile yazılan istemci tarafı betikler sayesinde tarayıcının kullanıcıyla etkileşimde bulunması, tarayıcının kontrol edilmesi, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sağlanır.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
