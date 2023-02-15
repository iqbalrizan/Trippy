import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import jamgadang from "../Assets/jamgadang.jpg"
import pantaipadang from "../Assets/pantaipadang.jpg"
import ngarai from "../Assets/ngarai.jpg"
import keloksembilan from "../Assets/keloksembilan.jpg"
import danaumaninjau from "../Assets/danaumaninjau.jpg"
import mentawai from "../Assets/mentawai.jpg"
import "./HomePage.css"


const HomePage = () => {
  return (
    <div className='home'>
      <HeroSection />
      <div className="destination">
        <Container>
        <div className="title">
          <h1>Popular Destinations</h1>
          <p>Tours give you opportunity a lot, within a time frame</p>
        </div>
        <br />
  <br />
  <br />
  <br />
        <Row className='popular1'>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="desc-text">
            <h2>BUKITTINGGI</h2>
            <br />
            <br />
              <p>Settled in the highlands north of Padang in the Agam valley, the town of Bukittinggi or high hill becomes West Sumatras cultural forfront. While Padang is the capital city and may be the modern commercial and administrative center, Bukittinggi is a bustling market town.

Bukittinggi has a refreshingly cool climate due to its elevation, which is over 900 meters above sea level. While it rains here often, this is not enough to deter travelers who come to enjoy what many claim is the most hospitable city in Sumatra.</p>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="desc-img">
          <img src={jamgadang} alt="" />
          </Col>
        </Row>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <Row className='popular1'>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="desc-img">
          <img src={pantaipadang} alt="" />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="desc-text">
            <h2>PADANG</h2>
            <br />
            <br />
              <p>Padang is the capital city of West Sumatra, and it becomes the largest city on the western coast of Sumatra Island. During the Dutch colonial, Padang was one of major cities in Sumatra, together with Medan, Batam, Palembang and Pekanbaru. Has awarded by Adipura Award for 17 times and Adipura Kencana for 3 times as the cleanest and greenest city in Indonesia, make Padang increase their quality in everything.

Padang is the gateway to the Minang highlands. With the largest port on Sumatra’s West Coast; this is a merchant town attracting ships trading in goods such as rubber, cinnamon, coffee, tea, cement and coal. If you take a stroll down to the old colonial waterfront you will see century old warehouses stocked with fragrant cinammon and other spices waiting to be shipped to Jakarta and Singapore</p>
          </Col>
        </Row>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <Row className='popular1'>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="desc-text">
            <h2>NGARAI SIANOK</h2>
            <br />
            <br />
              <p>outskirts of the hill town of Bukittinggi in the Minangkabau highlands, lies this breathtaking canyon which the locals call Ngarai Sianok, or the Sianok Canyon. Sianok canyon is a steep valley (cliff) that located in the border town of Bukittinggi, the Koto IV district, Agam regency, West Sumatra. Sianok canyon has beautiful views and also becomes one of the potential attractions in province.

Ngarai Sianok has two steep walls facing each other and almost vertically, falling to a flat bottom where a river meanders among green ricefields. Its height is about 100 to 120 meters and the canyon itself is for about 15 km long. This cliff is separates the towns of Bukittinggi and Kota Gadang on its opposite side.</p>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className="desc-img">
          <img src={ngarai} alt="" />
          </Col>
        </Row>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div className="title">
          <h1>Recent Destinations</h1>
          <p>Tours give you opportunity a lot, within a time frame</p>
          <br />
          <br />
          
        </div>
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
      </div>
    </div>
  )
}

export default HomePage