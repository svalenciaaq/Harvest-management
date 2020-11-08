import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HistoryDateService from "../../services/HistoryService";
import { Link} from "react-router-dom";

class AddHistory extends Component {
  constructor(props) {
    super(props);

    // setting up function
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.saveHistory = this.saveHistory.bind(this);
    this.newHistory = this.newHistory.bind(this);
   
    // setting up state
    this.state = {
        description: '',
        date: '',
       
    }
}


onChangeDescription(e) {
  this.setState({description: e.target.value})
}

onChangeDate(e) {
  this.setState({date: e.target.value})
}



saveHistory(){
  var data= {
    description: this.state.description,
    date: this.state.date,
   
  };

  HistoryDateService.create(data)
  .then(response => {
    this.setState({
      description: this.state.description,
      date: this.state.date,
     
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
 
    submitted:false
  });
}
  
    render() {
        return (
          <div className="form-wrapper container-custom">
          <Form class = "form_register" onSubmit={this.onSubmit}>
              <Form.Group controlId="type">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" value={this.state.description} onChange={this.onChangeDescription} />
              </Form.Group>

              <Form.Group controlId="date">
                  <Form.Label>Date:</Form.Label>
                  <Form.Control type="date" value={this.state.date} onChange={this.onChangeDate} />
              </Form.Group>

  

              <Button onClick={this.saveHistory}  className="btn btn-primary mr-2 " type="submit">Save</Button>
              <Link to="/plant"  className="btn btn-primary mr-2 ">Back</Link>

             
       
          </Form>
      </div>
        );
      }

}



export default AddHistory