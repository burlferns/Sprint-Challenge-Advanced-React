import React from 'react';
import axios from 'axios';
import styled from "styled-components";

import PlayersCard from './PlayersCard';

const StylH1 = styled.h1`
  text-align:center;
`;


const StylDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class PlayersList extends React.Component {
  state = {
    srvData : [],
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("This is data from the server",res.data);
        this.setState({
          srvData : res.data,
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
  
    return ( <>
      <StylH1>Women's World Cup Players</StylH1>

      <StylDiv>
        {this.state.srvData.length===0 
          ? <p>Loading data ...</p>
          : this.state.srvData.map( elm => 
            <PlayersCard key={elm.id} playerData={elm}/>
          )
        }
      </StylDiv>
      

    </> );
    
  }
    
}
    
export default PlayersList;