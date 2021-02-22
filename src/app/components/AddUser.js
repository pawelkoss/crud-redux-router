import React from 'react';
import { useForm } from "react-hook-form";
import { Card, Table, Button, Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import actions from "../redux/actions"
import { saveUser } from '../api/apiService'
import { withRouter } from "react-router";
import { useHistory } from 'react-router-dom';



const AddUser = ({usersList, saveUser, addUser}) => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = (formData) => {
        console.log(`Form: ${formData.name}`);
        console.log(usersList);
        addUser(formData);
        saveUser(formData);
        
    };
    
    return (
    <Card>
        <Card.Header as="h5">Add user </Card.Header>
        <Card.Body>
            <Form  onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Name" ref={register({ required: true })}/>
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

const mapStateToProps = (state) => ({
    usersList: state.usersList
}) 
const mapDispatchToProps = dispatch => ({
    saveUser: () => dispatch(saveUser()),
    addUser: formData => dispatch(actions.addUser(formData))
    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUser))