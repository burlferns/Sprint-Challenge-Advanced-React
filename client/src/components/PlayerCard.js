import React from 'react';
import styled from "styled-components";

const StylDiv = styled.div`
  width: 230px;
  border:1px solid orange;
  margin:5px 5px;
`;



export default function PlayerCard({playerData}) {

  const {name, country} = playerData;

  return (
    <StylDiv>
      <p>{`Name: ${name}`}</p>
      <p>{`Country: ${country}`}</p>
    </StylDiv>

  )

}