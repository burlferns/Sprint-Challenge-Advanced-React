import React from 'react';
import axios from 'axios';
import styled from "styled-components";

import DarkMode from './DarkMode';

const StylH1 = styled.h1`
  text-align:center;
`;




class PlayersList extends React.Component {
  state = {
    srvData : [],
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        // console.log("This is data from the server",res.data);
        this.setState({
          srvData : res.data,
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
  
    return ( <>
      <StylH1>Women's World Cup Players</StylH1>

      {this.state.srvData.length===0 
        ? <p>Loading data ...</p>
        : <DarkMode data={this.state.srvData}/>
      }
      
      

    </> );
    
  }
    
}
    
export default PlayersList;