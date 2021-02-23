import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Card, Button, Form } from 'react-bootstrap';
//import { connect } from 'react-redux'
import actions from "../redux/actions"
import { saveUser } from '../api/apiService'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const AddUser = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const usersList = useSelector(state => state.usersList);
    const isLoaded = useSelector(state => state.isLoaded)
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(`Form: ${formData.username}`);
        const emptyFields = {id:101, name:"", address:{city:""}};

        //formData.id=101; formData.name="", formData.city="";
        dispatch(actions.addUser({...formData, ...emptyFields}));    // add user to local state
        dispatch(saveUser(formData));           // add user to api
        console.log(`state: ${usersList}`);
        
    };

    useEffect(() => {
      if(isLoaded) history.push("/");

      console.log(`isLoaded ${isLoaded}`)
    }, [isLoaded]);
    
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

/*
const mapDispatchToProps = dispatch => ({
    saveUser: () => dispatch(saveUser()),
    addUser: formData => dispatch(actions.addUser(formData))
})
*/

export default AddUser;