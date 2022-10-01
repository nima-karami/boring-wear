import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    fill: #fee6c2;

    
  }

  img {
    width: 30px;
    height: 30px;
    
  }

  &:hover {
    animation: heartBeat; 
    animation-duration: 1s;
      svg {
        fill: #ff77c0;
      }
   
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;
