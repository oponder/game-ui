import React from "react";
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const borderGlow = keyframes`
  0% { border-color: #43B0A1 }
  50% { border-color: #92FFDC }
  100% { border-color: #43B0A1 }
`

const Wrapper = styled('div')`
  width: 250px;
  margin-right: 20px;
  display: inline-block;
`;

const GameIcon = styled('div')`
  width: 250px;
  height: 250px;
  background-color: #444;

  &.selected {
    border: 8px solid #53C0B1;
    border-radius: 4px;
    position: relative;
    top: -8px;

    animation: ${borderGlow} 1s 0s infinite;
  }

  &.selected::before {
    position: absolute;
    top: -4px;
    left: -4px;
    border: 4px solid #222;
    display: block;
    width: 250px;
    height: 250px;
    content: '';
  }
`;

const Title = styled('div')`
  overflow: hidden;
  width: 200px;
  color: #66CDC4;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export interface Props { selected: boolean, title: string, onClick: () => void, forwardedRef: any}

export default (props: Props) => {
  return <Wrapper onClick={props.onClick} ref={props.forwardedRef}>
    {
      props.selected && <Title>{props.title}</Title>
    }

    {
      !props.selected && <Title>&nbsp;</Title>
    }
    <GameIcon className={props.selected ? 'selected' : undefined} />
  </Wrapper>;
}