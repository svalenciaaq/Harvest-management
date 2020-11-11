import React, { Component } from "react";
import CropDataService from "../../services/CropService";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class CropList extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveCrop = this.retrieveCrop.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCrop = this.setActiveCrop.bind(this);
    this.deleteCrop = this.deleteCrop.bind(this);
  //  this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      cropes: [],
      currentCrop: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveCrop();
  }

 /*  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }
 */
  retrieveCrop() {
    CropDataService.getAll()
      .then(response => {
        this.setState({
          cropes: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCrop();
    this.setState({
      currentCrop: null,
      currentIndex: -1
    });
  }

  setActiveCrop(crop, index) {
    this.setState({
      currentCrop: crop,
      currentIndex: index
    });
  }

 async deleteCrop(id) {
   CropDataService.deleteCrop(id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      
  }

  /* searchTitle() {
    CropDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          Crop: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
 */
  render() {
    const { cropes, currentCrop, currentIndex } = this.state;

    return (
      <div className="list row">
      {/*   <div className="col-md-8">
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
          <h4>Crop List</h4>

          <ul className="list-group">
            {cropes &&
              cropes.map((crop, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCrop(crop, index)}
                  key={index}
                >
                  {crop.location}
                </li>
              ))}
          </ul>
          <Link
                to={"crop/add/"}
                className="btn btn-primary mr-2 mt-2"
              >
                Add
              </Link>
          
        </div>
        <div className="col-md-6">
          {currentCrop ? (
            <div>
              <h4>Crop</h4>
              <div>
                <label>
                  <strong>Location</strong>
                </label>{" "}
                {currentCrop.location}
              </div>
              <div>
                <label>
                  <strong>Administrator</strong>
                </label>{" "}
                {currentCrop.administrator}
              </div>
              <div>
                <label>
                  <strong>picture</strong>
                </label>{" "}
                {currentCrop.picture}
              </div>
              <div>
                <label>
                  <strong>Date of inaguaration
                  </strong>
                </label>{" "}
                {currentCrop.dateofinaguration}
              </div>

              <Link
                to={"Crop/edit/" + currentCrop._id}
                className="btn btn-primary mr-2 "
              >
                Show
              </Link>
              <Button onClick={() => this.deleteCrop(currentCrop._id)}    className="btn btn-primary mt-2">Delete</Button>
           

            </div>
          ) : (
            <div>
              <br />
              <p>Escoge un cultivo</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  }

  
