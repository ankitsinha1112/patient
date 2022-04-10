import './App.css';
import Home from './Components/Home';
import { HashRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <div className="App">
       <Home/>
      <Routes>
       <Route path="/person" component={Home}/>
       <Route path="/payment" component={Home}/>
       <Route path="/settings" component={Home}/>
       <Route path="/messages" component={Home}/>
       <Route path="/calender" component={Home}/>
       <Route path="/home" component={Home}/>
      </Routes>
    </div>
      </HashRouter>
  );
}

export default App;
