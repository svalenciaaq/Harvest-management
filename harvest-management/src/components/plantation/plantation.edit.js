import React, { Component } from "react";
import PlantationDataService from "../../services/PlantationService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeAddressPlant = this.onChangeAddressPlant.bind(this);
    this.onChangeAdministrator = this.onChangeAdministrator.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onChangeCrops = this.onChangeCrops.bind(this);
    this.getPlantation = this.getPlantation.bind(this);
    this.updatePlantation = this.updatePlantation.bind(this);
    this.redirect = this.redirect.bind(this);
  
    this.state = {
      currentPlantation: {
        _id: null,
        address: '',
        administrator: '',
        picture: '',
        crop:'',
      },
    };
  }

  componentDidMount() {
    this.getPlantation(this.props.match.params.id);
  }

  onChangeAddressPlant(e) {
    const address = e.target.value;
   
    this.setState(function(prevState) {
      return {
        currentPlantation: {
          ...prevState.currentPlantation,
          address: address
         
        }
        
      };
      
    });

  }
  
  onChangeAdministrator(e) {
    const administrator = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentPlantation: {
          ...prevState.currentPlantation,
          administrator: administrator
        }
      };
    });
  }
  
  onChangePicture(e) {
    const picture = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentPlantation: {
          ...prevState.currentPlantation,
          picture: picture
        }
      };
    });
  }
  
  onChangeCrops(e) {
    const crops = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentPlantation: {
          ...prevState.currentPlantation,
          crops: crops
        }
      };
    });
  }
  

  getPlantation(id) {
    PlantationDataService.get(id)
      .then(response => {
        this.setState({
          currentPlantation: response.data
        });
        console.log(response.data);
        console.log(this.state.currentPlantation.type);
        console.log()
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePlantation() {
    console.log(this.state.currentPlantation._id)
    PlantationDataService.updatePlantation(
      this.state.currentPlantation._id,
      this.state.currentPlantation
    )
      .then(response => {
        console.log(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
      this.props.history.push('/plantation/show/' + this.state.currentPlantation._id);
  }

  redirect(){
    this.props.history.push('/plantation/show/' + this.state.currentPlantation._id);
  }
   



  render() {
  
    return (
      <div> 
          <div className="edit-form">
            <h4>Plant</h4>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Control type="text" value={this.state.currentPlantation.address} onChange={this.onChangeAddressPlant} />
              </Form.Group>

              <Form.Group controlId="date">
                  <Form.Label>Date:</Form.Label>
                  <Form.Control type="text" value={this.state.currentPlantation.administrator} onChange={this.onChangeAdministrator} />
              </Form.Group>

              <Form.Group controlId="picture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="text" value={this.state.currentPlantation.crops} onChange={this.onChangeCrops} />
              </Form.Group>

              <Form.Group controlId="crop">
                  <Form.Label>Crop</Form.Label>
                  <Form.Control type="text" value={this.state.currentPlantation.picture} onChange={this.onChangePicture} />
              </Form.Group>

              <Button onClick={this.updatePlantation} size=""  type="submit">Save</Button>
          </Form>
          <button
              type="submit"
              className="btn btn-success mr-2 mt-2"
              onClick={this.redirect}
            >
              back
            </button>
         
            <p>{this.state.message}</p>
          </div>
    
      </div>
    );
  }
}

  
  
