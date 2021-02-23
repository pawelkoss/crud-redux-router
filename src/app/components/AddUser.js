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
    const allowRedirect = useSelector(state => state.allowRedirect)
    const dispatch = useDispatch();

    //let user = {id:"", name:"", username:"", email:"", address:{city:""}};

    const onSubmit = (formData) => {
        console.log(`Form: ${formData.username}`);
        //const emptyFields = {id:101, name:"", address:{city:""}};
        let lastID = usersList[usersList.length-1].id;
        console.log(lastID);
        let user = {id:lastID+1, name:"", username:formData.username, email:formData.email, address:{city:""}};

        //formData.id=101; formData.name="", formData.city="";
        //dispatch(actions.addUser({...formData, ...emptyFields}));    // add user to local state
        dispatch(actions.addUser(user));
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

/*
const mapDispatchToProps = dispatch => ({
    saveUser: () => dispatch(saveUser()),
    addUser: formData => dispatch(actions.addUser(formData))
})
*/

export default AddUser;