import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 90px;
  padding: 0px;
  &:hover {
    cursor: pointer;
    animation: tada; 
    animation-duration: 1s; 
   
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #fee6c2;
  font-size: 1.5em;

  &:hover {
    cursor: pointer;
    color: #ff77c0;
    animation: heartBeat; 
    animation-duration: 1s; 
   
  }

`;
