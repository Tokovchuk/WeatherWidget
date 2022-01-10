import React from 'react';
import {Icon} from '@blueprintjs/core';
import styled from 'styled-components';
import DirectionIcon from "./DirectionIcon";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HumidityWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  
  & span {
    line-height: 0;
  }
`;

const WindWrapper = styled.div`
  display: flex;
  column-gap: 5px;
`

const HumidityAndWind = (props) => {
  return (
    <Wrapper>
      <HumidityWrapper>
        <Icon icon='tint' color='whitesmoke'/>
        <span>
            {props.humidity}%
          </span>
      </HumidityWrapper>
      <WindWrapper>
        <div className='wind__direction'>
          <DirectionIcon direction={props.windDirection} />
        </div>
        <div className='wind__speed'>
          <span>{(props.windSpeed / 3.6).toFixed(1)}m/s</span>
        </div>
      </WindWrapper>
    </Wrapper>
  );
};

export default HumidityAndWind;