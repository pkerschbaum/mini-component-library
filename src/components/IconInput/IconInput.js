import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Container
      style={{
        '--width': width + 'px',
        '--fontSize': STYLES[size].fontSize / 16 + 'rem',
        '--lineHeight': STYLES[size].lineHeight + 'px',
      }}
    >
      <Icon
        id={icon}
        size={STYLES[size].iconSize}
        strokeWidth={STYLES[size].iconStrokeWidth}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          '--paddingBottom': STYLES[size].inputPaddingBottom + 'px',
          '--marginInlineStart': STYLES[size].iconSize * -1 + 'px',
          '--paddingInlineStart':
            STYLES[size].iconSize + STYLES[size].gap + 'px',
        }}
      />
    </Container>
  );
};

const STYLES = {
  small: {
    iconSize: 16,
    iconStrokeWidth: 1,
    fontSize: 14,
    lineHeight: 16,
    inputPaddingBottom: 0,
    gap: 8,
  },
  large: {
    iconSize: 24,
    iconStrokeWidth: 2,
    fontSize: 18,
    lineHeight: 21,
    inputPaddingBottom: 1,
    gap: 12,
  },
};

const Container = styled.div`
  display: flex;
  align-items: end;
  width: var(--width);
  padding-block-end: 2px;
  border-block-end: 1px solid ${COLORS.black};

  color: ${COLORS.gray700};
  font-size: var(--fontSize);
  line-height: var(--lineHeight);

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline-style: solid;
    outline-style: auto;
    outline-offset: 2px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0;
  padding-block-end: var(--paddingBottom);
  padding-inline-start: var(--paddingInlineStart);
  margin-inline-start: var(--marginInlineStart);
  border: 0;
  outline: none;

  background-color: transparent;
  font-size: inherit;
  line-height: inherit;

  &:not(:placeholder-shown) {
    color: inherit;
    font-weight: bold;
  }

  &::placeholder {
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
