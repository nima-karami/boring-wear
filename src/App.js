import {Route, Routes} from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home.component';
import Shop from './routes/Shop.component';
import SignIn from './routes/SignIn';
import Register from './routes/Register';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';



const App = () => {

  return (
    <div>
      <Routes>    
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignupForm />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
