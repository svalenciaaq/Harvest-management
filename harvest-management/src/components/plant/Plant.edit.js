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
 

  
    this.state = {
        type: "",
        date: "",
        picture: "",
        crop: ""
    }
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

  onChangeTypePlant(e) {
    this.setState({type: e.target.value})
  }
  
  onChangeDate(e) {
    this.setState({date: e.target.value})
  }
  
  onChangePicture(e) {
    this.setState({picture: e.target.value})
  }
  
  onChangeCrop(e) {
    this.setState({crop: e.target.value})
  }
  

  getTutorial(id) {
    PlantDataService.get(id)
      .then(response => {
        this.setState({
          type: this.state.type,
          date: this.state.date,
          picture: this.state.picture,
          crop: this.state.crop,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    return (
      <div>
        
          <div className="edit-form">
            <h4>Plant</h4>
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

              <Button onClick={this.savePlant} size="lg"  type="submit">Save</Button>
          </Form>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatePlant}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
      
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        
         
      </div>
    );
  }
}

  
  
