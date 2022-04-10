import './App.css';
import Home from './Components/Home';
import { HashRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <div className="App">
       <Home/>
      <Routes>
       <Route exact path="/" component={Home}/>
       <Route path="/person" component={Home}/>
       <Route path="/payment" component={Home}/>
       <Route path="/settings" component={Home}/>
       <Route path="/messages" component={Home}/>
       <Route path="/calender" component={Home}/>
      </Routes>
    </div>
      </HashRouter>
  );
}

export default App;
