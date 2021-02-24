import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserListContainer from './app/components/UserListContainer';
import AddUser from './app/components/AddUser';
import EditUser from './app/components/EditUser';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getUserList } from '../src/app/api/apiService'



const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
       dispatch(getUserList());
  }, []);

  return (
    <Router>
    <Container fluid="md">
      <Row>
        <Col><h4>Dashboard</h4>
        <Route exact path="/" component={UserListContainer} />
        <Route path="/add" component={AddUser} />
        <Route path="/edit:id" component={AddUser} />
        </Col>
      </Row>
    </Container>
    </Router>
  );
}

export default App;
