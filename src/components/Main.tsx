import React from "react";
import styled from '@emotion/styled'
import { Nav } from "./Nav";

const Wrapper = styled('div')`
  padding: 35px 50px;
`;

export interface Props { state: object; }

export const Main = (props: Props) => {
  return <Wrapper>
    <Nav/>
  </Wrapper>;
}