import React, { Component } from "react";
import PlantDataService from "../../services/PlantService";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


import Modal from 'react-bootstrap/Modal'

export default class PlantList extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePlant = this.retrievePlant.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePlant = this.setActivePlant.bind(this);
    this.deletePlant = this.deletePlant.bind(this);

    this.searchId = this.searchId.bind(this);
    this.onChangeSearchId= this.onChangeSearchId.bind(this);

    this.state = {
      plantas: [],
      currentPlant: null,
      currentIndex: -1,
      searchId: ""
    };
  }

  componentDidMount() {
    this.retrievePlant();
  }

  onChangeSearchId(e) {
    const searchId = e.target.value;

    this.setState({
      searchId: searchId
    });
  }
   

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

   searchId() {
     if(this.state.searchId){
    PlantDataService.findByTitlePlant(this.state.searchId)
      .then(response => {
        this.setState({
          plantas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }else{
      this.refreshList();
    }
     
    
  } 

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  render() {
    const {  plantas, currentPlant, currentIndex, searchId } = this.state;
    var img= 'plant.jpeg';
    return (

      
      <div className="list row">
         
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by id"
              value={searchId}
              onChange={this.onChangeSearchId}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchId}
              >
                Search
              </button>
            </div>
          </div>
        </div>
  
        <div className="col-md-6">
          <h4>Plant List</h4>

          <Link
                to={"plant/add/"}
                className="btn btn-success
                 mb-2 mt-2"
              >
                Add
              </Link>

          <ul className="list-group mb-2">
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
                   {plant.id}
                          
                          
                  {plant.type}
                    
                  
                </li>
              ))}

          </ul>
         
          
        </div>
        <div className="col-md-6">
          {currentPlant ? (
            <div>
              <h4>Plant</h4>
              <div>
                <label>
                  <strong>Id</strong>
                </label>{" "}
                {currentPlant.id}
              </div>
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
               
                <img src={ require('../../public/img/'+ currentPlant.picture + '.jpg') } width="200" height="200"/>
                
              </div>

             
                  
              <div>
                <label>
                  <strong>crop</strong>
                </label>{" "}
                {currentPlant.crop}
              </div>

              <Link
                to={"plant/edit/" + currentPlant._id}
                className="btn btn-primary mr-2 mt-2"
              >
                Edit
              </Link>
              
                 <Link
                to={"plant/historylist/" + currentPlant._id}
                className="btn btn-primary mr-2 mt-2"
              >
                History
              </Link>

              <Link
                to={"plant/planning/" + currentPlant._id}
                className="btn btn-primary mr-2 mt-2"
              >
                Planning
              </Link>

              <Button onClick={() => this.deletePlant(currentPlant._id)}    className="btn btn-primary mt-2">Delete</Button>


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

  
