import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function About(props) {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={6} className="mt-4 text-center">
            <img src="https://picsum.photos/id/7/400/400" />
          </Col>
          <Col sm={6}>
            <h3>DOM & Virtual DOM</h3>
            <p>
            DOM (Document Object Model) web sayfalarının bize görünmelerini sağlayan html elemanlarının hiyerarşik biçimde bir arada bulunmasıdır. Virtual(sanal) DOM ise React tarafından render edilen DOM’un bir kopyasının tutulmuş halidir. Kısaca aralarındaki fark şudur; normalde sayfa içerisinde bir değişiklik talep ettiğinizde DOM bütün html’i tarar ilgili yerdeki değişikliği yapar. İyi güzel de; talebiniz aynı olsa bile bu baştan yükleme işlemi her seferinde tekrar gerçekleşir. Bu da gereksiz bir iş yüküdür.
            </p>
            <p>
            Ancak, React devreye girdiğinde bir state (durum) değişikliğinde tüm sayfayı baştan yüklemek yerine DOM’daki değişikliği Virtual DOM a yansıtır ve render (derlemek) edilen DOM ile farklılıklarına bakar ve sadece farklılık olan alanı render eder. Bunun güzel tarafı yapılan değişiklik bir öncekiyle aynıysa render işlemi gerçekleşmez. Taa ki gönderdiğiniz değişiklik farklı olana dek.
            </p>
            <p><i>
            Her projede React kullanmak mantıklı değildir. Sürekli ekranda veri değişiminin olduğu alanlarda kullanılması daha mantıklıdır.
            </i></p>
            <p>Kaynak: <a href="https://medium.com/kocsistem/a-dan-z-ye-react-facce30533d0">Yavuk Akıncı</a> </p>
            
          </Col>
        </Row>
        <Row className="mt-5">
          
          <Col sm={6}>
            <h3>Redux</h3>
            <p>
            Redux, uygulama durumunu yönetmek için açık kaynaklı bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için en yaygın olarak React veya Angular gibi kütüphanelerle kullanılır. Facebook'un Flux mimarisine benzer şekilde, Dan Abramov ve Andrew Clark tarafından yaratıldı.
            </p>
          </Col>
          <Col sm={6} className="mt-4 text-center">
            <img src="https://picsum.photos/id/5/400/400" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About