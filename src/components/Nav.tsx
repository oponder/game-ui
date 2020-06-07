import React from "react";
import styled from '@emotion/styled'
import Game from './Game';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

const NavItem = styled('div')`
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 100%;
  margin-right: 25px;
  flex-shrink: 0;
`;

export interface Props {}

export default (props: Props) => {
  return <Wrapper>
    <NavItem tabIndex={0} />
    <NavItem tabIndex={0} />
    <NavItem tabIndex={0} />
    <NavItem tabIndex={0} />
    <NavItem tabIndex={0} />
    <NavItem tabIndex={0} />
  </Wrapper>;
}