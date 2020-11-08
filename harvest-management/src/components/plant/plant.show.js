import React, { Component } from "react";
import PlantDataService from "../../services/PlantService";
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'

export default class plantShow extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.deletePlant = this.deletePlant.bind(this);
    this.getPlant = this.getPlant.bind(this);
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
    this.getPlant(this.props.match.params.id);
  }

  getPlant(id) {
    PlantDataService.get(id)
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

  async deletePlant(id) {
   PlantDataService.deletePlant(id)
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
                Edit
              </Link>
            <button class="btn btn-primary mt-2 mr-2" onClick={()=>this.deletePlant(this.state.id)}>
            Delete
            </button>
            <Link
                to={"../edit/" + this.state.id}
                className="btn btn-primary mr-2 mt-2"
              >
                Change
              </Link>

            
        </div>
    );
  }

  }

  
