import Footer from '../components/Footer';
import { Fragment } from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import {Outlet} from 'react-router-dom';

const Navigation = () => {
    return (
      <Fragment>
        <ResponsiveAppBar />
          <Outlet />
        <Footer />
      </Fragment>
    )
  }

export default Navigation;