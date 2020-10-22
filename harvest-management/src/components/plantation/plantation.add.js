import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PlantationDateService from "../../services/PlantationService";
import { Link} from "react-router-dom";

class CreatePlantation extends Component {

  constructor(props) {
    super(props);

    // setting up function
    this.onChangeAddressPlantation = this.onChangeAddressPlantation.bind(this)
    this.onChangeAdminstratorPlantation = this.onChangeAdminstratorPlantation.bind(this)
    this.onChangeCropsPlant = this.onChangeCropsPlantation.bind(this)
    this.onChangePicturePlant = this.onChangePicturePlantation.bind(this)
    this.savePlantation = this.savePlantation.bind(this);
    
   
    // setting up state
    this.state = {
        address: '',
        adminstrator: '',
        crops: '',
        crops: '',
    }
}


onChangeAddressPlantation(e) {
  this.setState({address: e.target.value})
}

onChangeAdminstratorPlantation(e) {
  this.setState({adminstrator: e.target.value})
}

onChangePicturePlantation(e) {
  this.setState({crops: e.target.value})
}

onChangeCropsPlantation(e) {
  this.setState({picture: e.target.value})
}

savePlantation(){
  var data= {
    address: this.state.address,
    adminstrator: this.state.adminstrator,
    crops: this.state.crops,
    picture: this.state.picture
  };

  PlantationDateService.create(data)
  .then(response => {
    this.setState({
      address: this.state.address,
      adminstrator: this.state.adminstrator,
      crops: this.state.crops,
      picture: this.state.picture
    });
    console.log(response.data);
  
  })
  .catch(e =>{
    console.log(e)
  });
}




  render() {
  return (
      <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="address">
                  <Form.Label>Type</Form.Label>
                  <Form.Control address="text" value={this.state.address} onChange={this.onChangeAddressPlantation} />
              </Form.Group>

              <Form.Group controlId="adminstrator">
                  <Form.Label>Date:</Form.Label>
                  <Form.Control address="adminstrator" value={this.state.adminstrator} onChange={this.onChangeAdminstratorPlantation} />
              </Form.Group>

              <Form.Group controlId="crops">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control address="text" value={this.state.crops} onChange={this.onChangePicturePlant} />
              </Form.Group>

              <Form.Group controlId="picture">
                  <Form.Label>Crop</Form.Label>
                  <Form.Control address="text" value={this.state.picture} onChange={this.onChangeCropPlant} />
              </Form.Group>

              <Button onClick={this.savePlantation}  className="btn btn-primary mr-2 mt-2" address="submit">Save</Button>
              <Link to="/plant"  className="btn btn-primary mr-2 mt-2">Back</Link>

             
                  
          </Form>

      </div>
  );
}
}


export default CreatePlantation
