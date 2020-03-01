import * as React from "react";
import styled from '@emotion/styled'

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
`

const SystemInfo = styled('div')`
  div {
    margin-right: 10px;
  }
`

const Time = styled('div')`
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  display: inline-block;
  span {
    font-size: 10px;
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

const BatteryLevel = styled('div')`
  display: inline-block;
  width: 30px;
  position: relative;
  top: 9px;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`

export interface Props {  }

export const Nav = (props: Props) => {
  return <Wrapper>
    <Users>
      <User/>
      <User/>
      <User/>
    </Users>

    <SystemInfo>
      <Time>
        5:06<span>PM</span>
      </Time>

      <Wifi>
        <svg width="256px" height="256px" viewBox="0 0 256 256" >
            <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path id="signal-1" fill="#D8D8D8" d="M127.594454,165 C141.481644,165 154.059603,170.549985 163.189139,179.531942 L127.594427,215 L91.9991868,179.532516 C101.12877,170.550221 113.706969,165 127.594454,165 Z"></path>
              <path id="signal-2" fill="#D8D8D8" d="M127.512193,109 C157.020502,109 183.336127,122.669506 200.472206,144.021657 L182.648543,161.844839 C170.17333,144.954158 150.122002,134 127.512193,134 C105.158922,134 85.306402,144.70699 72.8034038,161.272199 L54.9991868,143.468966 C72.1440313,122.433906 98.2592835,109 127.512193,109 Z"></path>
              <path id="signal-3" fill="#555555" d="M129.130813,41 C176.972517,41 219.985425,61.7381461 249.722534,94.7414446 L224.434306,120.05572 C201.162019,93.6547199 167.091375,77 129.130813,77 C91.415128,77 57.5393364,93.4405398 34.2790431,119.546015 L8.99580899,94.2366781 C38.715735,61.5268325 81.5334781,41 129.130813,41 Z"></path>
            </g>
        </svg>
      </Wifi>
      <BatteryLevel>
        <svg width="256px" height="256px" viewBox="0 0 256 256">
          <g id="Battery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M203,84 L40,84 L40,165 L203,165 L203,84 Z M219,179 L24,179 L24,70 L219,70 L219,110 L239,110 L239,140 L219,140 L219,179 Z" id="Outline" fill="#D8D8D8"></path>
            <rect id="FillLevel" fill="#D8D8D8" x="54" y="98" width="133" height="53"></rect>
          </g>
        </svg>
      </BatteryLevel>
    </SystemInfo>
  </Wrapper>
};