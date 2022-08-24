import {Route, Routes} from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Register from './routes/Register';
import SignupForm from './routes/SignupForm';
import SigninForm from './routes/SigninForm';



const App = () => {

  return (
    <div>
      <Routes>    
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signIn' element={<SigninForm />} />
          <Route path='/signUp' element={<SignupForm />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
