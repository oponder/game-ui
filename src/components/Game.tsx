import React from "react";
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const borderGlow = keyframes`
  0% { border-color: #43B0A1 }
  50% { border-color: #92FFDC }
  100% { border-color: #43B0A1 }
`

const Wrapper = styled('div')`
  margin-right: 10px;
  display: inline-block;
`;

const GameIcon = styled('div')`
  box-sizing: border-box;
  width: 250px;
  height: 250px;
  background-color: #444;

  &.selected {
    border: 8px solid #53C0B1;
    border-radius: 4px;
    animation: ${borderGlow} 1s 0s infinite;
    width: 266px;
    height: 266px;
    position: relative;
    top: -8px;
  }

  &:hover {
    background-color: #555;
    cursor: pointer;
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

export interface Props { selected: boolean, title: string, onMouseDown: () => void, onClick: () => void, forwardedRef: any}

export default (props: Props) => {
  return <Wrapper onClick={props.onClick} onMouseDown={props.onMouseDown} ref={props.forwardedRef}>
    {
      props.selected && <Title>{props.title}</Title>
    }

    {
      !props.selected && <Title>&nbsp;</Title>
    }
    <GameIcon className={props.selected ? 'selected' : undefined} />
  </Wrapper>;
}