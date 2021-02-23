import React, { useEffect, useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import { connect } from 'react-redux';
// import { getUserList } from '../api/apiService';
import actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const UserListContainer = () => {
    const [loadUsers, setLoadUsers] = useState(false);
    const usersList = useSelector(state => state.usersList);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log(`loadUsers ${loadUsers}`);
/*
    useEffect(() => {
        console.log("useEffect ULC");
        // getUserList();
        if (loadUsers === false) dispatch(getUserList());
        setLoadUsers(true);
    }, []);
*/
    const handleDelUser = (index) => {
        // delUser(index);
        dispatch(actions.delUser(index));
    }
    const handleDelAllUsers = () => {
        // delAll();
        dispatch(actions.delAll());
    }
    const handleAllowRedirect = () => {
        dispatch(actions.allowRedirect(false));
        history.push("/add");
    }

    


    return (      
    <Card>
        <Card.Header as="h5" className="d-flex justify-content-between">User list <Button onClick={() => handleAllowRedirect()} variant="primary">Add user</Button></Card.Header>
        <Card.Body>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>email</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {usersList.map((user, index) => 
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td><Button variant="warning" >Edit</Button></td>
                        <td><Button  onClick={() => handleDelUser(index)} variant="danger" >Delete</Button></td>
                    </tr>
                    )}
                </tbody>
            </Table>
            <Button  onClick={() => handleDelAllUsers()} variant="danger" >Delete all users</Button>
        
        </Card.Body>
    </Card>

       
    )
}
/*
const mapStateToProps = (state) => ({
    usersList: state.usersList,
    loadFromState: state.loadFromState
}) 
const mapDispatchToProps = dispatch => ({
    getUserList: () => dispatch(getUserList()),
    delUser: index => dispatch(actions.delUser(index)),
    delAll: () => dispatch(actions.delAll())
    
})
*/
//export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)
export default UserListContainer

