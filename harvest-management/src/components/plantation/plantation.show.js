import React, { Component } from "react";
import PlantationDataService from "../../services/PlantationService";
import { Redirect,Link } from "react-router-dom";
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
    type: "",
    date: "",
    picture: "",
    crop: ""
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
          type: response.data.type,
          date: response.data.date,
          picture: response.data.picture,
          crop: response.data.crop,
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
            <ListGroup.Item>{this.state.type}</ListGroup.Item>
            <ListGroup.Item>{this.state.date}</ListGroup.Item>
            <ListGroup.Item>{this.state.picture}</ListGroup.Item>
            <ListGroup.Item>{this.state.crop}</ListGroup.Item>
            </ListGroup>
            </div>

            <Link
                to={"../edit/" + this.state.id}
                className="btn btn-primary mr-2 mt-2"
              >
                Show more..
              </Link>
            <button onClick={()=>this.deletePlantation(this.state.id)}>
            Delete
            </button>
        </div>
    );
  }

  }

  
