import React, { useState } from 'react';
import styled from '@emotion/styled'
import oponderProfile from '../images/oponder.png';
import useClock from '../effects/useClock.tsx';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const Users = styled('div')`
  display: flex;
`

const User = styled('div')`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 15px;
  background-image: url("${oponderProfile}");
  background-size: cover;
  border: 2px solid #fff;
  box-shadow: 0px 0px 3px #999;
`

const SystemInfo = styled('div')`
  div {
    margin-right: 15px;
  }
`

const Time = styled('div')`
  font-family: neuzeit-grotesk, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  display: inline-block;
  letter-spacing: 2px;
  span {
    font-size: 12px;
    letter-spacing: 0px;
  }
`

const Wifi = styled('div')`
  display: inline-block;
  width: 25px;
  position: relative;
  top: 5px;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`

const BatteryLevelText = styled('div')`
  font-family: neuzeit-grotesk, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  display: inline-block;
  margin-left: -5px;
  margin-right: 5px !important;

  text-align: right;
  span {
    font-size: 12px;
  }
`

const BatteryLevel = styled('div')`
  display: inline-block;
  width: 35px;
  position: relative;
  top: 1px;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  #FillLevel {
    transition: 0.2s ease-in-out 0s;
  }
`

export interface Props {  }

export default (props: Props) => {
  const time = useClock();
  const [batteryLevel, setBatteryLevel] = useState(100);

  const toggleSize = () => {
    const min = 0;
    const max = 100;
    const randomValue = min + Math.floor((max - min) * Math.random());

    setBatteryLevel(randomValue);
  }

  const batteryWidth = 133 * (batteryLevel / 100);

  return <Wrapper>
    <Users>
      <User />
    </Users>

    <SystemInfo>
      <Time>
        {time.hour}:{time.minute}<span>{time.amOrPm}</span>
      </Time>

      <Wifi>
        <svg width="256px" height="256px" viewBox="0 0 256 256" >
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path id="signal-1" fill="#D8D8D8" d="M127.594454,165 C141.481644,165 154.059603,170.549985 163.189139,179.531942 L127.594427,215 L91.9991868,179.532516 C101.12877,170.550221 113.706969,165 127.594454,165 Z"></path>
              <path id="signal-2" fill="#D8D8D8" d="M127.512193,109 C157.020502,109 183.336127,122.669506 200.472206,144.021657 L182.648543,161.844839 C170.17333,144.954158 150.122002,134 127.512193,134 C105.158922,134 85.306402,144.70699 72.8034038,161.272199 L54.9991868,143.468966 C72.1440313,122.433906 98.2592835,109 127.512193,109 Z"></path>
              <path id="signal-3" fill="#555555" d="M129.130813,41 C176.972517,41 219.985425,61.7381461 249.722534,94.7414446 L224.434306,120.05572 C201.162019,93.6547199 167.091375,77 129.130813,77 C91.415128,77 57.5393364,93.4405398 34.2790431,119.546015 L8.99580899,94.2366781 C38.715735,61.5268325 81.5334781,41 129.130813,41 Z"></path>
            </g>
        </svg>
      </Wifi>
      <BatteryLevelText>
        {batteryLevel}<span>%</span>
      </BatteryLevelText>
      <BatteryLevel onClick={toggleSize}>
        <svg width="256px" height="109px" viewBox="0 0 256 109">
          <g id="Battery" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path d="M179,14 L16,14 L16,95 L179,95 L179,14 Z M195,109 L0,109 L0,0 L195,0 L195,40 L215,40 L215,70 L195,70 L195,109 Z" id="Outline" fill="#D8D8D8"></path>
              <rect id="FillLevel" fill={batteryLevel < 20 ? '#f00' : '#D8D8D8'} x="30" y="28" width={batteryLevel < 20 ? 20 : batteryWidth} height="53"></rect>
          </g>
        </svg>
      </BatteryLevel>
    </SystemInfo>
  </Wrapper>
};