import React, { Component } from "react";
import PlantationDataService from "../../services/PlantationService";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'

export default class plantationShow extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.deletePlantation = this.deletePlantation.bind(this);
    this.getPlantation = this.getPlantation.bind(this);
  //  this.searchTitle = this.searchTitle.bind(this);

  this.state = {
    id: "",
    address: "",
    administrator: "",
    crops: "",
    picture: ""
    }
 }

  componentDidMount() {
    this.getPlantation(this.props.match.params.id);
  }

  getPlantation(id) {
    PlantationDataService.get(id)
      .then(response => {
        this.setState({
          id: response.data._id,
          address: response.data.address,
          administrator: response.data.administrator,
          crops: response.data.crops,
          picture: response.data.picture,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  redirect() {
    this.props.history.push('/plant')
}

  async deletePlantation(id) {
   PlantationDataService.deletePlantation(id)
      .then(response => {
        console.log(response.data);
       
      })
      .catch(e => {
        console.log(e);
      });
      this.redirect()
  }

  render() {
    

    return (
        <div>
          <div>

        
            <ListGroup>
            <ListGroup.Item>{this.state.address}</ListGroup.Item>
            <ListGroup.Item>{this.state.administrator}</ListGroup.Item>
            <ListGroup.Item>{this.state.crops}</ListGroup.Item>
            <ListGroup.Item>{this.state.picture}</ListGroup.Item>
            </ListGroup>
            </div>

            <Link
                to={"../edit/" + this.state.id}
                className="btn btn-primary mr-2 mt-2"
              >
                Edit
              </Link>
            <button class = "btn btn-primary mr-2 mt-2 "onClick={()=>this.deletePlantation(this.state.id)}>
            Delete
            </button>
        </div>
    );
  }

  }

  
