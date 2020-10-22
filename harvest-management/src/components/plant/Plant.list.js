import React, { Component } from "react";
import PlantDataService from "../../services/PlantService";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'

export default class PlantList extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePlant = this.retrievePlant.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePlant = this.setActivePlant.bind(this);
    this.deletePlant = this.deletePlant.bind(this);
  //  this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      plantas: [],
      currentPlant: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrievePlant();
  }

  /* onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  } */

  retrievePlant() {
    PlantDataService.getAll()
      .then(response => {
        this.setState({
          plantas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePlant();
    this.setState({
      currentPlant: null,
      currentIndex: -1
      
    });
  }

  setActivePlant(plant, index) {
    this.setState({
      currentPlant: plant,
      currentIndex: index
    });
  }

  async deletePlant(id) {
   PlantDataService.deletePlant(id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      
  }

  /* searchTitle() {
    PlantDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          plant: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  } */

  render() {
    const {  plantas, currentPlant, currentIndex } = this.state;
  
    return (
      <div className="list row">
       
     
        <div className="col-md-6">
          <h4>Plant List</h4>

          <ul className="list-group">
            {plantas &&
              plantas.map((plant, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePlant(plant, index)}
                  key={index}
                >
                  {plant.type}
                    
                  
                </li>
              ))}

          </ul>
          <ul>
          <Link
                to={"plant/add/"}
                className="btn btn-primary  mt-2"
              >
                Add
              </Link>
          </ul>
          
        </div>
        <div className="col-md-6">
          {currentPlant ? (
            <div>
              <h4>Plant</h4>
              <div>
                <label>
                  <strong>Type</strong>
                </label>{" "}
                {currentPlant.type}
              </div>
              <div>
                <label>
                  <strong>Date</strong>
                </label>{" "}
                {currentPlant.date}
              </div>
              <div>
                <label>
                  <strong>picture</strong>
                </label>{" "}
                {currentPlant.picture}
              </div>

             
                  
              <div>
                <label>
                  <strong>crop</strong>
                </label>{" "}
                {currentPlant.crop}
              </div>

              <Link
                to={"plant/show/" + currentPlant._id}
                className="btn btn-primary mr-2 mt-2"
              >
                Show
              </Link>

            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Plant</p>
            </div>
          )}
        </div>
      </div>



    );


    
  }

  

  }

  
