import React from 'react';
import {Icon} from '@blueprintjs/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TypeWeather = styled.div`
  display: flex;
  align-items: center;
`;

const Temperature = styled.div`
  font-size: 50px;
`

const TypeAndTemperature = (props) => {
  return (
    <Wrapper>
      <TypeWeather>
        <img src={props.icon} alt='weather type icon'/>
        <span>{props.type}</span>
      </TypeWeather>
      <Temperature>
        <Icon icon='temperature' color='whitesmoke' size={30}/>
        <span>
          {props.currentTemperature}&deg;C
        </span>
      </Temperature>
    </Wrapper>
  );
};

export default TypeAndTemperature;