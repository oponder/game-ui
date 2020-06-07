import React, {useState} from "react";
import styled from '@emotion/styled'
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import Nav from "./Nav";
import GamesList from "./GamesList";
import LockScreen from "./LockScreen";

const Wrapper = styled('div')`
  padding: 35px 45px;
`;

const Spacer = styled('div')`
  height: 350px;
`;

export interface IState {
  showLockScreen: boolean
}

export const Main = () => {
  const [state, setState]: [IState, any] = useState({showLockScreen: true})

  function unlock() {
    setState({showLockScreen: false});
  }

  return <Wrapper>{
    state.showLockScreen ?
      <LockScreen unlock={unlock}/> :
      <>
        <TopBar/>
        <GamesList />
        <Spacer />
        <Nav/>
        <BottomBar/>
      </>
  }
  </Wrapper>;
}