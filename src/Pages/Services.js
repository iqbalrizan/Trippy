import React from 'react'
import "./Services.css"
import { Container, Row, Col, Card } from 'react-bootstrap'
import HeroServices from '../components/HeroServices'
import keloksembilan from "../Assets/keloksembilan.jpg"
import danaumaninjau from "../Assets/danaumaninjau.jpg"
import mentawai from "../Assets/mentawai.jpg"

const Services = () => {
  return (
    <div className='services'>
      <HeroServices />
      <br />
      <br />
     
      <Container>
        <h1>Our Destinations</h1>
        <p>Discover the beauty of West Sumatera with us</p>
        <br />
        <br />
        <br />
      <Row className='recent'>
          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <br />
            <br />
          <Card>
      <Card.Img variant="top" src={keloksembilan} />
      <Card.Body>
        <Card.Title>Kelok Sembilan</Card.Title>
        <Card.Text>
        Kelok 9 or Kelok Sembilan is a winding road segment located about 30 km east of Payakumbuh, in the West Sumatera province of Indonesia. Kelok Sembilan means 9 sharp turns
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <br />
            <br />
          <Card>
      <Card.Img variant="top" src={danaumaninjau} />
      <Card.Body>
        <Card.Title>Danau Maninjau</Card.Title>
        <Card.Text>
        Maninjau Lake is settled in district of Tanjung Raya, Agam, West Sumatra, Indonesia. The lake is located about 140 kilometers north of Padang, the capital city of West Sumatra, 36 kilometers from Bukittinggi, 27 kilometers from Lubuk Basung, the capital of Agam regency.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col xl={4} lg={4} md={6} sm={12} xs={12}>
            <br />
            <br />
          <Card>
      <Card.Img variant="top" src={mentawai} />
      <Card.Body>
        <Card.Title>Mentawai</Card.Title>
        <Card.Text>
        Mentawai is group of islands settled in Mentawai regency, West Sumatra province. Mentawai archipelago includes four large islands namely Sipora Island, Siberut Island, North Pagai Island and South Pagai Island. 
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Services