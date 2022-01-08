import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes, Navigate } from "react-router-dom";
import Filter from "./components/Filter";
import Home from './components/Home';
import Screen1 from "./components/Screen1";
import Screen2   from "./components/Screen2";
import Screen3   from "./components/Screen3";
import './index.css'

const App = () => {

  const [year, setYear] = useState(null);
  const changeYear = async (x) => {
    await setYear(x);
    console.log(year)
  }
  
  return(
    <Router>
    <div className="App">
      <h1>SpaceX Launch Programs</h1>
      <div className="divs">
        <Filter changeYear={changeYear}/>
        <Routes>
          {/* <Route exact path="/"><Home logout={logout} user={user}/></Route> */}
          <Route exact path="/" element={<Home year={year}/>}></Route>
          <Route exact path="/launch_success" element={<Screen1 year={year} />}></Route>
          <Route exact path="/land_success" element={<Screen2 year={year} success={true}/>}></Route>
          <Route exact path="/launch_land_success" element={<Screen3 year={year} success={true} />}></Route>
          
          {/* <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register register={register}/>}></Route>
          <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login login={login}/>}></Route> */}
        </Routes>
      </div>
      <h2 className="developer">Developed by: <span className='devName'>Mradul Agarwal</span></h2>
    </div>
    </Router>
  )
};

export default App;