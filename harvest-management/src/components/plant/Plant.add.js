import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PlantDateService from "../../services/PlantService";
import { Link} from "react-router-dom";

class CreatePlant extends Component {

  constructor(props) {
    super(props);

    // setting up function
    this.onChangeTypePlant = this.onChangeTypePlant.bind(this)
    this.onChangeDatePlant = this.onChangeDatePlant.bind(this)
    this.onChangePicturePlant = this.onChangePicturePlant.bind(this)
    this.onChangeCropPlant = this.onChangeCropPlant.bind(this)
    this.savePlant = this.savePlant.bind(this);
    this.newPlant = this.newPlant.bind(this);
   
    // setting up state
    this.state = {
        type: '',
        date: '',
        picture: '',
        crop: '',
    }
}


onChangeTypePlant(e) {
  this.setState({type: e.target.value})
}

onChangeDatePlant(e) {
  this.setState({date: e.target.value})
}

onChangePicturePlant(e) {
  this.setState({picture: e.target.value})
}

onChangeCropPlant(e) {
  this.setState({crop: e.target.value})
}

savePlant(){
  var data= {
    type: this.state.type,
    date: this.state.date,
    picture: this.state.picture,
    crop: this.state.crop
  };

  PlantDateService.create(data)
  .then(response => {
    this.setState({
      type: this.state.type,
      date: this.state.date,
      picture: this.state.picture,
      crop: this.state.crop
    });
    console.log(response.data);
  
  })
  .catch(e =>{
    console.log(e)
  });
}

newPlant() {
  this.setState({
  
    type: this.state.type,
    date: this.state.date,
    picture: this.state.picture,
    crop: this.state.crop,
    submitted:false
  });

  
}


  render() {
  return (
      <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Control type="text" value={this.state.type} onChange={this.onChangeTypePlant} />
              </Form.Group>

              <Form.Group controlId="date">
                  <Form.Label>Date:</Form.Label>
                  <Form.Control type="date" value={this.state.date} onChange={this.onChangeDatePlant} />
              </Form.Group>

              <Form.Group controlId="picture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="text" value={this.state.picture} onChange={this.onChangePicturePlant} />
              </Form.Group>

              <Form.Group controlId="crop">
                  <Form.Label>Crop</Form.Label>
                  <Form.Control type="text" value={this.state.crop} onChange={this.onChangeCropPlant} />
              </Form.Group>

              <Button onClick={this.savePlant}  className="badge badge-primary" type="submit">Save</Button>
              <Link to="/plant"  className="badge badge-primary">Back</Link>

             
                  
          </Form>

      </div>
  );
}
}


export default CreatePlant
