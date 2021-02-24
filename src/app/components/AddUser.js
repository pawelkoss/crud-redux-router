import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Card, Button, Form } from 'react-bootstrap';
import actions from "../redux/actions"
import { saveUser } from '../api/apiService'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const AddUser = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const usersList = useSelector(state => state.usersList);
    const allowRedirect = useSelector(state => state.allowRedirect)
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        // console.log(`Form: ${formData.username}`);
        let lastID;
        usersList.length > 0 ? lastID = usersList[usersList.length-1].id : lastID = 0;

        console.log(lastID);
        let user = {id:lastID+1, name:"", username:formData.username, email:formData.email, address:{city:""}};

        dispatch(actions.addUser(user));        // add user to redux state
        dispatch(saveUser(formData));           // add user to api
        //console.log(`state: ${usersList}`);
        
    };

    useEffect(() => {
      if(allowRedirect) history.push("/");

      console.log(`allowRedirect ${allowRedirect}`)
    }, [allowRedirect]);
    
    return (
    <Card>
        <Card.Header as="h5">Add user </Card.Header>
        <Card.Body>
            <Form  onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formUserName">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" name="username" placeholder="User name" ref={register({ required: true })}/>
            </Form.Group>
            
            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true })}/>
            </Form.Group>

            <Form.Group className="d-flex justify-content-end">
            <Button href="/" variant="outline-danger" className="mr-2">Cancel</Button> <Button type="submit" variant="success">Save</Button>
            </Form.Group>
            </Form>
        </Card.Body>
    </Card>
    )

}


export default AddUser;