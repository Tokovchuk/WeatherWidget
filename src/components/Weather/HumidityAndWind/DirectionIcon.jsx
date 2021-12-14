import React from 'react';
import {Icon} from "@blueprintjs/core";

const DirectionIcon = (props) => {
  let iconName;

  switch (props.direction) {
    case 'N' :
      iconName = 'arrow-down';
      break;
    case 'NW':
    case 'NNW':
    case 'WNW':
      iconName = 'arrow-bottom-right';
      break;
    case 'W':
      iconName = 'arrow-right';
      break;
    case 'SW':
    case 'SSW':
    case 'SWS':
      iconName = 'arrow-top-right';
      break;
    case 'S':
      iconName = 'arrow-top';
      break;
    case 'SE':
    case 'SSE':
    case 'SES':
      iconName = 'arrow-top-left';
      break;
    case 'E':
      iconName = 'arrow-left';
      break;
    case 'NE':
    case 'NNE':
    case 'NEN':
      iconName = 'arrow-top-left';
      break;
    default:
      iconName = null;
  }
  console.log('props - ', props.direction)
  console.log('iconName', iconName)
  return (
    <Icon icon={iconName} color='whitesmoke'/>
  );
};

export default DirectionIcon;