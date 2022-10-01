import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:end;
`

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`;

export const DirectoryHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 100px 0 100px;
  height: 50vh;
  margin-bottom: 50px;
  animation: rubberBand; 
  animation-duration: 1s;


  h1 {
    font-weight: bold;
    color: white;
    margin: 0 6px 0;
    font-size: 4em;
    text-align:center;
    text-transform: uppercase;
    

    background: linear-gradient(to left, #ff77c0 20%, #fee6c2 40%, #fee6c2 60%, #ff77c0 80%);
    background-size: 200% auto;
    
    color: #000;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    animation: shine 5s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    } 
  }
`