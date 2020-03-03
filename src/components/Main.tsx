import React from "react";
import styled from '@emotion/styled'
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import Nav from "./Nav";
import GamesList from "./GamesList";

const Wrapper = styled('div')`
  padding: 35px 45px;
`;

const Spacer = styled('div')`
  height: 350px;
`;

export interface Props { state: object; }

export const Main = (props: Props) => {
  return <Wrapper>
    <TopBar/>
    <GamesList />
    <Spacer />
    <Nav/>
    <BottomBar/>
  </Wrapper>;
}