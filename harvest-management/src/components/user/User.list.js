import React, { Component } from "react";
import UserDataService from "../../services/UserService";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  constructor(props) {
    super(props);
//  this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveUser= this.retrieveUser.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser= this.setActiveUser.bind(this);
    this.deleteUser= this.deleteUser.bind(this);
   // this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveUser();
  }

 /*  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }
 */
  retrieveUser() {
    UserDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUser();
    this.setState({
      currentUser: null,
      currentIndex: -1
    });
  }

  setActiveUser(User, index) {
    this.setState({
      currentUser: User,
      currentIndex: index
    });
  }

  deleteUser(id) {
   UserDataService.deleteUser(id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
      
  }
/* 
  searchTitle() {
    UserDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          User: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
 */
  render() {
    const {  users, currentUser, currentIndex } = this.state;

    return (
      <div className="list row">
    {/*     <div className="col-md-8">
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
          <h4>Users list</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.name}
                </li>
              ))}
          </ul>
          <Link
                to={"user/add/"}
                className="btn btn-primary mr-2 mt-2"
              >
                Add
              </Link>
          
        </div>
        <div className="col-md-6">
          {currentUser? (
            <div>
              <h4>User</h4>
              <div>
                <label>
                  <strong>Name</strong>
                </label>{" "}
                {currentUser.name}
              </div>
              <div>
                <label>
                  <strong>Email</strong>
                </label>{" "}
                {currentUser.email}
              </div>
              <div>
                <label>
                  <strong>dni</strong>
                </label>{" "}
                {currentUser.dni}
              </div>
   
              <div>
                <label>
                  <strong>cellphone</strong>
                </label>{" "}
                {currentUser.cellphone}
              </div>
        
              <div>
                <label>
                  <strong>Rol</strong>
                </label>{" "}
                {currentUser.rol}
              </div>

              <Link
                to={"User/edit/" + currentUser._id}
                className="btn btn-primary mr-2 mt-2"
              >
                Edit
              </Link>

           

            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a User</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  }

  
