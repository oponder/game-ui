import React from "react";
import styled from '@emotion/styled'
import Game from './Game';

const Wrapper = styled('div')`
  margin-top: 40px;
  height: 275px;
  position: absolute;
  left: 0px;
  overflow-y: hidden;
  width: 100%;
`;

const List = styled('div')`
  padding-left: 50px;
  padding-right: 50px;
  white-space: nowrap;
  overflow-y: hidden;
  width: fit-content;
  height: 275px;
`;

export interface Props {}

export default (props: Props) => {
  return <Wrapper>
    <List>
      <Game selected={true}/>
      <Game selected={false}/>
      <Game selected={false}/>
      <Game selected={false}/>
      <Game selected={false}/>
      <Game selected={false}/>
      <Game selected={false}/>
      <Game selected={false}/>
      <Game selected={false}/>
    </List>
  </Wrapper>;
}