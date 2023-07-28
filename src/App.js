import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CardProvider from './components/CardProvider/CardProvider';
import Home from './components/Home/Home';
import CreateCard from './components/CreateCard/CreateCard';
import EditCard from './components/EditCard/EditCard';
import ViewCard from './components/ViewCard/ViewCard';

function App() {
  return (
    <div className="App">
       <CardProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/card/new' element={< CreateCard/>} ></Route>
              <Route path='/card/edit/:id' element={<EditCard />} ></Route>
              <Route path='/card/:id' element={<ViewCard />} ></Route>
            </Routes>
          </Router>
        </CardProvider>
    </div>
  );
}

export default App;