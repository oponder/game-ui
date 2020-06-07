import React from "react";
import styled from '@emotion/styled'

const Wrapper = styled('div')`
`;

export interface Props {
  unlock: () => void
}

export default (props: Props) => {
  function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.unlock();
  }

  return <Wrapper>
    <h1>Welcome to the lockscreen</h1>
    <button onClick={onClick}>Unlock</button>
  </Wrapper>;
}