import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card, Button, Form } from 'react-bootstrap';
import actions from "../redux/actions"
import { saveUser } from '../api/apiService'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const EditUser = () => {
    const { index } = useParams();
    

    const { register, handleSubmit } = useForm({});
    const history = useHistory();
    const usersList = useSelector(state => state.usersList);
    const allowRedirect = useSelector(state => state.allowRedirect)
    const dispatch = useDispatch();
    
    const [user, setUser] = useState(usersList[index]);
    
    useEffect(() => {
        console.log(user) 
        //setUser(usersList[id]);
      }, []);
      
    
    const onSubmit = (formData) => {
      console.log(user)  
       const user1 = {id: user.id, name: formData.name, username: formData.username, email: formData.email, address: {city: formData.city}};
       //console.log(formData.city)
      dispatch(actions.modUser(user1, index)); 
      
      alert("user modified");
      history.push("/");
    };



    
    return (
    <Card>
      <Card.Header as="h5">Edit user, id: {user.id} </Card.Header>
        <Card.Body>
            <Form  onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Name" defaultValue={user.name} ref={register} />
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
              <Form.Control type="text" name="city" placeholder="City" defaultValue={user.address.city} ref={register} />
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