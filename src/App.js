import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChangedListener, CreateUserDocumentFromAuth } from "./utils/Firebase/Firebase";
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Register from './routes/Register';
import SignupForm from './routes/SignupForm';
import SigninForm from './routes/SigninForm';
import Checkout from './routes/Checkout';
import Test from './routes/Test';
import { setCurrentUser } from './store/UserReducer';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            CreateUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
}, []);

  return (
    <div>
      <Routes>    
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='signIn' element={<SigninForm />} />
          <Route path='signUp' element={<SignupForm />} />
          <Route path='register' element={<Register />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
