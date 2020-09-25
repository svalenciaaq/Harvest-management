import React,{Component} from 'react';

import './App.css';
import PlantAdd from "./components/plant/Plant.add";
import PlantList from "./components/plant/Plant.list";
import PlantEdit from "./components/plant/Plant.edit";
import CropAdd from "./components/crop/Crop.add";
import CropList from "./components/crop/Crop.list";
import UserAdd from "./components/user/User.add";
import UserList from "./components/user/User.list";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="#" className="navbar-brand">
            Harvest Management
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link
                to={"/plant" }
                className="nav-link"
              >
                Plantas
              </Link>
            </li>

            <li className="nav-item">
            <Link
                to={"/crop" }
                className="nav-link"
              >
                Cultivos
              </Link>
            </li>

            <li className="nav-item">
            <Link
                to={"/user" }
                className="nav-link"
              >
                Usuarios
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          
          <Switch>
            <Route exact path ="/plant"component={PlantList} />
            <Route exact path ="/plant/add"component={PlantAdd} />
            <Route  path ="/plant/edit/:id"component={PlantEdit} />
            <Route exact path ="/crop/add"component={CropAdd}/>
            <Route exact path ="/crop"component={CropList}/>
            <Route  exact path ="/user/add" component={UserAdd} />
            <Route exact path ="/user"component={UserList}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;