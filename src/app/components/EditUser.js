import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Card, Button, Form } from 'react-bootstrap';
import actions from "../redux/actions"
import { saveUser } from '../api/apiService'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const EditUser = (props) => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const usersList = useSelector(state => state.usersList);
    const allowRedirect = useSelector(state => state.allowRedirect)
    const dispatch = useDispatch();

    let { id } = useParams();
    const user = usersList[id];

    const onSubmit = (formData) => {
       
        
    };



    console.log(id)
    return (
        <Card>
        <Card.Header as="h5">Edit user </Card.Header>
        <Card.Body>
            <Form  onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="username" placeholder="User name" defaultValue={user.name} />
            </Form.Group>

            <Form.Group controlId="formUserName">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" name="username" placeholder="User name" defaultValue={user.username} ref={register({ required: true })}/>
            </Form.Group>
            
            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={user.email} ref={register({ required: true })}/>
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" placeholder="User name" defaultValue={user.address.city} />
            </Form.Group>

            <Form.Group className="d-flex justify-content-end">
            <Button href="/" variant="outline-danger" className="mr-2">Cancel</Button> <Button type="submit" variant="success">Save</Button>
            </Form.Group>
            </Form>
        </Card.Body>
    </Card>
    )
}

export default EditUser;