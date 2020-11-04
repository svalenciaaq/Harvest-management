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
    this.onChangeCropsPlantation = this.onChangeCropsPlantation.bind(this)
    this.onChangePicturePlantation = this.onChangePicturePlantation.bind(this)
    this.savePlantation = this.savePlantation.bind(this);
    
   
    // setting up state
    this.state = {
        address: '',
        administrator: '',
        crops: '',
        picture: '',
    }
}


onChangeAddressPlantation(e) {
  this.setState({address: e.target.value})
}

onChangeAdminstratorPlantation(e) {
  this.setState({administrator: e.target.value})
}

onChangePicturePlantation(e) {
  this.setState({picture: e.target.value})
}

onChangeCropsPlantation(e) {
  this.setState({crops: e.target.value})
}

savePlantation(){
  var data= {
    address: this.state.address,
    administrator: this.state.administrator,
    crops: this.state.crops,
    picture: this.state.picture
  };

  PlantationDateService.create(data)
  .then(response => {
    this.setState({
      address: this.state.address,
      administrator: this.state.administrator,
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
              <Form.Group controlId="type">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" value={this.state.address} onChange={this.onChangeAddressPlantation} />
              </Form.Group>

              <Form.Group controlId="adminstrator">
                  <Form.Label>adminstrator:</Form.Label>
                  <Form.Control type="adminstrator" value={this.state.administrator} onChange={this.onChangeAdminstratorPlantation} />
              </Form.Group>

              <Form.Group controlId="crops">
                  <Form.Label>crops</Form.Label>
                  <Form.Control type="text" value={this.state.crops} onChange={this.onChangeCropsPlantation} />
              </Form.Group>

              <Form.Group controlId="picture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="text" value={this.state.picture} onChange={this.onChangePicturePlantation} />
              </Form.Group>

              <Button onClick={this.savePlantation}  className="btn btn-primary mr-2 mt-2" type="submit">Save</Button>
              <Link to="/plant"  className="btn btn-primary mr-2 mt-2">Back</Link>

             
                  
          </Form>

      </div>
  );
}
}


export default CreatePlantation
