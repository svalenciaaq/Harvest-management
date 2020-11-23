import React from "react";
import PlantDateService from "../../services/PlantService";
import { Link } from "react-router-dom";





class Plant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      date: "",
      crop:"",
      
      errors: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.savePlant = this.savePlant.bind(this);
  }

  hasError(key) {
    
    return this.state.errors.indexOf(key[1]) !== -1 || this.state.errors.indexOf(key[0]) !== -1;
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
     
    

    if (this.state.date !== "") {

        var str = this.state.date
        var split= str.split("-");
        var actualDate = new Date();
        var entryDate= new Date(split[0],split[1]-1,split[2]);
    

        if(entryDate > actualDate){
          errors.push("date2");
        } 
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
     this.savePlant()
    }
  }
  savePlant(){
    var data= {
      type: this.state.type,
      date: this.state.date,
      crop: this.state.crop
    };
  
    PlantDateService.create(data)
    .then(response => {
      this.setState({
        type: this.state.type,
        date: this.state.date,
        crop: this.state.crop
      });
      console.log(response.data);
      alert(response.data.picture)
    })
    .catch(e =>{
      console.log(e)
    });
    this.redirect()
  }

  redirect() {
    this.props.history.push('/plant')
  }
  

  render() {
    return (
      <form className="row">
       
       <div className="col-lg-6">
            <label htmlFor="type">Type</label>
            <select autoComplete="off" className={
                this.hasError(["type"])
                  ? "form-control is-invalid"
                  : "form-control"
              } name="type" value={this.state.type} onChange={this.handleInputChange}>
                <option value=""></option>
                  <option value="Sativa">Sativa</option>
                  <option value="Indica">Indica</option>
                  <option value="Sativa indica">Sativa indica</option>
                
          </select>
    
            <div
              className={
                this.hasError(["type"]) ? "inline-errormsg" : "hidden"
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
            className={this.hasError(["date" , "date2"])? "form-control is-invalid": "form-control"
            }
            name="date"
            value={this.state.date}
            onChange={this.handleInputChange}
          />
          <div
            className={
              this.hasError(["date"]) ? "inline-errormsg" : "hidden"
            }
          >
            Please enter a value
          </div>

          <div
            className={
              this.hasError(["date2"]) ? "inline-errormsg" : "hidden"
            }
          >
            Ingrese una fecha valida
          </div>

        </div>


        <div className="col-lg-6">
            <label htmlFor="crop">Crop</label>
            <select autoComplete="off" className={
                this.hasError(["crop"])
                  ? "form-control is-invalid"
                  : "form-control"
              } name="crop" value={this.state.crop} onChange={this.handleInputChange}>
                <option value=""></option>
                  <option value="NW-1">NW-1</option>
                  <option value="NW-2">NW-2</option>
                  <option value="NE-1">NE-1</option>
                  <option value="NE-2">NE-2</option>
                
          </select>
    
            <div
              className={
                this.hasError(["crop"]) ? "inline-errormsg" : "hidden"
              }
            >
              Please enter a value
            </div>
          </div>

        <div className="col-lg-12  padd-top mt-2">
          <button className="btn btn-success" onClick={this.handleSubmit}>
            Submit
          </button>


          <Link to="/plant"  className="btn btn-success mr-2 ml-2" >Back</Link>
        </div>
      </form>
    );
  }
}

export default Plant
