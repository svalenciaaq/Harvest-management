import React, {  Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CropDataService from "../../services/CropService";
import { Link} from "react-router-dom";

class Createcrop extends Component {

  constructor(props) {
    super(props);

    // setting up function
    this.onChangeLocationCrop = this.onChangeLocationCrop.bind(this);
    this.onChangeAdministratorCrop = this.onChangeAdministratorCrop.bind(this);
    this.onChangePictureCrop = this.onChangePictureCrop.bind(this);
    this.onChangeDateofinagurationCrop = this.onChangeDateofinagurationCrop.bind(this);
    this.saveCrop = this.saveCrop.bind(this);
    this.newCrop = this.newCrop.bind(this);
    

    // setting up state
    this.state = {
        location: '',
        administrator: '',
        picture: '',
        dateofinaguration: '',
    }
}


onChangeLocationCrop(e) {
  this.setState({location: e.target.value})
}

onChangeAdministratorCrop(e) {
  this.setState({administrator: e.target.value})
}

onChangePictureCrop(e) {
  this.setState({picture: e.target.value})
}

onChangeDateofinagurationCrop(e) {
  this.setState({dateofinaguration: e.target.value})
}


saveCrop(){
  var data= {
        location: this.state.location,
        administrator: this.state.administrator,
        picture: this.state.picture,
        dateofinaguration: this.state.dateofinaguration,
  };

  CropDataService.create(data)
  .then(response => {
    this.setState({
      location: this.state.location,
      administrator: this.state.administrator,
      picture: this.state.picture,
      dateofinaguration: this.state.dateofinaguration,
    });
    console.log(response.data);
  
  })
  .catch(e =>{
    console.log(e)
  });
}

newCrop() {
  this.setState({
        location: this.state.location,
        administrator: this.state.administrator,
        picture: this.state.picture,
        dateofinaguration: this.state.crop,
  });
  
}
  render() {
  return (
      <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" value={this.state.location} onChange={this.onChangeLocationCrop} />
              </Form.Group>

              <Form.Group controlId="date">
                  <Form.Label>Administrator</Form.Label>
                  <Form.Control type="text" value={this.state.administrator} onChange={this.onChangeAdministratorCrop} />
              </Form.Group>

              <Form.Group controlId="picture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="text" value={this.state.picture} onChange={this.onChangePictureCrop} />
              </Form.Group>

              <Form.Group controlId="crop">
                  <Form.Label>Date of inaguration</Form.Label>
                  <Form.Control type="text" value={this.state.dateofinaguration} onChange={this.onChangeDateofinagurationCrop} />
              </Form.Group>

              <Button onClick={this.saveCrop} className="badge badge-primary" type="submit">Save</Button>
              <Link to="/user"  className="badge badge-primary" >Back</Link>
          </Form>

      </div>
  );
}
}


export default Createcrop
