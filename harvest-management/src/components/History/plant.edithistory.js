import React, { Component } from "react";
import historyDataService from "../../services/HistoryService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class EditHistory extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTratament = this.onChangeTratament.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
    
    this.state = {
      currentHistory: {
        _id: null,
        description: '',
        date: '',
        tratament: '',
       
      },
    };
  }

  componentDidMount() {
    this.getHistory(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  onChangeDescription(e) {
    const description = e.target.value;
   
    this.setState(function(prevState) {
      return {
        currentHistory: {
          ...prevState.currentHistory,
          description: description
         
        }
        
      };
      
    });

  }
  
  onChangeDate(e) {
    const date = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentHistory: {
          ...prevState.currentHistory,
          date: date
        }
      };
    });
  }
  
  onChangeTratament(e) {
    const tratament = e.target.value;
    
    this.setState(function(prevState) {
      return {
        currentHistory: {
          ...prevState.currentHistory,
          tratament: tratament
        }
      };
    });
  }
  

  

  getHistory(id) {
    historyDataService.get(id)
      .then(response => {
        this.setState({
          currentHistory: response.data
        });
        console.log(response.data);
        console.log(this.state.currentHistory.description);
        console.log()
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateHistory() {
    console.log(this.state.currentHistory._id)
    historyDataService.updateHistory(
      this.state.currentHistory._id,
      this.state.currentHistory
    )
      .then(response => {
        console.log(response.data);
        
      })
      .catch(e => {
        console.log(e);
      });
    
  }

   



  render() {

    return (
      <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" value={this.state.currentHistory.description} onChange={this.onChangeDescription} />
              </Form.Group>

              <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" value={this.state.currentHistory.date} onChange={this.onChangeDate} />
              </Form.Group>

              <Form.Group controlId="tratament">
                  <Form.Label>Tratament</Form.Label>
                  <Form.Control type="text" value={this.state.currentHistory.tratament} onChange={this.onChangeTratament} />
              </Form.Group>

        

              <Button onClick={this.updateHistory} className="btn btn-primary mr-2 " type="submit">Save</Button>
              <button
              type="submit"
              className="btn btn-primary mr-2 "
              onClick={this.redirect}
            >
              back
            </button>
         
          </Form>

      </div>
  );
    
    
  }
}