import React, { Component } from "react";
import CropDataService from "../../services/CropService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeLocationCrop = this.onChangeLocationCrop.bind(this);
    this.onChangeAdministratorCrop = this.onChangeAdministratorCrop.bind(this);
    this.onChangePictureCrop = this.onChangePictureCrop.bind(this);
    this.onChangeDateofinagurationCrop = this.onChangeDateofinagurationCrop.bind(this);
    this.getCrop = this.getCrop.bind(this);
    this.updateCrop = this.updateCrop.bind(this);
    this.redirect = this.redirect.bind(this);
  
    this.state = {
      currentCrop: {
        _id: null,
        location: '',
        administrator: '',
        picture: '',
        dateofinaguration: '',
      },
    };
  }

  componentDidMount() {
    this.getCrop(this.props.match.params.id);
  }

  onChangeLocationCrop(e) {
    const location = e.target.value;
   
    this.setState(function(prevState) {
      return {
        currentCrop: {
          ...prevState.currentCrop,
          location: location
         
        }
        
      };
      
    });

  }
  
  onChangeAdministratorCrop(e) {
    const administrator = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentCrop: {
          ...prevState.currentCrop,
          administrator: administrator
        }
      };
    });
  }
  
  onChangePictureCrop(e) {
    const picture = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentCrop: {
          ...prevState.currentCrop,
          picture: picture
        }
      };
    });
  }
  
  onChangeDateofinagurationCrop(e) {
    const dateofinaguration = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentCrop: {
          ...prevState.currentCrop,
          dateofinaguration: dateofinaguration
        }
      };
    });
  }
  

  getCrop(id) {
    CropDataService.get(id)
      .then(response => {
        this.setState({
          currentCrop: response.data
        });
        console.log(response.data);
        console.log(this.state.currentCrop.location);
        console.log()
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateCrop() {
    console.log(this.state.currentCrop._id)
    CropDataService.updateCrop(
      this.state.currentCrop._id,
      this.state.currentCrop
    )
      .then(response => {
        console.log(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
      this.props.history.push('/crop/show/' + this.state.currentCrop._id);
  }

  redirect(){
    this.props.history.push('/crop/show/' + this.state.currentCrop._id);
  }
   



  render() {

    return (
      <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" value={this.state.currentCrop.location} onChange={this.onChangeLocationCrop} />
              </Form.Group>

              <Form.Group controlId="date">
                  <Form.Label>Administrator</Form.Label>
                  <Form.Control type="text" value={this.state.currentCrop.administrator} onChange={this.onChangeAdministratorCrop} />
              </Form.Group>

              <Form.Group controlId="picture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="text" value={this.state.currentCrop.picture} onChange={this.onChangePictureCrop} />
              </Form.Group>

              <Form.Group controlId="crop">
                  <Form.Label>Date of inaguration</Form.Label>
                  <Form.Control type="text" value={this.state.currentCrop.dateofinaguration} onChange={this.onChangeDateofinagurationCrop} />
              </Form.Group>

              <Button onClick={this.updateCrop} className="btn btn-primary mr-2 " type="submit">Save</Button>
              <button
              type="submit"
              className="btn btn-primary mr-2 "
              onClick={this.redirect}
            >
              back
            </button>
         
          </Form>

      </div>
  );
    
    
  }
}

  
  




