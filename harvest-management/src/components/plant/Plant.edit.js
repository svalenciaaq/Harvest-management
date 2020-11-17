import React, { Component } from "react";
import PlantDataService from "../../services/PlantService";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
   
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePlant = this.updatePlant.bind(this);
    
    this.state = {
     
        _id: null,
        type: '',
        date: '',
        picture: '',
        crop:'',
      
      errors: []
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
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
    if (this.state.type === "") {
      errors.push("type");
    }

    if (this.state.date === "") {
      errors.push("date");
    }


    if (this.state.picture === "") {
      errors.push("picture");
    }



    if (this.state.crop === "") {
      errors.push("crop");
    }

    //date
 


    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      return false;
    } else {
     this.updatePlant()
    }
  }
  
 
  

  getTutorial(id) {
    PlantDataService.get(id)
      .then(response => {
        this.setState({
          _id:response.data._id,
          type: response.data.type,
          date:response.data.date ,
          picture:response.data.picture,
          crop:response.data.crop,
        });
       
       console.log(this.state._id)
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePlant() {
    var data= {
      type: this.state.type,
      date: this.state.date,
      picture: this.state.picture,
      crop: this.state.crop
    };
    PlantDataService.updatePlant(
      this.state._id,
      data
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
      <form className="row">
        <div className="col-lg-6">
          <label htmlFor="type">First Name</label>
          <input
            autoComplete="off"
            className={
              this.hasError("type")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="type"
            value={this.state.type}
            onChange={this.handleInputChange}
          />
          <div
            className={
              this.hasError("type") ? "inline-errormsg" : "hidden"
            }
          >
            Please enter a value
          </div>
        </div>


        <div className="col-lg-6">
          <label htmlFor="date">First Name</label>
          <input
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
          <label htmlFor="picture">First Name</label>
          <input
            autoComplete="off"
            className={
              this.hasError("picture")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="picture"
            value={this.state.picture}
            onChange={this.handleInputChange}
          />
          <div
            className={
              this.hasError("picture") ? "inline-errormsg" : "hidden"
            }
          >
            Please enter a value
          </div>
        </div>




        <div className="col-lg-6">
          <label htmlFor="crop">First Name</label>
          <input
            autoComplete="off"
            className={
              this.hasError("crop")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="crop"
            value={this.state.crop}
            onChange={this.handleInputChange}
          />
          <div
            className={
              this.hasError("crop") ? "inline-errormsg" : "hidden"
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

  
  
