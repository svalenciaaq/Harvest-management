import React, { Component } from "react";
import PlantationDataService from "../../services/PlantationService";
import { Link } from "react-router-dom";

export default class PlantationList extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePlantation = this.retrievePlantation.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePlantation = this.setActivePlantation.bind(this);
    this.deletePlantation = this.deletePlantation.bind(this);
  //  this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      plantations: [],
      currentPlantation: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrievePlantation();
  }

  /* onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  } */

  retrievePlantation() {
    PlantationDataService.getAll()
      .then(response => {
        this.setState({
          plantations: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePlantation();
    this.setState({
      currentPlantation: null,
      currentIndex: -1
      
    });
  }

  setActivePlantation(plantation, index) {
    this.setState({
      currentPlantation: plantation,
      currentIndex: index
    });
  }

  deletePlantation(id) {
   PlantationDataService.deletePlantation(id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      
  }

  /* searchTitle() {
    PlantationDataService.findByTitle(this.state.searchTitle)
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
    const {  plantations, currentPlantation, currentIndex } = this.state;

    return (
      <div className="list row">
     {/*    <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div> */}
        <div className="col-md-6">
          <h4>Plantation List</h4>

          <ul className="list-group">
            {plantations &&
              plantations.map((plantation, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePlantation(plantation, index)}
                  key={index}
                >
                  {plantation.type}
                    
                  
                </li>

                
              ))}

          </ul>
          <ul>
          <Link
                to={"plantation/add/"}
                className="btn btn-primary mr-2 mt-2"
              >
                Add
              </Link>
          </ul>
          
        </div>
        <div className="col-md-6">
          {currentPlantation ? (
            <div>
              <h4>Plant</h4>
              <div>
                <label>
                  <strong>Type</strong>
                </label>{" "}
                {currentPlantation.type}
              </div>
              <div>
                <label>
                  <strong>Date</strong>
                </label>{" "}
                {currentPlantation.date}
              </div>
              <div>
                <label>
                  <strong>picture</strong>
                </label>{" "}
                {currentPlantation.picture}
              </div>

             
                  
              <div>
                <label>
                  <strong>crop</strong>
                </label>{" "}
                {currentPlantation.crop}
              </div>

              <Link
                to={"plant/edit/" + currentPlantation._id}
                className="btn btn-primary mr-2 mt-2"
              >
                Edit
              </Link>

           

            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Plantation</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  }

  
