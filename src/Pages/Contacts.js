import React from 'react'
import HeroContacts from '../components/HeroContacts'
import { Form } from 'react-bootstrap'
import "./Contacts.css"

const Contacts = () => {
  return (
    <div>
      <HeroContacts />
      <div className="text">
        <h1>Send A Message To Us</h1>
      </div>
      <Form className='formcontact'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="email" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <br />
    <br />
    <br />
    <br />
    </div>
  )
}

export default Contacts