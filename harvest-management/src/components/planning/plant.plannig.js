import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'
import PlanningDataService from "../../services/PlanningService";
import PlantDataService from "../../services/PlantService"

export default class Historylist extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePlanning = this.retrievePlanning.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveHistory = this.setActiveHistory.bind(this);
    this.deleteHistory = this.deleteHistory.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
  //  this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      id:"",
      planning: [],
      currentHistory: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrievePlanning();
    this.getTutorial(this.props.match.params.id);
  }

  /* onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  } */

  retrievePlanning() {
    PlanningDataService.getAll(this.props.match.params.id)
      .then(response => {
        this.setState({
          planning: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  getTutorial(id) {
    PlantDataService.get(id)
      .then(response => {
        this.setState({
          id:response.data.id,
         
        });
       
       console.log(this.state._id)
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePlanning();
    this.setState({
      currentHistory: null,
      currentIndex: -1
      
    });
  }

  setActiveHistory(history, index) {
    this.setState({
      currentHistory: history,
      currentIndex: index
    });
  }

  deleteHistory(id) {
   PlanningDataService.deletePlanning(id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      
  }

  /* searchTitle() {
    PlanningDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          history: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  } */

  render() {
    const {  planning, currentHistory, currentIndex , id} = this.state;
  
    return (
      <div className="container mt-5" align="center">
      
      <h4>Planning list</h4>
        
        <div className= "row">
      
         
          <Link to={"/plant"}  className="btn btn-success ml-2 mr-2 mb-2" align="left">Back</Link>
          
        </div>
      <div className="row">
     
        <div className="col-md-12">
       
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">Id</th>  
                <th scope="col">Date</th>
                <th scope="col">Tratament</th> 
                <th scope="col">Actions</th>
             
              </tr>
            </thead> 
            <tbody>

            {planning.map(item => (

              <tr key={item._id}>
                <td>{this.state.id}</td>
                <td>{item.date}</td>
                <td>{item.tratament}</td>
                <td>
                <Button onClick={() => this.deleteHistory(item._id)}    className="btn btn-success">Done</Button>
                </td>
              </tr>

            ))}

            </tbody>

          </table>

        </div>

      </div>

      </div>
    );
    
  }

  }

  
