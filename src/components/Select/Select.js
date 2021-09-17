import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      {displayedValue}
      <Icon id="chevron-down" size={24} strokeWidth={2} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  padding: 12px 16px;
  gap: 24px;
  border-radius: 8px;

  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline-style: solid;
    outline-style: auto;
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  border: none;
`;

export default Select;
