import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import style from './footer.module.css'

function Footer(props) {
  return (
    <>
      <div className={style.footerStyle}>
        <Container>
          <Row>
            <Col sm={12} className="text-center pt-5 ">
              <div className="border-bottom">
                <a className={style.footerIcon} href="https://github.com/firatinlkc">
                  <i className="fab fa-github pb-4"></i>
                </a>
                <a className={style.footerIcon} href="https://www.linkedin.com/in/inalkacfirat/">
                  <i class="fab fa-linkedin pb-4"></i>
                </a>
                <a className={style.footerIcon} href="#">
                  <i class="fab fa-facebook-square pb-4"></i>
                </a>
              </div>
              <p className="text-white mt-3">2020 © - Built by Fırat İnalkaç</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer
