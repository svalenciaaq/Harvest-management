import React,{Component} from 'react';

import './App.css';
import PlantAdd from "./components/plant/Plant.add";
import PlantList from "./components/plant/Plant.list";
import PlantEdit from "./components/plant/Plant.edit";
import plantShow from "./components/plant/plant.show";
import CropAdd from "./components/crop/Crop.add";
import CropList from "./components/crop/Crop.list";
import CropShow from "./components/crop/crop.show";
import CropEdit from "./components/crop/Crop.edit";
import UserAdd from "./components/user/User.add";
import UserList from "./components/user/User.list";
import PlantationList from "./components/plantation/plantation.list";
import PlantationAdd  from "./components/plantation/plantation.add";
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

            
            <li className="nav-item">
            <Link
                to={"/plantation" }
                className="nav-link"
              >
                Plantaciones
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          
          <Switch>
           
           {/* Plant Routes */}
            <Route exact path ="/plant"component={PlantList} />
            <Route exact path ="/plant/add"component={PlantAdd} />
            <Route  path ="/plant/edit/:id"component={PlantEdit} />
            <Route  path ="/plant/show/:id"component={plantShow} />

            {/* Crop Routes */}
            <Route exact path ="/crop/add"component={CropAdd}/>
            <Route exact path ="/crop"component={CropList}/>
            <Route  path ="/crop/show/:id"component={CropShow} />
            <Route  path ="/crop/edit/:id"component={CropEdit} />

            {/* User Routes */}
            <Route  exact path ="/user/add" component={UserAdd} />
            <Route exact path ="/user"component={UserList}/>

            {/* Plantation Routes */} 
            <Route exact path ="/plantation"component={PlantationList}/>
            <Route exact path ="/plantation/add"component={PlantationAdd}/>

            

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;