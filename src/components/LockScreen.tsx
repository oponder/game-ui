import React, { useState } from "react";
import styled from '@emotion/styled'
import ding from '../sounds/ding.wav';
import click1 from '../sounds/click-1.wav';

let clickSound = new Audio(click1);
let dingSound = new Audio(ding);

const Wrapper = styled('div')`
  display: flex;
  height: 100%;
  position: relative;
  overflow: hidden;
  opacity: 1;
`;

const SideBar = styled('div')`
  width: 30%;
  height: 100%;

  transform: scale3d(1,1,1);
  transition: 0.5s;
  opacity: 1;

  &.activated {
    transform: scale3d(1,1,2);
    opacity: 0;
  }
`

const MainArea = styled('div')`
  background-color: #333;
  width: 70%;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 35px 45px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: scale3d(1,1,1);
  transition: 0.25s;
  opacity: 1;

  &.activated {
    transform: scale3d(1.15,1.15,1.15);
    opacity: 0;
  }
`

const Top = styled('div')`
  height: 100%;

`

const HomeIcon = styled('div')`
  position: relative;

  svg {
    position: relative;
    z-index: 2;
  }
`

const Circle = styled('div')`
  border-radius: 100%;
  width: 110%;
  height 110%;
  left: -5%;
  top: -6%;
  background-color: #333;
  position: absolute;
  z-index: 1;
  transition: 0.2s;

  &.activated {
    background-color: #444;
  }
`

const Bottom = styled('div')`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  button {
    height: 30px;
    background: none;
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    border-radius: 4px;
    width: 100px;
    height: 40px;
    text-align: center;

    &:hover {
      background-color: #555;
    }
  }
`

export interface Props {
  unlock: () => void
}

export default (props: Props) => {
  const [activated, setActivated]: [boolean, any] = useState(false)

  function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dingSound.play();
    setActivated(true);

    setTimeout(() => {
      props.unlock();
    }, 500)

  }

  return <Wrapper>
    <SideBar className={activated ? 'activated' : ''} />
    <MainArea className={activated ? 'activated' : ''}>
      <Top>
      </Top>

      <HomeIcon>
        <Circle className={activated ? 'activated' : ''}/>
        <svg width="188px" height="188px" viewBox="0 0 188 188">
          <g id="Artboard-Copy" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M94.5,1 C146.138624,1 188,42.8613759 188,94.5 C188,146.138624 146.138624,188 94.5,188 C42.8613759,188 1,146.138624 1,94.5 C1,42.8613759 42.8613759,1 94.5,1 Z M94.5,12 C48.9365081,12 12,48.9365081 12,94.5 C12,140.063492 48.9365081,177 94.5,177 C140.063492,177 177,140.063492 177,94.5 C177,48.9365081 140.063492,12 94.5,12 Z" id="Combined-Shape" fill="#D8D8D8"></path>
            <path d="M95.006881,43.232994 L148.631711,86.035163 C149.063356,86.3796929 149.133977,87.0089071 148.789447,87.4405524 C148.599696,87.6782832 148.312058,87.8167259 148.007884,87.8167259 L130.199666,87.8167259 L130.199666,129 C130.199666,130.656854 128.85652,132 127.199666,132 L61.2376979,132 C59.5808437,132 58.2376979,130.656854 58.2376979,129 L58.2376979,87.8167259 L39.9923701,87.8167259 C39.4400853,87.8167259 38.9923701,87.3690107 38.9923701,86.8167259 C38.9923701,86.5181731 39.125766,86.2352355 39.3560861,86.0452711 L91.2265496,43.2633181 C92.3209837,42.3606458 93.898107,42.3479948 95.006881,43.232994 Z M108.99069,87.8542054 L80.0783414,87.8542054 L80.0783414,107.914953 L108.99069,107.914953 L108.99069,87.8542054 Z" id="Combined-Shape" fill="#D8D8D8"></path>
          </g>
        </svg>
      </HomeIcon>

      <Bottom>
        <button onClick={onClick}>Unlock</button>
      </Bottom>
    </MainArea>

  </Wrapper>;
}