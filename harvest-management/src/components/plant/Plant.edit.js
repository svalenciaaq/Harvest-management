import React, { Component } from "react";
import PlantDataService from "../../services/PlantService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTypePlant = this.onChangeTypePlant.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onChangeCrop = this.onChangeCrop.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePlant = this.updatePlant.bind(this);
    this.redirect = this.redirect.bind(this);
  
    this.state = {
      currentPlant: {
        _id: null,
        type: '',
        date: '',
        picture: '',
        crop:'',
      },
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

  onChangeTypePlant(e) {
    const type = e.target.value;
   
    this.setState(function(prevState) {
      return {
        currentPlant: {
          ...prevState.currentPlant,
          type: type
         
        }
        
      };
      
    });

  }
  
  onChangeDate(e) {
    const date = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentPlant: {
          ...prevState.currentPlant,
          date: date
        }
      };
    });
  }
  
  onChangePicture(e) {
    const picture = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentPlant: {
          ...prevState.currentPlant,
          picture: picture
        }
      };
    });
  }
  
  onChangeCrop(e) {
    const crop = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentPlant: {
          ...prevState.currentPlant,
          crop: crop
        }
      };
    });
  }
  

  getTutorial(id) {
    PlantDataService.get(id)
      .then(response => {
        this.setState({
          currentPlant: response.data
        });
        console.log(response.data);
        console.log(this.state.currentPlant.type);
        console.log()
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePlant() {
    console.log(this.state.currentPlant._id)
    PlantDataService.updatePlant(
      this.state.currentPlant._id,
      this.state.currentPlant
    )
      .then(response => {
        console.log(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
      this.props.history.push('/plant/show/' + this.state.currentPlant._id);
  }

  redirect(){
    this.props.history.push('/plant/show/' + this.state.currentPlant._id);
  }
   



  render() {
 
    return (
      <div> 
          <div className="edit-form">
            <h4>Plant</h4>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Control type="text" value={this.state.currentPlant.type} onChange={this.onChangeTypePlant} />
              </Form.Group>

              <Form.Group controlId="date">
                  <Form.Label>Date:</Form.Label>
                  <Form.Control type="date" value={this.state.currentPlant.date} onChange={this.onChangeDate} />
              </Form.Group>

              <Form.Group controlId="picture">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="text" value={this.state.currentPlant.picture} onChange={this.onChangePicture} />
              </Form.Group>

              <Form.Group controlId="crop">
                  <Form.Label>Crop</Form.Label>
                  <Form.Control type="text" value={this.state.currentPlant.crop} onChange={this.onChangeCrop} />
              </Form.Group>

              <Button onClick={this.updatePlant} size=""  type="submit">Save</Button>
          </Form>
          <button
              type="submit"
              className="btn btn-primary mr-2 mt-2"
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

  
  
