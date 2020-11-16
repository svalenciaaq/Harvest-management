import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HistoryDateService from "../../services/HistoryService";
import { Link} from "react-router-dom";

class AddHistory extends Component {
  constructor(props) {
    super(props);

    // setting up function
 
    this.saveHistory = this.saveHistory.bind(this);
    this.newHistory = this.newHistory.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    // setting up state
    this.state = {
        description: '',
        date: '',
        tratament:'',
        plant:'',

        errors:[]
      
    }
}




saveHistory(){
  var data= {
    description: this.state.description,
    date: this.state.date,
    tratament:this.state.tratament,
    plant: this.props.match.params.id
   
  };

  HistoryDateService.create(data)
  .then(response => {
    this.setState({
      description: this.state.description,
      date: this.state.date,
      tratament: this.state.tratament,
      plant: this.props.match.params.id,
     
    });
    console.log(response.data);
  
  })
  .catch(e =>{
    console.log(e)
  });
  this.redirect()
}


redirect() {
  this.props.history.push('/plant')
}

newHistory() {
  this.setState({
  
    description: this.state.description,
    date: this.state.date,
    tratament: this.state.tratament,
    plant: this.props.match.params.id,
 
    submitted:false
  });
}


hasError(key) {
  return this.state.errors.indexOf(key) !== -1;
}

handleInputChange(event) {
  var key = event.target.name;
  var value = event.target.value;
  var obj = {};
  obj[key] = value;
  this.setState(obj);
}

handleSubmit(event) {
  event.preventDefault();

  //VALIDATE
  var errors = [];

  //type
  if (this.state.description === "") {
    errors.push("description");
  }

  if (this.state.date === "") {
    errors.push("date");
  }


  if (this.state.tratament === "") {
    errors.push("tratament");
  }



 
  //date



  this.setState({
    errors: errors
  });

  if (errors.length > 0) {
    return false;
  } else {
   this.saveHistory()
  }
}
  
    render() {
        return (
          <form className="row">
          <div className="col-lg-6">
            <label htmlFor="description">Description</label>
            <input
              autoComplete="off"
              className={
                this.hasError("description")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />


            <div
              className={
                this.hasError("description") ? "inline-errormsg" : "hidden"
              }
            >
              Please enter a value
            </div>
          </div>
  
  
          <div className="col-lg-6">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              autoComplete="off"
              className={
                this.hasError("date")
                  ? "form-control is-invalid"
                  : "form-control"
              }
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            <div
              className={
                this.hasError("date") ? "inline-errormsg" : "hidden"
              }
            >
              Please enter a value
            </div>
          </div>
  

  
          <div className="col-lg-6">
            <label htmlFor="tratament">Tratament</label>
            <select autoComplete="off" className={
                this.hasError("tratament")
                  ? "form-control is-invalid"
                  : "form-control"
              } name="tratament" value={this.state.tratament} onChange={this.handleInputChange}>
                <option value=""></option>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
          </select>
    
            <div
              className={
                this.hasError("tratament") ? "inline-errormsg" : "hidden"
              }
            >
              Please enter a value
            </div>
          </div>
  
          <div className="col-lg-12  padd-top mt-2">
            <button className="btn btn-success" onClick={this.handleSubmit}>
              Submit
            </button>
  
  
            <button className="btn btn-success ml-2" onClick={this.handleSubmit}>
              Back
            </button>
          </div>
        </form>
        );
      }

}



export default AddHistory