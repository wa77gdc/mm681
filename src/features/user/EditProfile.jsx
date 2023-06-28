import React from 'react'
import { Form } from 'react-bootstrap'

const EditProfile = () => {
  return (

    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="name" />
    </Form.Group>
    
  </Form>
  )
}

export default EditProfile
