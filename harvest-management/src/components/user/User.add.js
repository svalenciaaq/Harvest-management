import React, {Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserDataService from "../../services/UserService";
import { Link} from "react-router-dom";

class CreateUser extends Component {

  constructor(props) {
    super(props);

    // setting up function
    this.onChangeNameUser = this.onChangeNameUser.bind(this)
    this.onChangeEmailUser = this.onChangeEmailUser.bind(this)
    this.onChangeDniUser = this.onChangeDniUser.bind(this)
    this.onChangeCellPhoneUser = this.onChangeCellPhoneUser.bind(this)
    this.onChangeRolUser = this.onChangeRolUser.bind(this)
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    // setting up state
    this.state = {
        name: '',
        email: '',
        dni: '',
        cellphone: '',
        rol: '',
    }
}


onChangeNameUser(e) {
  this.setState({name: e.target.value})
}

onChangeEmailUser(e) {
  this.setState({date: e.target.value})
}

onChangeDniUser(e) {
  this.setState({dni: e.target.value})
}

onChangeCellPhoneUser(e) {
  this.setState({cellphone: e.target.value})
}

onChangeRolUser(e) {
    this.setState({rol: e.target.value})
  }

saveUser(){
  var data= {
    name: this.state.name,
    email: this.state.email,
    dni: this.state.dni,
    cellphone: this.state.cellphone,
    rol: this.state.rol
  };

  UserDataService.create(data)
  .then(response => {
    this.setState({
        name: this.state.name,
        email: this.state.email,
        dni: this.state.dni,
        cellphone: this.state.cellphone,
        rol: this.state.rol
    });
    console.log(response.data);
  
  })
  .catch(e =>{
    console.log(e)
  });
}

newUser() {
  this.setState({
    name: this.state.name,
    email: this.state.email,
    dni: this.state.dni,
    cellphone: this.state.cellphone,
    rol: this.state.rol
  });
  
}

  render() {
  return (
      <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={this.state.name} onChange={this.onChangeNameUser} />
              </Form.Group>

              <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" value={this.state.email} onChange={this.onChangeEmailUser} />
              </Form.Group>

              <Form.Group controlId="dni">
                  <Form.Label>dni</Form.Label>
                  <Form.Control type="text" value={this.state.dni} onChange={this.onChangeDniUser} />
              </Form.Group>

              <Form.Group controlId="cellphone">
                  <Form.Label>cellphone</Form.Label>
                  <Form.Control type="text" value={this.state.cellphone} onChange={this.onChangeCellPhoneUser} />
              </Form.Group>


              <Form.Group controlId="rol">
                  <Form.Label>rol</Form.Label>
                  <Form.Control type="text" value={this.state.rol} onChange={this.onChangeRolUser} />
              </Form.Group>


              <Button onClick={this.saveUser} className="badge badge-primary" type="submit">Save</Button>
              <Link to="/user"  className="badge badge-primary">Back</Link>
          </Form>

      </div>
  );
}
}


export default CreateUser
