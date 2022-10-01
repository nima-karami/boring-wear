import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #fee6c2;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  height: 200px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 0 7.5px 15px;
  overflow: hidden;

  animation: rubberBand; 
  animation-duration: 1s; 

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &&:hover {
    cursor: pointer;
    animation: tada; 
    animation-duration: 1s; 
   
  }
`;
