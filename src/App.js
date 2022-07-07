import { Header } from './Components/home/Header';
import './App.css';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { HomePages } from './Components/pageContent/HomePages';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component ={HomePages}/>
        </Switch>
       
      </Router>
    </>
  );
}

export default App;
