import {Route, Routes} from 'react-router-dom';
import Navigation from './containers/Navigation';
import Home from './routes/home.component';
import Shop from './routes/shop.component';




const App = () => {

  return (
    <div>
      <Routes>    
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
