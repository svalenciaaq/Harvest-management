import React, { Component } from "react";
import HistoryDataService from "../../services/HistoryService";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'

export default class Historylist extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveHistory = this.retrieveHistory.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveHistory = this.setActiveHistory.bind(this);
    this.deleteHistory = this.deleteHistory.bind(this);
  //  this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      histories: [],
      currentHistory: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveHistory();
  }

  /* onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  } */

  retrieveHistory() {
    HistoryDataService.getAll(this.props.match.params.id)
      .then(response => {
        this.setState({
          histories: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveHistory();
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
   HistoryDataService.deleteHistory(id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      
  }

  /* searchTitle() {
    HistoryDataService.findByTitle(this.state.searchTitle)
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
    const {  histories, currentHistory, currentIndex } = this.state;
  
    return (
      <div className="container mt-5" align="center">
      
      <h4>Lista de Tratamientos</h4>
        
        <div className= "row">
      
          <Link to={"history/"+ this.props.match.params.id}  className="btn btn-success ml-4 mr-2 mb-2" align="left">Add</Link>
          <Link to={"/plant"}  className="btn btn-success ml-2 mr-2 mb-2" align="left">Back</Link>
          
        </div>
      <div className="row">
     
        <div className="col-md-12">
       
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
  
                <th scope="col">Descripcion</th>
                <th scope="col">Fecha</th>
                <th scope="col">Tratamiento</th> 
                <th scope="col">Acciones</th>
             
              </tr>
            </thead> 
            <tbody>

            {histories.map(item => (

              <tr key={item._id}>
              
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>{item.tratament}</td>
                <td>
                <Link to={"edit/"+ item._id}  className="btn btn-success mr-2 ">Edit</Link>
                <Button onClick={() => this.deleteHistory(item._id)}    className="btn btn-success">Delete</Button>
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

  
