import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const [name, setName]  = useState('');
    const [suggester, setSuggester] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    const { userInfo } = useSelector((state) => state.auth);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="name"  
          placeholder="Enter name"
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="suggester">
        <Form.Label>Suggester</Form.Label>
        <Form.Control 
          type="suggester" 
          placeholder="suggester" 
          value={suggester}
          onChange={(e)=> setSuggester(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        Update
      </Button>
    </Form>
  );
};

export default EditProfile;
