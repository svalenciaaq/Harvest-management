import React, { Component } from "react";
import CropDataService from "../../services/CropService";
import { Redirect,Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'

export default class plantShow extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.deleteCrop = this.deleteCrop.bind(this);
    this.getCrop = this.getCrop.bind(this);
  //  this.searchTitle = this.searchTitle.bind(this);

  this.state = {
      id:'',
    location: '',
    administrator: '',
    picture: '',
    dateofinaguration: '',
    }
 }

  componentDidMount() {
    this.getCrop(this.props.match.params.id);
  }

  getCrop(id) {
    CropDataService.get(id)
      .then(response => {
        this.setState({
            id: response.data._id,
          location: response.data.location,
          administrator: response.data.administrator,
          picture: response.data.picture,
          dateofinaguration: response.data.dateofinaguration
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  redirect() {
    this.props.history.push('/crop')
}

  async deleteCrop(id) {
   CropDataService.deleteCrop(id)
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
            <ListGroup.Item>{this.state.location}</ListGroup.Item>
            <ListGroup.Item>{this.state.administrator}</ListGroup.Item>
            <ListGroup.Item>{this.state.picture}</ListGroup.Item>
            <ListGroup.Item>{this.state.dateofinaguration}</ListGroup.Item>
            </ListGroup>
            </div>

            <Link
                to={"../edit/" + this.state.id}
                className="btn btn-primary mr-2 mt-2"
              >
                Edit
              </Link>
            <button class="btn btn-primary mt-2" onClick={()=>this.deleteCrop(this.state.id)}>
            Delete
            </button>
        </div>
    );
  }

  }

  
