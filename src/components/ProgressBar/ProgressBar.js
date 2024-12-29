/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZE_TO_HEIGHT = {
  small: 8,
  medium: 12,
  large: 24,
}

const SIZE_TO_PADDING = {
  small: 0,
  medium: 0,
  large: 4,
}

const SIZE_TO_BORDER_RADIUS = {
  small: 4,
  medium: 4,
  large: 8,
}

const ProgressBar = ({ value, size }) => {
  return <Background size={size}>
    <FillWrapper size={size}>
      <Fill style={{ width: `${value}%` }} />
    </FillWrapper>
  </Background>;
};

const FillWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius:  ${({size}) => SIZE_TO_BORDER_RADIUS[size] - SIZE_TO_PADDING[size]}px;;
  overflow: hidden;
`

const Fill = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
`

const Background = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius:  ${({size}) => SIZE_TO_BORDER_RADIUS[size]}px;;
  padding: ${({size}) => SIZE_TO_PADDING[size]}px;
  height: ${({size}) => SIZE_TO_HEIGHT[size]}px;
  aria-valuenow: ${({value}) => value};
  role="progressbar"
  aria-label="Progress bar"
`

export default ProgressBar;
