import React from "react";
import styled from '@emotion/styled'

const Wrapper = styled('div')`
  width: 250px;
  height: 300px;
  margin-right: 20px;
  display: inline-block;
`;

const GameIcon = styled('div')`
  width: 250px;
  height: 250px;
  background-color: #444;
`;

const Title = styled('div')`
  overflow: hidden;
  width: 200px;
`;

export interface Props { selected: boolean}

export default (props: Props) => {
  return <Wrapper>
    <Title>Animal Crossing</Title>
    <GameIcon />
  </Wrapper>;
}