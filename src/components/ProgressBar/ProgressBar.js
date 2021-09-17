/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
        '--height': SIZE_MAP[size].wrapperHeight + 'px',
        '--padding': SIZE_MAP[size].barSpacing + 'px',
        '--border-radius': SIZE_MAP[size].borderRadius + 'px',
      }}
    >
      <ProgressContainer>
        <Progress style={{ '--width': value + '%' }} />
      </ProgressContainer>
    </Wrapper>
  );
};

const SIZE_MAP = {
  small: {
    wrapperHeight: 8,
    barSpacing: 0,
    borderRadius: 4,
  },
  medium: {
    wrapperHeight: 12,
    barSpacing: 0,
    borderRadius: 4,
  },
  large: {
    wrapperHeight: 24,
    barSpacing: 4,
    borderRadius: 8,
  },
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);

  border: 0px solid;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`;

const ProgressContainer = styled.div`
  height: 100%;

  border: 0px solid;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: var(--width);

  background-color: ${COLORS.primary};
`;

export default ProgressBar;
