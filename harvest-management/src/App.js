import React,{Component} from 'react';

import './App.css';



import PlantAdd from "./components/plant/Plant.add";
import PlantList from "./components/plant/Plant.list";
import PlantEdit from "./components/plant/Plant.edit";




import History from "./components/History/plant.addhistory";
import HistoryList from "./components/History/plant.listhistory";
import HistoryEdit from "./components/History/plant.edithistory";

import CropAdd from "./components/crop/Crop.add";
import CropList from "./components/crop/Crop.list";

import CropEdit from "./components/crop/Crop.edit";



import UserAdd from "./components/user/User.add";
import UserList from "./components/user/User.list";


import PlantationList from "./components/plantation/plantation.list";
import PlantationAdd  from "./components/plantation/plantation.add";
import plantationEdit from "./components/plantation/plantation.edit";

import PlanningList from "./components/planning/plant.plannig";




import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './public/img/logo.jpg';

import { BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark  navbar-custom">
         
          <Link 
              to={"/home"}
              className= "navbar-brand"
          >
           <img src={logo} alt="Logo"  width="150" height="50" />
          </Link>
          <div className="navbar-nav mr-auto">
          
            <li className="nav-item mr-10">
            <Link
                to={"/plant" }
                className="nav-link text-white"
              >
                Plants
              </Link>
            </li>

            <li className="nav-item mr-10">
            <Link
                to={"/crop" }
                className="nav-link text-white"
              >
                Crops
              </Link>
            </li>

           
            
            <li className="nav-item" >
            <Link
                to={"/plantation" }
                className="nav-link text-white"
              >
                Plantations
              </Link>
            </li>


            <li className="nav-item mr-10">
            <Link
                to={"/user" }
                className="nav-link text-dark"
              >
                Users
              </Link>
            </li>
           

          
            <li className="nav-item mr-10">
            <Link
                to={"/login" }
                className="nav-link text-dark"
              >
                Login
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
            

              {/* History planst Routes */}
              <Route exact path ="/plant/historylist/:id"component={HistoryList} />
            <Route  path ="/plant/historylist/history/:id"component={History} />
        
            <Route  path ="/plant/historylist/edit/:id"component={HistoryEdit} />



            {/* Crop Routes */}
            <Route exact path ="/crop/add"component={CropAdd}/>
            <Route exact path ="/crop"component={CropList}/>
           
            <Route  path ="/crop/edit/:id"component={CropEdit} />

            {/* Plantation Routes */} 
            <Route exact path ="/plantation"component={PlantationList}/>
            <Route exact path ="/plantation/add"component={PlantationAdd}/>
      
            <Route exact path ="/plantation/edit/:id"component={plantationEdit}/>


            
            {/* User Routes */}
            <Route  exact path ="/user/add" component={UserAdd} />
            <Route exact path ="/user"component={UserList}/>



            <Route exact path ="/plant/planning/:id"component={PlanningList}/>

          </Switch>
        </div>


        <footer id="footer" className="py-2 footer-custom text-white-50 mt-2 navbar-fixed-bottom">
        <div className="container text-center">
        <small className="text-white">nothing works better than a harvest management</small>
      </div>
       </footer>
      </div>
      
     
    );
  }
}

export default App;